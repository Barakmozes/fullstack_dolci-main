import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { API_URL, doApiGet, TOKEN_KEY } from "../services/apiService";
import { sortBy } from "lodash";
import { FaShekelSign } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const PurchasePage = () => {
  const [device, setDevice] = useState(null);
  const [tasks, setTasks] = useState([]);

  const params = useParams();
  const KEY_LOCAL = "todo_local";

  useEffect(() => {
    doApi();
    const storedTasks = localStorage[KEY_LOCAL];
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const doApi = async () => {
    try {
      const urlDevice = `${API_URL}/devices/single/${params.id}`;
      const dataDevice = await doApiGet(urlDevice);
      setDevice(dataDevice);
    } catch (error) {
      // error handled silently
    }
  };

  const addTask = (itemTask) => {
    let newTasks = Array.isArray(tasks) ? [...tasks] : [];

    const existingItemIndex = newTasks.findIndex(
      (item) => item._id === itemTask._id
    );
    if (existingItemIndex > -1) {
      // Increment AvailabilityStatus (quantity)
      newTasks[existingItemIndex].AvailabilityStatus += 1;
      // Update the total price for this item
      newTasks[existingItemIndex].Price = calculateNewPrice(
        newTasks[existingItemIndex].initialPrice,
        newTasks[existingItemIndex].AvailabilityStatus
      );
    } else {
      // Add new item with AvailabilityStatus 1 and store the initial price
      newTasks.push({
        ...itemTask,
        AvailabilityStatus: 1,
        initialPrice: itemTask.Price,
      });
    }

    const sortedTasks = sortBy(newTasks, "Price");
    saveLocal(sortedTasks);
  };

  const calculateNewPrice = (initialPrice, quantity) => {
    // Calculate the total price based on the initial price and quantity
    return initialPrice * quantity;
  };

  const removeAllTasks = () => {
    saveLocal([]);
  };

  const onAddTaskClick = () => {
    if (device) {
      addTask(device);
    }
  };

  const removeSingleTask = (delId) => {
    const filteredTasks = tasks.filter((item) => item._id !== delId);
    saveLocal(filteredTasks);
  };

  const saveLocal = (tasksArray) => {
    localStorage.setItem(KEY_LOCAL, JSON.stringify(tasksArray));
    setTasks(tasksArray);
  };

  if (!device) {
    return <div>Loading...</div>; // Or any other loading state representation
  }
  return (
    
    <div

      style={{
        height: "auto",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundImage: 'url("/img/any/pexels-eddson-lens-19100919.jpg")', // Update this path
        backgroundSize: "cover", // Cover the entire space
        backgroundPosition: "center",
      }}
    >
      <Container className="p-5 mx-auto  fw-bold d-flex justify-content-center align-items-center flex-column">
      <DeviceCard
        device={device}
        onAddTaskClick={onAddTaskClick}
        removeAllTasks={removeAllTasks}
      />
      <Cart tasks={tasks} removeSingleTask={removeSingleTask} />
      <CheckoutForm />
      </Container>
    </div>
  );
};

const DeviceCard = ({ device, onAddTaskClick, removeAllTasks }) => {
  const nav = useNavigate();
  return (
    <div
      key={device._id}
      className="col-md-7 col-lg-8  ms-3 p-3  shadow card"
      style={{ width: "18rem" }}
    >
      <img src={device.ImageURL} alt={device.Name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title fw-bold">{device.Name}</h5>
        <p className="card-text">{device.Description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item   ">
          מחיר: {device.Price} <FaShekelSign />
        </li>
        <li className="list-group-item    ">{device.Size}</li>
        <li className="list-group-item   ">{device.Weight}</li>
      </ul>
      <div className="card-body row text-center">
        <button
          onClick={onAddTaskClick}
          className=" btn btn-outline-info  col-5   ms-3 shadow border border-primary-subtle fw-bold text-dark"
        >
          הוסף לעגלה
        </button>
        <button
          onClick={() => {
            nav("/works");
          }}
          className=" btn btn-outline-info col-5 shadow border border-primary-subtle fw-bold text-dark" 
        >
          חזור לקטלוג
        </button>
        <div className="text-center">
        <button
          onClick={removeAllTasks}
          className="btn btn-sm btn-danger  mt-2 shadow border border-primary-subtle"
        >
          מחק הכל
        </button>
        </div>
      </div>
    </div>
  );
};

const Cart = ({ tasks, removeSingleTask }) => {
  const [tokenDiscount, setTokenDiscount] = useState(0);

  const safeTasks = Array.isArray(tasks) ? tasks : [];

  useEffect(() => {
    const discount = calculateDiscount();
    setTokenDiscount(discount);
  }, [tasks]); // Recalculate discount when tasks change

  const calculateTotalQuantity = () => {
    return safeTasks.reduce((acc, item) => acc + item.AvailabilityStatus, 0);
  };

  const calculateDiscount = () => {
    if (localStorage[TOKEN_KEY]) {
      const totalBeforeDiscount = safeTasks.reduce((acc, item) => {
        return (
          acc + (item.initialPrice || item.Price) * item.AvailabilityStatus
        );
      }, 0);
      return totalBeforeDiscount * 0.05; // 5% discount
    }
    return 0;
  };

  const calculateTotal = () => {
    const totalBeforeDiscount = safeTasks.reduce((acc, item) => {
      return acc + (item.initialPrice || item.Price) * item.AvailabilityStatus;
    }, 0);

    return totalBeforeDiscount - tokenDiscount;
  };

  return (
    <div className="col-md-7 col-lg-8 mt-2  mb-2 ms-3 p-3 card shadow ">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="mt-1 fw-bold">העגלה שלך</span>
        <span className="badge bg-primary rounded-pill">
          {calculateTotalQuantity()}
        </span>
      </h4>

      {safeTasks.length === 0 ? (
        <p>העגלה ריקה</p>
      ) : (
        safeTasks.map((item) => (
          <div key={item._id} className="shadow my-2 p-2">
            <button
              onClick={() => removeSingleTask(item._id)}
              className="btn btn-danger btn-sm shadow border border-primary-subtle float-start"
            >
              X
            </button>
            <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 className="my-0 text-primary fw-bold">{item.Name}</h6>
                <small className="text-muted">{item.Description}</small>
              </div>
            </li>
            <div>
              <span className="text-muted">
                מחיר: {item.Price} <FaShekelSign />,{" "}
              </span>
              <span className="text-muted">
                כמות: {item.AvailabilityStatus}
              </span>
            </div>
          </div>
        ))
      )}

      {localStorage[TOKEN_KEY] && (
        <li className="list-group-item d-flex justify-content-between bg-body-tertiary">
          <div className="text-muted">
            <h6 className="my-0 text-primary fw-bold">הנחת מועדן</h6>
            <small>ניתן 5% הנחה</small>
          </div>
          <span className="text-muted">
            {calculateDiscount().toFixed(2)}
            <FaShekelSign />
          </span>
        </li>
      )}
      <li className="list-group-item d-flex justify-content-between">
        <span>

          סה"כ
        </span>
        <strong>
          {calculateTotal().toFixed(2)}
          <FaShekelSign />
        </strong>
      </li>
      {/* ... Additional UI elements ... */}
    </div>
  );
};

const CheckoutForm = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const KEY_LOCAL = "todo_local";

  const onSubmit = (data) => {
    // Clear cart after successful order
    localStorage.setItem(KEY_LOCAL, JSON.stringify([]));
    reset();
    toast.success("ההזמנה בוצעה בהצלחה! תודה רבה", {
      position: "top-center",
      autoClose: 5000,
    });
  };

  return (
    <div className="col-md-7 col-lg-8 ms-3 p-3 btn btn-primary border border-primary-subtle shadow">
      <h2 className="mb-3 fs-2 fw-bold">כתובת לחיוב</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label className="form-label">שם פרטי</label>
            <input
              {...register("firstName", { required: true, minLength: 2 })}
              type="text"
              className="form-control"
              placeholder="שם"
            />
            {errors.firstName && <div className="text-danger">נדרש שם פרטי תקף</div>}
          </div>
          <div className="col-sm-6">
            <label className="form-label">שם משפחה</label>
            <input
              {...register("lastName", { required: true, minLength: 2 })}
              type="text"
              className="form-control"
              placeholder="שם משפחה"
            />
            {errors.lastName && <div className="text-danger">נדרש שם משפחה</div>}
          </div>
          <div className="col-12">
            <label className="form-label">
              דוא"ל <span className="text-body-secondary">(אופציונלי)</span>
            </label>
            <input
              {...register("email", { pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })}
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
            {errors.email && <div className="text-danger">נא להזין כתובת דוא"ל תקפה</div>}
          </div>
          <div className="col-12">
            <label className="form-label">כתובת</label>
            <input
              {...register("address", { required: true, minLength: 3 })}
              type="text"
              className="form-control"
              placeholder="רחוב ראשי 1234"
            />
            {errors.address && <div className="text-danger">נא להזין את כתובת המשלוח שלך</div>}
          </div>
          <div className="col-12">
            <label className="form-label">
              כתובת 2 <span className="text-body-secondary">(אופציונלי)</span>
            </label>
            <input
              {...register("address2")}
              type="text"
              className="form-control"
              placeholder="דירה או סוויטה"
            />
          </div>
          <div className="col-md-5">
            <label className="form-label">עיר</label>
            <select {...register("city", { required: true })} className="form-select">
              <option value="">בחר...</option>
              <option value="בת ים">בת ים</option>
              <option value="ראשון לציון">ראשון לציון</option>
            </select>
            {errors.city && <div className="text-danger">נא לבחור עיר</div>}
          </div>
          <div className="col-md-4">
            <label className="form-label">מדינה</label>
            <select {...register("country", { required: true })} className="form-select">
              <option value="">בחר...</option>
              <option value="ישראל">ישראל</option>
            </select>
            {errors.country && <div className="text-danger">נא לבחור מדינה</div>}
          </div>
          <div className="col-md-3">
            <label className="form-label">מיקוד</label>
            <input
              {...register("zip", { required: true, minLength: 5 })}
              type="text"
              className="form-control"
            />
            {errors.zip && <div className="text-danger">נדרש מיקוד</div>}
          </div>
        </div>
        <hr className="my-4" />
        <div className="form-check">
          <input
            {...register("sameAddress")}
            type="checkbox"
            className="form-check-input"
            id="same-address"
          />
          <label className="form-check-label" htmlFor="same-address">
            כתובת המשלוח זהה לכתובת החיוב
          </label>
        </div>
        <div className="form-check">
          <input
            {...register("saveInfo")}
            type="checkbox"
            className="form-check-input"
            id="save-info"
          />
          <label className="form-check-label" htmlFor="save-info">
            שמור את המידע הזה לפעם הבאה
          </label>
        </div>
        <hr className="my-4" />
        <h4 className="mb-3">תשלום</h4>
        <div className="my-3">
          <div className="form-check">
            <input
              {...register("paymentMethod", { required: true })}
              value="credit"
              type="radio"
              className="form-check-input"
              id="credit"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="credit">
              כרטיס אשראי
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("paymentMethod", { required: true })}
              value="debit"
              type="radio"
              className="form-check-input"
              id="debit"
            />
            <label className="form-check-label" htmlFor="debit">
              כרטיס חיוב
            </label>
          </div>
          <div className="form-check">
            <input
              {...register("paymentMethod", { required: true })}
              value="paypal"
              type="radio"
              className="form-check-input"
              id="paypal"
            />
            <label className="form-check-label" htmlFor="paypal">
              PayPal
            </label>
          </div>
          {errors.paymentMethod && <div className="text-danger">נא לבחור אמצעי תשלום</div>}
        </div>
        <div className="row gy-3">
          <div className="col-md-6">
            <label className="form-label">שם על הכרטיס</label>
            <input
              {...register("ccName", { required: true, minLength: 2 })}
              type="text"
              className="form-control"
            />
            <small className="text-body-secondary">
              השם המלא כפי שמופיע על הכרטיס
            </small>
            {errors.ccName && <div className="text-danger">נדרש שם על הכרטיס</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">מספר כרטיס אשראי</label>
            <input
              {...register("ccNumber", { required: true, minLength: 13 })}
              type="text"
              className="form-control"
            />
            {errors.ccNumber && <div className="text-danger">נדרש מספר כרטיס אשראי</div>}
          </div>
          <div className="col-md-3">
            <label className="form-label">תוקף</label>
            <input
              {...register("ccExpiration", { required: true })}
              type="text"
              className="form-control"
              placeholder="MM/YY"
            />
            {errors.ccExpiration && <div className="text-danger">נדרש תאריך תוקף</div>}
          </div>
          <div className="col-md-3">
            <label className="form-label">CVV</label>
            <input
              {...register("ccCvv", { required: true, minLength: 3, maxLength: 4 })}
              type="text"
              className="form-control"
            />
            {errors.ccCvv && <div className="text-danger">נדרש קוד אבטחה</div>}
          </div>
        </div>
        <hr className="my-4" />
        <button className="w-50 btn btn-primary btn-lg mb-4" type="submit">
          שלם
        </button>
      </form>
    </div>
  );
};

export default PurchasePage;
