import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Store/slices/userSlice";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function UserLogin() {
    dispatch(
      login({
        name: "Aman Lowanshi",
        email: "amanlowanshi@gmail.com",
        blog: [
          { id: 1, title: "React", desc: "Best" },
          { id: 2, title: "Javascript", desc: "Test" },
        ],
      })
    );
  }

  function UserLogout(){
    dispatch(logout())
  }

  return (
    <>
      <div>Login Screen</div>
      <button onClick={UserLogin}>Login</button>
      <button onClick={UserLogout}>Logout</button>
      {user.isLoggedIn ? (
        <div>
          <div>name</div>
          {user.name}
          <div>email</div>
          {user.email}
        </div>
      ) : (
        <div>User is not logged in</div>
      )}
    </>
  );
}

export default App;
