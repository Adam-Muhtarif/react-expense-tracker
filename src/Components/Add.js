import { FaPlus } from "react-icons/fa";
// context
export default function Add(props) {
  function addNewExpense() {
    const newExpense = {
      id: props.vars.expenses.length + 1,
      amount: +props.vars.amount,
      description: props.vars.description,
    };
    props.setVars.setExpenses([...props.vars.expenses, newExpense]);
    props.setVars.setTotal(props.vars.total + newExpense.amount)
  }
  return (
    <div className="add-expense space">
      <input
        onChange={(e) => props.setVars.setAmount(e.target.value)}
        className="expense-amount"
        type="number"
        placeholder="$"
      />
      <input
        onChange={(e) => props.setVars.setDescription(e.target.value)}
        className="expense-input"
        type="text"
        placeholder="Add expense description"
      />
      <button onClick={addNewExpense} className="expense-button">
        <FaPlus />
      </button>
    </div>
  );
}
