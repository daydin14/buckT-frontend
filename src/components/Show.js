import React from "react";

const Show = ( props ) => {
  const id = props.match.params.id;
  const item = props?.bucket?.find((b) => b._id === id);

  const deleteActivity = async (id) => {
    console.log(props.URL)
    console.log(id)
    await fetch(props.URL + id, { method: 'DELETE' });
      props.getActivity();
      props.getLocation();
      props.history.push('/List');
  }

  return(
    <div className="show">
      <h1>{item?.title}</h1>
      <img src={item?.img}  className="showimage"  />
      <br></br>
      <p>{item?.description}</p>
      <button onClick={() => deleteActivity(item?._id)}><img src="https://img.icons8.com/bubbles/344/delete-forever.png" width={60} title="delete"/></button>
    </div>
  )
};

export default Show;