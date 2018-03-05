<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "1",
        "ShortDescription" => "Machine Learning",
        "From" => "2018-01-12",
        "To" => "2018-03-25",
        "Heading" => "Machine Learning",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "ML.jpg",
        "Introduction" => "Intro",
        "List" => array(      
        ),
        "Link" => "https://www.bth.se/eng/courses/C5650/20181/"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "Mathematical Statistics",
        "From" => "?",
        "To" => "?",
        "Heading" => "Next up - Mathematical Statistics",
        "Context" => "Probability, Statistics, and Stochastic Processes.",
        "Image" => "math.jpg",
        "Introduction" => "Intro",
        "List" => array(      
        ),
        "Link" => "https://liu.se/en/organisation/liu/mai/ms"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "Data Mining",
        "From" => "?",
        "To" => "?",
        "Heading" => "Next up - Data Mining",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "DM.jpg",
        "Introduction" => "Intro",
        "List" => array(      
        ),
        "Link" => "https://en.wikipedia.org/wiki/Data_mining"
      )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>