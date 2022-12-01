import { Editor, EditorState } from "draft-js"
import { useRef, useState } from "react"

function DraftEditor(props) {
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
    const editorRef = useRef(null)

    return (
        <Editor editorState={editorState} onChange={setEditorState} placeholder={props.placeholder} editorRef = {editorRef}/>
    )

}

export default DraftEditor