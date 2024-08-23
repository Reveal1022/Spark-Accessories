const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyparser = require("body-parser");
const bcrypt = require("bcryptjs");

const app = express();
const PORT = process.env.PORT || 5000;
const users = [];

app.use(cors());
app.use(bodyparser.json());

const SECRET_KEY = "chabitala";

//register

app.post("api/register", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 8);

  users.push({ firstName, lastName, email, password: hashedPassword });

  res.json({ message: "user registered successfully" });
});

app.post("api/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find((u) => u.email === email);

  if (!user) {
    return res.status(404).json({ message: "User doesnot exist" });
  }

  const validPassword = bcrypt.compareSync(password, user.password);

  if (!validPassword) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, {
    expiresIn: "15m",
  });

  res.json({ message: "Login Successful" });
});

app.get("/api/protected", (req, res) => {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ message: "no token found" });
  }

  jwt.verify(token, SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ message: "failed to authenticate" });
    }

    return res.json({ message: "Welcome", user: decoded });
  });
});

app.listen(PORT, () => console.log(`server running on port ${PORT}`));
