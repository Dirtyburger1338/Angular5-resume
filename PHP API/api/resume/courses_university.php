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
        "Context" => "- Ongoing @ Blekinge Tekniska Högskola",
        "Image" => "ML.jpg",
        "Introduction" => "",
        "List" => array(
            "K-nearest neighbor",
            "K-means",
            "Correlation coefficient",
            "Artificial neural network's and Gradient Descents",
            "Artificial neural network's and Deep Learning",
            "Convolutional Neural Network's and Decition Trees",
            "Clustering methods",
            "Practical applications in data mining"
        ),
        "Link" => "https://www.bth.se/eng/courses/C5650/20181/",
    ),
    array(
        "Id" => "2",
        "ShortDescription" => "Artificial Intelligence",
        "From" => "?",
        "To" => "?",
        "Heading" => "Artificial Intelligence (AI)",
        "Context" => "Ongoing - self lerning at the moment (Python). Have signed up for a university cours aswell @ Uppsala university.",
        "Image" => "AI.jpg",
        "Introduction" => "Got an intrest in AI",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Artificial_intelligence",
    ),
    array(
        "Id" => "3",
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
            "Stochastic Processes",
        ),
        "Link" => "https://liu.se/en/organisation/liu/mai/ms",
    ),
    array(
        "Id" => "4",
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
            "Evaluation",
        ),
        "Link" => "https://en.wikipedia.org/wiki/Data_mining",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
