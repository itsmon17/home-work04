import React from "react";
import "./Button.css";

function Button(props) {
  const { title, onClick, style } = props;
  return (
    <div className="move">
      <button className={style} onClick={onClick}>
        {title}
      </button>
    </div>
  );
}

export default Button;
