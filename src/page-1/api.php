<?php

// Connect to your database or perform any other necessary operations
// ...

// Retrieve some data from your database
$data = array(
  array('name' => 'John', 'age' => 30),
  array('name' => 'Jane', 'age' => 25),
  array('name' => 'Bob', 'age' => 40),
);

// Convert the data to JSON and output it
echo json_encode($data);
