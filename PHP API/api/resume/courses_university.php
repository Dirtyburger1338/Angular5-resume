<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "ShortDescription" => "Machine Learning",
        "From" => "2018",
        "To" => ", 3HP",
        "Heading" => "Machine Learning (ML)",
        "Context" => "Implementing ML algorithms and techniques, at Blekinge Tekniska Högskola",
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
        "Heading" => "Signed up - Artificial Intelligence (AI), at Uppsala university",
        "Context" => "Ongoing - self lerning at the moment (Python).",
        "Image" => "AI.jpg",
        "Introduction" => "Got an intrest in AI",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Artificial_intelligence",
    ),
    array(
        "Id" => "3",
        "ShortDescription" => "Block chain technology",
        "From" => "?",
        "To" => "?",
        "Heading" => "Signed up - Block chain",
        "Context" => "A blockchain, originally block chain, is a continuously growing list of records, called blocks, which are linked and secured using cryptography. Each block typically contains a cryptographic hash of the previous block, a timestamp and transaction data. Decentralized system.",
        "Image" => "blockchain.jpg",
        "Introduction" => "Got an intrest in AI",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Artificial_intelligence",
    ),
    array(
        "Id" => "4",
        "ShortDescription" => "Mathematical Statistics",
        "From" => "?",
        "To" => "?",
        "Heading" => "Signed up - Mathematical Statistics",
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
        "Id" => "5",
        "ShortDescription" => "Data Mining",
        "From" => "?",
        "To" => "?",
        "Heading" => "Signed up - Data Mining",
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
