<?php

include 'opendb.inc';

if (isset($_POST["comment"])) {
    $stmt = $db->prepare("INSERT INTO guestbook_comments (content) VALUES (:comment)");
    $stmt->bindValue(':comment', $_POST["comment"]);
    $stmt->execute() or die('<p><b>SQL Statement:</b>' . $query);
}

?><!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Vapour Community</title>

    <!-- Bootstrap core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="/style.css" rel="stylesheet">
  </head>

  <body>
    <div class="container">
        <h1>Age of Mythology: Extended Edition</h1>
        <h4>Your review has been saved!</h4>
        <hr/>
        <a href="view.php">View latest reviews</a>
    </div>
  </body>
</html>
