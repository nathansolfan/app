import React from "react";
import Form from "./form/form";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
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
      navigate("/login");
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
