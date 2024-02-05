import axios from "axious";

axios
  .get("https://api.sportmonks.com/api/v3/football/livescores", {
    headers: { Authorization: "YOUR_TOKEN" },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
