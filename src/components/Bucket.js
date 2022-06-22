import React from "react";
import { useState, useEffect } from 'react';
// import { Link } from 'react';
// import MainBody from "./Mainbody";
import SideList from "./Sidelist";

const Bucket = (props) => {
  const [ bucket, setBucket ] = useState();
  
  const getActivity = async () => {
    const URL = 'https://buckt-backend.herokuapp.com/activity' // need to update with heroku link
    if (!props.user) return;
    const token = props.user.getIdToken();
    // console.log(URL)
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    // console.log(data)
    setBucket(data);
  };

  const getLocation = async () => {
    const URL = 'https://buckt-backend.herokuapp.com/location' // need to update with heroku link
    if (!props.user) return;
    const token = props.user.getIdToken();
    // console.log(URL)
    const response = await fetch(URL, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    });
    const data = await response.json();
    // console.log(data)
    setBucket(data);
  };
  // console.log(bucket)

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
      <h3 onClick={getActivity}>Activity</h3>
      <h3 onClick={getLocation}>Location</h3>
      <SideList user={props.user} bucket={bucket}/>
    </div>
  )
}

export default Bucket;