import React, { useState } from "react";
<<<<<<< HEAD:workouttracker/src/WorkoutTracker.js
import { onAuthChange } from "./utils/auth-functions";

const WorkoutTracker = () => {
  const [exercises, setExercises] = useState([]);
=======
import "./WorkoutTracker.css";

const WorkoutTracker = () => {
  const [unsavedWorkout, setUnsavedWorkout] = useState({
    name: "",
    exercises: [],
  });
  const [savedWorkouts, setSavedWorkouts] = useState([]);

>>>>>>> af81807b1c38f84ce8de08b093534b1ab3c8b158:src/WorkoutTracker.js
  const [exerciseName, setExerciseName] = useState("");
  const [weight, setWeight] = useState("");
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");

  const addExercise = () => {
    if (exerciseName && weight && sets && reps) {
<<<<<<< HEAD:workouttracker/src/WorkoutTracker.js
      setExercises([
        ...exercises,
        { id: Date.now(), name: exerciseName, weight, sets, reps },
      ]);
=======
      const newExercise = {
        id: Date.now(),
        name: exerciseName,
        weight,
        sets,
        reps,
      };
      setUnsavedWorkout({
        ...unsavedWorkout,
        exercises: [...unsavedWorkout.exercises, newExercise],
      });
>>>>>>> af81807b1c38f84ce8de08b093534b1ab3c8b158:src/WorkoutTracker.js
      setExerciseName("");
      setWeight("");
      setSets("");
      setReps("");
    }
  };

<<<<<<< HEAD:workouttracker/src/WorkoutTracker.js
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
=======
  const saveWorkout = () => {
    if (unsavedWorkout.name && unsavedWorkout.exercises.length > 0) {
      setSavedWorkouts([
        ...savedWorkouts,
        { ...unsavedWorkout, id: Date.now() },
      ]);
      setUnsavedWorkout({ name: "", exercises: [] });
    }
  };

  const deleteWorkout = (id) => {
    setSavedWorkouts(savedWorkouts.filter((w) => w.id !== id));
  };

  return (
    <>
      <div className="top-bar">Workout Tracker</div>
      <div className="workout-tracker">
        <div className="form">
          <input
            type="text"
            placeholder="Workout Name"
            value={unsavedWorkout.name}
            onChange={(e) =>
              setUnsavedWorkout({ ...unsavedWorkout, name: e.target.value })
            }
            className="input"
          />
  
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
          <button onClick={addExercise} className="button">
            Add Exercise
          </button>
  
          {/* Live Preview of Unsaved Exercises */}
          {unsavedWorkout.exercises.length > 0 && (
            <div className="exercise-preview">
              <h3>Current Exercises:</h3>
              <ul>
                {unsavedWorkout.exercises.map((ex) => (
                  <li key={ex.id}>
                    {ex.name} - {ex.weight} lbs, {ex.sets} sets, {ex.reps} reps
                  </li>
                ))}
              </ul>
              <button onClick={saveWorkout} className="button save-button">
                Save Workout
              </button>
            </div>
          )}
        </div>
  
        {/* Saved Workouts */}
        {savedWorkouts.map((workout) => (
          <div key={workout.id} className="workout-card">
            <div className="workout-header">
              <h3>{workout.name}</h3>
              <button
                className="delete-button"
                onClick={() => deleteWorkout(workout.id)}
              >
                Delete
              </button>
            </div>
            <ul>
              {workout.exercises.map((ex) => (
                <li key={ex.id}>
                  {ex.name} - {ex.weight} lbs, {ex.sets} sets, {ex.reps} reps
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default WorkoutTracker;
>>>>>>> af81807b1c38f84ce8de08b093534b1ab3c8b158:src/WorkoutTracker.js
