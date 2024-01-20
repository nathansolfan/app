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
    } catch (error) {
      console.log("Error", error);
    }
  };
  return (
    <div>
      <div>Register</div>
      <button>Hello</button>
    </div>
  );
}
