import React from "react";
import ExpenseItem from "../expense-item/ExpenseItem";
import "./Expenses.css";

export const Expenses = ({ expenses }) => {
  return (
    <ul className="divExp">
      {expenses.map((elem) => {
        return (
          <ExpenseItem
            key={elem.title}
            title={elem.title}
            price={elem.price + " сом"}
            date={elem.date}
          />
        );
      })}
    </ul>
  );
};
