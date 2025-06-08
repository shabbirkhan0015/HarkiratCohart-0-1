const express = require("express");

const app = express();
app.use(express.json());
const port = 3000;

const users = [
  {
    name: "john",
    kidney: [
      {
        healthy: true,
      },
    ],
  },
];

app.get("/", (req, res) => {
  let totalKidney = users[0].kidney.length;
  let numberofHealthyKidney = 0;
  let numberofUnhealthykidney = 0;

  for (let i = 0; i < users[0].kidney.length; i++) {
    if (users[0].kidney[i].healthy) {
      numberofHealthyKidney++;
    } else {
      numberofUnhealthykidney++;
    }
  }
  res.json({
    totalKidney: totalKidney,
    healthyKideny: numberofHealthyKidney,
    unhealthyKideny: numberofUnhealthykidney,
  });
});

app.post("/", (req, res) => {
  let isHealthy = req.body.isHealthy;
  users[0].kidney.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidney.length; i++) {
    users[0].kidney[i].healthy = true;
  }

  res.json({
    msg: "updated",
  });
});

app.delete("/", (req, res) => {
  const newKidney = [];
  for (let i = 0; i < users[0].kidney.length; i++) {
    if (users[0].kidney[i].healthy) {
      newKidney.push({
        healthy: true,
      });
    }
  }
  users[0].kidney = newKidney;
  res.json({
    msg: "deleted",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
