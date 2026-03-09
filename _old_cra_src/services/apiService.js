import axios from "axios";

// Service api
export const API_URL = process.env.REACT_APP_API_URL || "";

export const TOKEN_KEY = "smart_token"


// for Get request only
export const doApiGet = async(_url) => {
  try{
    let resp = await axios({
      url:_url,
      method: "GET",
      headers: {
        "x-api-key": localStorage[TOKEN_KEY]
      }
    })
    return resp.data;
  }
  catch(err){
    throw err;
  }
}

// For Delete , put , post , patch request
export const doApiMethod = async(_url,_method,_body = {}) => {
  try{
    let resp = await axios({
      url:_url,
      method: _method,
      data:_body ,
      headers: {
        "x-api-key": localStorage[TOKEN_KEY]
      }
    })
    return resp.data;
  }
  catch(err){
   throw err;
  }
}