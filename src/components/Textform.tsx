import React, { ChangeEvent, MouseEvent, useState } from "react";
import ReactTooltip from "react-tooltip";
interface TextformProps {
  heading: string;
  mode: string;
  showAlert?(message: string, type: string): void;
}
const Textform = ({ heading, mode, showAlert }: TextformProps) => {
  const rowSize = 5;
  const [text, setText] = useState("");

  const handleUpperClick = (event: MouseEvent<HTMLButtonElement>) => {
    setText(text.toUpperCase());
    showAlert!("Converted to upper case", "success");
  };

  const handleLowerClick = (event: MouseEvent<HTMLButtonElement>) => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleClear = (even: MouseEvent<HTMLButtonElement>) => {
    setText("");
    showAlert!("All Cleared!", "success");
  };

  const handleCopyToClipBoard = (even: MouseEvent<HTMLButtonElement>) => {
    navigator.clipboard.writeText(text);
    showAlert!("Copied to clipboard", "success");
  };

  return (
    <div style={{ color: mode === "light" ? "black" : "white" }}>
      <div className="container my-2 mb-3">
        <h3>{heading}</h3>
        <textarea
          placeholder={"Enter your comments"}
          className="form-control"
          id="mybox"
          rows={rowSize}
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: mode === "light" ? "white" : "grey",
            color: mode === "light" ? "black" : "white",
          }}
        ></textarea>
        <button className="btn btn-primary m-2" onClick={handleUpperClick}>
          Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLowerClick}>
          Lowercase
        </button>
        <button
          onClick={handleCopyToClipBoard}
          className="btn btn-primary m-2"
          data-tip
          data-for="registerTip"
        >
          Copy
        </button>
        <ReactTooltip id="registerTip" place="bottom" effect="solid">
          Copy to Clipboard
        </ReactTooltip>
        <button className="btn btn-danger m-2" onClick={handleClear}>
          Clear
        </button>
      </div>
      <div className="container my-1">
        <h1>Your text summary</h1>
        <p>
          {!text ? 0 : text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.length} Minutes read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </div>
  );
};

export default Textform;
