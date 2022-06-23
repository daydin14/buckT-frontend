import React from "react";
import { useState } from "react";

const Create = (props) => {
  const [ newForm, setNewForm ] = useState({
    destination: '',
    image: '',
    description: '',
  });

  const handleChange = (event) => {
    setNewForm({
      ...newForm, [event.target.name]: event.target.value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.createDestination(newForm);
  };
 

  return(
    <div className="createForm">
      <form onSubmit={handleSubmit}>

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
          placeholder="description" 
        />
        <br />
        <input type="submit" value="Add to Bucket!" />
      </form>
    </div>
  )
}

export default Create;