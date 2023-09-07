import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singers";

function App() {
  const actors = ["Sakib", "Raj", "Jasim", "Rasel"];
  const singers = [
    { id: 1, name: "Dr. Mahfuzur Rahman", age: "55" },
    { id: 2, name: "Eva  Rahman", age: "38" },
    { id: 3, name: "Shuvro Dev", age: "" },
    { id: 4, name: "Pritom", age: "25" },
  ];

  return (
    <>
      <h1>Vite + React</h1>
      {/* <Device name="Laptop" price="35000"></Device>
      <Device name="Mobile" price="5000"></Device>
      <Person></Person>
      <Student grade="5" score="99"></Student>
      <Student grade={5} score="33"></Student>
      <Student></Student>
      <Student1></Student1> */}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Core concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {singers.map((singer) => (
        <Singer singer={singer}></Singer>
      ))}
      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
    </>
  );
}

function Device(props) {
  // console.log(props);
  return (
    <div>
      <h2>
        This device: {props.name} price: {props.price}
      </h2>
    </div>
  );
}

function Person() {
  const age = 26;
  const money = 200;
  const person = { name: "Rifat", age: "22" };
  return (
    <h2>
      I am a bad Person. and my age: {age}. i have: {money} tk. <br /> And my
      bother name: {person.name} and his age: {person.age}.
    </h2>
  );
}
// const { grade, score } = { grade: "5", score: "99" };
function Student({ grade = 0, score = 0 }) {
  // console.log(grade, score);
  // const developerStyle = {
  //   margin: "20px",
  //   padding: "20px",
  //   border: "2px solid green",
  //   borderRadius: "10px",
  // };
  return (
    <div className="student">
      <h2>This is a student</h2>
      <p>Class: {grade}</p>
      <p>Score: {score}</p>
    </div>
  );
}
function Student1() {
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid red",
        borderRadius: "10px",
      }}
    >
      <h2>This is a student1</h2>
      <p>Name:</p>
      <p>Age:</p>
    </div>
  );
}

export default App;
