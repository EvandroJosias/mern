const express = require('express');
const userRoute = require("./routes/user.route");
const app = express();
const port = 3000;

app.use(express.json());
app.use("/user", userRoute);

app.listen(port, () => console.log('Server rodando na porta ${port}'));