import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button"
import axios from "axios";
import { Editor, EditorState } from "draft-js";
import Utility from "../Utility.js";

import 'draft-js/dist/Draft.css'
import DraftEditor from "./DraftEditor";

function AddProblem() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(() => EditorState.createEmpty());
  const [input, setInput] = useState(() => EditorState.createEmpty());
  const [output, setOutput] = useState(() => EditorState.createEmpty());
  const [exampleInput, setExampleInput] = useState(() => EditorState.createEmpty());
  const [exampleOutput, setExampleOutput] = useState(() => EditorState.createEmpty());
  const [testInput, setTestInput] = useState(() => EditorState.createEmpty());
  const [testOutput, setTestOutput] = useState(() => EditorState.createEmpty());

  async function add(data) {
    const problem = await axios.post(process.env.REACT_APP_API_URL + "/addProblem", data)
    console.log(problem)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const problem = { 
      name, 
      topic: topic.getCurrentContent().getPlainText(), 
      input: input.getCurrentContent().getPlainText(), 
      output: output.getCurrentContent().getPlainText(), 
      exampleInput: exampleInput.getCurrentContent().getPlainText(), 
      exampleOutput: exampleOutput.getCurrentContent().getPlainText(), 
      testInput: testInput.getCurrentContent().getPlainText(),
      testOutput: testOutput.getCurrentContent().getPlainText(),
    }
    if (Utility.isBlank(name, problem.topic, problem.input, problem.output, problem.exampleInput, problem.exampleOutput, problem.testInput, problem.testOutput)){
      return alert("Please fill all the text fields!")
    }
    add(problem)
    console.log(problem)
    alert("You have added a problem!")
    window.location.href = '/problemList'
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name: </label>
        <input className="form-control"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Topic: </label>
        <div className="form-control">
          <Editor editorState={topic} onChange={setTopic} />
        </div>
      </div>
      <div className="form-group">
        <label>Input: </label>
        <div className="form-control">
          <Editor editorState={input} onChange={setInput} />
        </div>
      </div>
      <div className="form-group">
        <label>Output: </label>
        <div className="form-control">
          <Editor editorState={output} onChange={setOutput} />
        </div>
      </div>
      <div className="form-group">
        <label>Example Input: </label>
        <div className="form-control">
          <Editor editorState={exampleInput} onChange={setExampleInput} />
        </div>
      </div>
      <div className="form-group">
        <label>Example Output: </label>
        <div className="form-control">
          <Editor editorState={exampleOutput} onChange={setExampleOutput} />
        </div>
      </div>
      <div className="form-group">
        <label>Test Input: </label>
        <div className="form-control">
          <Editor editorState={testInput} onChange={setTestInput} />
        </div>
      </div>
      <div className="form-group">
        <label>Test Output: </label>
        <div className="form-control">
          <Editor editorState={testOutput} onChange={setTestOutput} />
        </div>
      </div>
      <br></br>
      <div id="submit-button">
        <Button type="submit" >
          Add
        </Button>
      </div>
    </form>
  );
}

export default AddProblem;
