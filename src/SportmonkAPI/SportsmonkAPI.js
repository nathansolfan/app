import axios from "axios";

import React, { useEffect, useState } from "react";

export default function SportsmonkAPI() {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/matches")
      .then((response) => {
        setMatches(response.data.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Football Matches</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Start Time</th>
            <th>Result Info</th>
            <th>Leg</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((match) => (
            <tr key={match.id}>
              <td>{match.id}</td>
              <td>{match.name}</td>
              <td>{match.starting_at}</td>
              <td>{match.result_info}</td>
              <td>{match.leg}</td>
              <td>{match.length}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div>
        <h1>Hello</h1>
        {matches.map((league) => (
          <div key={league.id}>
            <h2>{league.name}</h2>
            <img src={league.image_path} alt={league.name} />
            <p>Last Played At: {league.last_played_at}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
