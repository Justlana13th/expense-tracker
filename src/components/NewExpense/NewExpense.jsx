import React, {useState} from 'react'
import ExpenseForm from './ExpenseForm';


import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

    // enteredExpense data menerima hasil dari expenseData yang ada di ExpenseForm.jsx
    // lalu expenseData memiliki value dari enteredExpenseData + ditambah data baru yang memiliki properti id
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    }

    const startEditingHandler = () => {
      setIsEditing(true);
    }

    const stopEditingHandler = () => {
      setIsEditing(false);
    }

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  )
}

export default NewExpense