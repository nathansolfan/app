import axios from "axios";

import React, { useEffect, useState } from "react";

export default function SportsmonkAPI() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.sportmonks.com/api/v3/football/livescores", {
        headers: {
          Authorization:
            "E8FlTnzjvNFr1tmGViQWpCXxoQ1CsSXDc842GrRvQBTSdnn0pEugCvi7CmZ6",
        },
      })
      .then((response) => {
        setMatches(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div>
      {matches.map((match) => (
        <div key={match.id}>{match.name}</div>
      ))}
    </div>
  );
}
