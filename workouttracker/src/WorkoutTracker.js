import React, { useState } from "react";
import { onAuthChange } from "./utils/auth-functions";

const WorkoutTracker = () => {
  const [exercises, setExercises] = useState([]);
  const [exerciseName, setExerciseName] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const addExercise = () => {
    if (exerciseName && weight && sets && reps) {
      setExercises([
        ...exercises,
        { id: Date.now(), name: exerciseName, weight, sets, reps },
      ]);
      setExerciseName("");
      setWeight("");
      setSets("");
      setReps("");
    }
  };

  return (
    <div className="workout-tracker">
      <h1>Workout Tracker</h1>
      <div className="form">
        <input
          type="text"
          placeholder="Exercise"
          value={exerciseName}
          onChange={(e) => setExerciseName(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Weight (lbs)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Sets"
          value={sets}
          onChange={(e) => setSets(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="Reps"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          className="input"
        />
        <button onClick={addExercise} className="button">Add</button>
      </div>
      <div className="exercises">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-card">
            <h3>{exercise.name}</h3>
            <p>Weight: {exercise.weight} lbs</p>
            <p>Sets: {exercise.sets}</p>
            <p>Reps: {exercise.reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

onAuthChange((user) => {
  if (user) {
    console.log("User logged in:", user.email);
    // update UI accordingly
  } else {
    console.log("User is logged out");
  }
});

export default WorkoutTracker;