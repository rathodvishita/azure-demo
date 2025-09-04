require("./telemetry");           // <-- must be first

const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello from Azure Web App! After another deployment 🚀" + PORT);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
