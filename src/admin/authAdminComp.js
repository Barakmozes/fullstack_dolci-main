import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet } from '../services/apiService';
import { toast } from 'react-toastify';

export default function AuthAdminComp() {
  const nav = useNavigate();

  useEffect(() => {
    doApi();
  },[])

  const doApi = async() => {
    try {
      const url = API_URL+"/users/checkToken";
      const data = await doApiGet(url);

      if(data.role != "admin"){
        toast.error("You must be admin to access this page");
        nav("/")
      }

    } catch (error) {
      toast.error("Please log in again");
      nav("/admin")
    }

  }

  return (
    <React.Fragment></React.Fragment>
  )
}
