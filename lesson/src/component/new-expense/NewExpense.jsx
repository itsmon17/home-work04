import React from "react";
import ExpenseForm from "../expense-form/ExpenseForm";
import "./NewExpense.css";
import Button from "../UI/button/Button";
import { useState } from "react";

function NewExpense({ onNewExpenseAdd }) {
  const [showForm, setshowForm] = useState(false);

  const showExpenseForm = () => {
    setshowForm((prevState) => !prevState);
  };
  return (
    <div>
      {showForm ? (
        <ExpenseForm
          onShowForm={showExpenseForm}
          onNewExpenseAdd={onNewExpenseAdd}
        />
      ) : (
        <div className="divButtonAdd">
          <Button  title="Добавить новый расход" style={'button'} onClick={showExpenseForm} />
        </div>
      )}
    </div>
  );
};

export default NewExpense;
