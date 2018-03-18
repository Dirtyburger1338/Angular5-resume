<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "ShortDescription" => "University",
        "From" => "2013 - ",
        "To" => "2016",
        "Heading" => "Degree of Bachelor of Science with a major in Computer Enineering",
        "Context" => "This is currently my main degree. Been thinking about getting a masters degree later on.",
        "Image" => "miun_logo.png",
        "Introduction" => "Intro",
        "List" => array(
            "Programming",
            "Mathematics",
            "Theory",
            "Algorithms and datastructurs",
            "Networks",
            "Security",
            "Other",
        ),
        "Link" => "https://www.miun.se/utbildning/program/data-och-it/datateknik/utbildningsplan/?utbildningsplanid=1069",
    ),
    array(
        "Id" => "2",
        "ShortDescription" => "High School",
        "From" => "2003 - ",
        "To" => "2006",
        "Heading" => "Natural Science - alignment to Mathematics and Computers",
        "Context" => "University-preparatory high school program (gymnasium), primarily designed to prepare students for higher education.",
        "Image" => "sg.png",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://gymnasium.sundsvall.se/program/naturvetenskapsprogrammet/",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
