<?php

include 'opendb.inc';

$query = "SELECT id, content FROM guestbook_comments ORDER BY id DESC";
$results = $db->query($query) or die('<p><b>SQL Statement:</b>' . $query);
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
        <h4>Latest reviews</h4>
        <hr/>
            <?php
                while($r = $results->fetchArray()) {
			    echo "<div class=\"row\"> $r[1] </div><hr/>";
                }
            ?>
        <a href="comment.php">Leave a review</a></br>
    </div>
  </body>
</html>
