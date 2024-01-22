import React from "react";
import Form from "./form/form";

export default function Login({ handleLogin }) {
  const FormSubmit = async (name, password) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log("Error man", error);
    }
  };
  return (
    <div>
      <h2>Log in</h2>
      <Form onSubmit={FormSubmit} buttonLabel={"Login"} />
    </div>
  );
}
