import React from "react";
import { Link } from 'react-router-dom';

const SideList = ({ bucket, URL }) => {
  // console.log(bucket)
  // console.log(URL)
  const loaded = () => {
  
    return bucket.map(buck =>
      <li key={buck._id} className='bucketItem'>
        <Link to={`/${buck._id}`}>
          <h4 id='bucketItem'>{buck.title}</h4>
          <img id='bucketImg' src={buck.img} alt={buck.title} />
        </Link>
      </li>
      )
  }

  const loading = () => {
    return <h2>Dreaming...</h2>
  }

  return (
    <div>
      <div>
        { bucket 
          ? <ul className='listDisplay' style={ {textAlign: 'left'} }>{loaded()}</ul> 
          : <ul>{loading()}</ul> 
        }
      </div>
    </div>
  )
    
};

export default SideList;
