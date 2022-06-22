import React from "react";
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MainBody from "./Mainbody";

const SideList = ({ bucket }) => {
  // console.log(bucket)
  const loaded = () => {
    console.log(bucket)
    return bucket.map(b =>
      <li key={b._id} className='bucketItem'>
        <Link to={`/${b._id}`}>
          <h4>{b.title}</h4>
        </Link>
      </li>
      )
  }

  const loading = () => {
    return <h2>Dreaming...</h2>
  }

  return (
    <div>
      { bucket 
        ? <ol style={ {textAlign: 'left'} }>{loaded()}</ol> 
        : <ol>{loading()}</ol> 
      }
      <Route path='/:id' render={(rp) => (
        <MainBody 
          bucket={bucket}
          {...rp}
        />
        )}>
      </Route>
    </div>
  )
};

export default SideList;
