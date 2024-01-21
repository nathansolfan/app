import React from "react";
import Form from "./form/form";

export default function Login() {
  const handleLogin = async (name, password) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });
    } catch (error) {
      console.log("Error man", error);
    }
  };
  return (
    <div>
      <Form onSubmit={handleLogIn} buttonLabel={"Login"} />
    </div>
  );
}
