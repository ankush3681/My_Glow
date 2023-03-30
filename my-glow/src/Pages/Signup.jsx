// Saurabh

import React from "react";

const Signup = () => {
  const [loginUser, setLoginUser] = React.useState({
    email: "",
    password: "",
    name: "",
  });
  const verfiyform = async (e) => {
    e.preventDefault();
    try {
      await fetch(`https://api-ak.vercel.app/users`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(loginUser),
      });
      alert("Signup sucess")
    } catch (error) {
      console.log("error ", error);
    }
  };
  return (
    <div>
      <h1>Signup page</h1>
      <form onSubmit={verfiyform}>
        <input
          onChange={(e) => setLoginUser({ ...loginUser, name: e.target.value })}
          required
          type="text"
          name="name"
          placeholder="Enter your Name"
        />
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
        <button>Submit now</button>
      </form>
    </div>
  );
};

export default Signup;
