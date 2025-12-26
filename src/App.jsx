import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Store/slices/userSlice";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./fallback";
import { useState } from "react";
import CrashComponent from "./ChildComponentCrash";

function App() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [shouldCrash, setShouldCrash] = useState(false);

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

    // ✅ trigger error on next render
    setShouldCrash(true);
  }

  function UserLogout() {
    dispatch(logout());
    setShouldCrash(false);
  }

  // // ✅ Error thrown DURING render phase
  // if (shouldCrash) {
  //   throw new Error("Testing Fallback Component");
  // }

  return (
    <ErrorBoundary FallbackComponent={Fallback} onReset={()=>
    {
      console.log("Button Clicked")
      setShouldCrash(false)
    }
    }>
      <div>
        <h2>Login Screen</h2>

        <button onClick={UserLogin}>Login</button>
        <button onClick={UserLogout}>Logout</button>

        {user.isLoggedIn ? (
          <div>
             <CrashComponent shouldCrash={shouldCrash}/>
            <div><strong>Name:</strong> {user.name}</div>
            <div><strong>Email:</strong> {user.email}</div>
          </div>
        ) : (
          <div>User is not logged in</div>
        )}
      </div>
    </ErrorBoundary>
  );
}

export default App;
