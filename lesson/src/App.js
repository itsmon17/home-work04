import { useState } from "react";
import "./App.css";
import NewExpense from "./component/new-expense/NewExpense"
import { Expenses } from "./component/expenses/Expenses";

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Наушник",
      price: 300,
      date: new Date().getDate().toString(),
    },
    {
      title: "Зарядник",
      price: 400,
      date: new Date().getDate().toString(),
    },
  ]);

  const addNevExpenseHandler = (data) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.push(data);
    setExpenses(updatedExpenses);
  };

  return (
    <div>
      <NewExpense onNewExpenseAdd={addNevExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;