import './App.css';
import ExpenseManager from './Components/ExpenseManager/ExpenseManager';
import Header from './Components/Header/Header';
import TotalExpense from './Components/TotalExpense/TotalExpense';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import AddExpense from './Components/AddExpense/AddExpense';

function App() {
  return (
    <div className="App">
      <Header />
      <TotalExpense />
      <ExpenseManager />
      <ExpenseList />
      <AddExpense />
    </div>
  );
}

export default App;
