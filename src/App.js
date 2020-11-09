import './App.css';
import ExpenseManager from './Components/ExpenseManager/ExpenseManager';
import Header from './Components/Header/Header';
import TotalExpense from './Components/TotalExpense/TotalExpense';
import ExpenseList from './Components/ExpenseList/ExpenseList';
import AddExpense from './Components/AddExpense/AddExpense';
import firebase from './Components/firebase';

function App() {
  const messaging = firebase.messaging();
  messaging.requestPermission().then((permission) => {
    return messaging.getToken()

  }).then(token => {
    console.log(token)
  }).catch((err) => {
    console.log(err.message)
  })


  // const messaging = firebase.messaging();
  // Notification.requestPermission().then((permission) => {
  //   console.log(permission)
  //   if (messaging === "granted") {
  //     messaging.getToken().then((currentToken) => {
  //       if (currentToken) {
  //         console.log("Token", currentToken)
  //       } else {
  //         console.log('No Instance ID token available. Request permission to generate one.');
  //       }
  //     }).catch((err) => {
  //       console.log('An error occurred while retrieving token. ', err);
  //     })
  //   }
  // }
  // )

  return (
    <div className="App">
      {/* <InitFunction /> */}
      <Header />
      <TotalExpense />
      <ExpenseManager />
      <ExpenseList />
      <AddExpense />
    </div>
  );
}

export default App;
