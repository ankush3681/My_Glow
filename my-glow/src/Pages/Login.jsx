// Saurabh
import React from "react";

const Login = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verifyLogin = async (e) => {
    e.preventDefault();
    try {
      let usersData = await fetch(`https://api-ak.vercel.app/users`);
      let data = await usersData.json();
      for (let i = 0; i <= data.length - 1; i++) {
        if (
          loginUser.email === data[i].email &&
          loginUser.password === data[i].password
        ) {
          alert(`Welcome Back ${data[i].name}`);
          return;
        }
      }
      alert("Login Error");
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={verifyLogin}>
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, email: e.target.value })
          }
          required
          type="email"
          name="email"
          placeholder="Enter your email"
        />
        <input
          onChange={(e) =>
            setLoginUser({ ...loginUser, password: e.target.value })
          }
          required
          type="password"
          name="password"
          placeholder="Enter your Password"
        />
        <button onSubmit="submit">Submit now</button>
      </form>
    </div>
  );
};

export default Login;
