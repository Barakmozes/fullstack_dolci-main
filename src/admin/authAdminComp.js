import React, { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom';
import { API_URL, doApiGet } from '../services/apiService';
import { toast } from 'react-toastify';

export default function AuthAdminComp() {
  const nav = useNavigate();

  const doApi = useCallback(async() => {
    try {
      const url = API_URL+"/users/checkToken";
      const data = await doApiGet(url);

      if(data.role !== "admin"){
        toast.error("You must be admin to access this page");
        nav("/")
      }

    } catch (error) {
      toast.error("Please log in again");
      nav("/admin")
    }

  }, [nav])

  useEffect(() => {
    doApi();
  },[doApi])

  return (
    <React.Fragment></React.Fragment>
  )
}
