import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
export default function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4(),
    };
    props.onAddExpense(expenseData);
  };
  const addNewExpenseBtnHandler = () => {
    setIsEditing((prevState) => {
      if (prevState === true) {
        return false;
      } else {
        return true;
      }
    });
  };
  const cancelExpenseBtnHandler = () => {
    setIsEditing(false);
  };
  if (isEditing === true) {
    return (
      <div className="new-expense">
        <ExpenseForm
          onCancel={cancelExpenseBtnHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      </div>
    );
  } else {
    return (
      <div className="new-expense">
        <button onClick={addNewExpenseBtnHandler}>Add New Expense</button>
      </div>
    );
  }
}
