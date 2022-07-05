const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  const Header = ({ course }) => <h1>{course}</h1>;

  const Content = ({ parts }) => (
    <>
      {parts.map((part) => (
        <Part part={part} />
      ))}
    </>
  );

  const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>
    );
  };

  const Total = ({ parts }) => (
    <p>
      Number of exercises{" "}
      {parts.reduce((total, part) => total + part.exercises, 0)}
    </p>
  );

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
