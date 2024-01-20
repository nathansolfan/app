import React from "react";
import Form from "./form/form";

export default function Register() {
  const handleRegister = async (name, password) => {
    try {
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <h2>Register</h2>
      <Form onSubmit={handleRegister} buttonLabel={"Registere"} />
    </div>
  );
}
