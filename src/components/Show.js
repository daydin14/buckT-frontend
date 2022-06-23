import React from "react";

const Show = ( props ) => {
  console.log(props)
  // const id = props.match.params.id;
  // console.log(id)

  // const item = props.bucket.find(b => b._id === id);
  // console.log(item)

  return(
    <div className="show">
    <h1>Show Component</h1>
    </div>
  )
};

export default Show;