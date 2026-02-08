const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/contacts", (req, res) => {
  const { contacts } = req.body;

  console.log("Contacts count:", contacts.length);

  res.json({ status: "ok" });
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on 3000 (public in WiFi)");
});