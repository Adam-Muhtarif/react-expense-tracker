import { FaBackspace } from "react-icons/fa";

export default function Expenses(props) {
  // Remove Function
  function removeExpense(id, amount) {
    props.update.setExpenses(
      props.update.expenses.filter((expense) => {
        return expense.id !== id;
      })
    );
    props.update.setTotal(props.update.total - amount);
  }

  // Component Return
  return (
    <div key={props.data.id} className="expense">
      <div>💲{props.data.amount}</div>
      <div>{props.data.description}</div>
      <div onClick={() => removeExpense(props.data.id, props.data.amount)}>
        <FaBackspace className="remove" size={30} color={"red"} />
      </div>
    </div>
  );
}
