import express from "express";
const app = express();

const PORT = process.env.PORT || 8000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// home route

app.get("/", (req, res) => {
  res.json({
    api: "Bounty Hunters API",
    message: "Welcome to our API",
  });
});

app.listen(PORT, () => {
  console.log(`API running on ${PORT}`);
});

export default app;
