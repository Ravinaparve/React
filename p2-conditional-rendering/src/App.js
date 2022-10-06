import "./styles.css";
import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";
import PackagingList1 from "./PackagingList1";
import PackagingList2 from "./PackagingList2";

export default function App() {
  let isLoggedIn = false;
  let content;
  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 }
  ];
  //or using ternary operator below
  // return <>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</>;

  //or using logical && syntax When you don’t need the else branch:

  // return <>{isLoggedIn && <AdminPanel />}</>;

  //********************************************* */
  //rendering List items below
  const listItems = products.map((item) => <li key={item.id}>{item.title}</li>);
  return (
    <div className="App">
      {content}
      <ul>{listItems}</ul>
      <br />
      <hr />
      <div>
        <p>challenge 1 :</p>
        <PackagingList1 />
        <p>challenge 2 :</p>
        <PackagingList2 />
      </div>
    </div>
  );
}
