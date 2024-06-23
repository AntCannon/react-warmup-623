import './CreateWorkout.css'
import React from "react";
import { useState } from 'react'

const CreateWorkout = ({ addWorkout }) => {
  const [ workoutForm, setWorkoutForm ] = useState({
    name: "",
    date: "",
    duration: "",
    calories: ""
  })

  function onChange(e) {
    setWorkoutForm({...workoutForm, [e.target.id]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addWorkout(workoutForm)
  };

  console.log(workoutForm)
  return (
    <section className="create-workout-form">
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input
            type="text"
            id="name"
            placeholder="Workout name"
            onChange={onChange}
          />
        </label>
        <label>
          Date: 
          <input
            type="date"
            id="date"
            onChange={onChange}
          />
        </label>
        <label>
          Duration (mins): 
          <input
            type="number"
            id="duration"
            onChange={onChange}
          />
        </label>
        <label>
          Calories Burned: 
          <input
            type="number"
            id="calories"
            onChange={onChange}
          />
        </label>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateWorkout;
