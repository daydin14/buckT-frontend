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
          value={newForm.destination}
          onChange={handleChange}
          name="destination"
          type="text"
          placeholder="destination" 
        />

        <input 
          value={newForm.image}
          onChange={handleChange}
          name="image"
          type="text"
          placeholder="image url" 
        />

        <textarea 
          value={newForm.description}
          onChange={handleChange}
          name="description"
          cols="30"
          rows="10"
          placeholder="description" 
        />
      </form>
    </div>
  )
}

export default Create;