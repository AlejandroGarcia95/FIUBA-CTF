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

app.get("/ping", async (req, res) => {
  const database = await client.query("SELECT 1 + 1").then(() => "up").catch(() => "down");

  res.send({
    environment: process.env.NODE_ENV,
    database,
  });
});

app.get("/answer", async (req, response) => {
  var ans;
  var text = fs.readFileSync(process.cwd() + '/public/ok.html', "utf-8");
  
  const query = "SELECT * FROM users WHERE username='lolo' AND password='lala'; SELECT * FROM users; SELECT * FROM users WHERE username='hello'";
  const password = "lala'; SELECT * FROM users; SELECT * FROM users WHERE username='hello"
  
  client.query(query, (err, res) => {
    if (err) {
      ans = err.stack

      const complete_text = text.replace("KBGATO", "Error: " + JSON.stringify(ans));
      const complete_text_2 = complete_text.replace("OKGATO", "If you query for: " + query)
      response.send(complete_text_2);

    } else {
      ans = res

      const complete_text = text.replace("KBGATO", "Error: " + JSON.stringify(ans));
      const complete_text_2 = complete_text.replace("OKGATO", "If you put password: " + password + ".\nYou actually query for: " + query)
      response.send(complete_text_2);
    }
  })
});

app.get("/pong", async (req, response) => {
  const password = req.query.password
  const user = req.query.user
  var text = fs.readFileSync(process.cwd() + '/public/not_ok.html', "utf-8");
  var ans;
  client.query("SELECT * FROM users WHERE username = '" + user + "' AND password = '" + password + "'", (err, res) => {
    if (err) {
      ans = err.stack

      const complete_text = text.replace("KBGATO", "Error: " + JSON.stringify(ans));  
      response.send(complete_text);

    } else {
      ans = res

      const complete_text = text.replace("KBGATO", "Error: " + JSON.stringify(ans));  
      response.send(complete_text);
    }
  })
});

const init_users_table = () => {
  const query = client.query("CREATE TABLE users(id SERIAL PRIMARY KEY, username VARCHAR(40) NOT NULL, password VARCHAR(40) NOT NULL)");
  const query2 = client.query("INSERT INTO users(id, username, password) VALUES(1, 'FLAG', 'z4l4l4')");
}

(async () => {
  await client.connect();

  init_users_table();

  app.listen(PORT, () => {
    console.log("Started at http://localhost:%d", PORT);
  });
})();
