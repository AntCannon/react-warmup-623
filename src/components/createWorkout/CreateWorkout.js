import './CreateWorkout.css'
import React from "react";
import { useState } from 'react'

const CreateWorkout = ({ addWorkout }) => {
  const [ workoutForm, setWorkoutform ] = useState({
    name: "",
    date: "",
    duration: "",
    caloriesBurned: 0
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="create-workout-form">
      <h2>Create Workout</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input type="text" placeholder="Workout name" />
        </label>
        <label>
          Date: <input type="date" />
        </label>
        <label>
          Duration (mins): <input type="number" />
        </label>
        <label>
          Calories Burned: <input type="number" />
        </label>
        <button type="submit">Create</button>
      </form>
    </section>
  );
};

export default CreateWorkout;
