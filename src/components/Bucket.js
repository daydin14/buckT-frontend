import React from "react";
import { useState, useEffect } from 'react';
// import { Link } from 'react';
// import MainBody from "./Mainbody";
import SideList from "./Sidelist";

const Bucket = (props) => {
  const [ bucket, setBucket ] = useState();
  
  const getActivity = async () => {
    // for (let el of document.querySelectorAll('.lists')){
    //   if(el.style.visibility == 'visible'){
    //     el.style.visibility = 'hidden';
    //   }
    //   else{
    //     el.style.visibility = 'visible';
    //   }
    // } 
    const URL = 'https://buckt-backend.herokuapp.com/activity' 
    if (!props.user) return;
    const token = props.user.getIdToken();
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    setBucket(data);
  };

  const getLocation = async () => {
    // for (let el of document.querySelectorAll('.lists')){
    //   if(el.style.visibility == 'visible'){
    //     el.style.visibility = 'hidden';
    //   }
    //   else{
    //     el.style.visibility = 'visible';
    //   }
    // } 
    const URL = 'https://buckt-backend.herokuapp.com/location'
    if (!props.user) return;
    const token = props.user.getIdToken();
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
     setBucket(data);
  };
  console.log(bucket)

  useEffect(() => {
    if (props.user) {
      getActivity();
      getLocation();
    } else {
      setBucket(null);
    }
  }, [props.user]); // empty dependency array to prevent an infinite loop

  return (
    
    <div>
      
    <div className="bucket">
      <h3 className="seperate" onClick={getActivity}><img src="https://cdn.iconscout.com/icon/free/png-256/man-biking-2363383-1974832.png" width={80} title="Activities"/></h3>
      <h3 className="seperate" onClick={getLocation}><img src="https://cdn.iconscout.com/icon/free/png-256/plane-2359613-1987480.png" width={90} title="Locations"/></h3>
      </div>
      <SideList user={props.user} bucket={bucket}/>
    </div>
  )
}

export default Bucket;