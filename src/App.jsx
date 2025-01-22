import { useState } from "react";
import "./App.css";
import ExpenseData from "./components/ExpenseData";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useLocalStorage } from "./Hooks/useLocalStorage";

function App() {
  const [expense, setExpense] = useLocalStorage("expense", {
    title: "",
    category: "",
    price: "",
  });
  const [expenses, setExpenses] = useLocalStorage("expenses", ExpenseData);
  const [editing, setEditing] = useLocalStorage("editing", "");

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            expense={expense}
            setExpense={setExpense}
            editing={editing}
            setEditing={setEditing}
          />
          <ExpenseTable
            setExpense={setExpense}
            expenses={expenses}
            setExpenses={setExpenses}
            setEditing={setEditing}
          />
        </div>
      </main>
    </>
  );
}

export default App;
