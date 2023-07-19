import "./App.css";
import Header from "./Components/Header";
import Add from "./Components/Add";
import Balance from "./Components/Balance";
import Expenses from "./Components/Expenses";
import Footer from "./Components/Footer";
import { useState } from "react";

export default function App() {
  let [total, setTotal] = useState(0);
  let [amount, setAmount] = useState(0);
  let [description, setDescription] = useState("Description Is Empty");
  let [expenses, setExpenses] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <Balance total={total} />
          <Add
            vars={{ amount, description, expenses, total }}
            setVars={{ setDescription, setAmount, setExpenses, setTotal }}
          />
          {expenses.map((expense) => (
            <Expenses
              key={expense.id}
              data={expense}
              update={{ expenses, setExpenses, total, setTotal }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
