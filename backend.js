const express = require("express");
const os = require("os");

const app = express();
app.use(express.json());

// function to get local WiFi IP
function getLocalIP() {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    for (const iface of interfaces[name]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "0.0.0.0";
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/api/contacts", (req, res) => {
  const { contacts } = req.body;
  console.log("Contacts count:", contacts.length);
  res.json({ status: "ok" });
});

const PORT = 3000;
const HOST = "0.0.0.0"; // public in WiFi

app.listen(PORT, HOST, () => {
  //const ip = getLocalIP();
  console.log("Server running:");
  console.log(`👉 ${PORT}`);
});
