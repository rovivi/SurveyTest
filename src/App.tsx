import React from "react";
import { Question } from "./models/Question";
import Survey from './components/Survey';


let data:Question[] = require('./survey.json');

console.log(data)
function App() {
  return (
    <div className="App">
      <h3>Dynamic Survey </h3>
      <Survey survey={data} />
    </div>
  );
}

export default App;
