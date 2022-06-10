import React from "react";
import { useRef } from "react";
import JoditEditor from "jodit-react";

const Richtextfield = ({ setTask_Description, config, task_decription }) => {
  const editor = useRef(null);
//   const [content, setContent] = useState('')

  return (
    <JoditEditor
        ref={editor}
        onChange={(content) => setTask_Description(content)}
        config={config}
        tabIndex={1} // tabIndex of textarea
        style={{ maxWidth: "500px" }}
        // value={task_decription}
    //   onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
    //   onChange={newContent => {}}
    />
  );
};

export default Richtextfield;
