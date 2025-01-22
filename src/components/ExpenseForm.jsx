import React, { useState } from "react";
import InputField from "./InputField";
import SelectMenu from "./SelectMenu";

function ExpenseForm({
  setExpenses,
  expense,
  setExpense,
  editing,
  setEditing,
}) {
  // const [expense, setExpense] = useState({
  //   title: "",
  //   category: "",
  //   price: "",
  // });

  const validateConfig = {
    title: [
      { require: true, message: "Title is required" },
      { min: 3, message: "minimum length 3 character" },
    ],
    category: [{ require: true, message: "Category is required" }],
    price: [
      { require: true, message: "Price is required" },
      {
        pattern: /^0|[1-9]\d*$/,
        message: "Mistake!, Please enter the amount",
      },
    ],
  };

  const [errors, setErrors] = useState({});
  const errorData = {};
  const validate = (formdata) => {
    Object.entries(formdata).forEach(([key, value]) => {
      // console.log(key, value);
      validateConfig[key].some((error) => {
        if (error.require && !value) {
          errorData[key] = error.message;
          return true;
        }

        if (error.min && value.length < 3) {
          errorData[key] = error.message;
          return true;
        }

        if (error.pattern && !error.pattern.test(value)) {
          errorData[key] = error.message;
          return true;
        }
      });
    });
    setErrors(errorData);
    return errorData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (editing) {
      setExpenses((prevstate) =>
        prevstate.map((editingData) => {
          if (editingData.id === editing) {
            return { ...expense, id: editing };
          }
          return editingData;
        })
      );
      setExpense({
        title: "",
        category: "",
        price: "",
      });
      setEditing("");
      return;
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ]);
    setExpense({
      title: "",
      category: "",
      price: "",
    });

    // This below code for reference to do same code as above
    // const expense = { category, category, price, id: crypto.randomUUID() };
    // setExpenses((previousData) => [...previousData, expense]);
    // e.target.reset();
    // console.log(getFormData(e.target));
    // const expense = { ...getFormData(e.target), id: crypto.randomUUID() };
    // setExpenses((prevState) => [...prevState, expense]);
    // e.target.reset();
  };
  // const getFormData = (form) => {
  //   const formData = new FormData(form);
  //   const data = {};
  //   for (const [key, value] of formData.entries()) {
  //     data[key] = value;
  //   }
  //   return data;
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpense((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <InputField
          label="Title"
          name="title"
          value={expense.title}
          onChange={handleChange}
          error={errors.title}
        />
        <SelectMenu
          label="Category"
          id="category"
          name="category"
          value={expense.category}
          onChange={handleChange}
          error={errors.category}
          option={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select Category"
        />
        <InputField
          label="Price"
          id="price"
          name="price"
          value={expense.price}
          onChange={handleChange}
          error={errors.price}
        />
        <button className="add-btn">{editing ? "Save" : "Add"}</button>
      </form>
    </>
  );
}

export default ExpenseForm;
