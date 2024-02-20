import React from "react";
import Form from "./form/form";
import { useNavigate } from "react-router-dom";

export default function Login({ handleLogin }) {
  const navigate = useNavigate();

  const FormSubmit = async (name, password) => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, password }),
      });

      if (response.ok) {
        const textResponse = await response.json();
        console.log(textResponse);
        handleLogin({ name });
        navigate("/");
      }
    } catch (error) {
      console.log("Error man", error);
    }
  };

  return (
    <div>
      <h2>Log in</h2>
      <Form onSubmit={FormSubmit} buttonLabel={"Login"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt id
        dolorem, inventore similique ratione dolores doloribus soluta ipsa
        corporis ipsam aperiam? Labore rem eligendi sint facilis neque
        repudiandae dolore sunt!
      </p>
    </div>
  );
}
