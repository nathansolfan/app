import axios from "axios";

import React, { useEffect, useState } from "react";

export default function SportsmonkAPI() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/matches")
      .then((response) => {
        setMatches(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Hello</h1>
      {matches.map((match) => (
        <div key={match.id}>{match.name}</div>
      ))}
    </div>
  );
}
