import './App.css';
import ExpenseManager from './Components/ExpenseManager/ExpenseManager';
import Header from './Components/Header/Header';
import TotalExpense from './Components/TotalExpense/TotalExpense';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalExpense />
      <ExpenseManager />
    </div>
  );
}

export default App;
