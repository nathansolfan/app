import axios from "axios";

import { useEffect, useState } from "react";

export default function SportsmonkAPI() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/matches")
      .then((response) => {
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError(false);
      });
  }, []);

  if (loading) {
    return null;
  }

  if (error) {
    return <div>Error: The requested endpoint does not exist.</div>;
  }

  return null;
}
