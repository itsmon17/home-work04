import React from "react";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const { date, title, price } = props;
  return (
    <div>
      <div className="textDiv">
        <ul className="textUl">
          <li className="textcub">
            <span className="span1">январь</span>
            <span className="span2">{new Date(date).getDate().toString()}</span>
            <span className="span3">01</span>
          </li>
          <li className="li">{title}</li>
          <li className="dol">
            <p className="textDol">{price}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExpenseItem;
