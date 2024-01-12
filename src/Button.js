import { useState } from "react";

const Button = () => {
  // create a simple useState, outside the return
  const [name, setName] = useState("Mario");

  return (
    <div>
      <button onClick={() => setName("Luigi")}>This is a button</button>
    </div>
  );
};

export default Button;
