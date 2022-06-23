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
      <img src={item?.img} alt={item?.title} />
      <p>{item?.description}</p>
      <button onClick={() => deleteActivity(item?._id)}>Check Off the List!</button>
    </div>
  )
};

export default Show;