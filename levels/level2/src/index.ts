import express from "express";
import { Client } from "pg";
import fs from "fs";

const PORT = process.env.PORT || 3000;

const client = new Client({
  password: "postgres",
  user: "postgres",
  host: "postgres",
});

const app = express();

app.get("/", async (req, res) => {
  res.sendFile(process.cwd() + '/public/index.html')
});

app.get("/pong", async (req, response) => {
  const password = req.query.password
  const user = req.query.user
  var daquery = "SELECT * FROM users WHERE username = '" + user + "' AND password = '" + password + "'";
  console.log(daquery);
  
  var ans = fs.readFileSync(process.cwd() + '/public/index.html', "utf-8");
  
  client.query(daquery, (err, res) => {
    if (err || (!res.rows) || (res.rows.length == 0)) {
      console.log("Request error");
      ans = ans.replace("hidden", "").replace("LOGINERROR", "Invalid username or password");
    } else {
      console.log("Request ok");
      ans = fs.readFileSync(process.cwd() + '/public/rlcgecrbenlcvdg.html', "utf-8");
    }
    response.send(ans);
  })
});

const init_users_table = () => {
  const query = client.query("CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) NOT NULL, password VARCHAR(40) NOT NULL)");
  const query2 = client.query("INSERT INTO users(id, username, password) VALUES(1, 'micardi', 'rlcgecrbenlcvdg')");
}

(async () => {
  await client.connect();
  init_users_table();
  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
})();
