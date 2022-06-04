import { Link } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div>
      <h1>GoodHabits</h1>
      <nav>
        <Link to="/company">Company</Link>{" "}|{" "}
        <Link to="/signin">Singin</Link>{" "}|{" "}
        <Link to="/login">Login</Link>{" "}|{" "}
        <Link to="/pp">PrivacyPolicy</Link>{" "}|{" "}
        <Link to="/asct">ActOnSpecifiedCommercialTransactions</Link>{" "}|{" "}
      </nav>
    </div>
  );
}

export default App
