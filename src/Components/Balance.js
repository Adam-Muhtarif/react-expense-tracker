export default function Balance(props) {
  return (
    <div className="balance space">
      <div>Total Expense:</div>
      <div>
        <b>💲{props.total}</b>
      </div>
    </div>
  );
}
