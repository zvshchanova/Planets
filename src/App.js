import "./styles.css";
import { useState } from "react";
import { Button } from "./Button.js";
import { ListComponent } from "./ListComponent.js";

export default function App() {
  const allPlanets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune"
  ];
  const [leftList, setLeftList] = useState(allPlanets);
  const [displayList, setDisplayList] = useState([]);

  function addComponent() {
    console.log(displayList);
    console.log(leftList);
    if (leftList.length > 0) {
      setDisplayList([...displayList, leftList[0]]);
      leftList.splice(0, 1);
      setLeftList(leftList);
    } else {
      alert("No more planets to add!");
    }
  }
  function allComponent() {
    console.log("allPlanets", allPlanets);
    setDisplayList(allPlanets);
  }
  function delComponent() {
    setDisplayList([]);
    setLeftList(allPlanets);
  }

  return (
    <div>
      <h2>Solar system planets</h2>
      <Button onClick={addComponent} text="Show planet one by one" />
      <Button onClick={allComponent} text="Show all planets" />
      <Button onClick={delComponent} text="Clear list" />
      {displayList.map((item, i) => (
        <ListComponent text={item} key={i} />
      ))}
    </div>
  );
}
