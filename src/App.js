import "./styles.css";
import users from "../public/users.json";
import UserCard from "./userCard";

export default function App() {
  return (
    <div className="App">
      <h1>Users List</h1>
      {users.map((user) => (
        <UserCard {...user} key={user.id} />
      ))}
    </div>
  );
}
