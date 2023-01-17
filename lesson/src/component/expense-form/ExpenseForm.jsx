import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import FormInput from "../UI/form-input/FormInput";
import "./ExpenseForm.css";

function ExpenseForm({ onNewExpenseAdd, onShowForm }) {
  const [title, setTitle] = useState("");
  const [date, setdate] = useState();
  const [price, setprice] = useState();

  const canselHanler = (event) => {
    event.preventDefault();
    onShowForm();
  };

  const titleInputChangeHamdler = (event) => {
    setTitle(event.target.value);
  };

  const priceInputChangeHamdler = (event) => {
    setprice(event.target.value);
  };

  const dateInputChangeHamdler = (event) => {
    setdate(event.target.value);
  };

  const saveHandler = (event) => {
    event.preventDefault();

    const expenseDate = {
      title,
      date,
      price,
    };
    onNewExpenseAdd(expenseDate);
  };

  return (
    <div className="LisConteiner">
      <form className="formConteiner">
        <FormInput
          id="name"
          labelName="Заголовок"
          inputType="text"
          placeholder="Введите название"
          value={title}
          onChange={titleInputChangeHamdler}
        />

        <FormInput
          id="price"
          labelName="Количество"
          inputType="number"
          value={price}
          onChange={priceInputChangeHamdler}
        />

        <FormInput
          id="date"
          labelName="Датировать"
          inputType="date"
          placeholder="дд.мм.гггг"
          value={date}
          onChange={dateInputChangeHamdler}
        />

        <div className="buttonExspensForm">
          <Button 
            style={"button"}
            title="Отмена"
            onClick={canselHanler}
          />
          <Button
            style={"button"}
            title="Добавить расходы"
            onClick={saveHandler}
            value={date}
          />
        </div>
      </form>
    </div>

  );
}

export default ExpenseForm;
