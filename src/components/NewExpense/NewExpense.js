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
    setIsEditing(true);
  };
  const cancelExpenseBtnHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={addNewExpenseBtnHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onCancel={cancelExpenseBtnHandler}
          onsaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
}
