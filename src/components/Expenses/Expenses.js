import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const [filteredYearList, setFilteredYearList] = useState([]);
  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    setFilteredYearList(
      props.expenses.filter(
        (expense) => expense.date.getFullYear() === parseInt(selectedYear)
      )
    );
    console.log("Inside Expenses.js");
    console.log(selectedYear);
    console.log(filteredYearList);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onYearChange={yearChangeHandler}
        selectedYear={filteredYear}
      />
      {props.expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
      {filteredYearList.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}
