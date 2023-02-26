import React from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import ExpenseAmount from "./ExpenseAmount";
import { ExpenseTitle, ExpenseListItem } from "./ExpenseItemWrapper";

function ExpenseItem(props) {
  return (
    <ExpenseListItem>
      <ExpenseDate date={props?.date} />
      <ExpenseTitle>{props?.title}</ExpenseTitle>
      <ExpenseAmount amount={props?.amount} />
    </ExpenseListItem>
  );
}

export default ExpenseItem;
