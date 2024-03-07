const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

const Total = ({ parts }) => {
  return (
    <p>
      Number of exercises:
      {` ${parts[0].exercises + parts[1].exercises + parts[2].exercises}`}
    </p>
  );
};

const Parts = ({ partName, numberOfExercises }) => {
  return (
    <p>
      {partName} {numberOfExercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      <Parts partName={parts[0].name} numberOfExercises={parts[0].exercises} />
      <Parts partName={parts[1].name} numberOfExercises={parts[1].exercises} />
      <Parts partName={parts[2].name} numberOfExercises={parts[2].exercises} />
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React:",
        exercises: 10,
      },
      {
        name: "Using props to pass data:",
        exercises: 7,
      },
      {
        name: "State of a component:",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
