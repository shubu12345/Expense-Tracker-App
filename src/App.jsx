import { useState } from "react";
import "./App.css";
import ExpenseData from "./components/ExpenseData";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import { useLocalStorage } from "./Hooks/useLocalStorage";
import logo from "./assets/10384161.png";

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
        <div className="logo-container">
          <h1>Track Your Expense</h1>
          <img src={logo} width="80" height="80" alt="expense" />
        </div>
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
