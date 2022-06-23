import React from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Show from "./Show";

const SideList = ({ bucket }) => {
  const loaded = () => {
  
    return bucket.map(buck =>
      <li key={buck._id} className='bucketItem'>
        <Link to={`/${buck._id}`}>
          <h4 id='bucketItem'>{buck.title}</h4>
          <img id='bucketImg' src={buck.img} alt={buck.title} />
          <p id='bucketItem'>{buck.description}</p>
        </Link>
      </li>
      )
  }

  const loading = () => {
    return <h2>Dreaming...</h2>
  }

  return (
    // <div>
    <div>
      { bucket 
        ? <ul className='listDisplay' style={ {textAlign: 'left'} }>{loaded()}</ul> 
        : <ul>{loading()}</ul> 
      }
      {/* </div>
      <Route path='/:id' render={(rp) => (
        <Show 
          bucket={bucket}
          // activity={activity}
          // location={location}
          {...rp}
        />
        )}>
      </Route> */}
    </div>
  )
};

export default SideList;
