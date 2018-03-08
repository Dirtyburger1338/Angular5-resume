<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "1",
        "ShortDescription" => "Linux",
        "Heading" => "Linux heading",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "linux-logo.png",
        "Introduction" => "Intro",
        "List" => array(
            
        ),
        "Link" => "https://www.miun.se/utbildning/program/data-och-it/datateknik/utbildningsplan/?utbildningsplanid=1069"
      )     
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>