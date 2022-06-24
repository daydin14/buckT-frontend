import React from "react";
import { Link } from 'react-router-dom';

const SideList = ({ bucket, URL }) => {
  // console.log(bucket)
  // console.log(URL)
  const loaded = () => {
  
//     return bucket.map(buck =>
//       <div key={buck._id} className='bucketItem'>
//         <Link to={`/${buck._id}`}>
//           <h4 id='bucketItem'>{buck.title}</h4>
//           <img id='bucketImg' src={buck.img} alt={buck.title} />
//         </Link>
//       </div>
//       )
//   }

//   const loading = () => {
//     return <h2>Dreaming...</h2>
//   }

//   return (
//     <div>
//       <div>
//         { bucket 
//           ? <ul className='listDisplay' style={ {textAlign: 'left'} }>{loaded()}</ul> 
//           : <ul>{loading()}</ul> 
//         }
//       </div>
//     </div>
//   )
    
// };
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
<div className="lists">
  { bucket 
    ? <ol style={ {textAlign: 'left'} }>{loaded()}</ol> 
    : <ol>{loading()}</ol> 
  }
  </div>

</div>
)
};

export default SideList;
