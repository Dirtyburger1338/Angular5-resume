<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "1",
        "ShortDescription" => "University",
        "From" => "2013",
        "To" => "2016",
        "Heading" => "Bachelor of Science in Computer Enineering",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "miun_logo.png"
      ),
      array(
        "Id" => "2",
        "ShortDescription" => "High School",
        "From" => "2003",
        "To" => "2006",
        "Heading" => "Natural Science - alignment to Mathematics and Computers",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "sg.png"
      )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>