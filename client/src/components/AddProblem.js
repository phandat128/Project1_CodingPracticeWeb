import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button"
import axios from "axios";
import { Editor, EditorState } from "draft-js";

import 'draft-js/dist/Draft.css'
import DraftEditor from "./DraftEditor";

function AddProblem() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(() => EditorState.createEmpty());
  const [input, setInput] = useState(() => EditorState.createEmpty());
  const [output, setOutput] = useState(() => EditorState.createEmpty());
  const [exampleInput, setExampleInput] = useState(() => EditorState.createEmpty());
  const [exampleOutput, setExampleOutput] = useState(() => EditorState.createEmpty());

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
    }
    add(problem)
    console.log(problem)
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
