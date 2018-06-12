<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "ShortDescription" => "Azure 70-532 Certificate",
        "From" => "Ongoing",
        "To" => "",
        "Heading" => "Ongoing - Azure 70-532 Certificate",
        "Context" => "70-532: Developing Microsoft Azure Solutions. Candidates of this exam are experienced in designing, programming, implementing, automating, and monitoring Microsoft Azure solutions. Candidates should be proficient with development tools, techniques, and approaches used to build scalable and resilient solutions.",
        "Image" => "azure.jpg",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Microsoft_Azure",
    ),
    array(
        "Id" => "2",
        "ShortDescription" => "C# Master Class",
        "From" => "2017-06-26",
        "To" => ", 3 days",
        "Heading" => "Masterclass C# Development",
        "Context" => "The C# Masterclass moves beyond the syntax and semantics. It's focus is on applying C#, along with selected parts of the .Net Framework, to build elegant, extensible, multi-paradigm solutions to everyday problems.",
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
            "Encoding and Unicode",
        ),
        "Link" => "https://informator.se/utbildningar/systemutveckling/net-visual-studio/net_generellt/c-master-class",
    ),
    array(
        "Id" => "3",
        "ShortDescription" => "IBM BPM",
        "From" => "2016-09-12",
        "To" => ", 5 days",
        "Heading" => "Developing Applications in IBM Business Process Manager Advanced V8.5.5 - I",
        "Context" => "Business process management is a discipline in operations management that uses various methods to discover, model, analyze, measure, improve, optimize, and automate business processes.",
        "Image" => "arrow_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://edu.arrow.com/uk/c/index.html/129/websphere-course-list",
    ),
    array(
        "Id" => "4",
        "ShortDescription" => "IBM BPM",
        "From" => "2016-08-22",
        "To" => ", 5 days",
        "Heading" => "Process Implementing with IBM Business Process Manager Standard-Adv - V8.5.6, I - II",
        "Context" => "Business process management is a discipline in operations management that uses various methods to discover, model, analyze, measure, improve, optimize, and automate business processes.",
        "Image" => "arrow_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://edu.arrow.com/uk/c/index.html/129/websphere-course-list",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
