import { useState, useEffect } from "react";

function AddProblem() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [exampleInput, setExampleInput] = useState("");
  const [exampleOutput, setExampleOutput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control topic">
        <label>Topic: </label>
        <input
          type="text"
          value={topic}
          //style={"height: 100px;"}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Input: </label>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Output: </label>
        <input
          type="text"
          value={output}
          onChange={(e) => setOutput(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Example Input: </label>
        <input
          type="text"
          value={exampleInput}
          onChange={(e) => setExampleInput(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Example Output: </label>
        <input
          type="text"
          value={exampleOutput}
          onChange={(e) => setExampleOutput(e.target.value)}
        />
      </div>

      <input type="submit" value="ADD" />
    </form>
  );
}

export default AddProblem;
