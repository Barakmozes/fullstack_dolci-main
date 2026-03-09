const mongoose = require("mongoose");
const Joi = require("joi");

const deviceSchema = new mongoose.Schema(
  {
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Link: { type: String },
    company_id: { type: String, required: true },
    ImageURL: { type: String, default: "" },
    Weight: { type: String },
    Size: { type: String },
    Price: { type: Number, required: true },
    Discount: { type: Number, default: 0 },
    AvailabilityStatus: { type: String, default: "available" },
    user_id: { type: String },
    date_created: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

exports.DeviceModel = mongoose.model("devices", deviceSchema);

/**
 * Joi validation for creating / updating a product.
 * company_id is validated as string (matches schema + real DB data).
 */
exports.validateDevice = (body) => {
  const schema = Joi.object({
    Name: Joi.string().min(2).max(200).required(),
    Description: Joi.string().min(2).max(500).required(),
    Link: Joi.string().max(500).allow("", null).optional(),
    company_id: Joi.string().required(),
    ImageURL: Joi.string().max(1000).allow("", null).optional(),
    Weight: Joi.string().max(100).allow("", null).optional(),
    Size: Joi.string().max(100).allow("", null).optional(),
    Price: Joi.number().min(0).max(99999).required(),
    Discount: Joi.number().min(0).max(100).default(0).optional(),
    AvailabilityStatus: Joi.string().max(100).allow("", null).optional(),
  });
  return schema.validate(body);
};
