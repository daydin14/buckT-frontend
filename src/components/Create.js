import React from "react";
import { useState } from "react";

const Create = (props) => {
  const [ newForm, setNewForm ] = useState({
    destination: '',
    image: '',
    description: '',
  });
  // const [ value, setValue ] = useState(null);

  const handleChange = (event) => {
    setNewForm({
      ...newForm, [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createDestination(newForm);
  };
  // const dropChange = (event) => {
  //   setValue(event.target.value);
  //   props.selectURL(value)
  // };

  return(
    <div className="createForm">
      <form onSubmit={handleSubmit}>
        {/* <select value={value} onChange={dropChange} name="Bucket List" id="bucketList">
          <option value="destination">Destination</option>
          <option value="activity">Activity</option>
        </select> */}

        <input 
          value={newForm.title}
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="destination / activity" 
        />
        <br />
        <input 
          value={newForm.img}
          onChange={handleChange}
          name="img"
          type="text"
          placeholder="image url" 
        />
        <br />
        <textarea 
          value={newForm.description}
          onChange={handleChange}
          name="description"
          cols="30"
          rows="10"
          placeholder="description" 
        />
        <br />
        <input type="submit" value="Add to Bucket!"/>
      </form>
    </div>
  )
}

export default Create;