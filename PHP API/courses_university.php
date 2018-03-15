<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "1",
        "ShortDescription" => "Machine Learning",
        "From" => "2018",
        "To" => ", 3HP",
        "Heading" => "Machine Learning",
        "Context" => "- Ongoing",
        "Image" => "ML.jpg",
        "Introduction" => "",
        "List" => array(
          "K-nearest neighbor",
          "K-means",
          "Correlation coefficient",
          "Artificial neural network's and Gradient Descents",
          "Artificial neural network's and Deep Learning",
          "Convolutional Neural Network's and Decition Trees",
          "Clustering methods"
        ),
        "Link" => "https://www.bth.se/eng/courses/C5650/20181/"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "Mathematical Statistics",
        "From" => "?",
        "To" => "?",
        "Heading" => "Next up - Mathematical Statistics",
        "Context" => "",
        "Image" => "math.jpg",
        "Introduction" => "",
        "List" => array(
          "Probability",
          "Statistics",
          "Stochastic Processes"
        ),
        "Link" => "https://liu.se/en/organisation/liu/mai/ms"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "Data Mining",
        "From" => "?",
        "To" => "?",
        "Heading" => "Next up - Data Mining",
        "Context" => "",
        "Image" => "DM.jpg",
        "Introduction" => "",
        "List" => array(
          "Preprocessing",
          "Patterns",
          "Modeling",
          "Evaluation"
        ),
        "Link" => "https://en.wikipedia.org/wiki/Data_mining"
      )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>