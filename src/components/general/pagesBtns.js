import React, { useEffect, useState, useCallback } from 'react'
import { Link } from 'react-router-dom';
import { doApiGet } from '../../services/apiService';

export default function PagesBtns(props) {
  const [pages,setPages] = useState(0);
  // 3 props needed
  // 1 -> apiUrl -> to get number of pages
  // 2-> linkTo -> link with the page number
  // 3-> cssClass of the buttons

  const doApi = useCallback(async() => {
    try{
      const url = props.apiUrl;
      const data = await doApiGet(url);
      setPages(data.pages);
    }
    catch(err){
      // error handled silently
    }
  }, [props.apiUrl])

  useEffect(() => {
    doApi();
  },[doApi])

  return (

    <div>
      <span></span>
      {[...Array(pages)].map((item,i) => {
        return (
          <Link key={i} to={props.linkTo+(i+1)} className={props.cssClass}>{i+1} </Link>

        )
      })}
    </div>
  )
}
