<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "1",
        "ShortDescription" => "C# Master Class",
        "From" => "2017-06-26",
        "To" => "3 days",
        "Heading" => "Masterclass C# Development",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "informator_logo.png",
        "Introduction" => "Intro",
        "List" => array(
            "Lambda and Delegates",
            "OO and dynamic",
            "Classes: outside-in",
            "Design patterns",
            "Dependency Inversion",
            "Generic Programming",
            "Higher Order Programming",
            "Reflection and attributes",
            "Event driven architecture",
            "Encoding and Unicode"
        ),
        "Link" => "https://informator.se/utbildningar/systemutveckling/net-visual-studio/net_generellt/c-master-class"
      ),
      array(
        "Id" => "2",
        "ShortDescription" => "IBM BPM",
        "From" => "2016-09-12",
        "To" => "5 days",
        "Heading" => "Developing Applications in IBM Business Process Manager Advanced V8.5.5 - I",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "arrow_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://edu.arrow.com/uk/c/index.html/129/websphere-course-list"
      ),
      array(
        "Id" => "3",
        "ShortDescription" => "IBM BPM",
        "From" => "2016-08-22",
        "To" => "5 days",
        "Heading" => "Process Implementing with IBM Business Process Manager Standard-Adv - V8.5.6, I - II",
        "Context" => "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam delectus non nesciunt quis quam, tempore consequuntur explicabo rem repellendus, vel alias excepturi incidunt assumenda provident laborum suscipit vitae ad libero?",
        "Image" => "arrow_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://edu.arrow.com/uk/c/index.html/129/websphere-course-list"
      )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>