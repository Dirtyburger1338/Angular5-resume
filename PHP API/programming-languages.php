<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "1",
        "Language" => "C#",
        "Stars" => "3/5",
        "Description" => "This is the primary language I currently use in my day to day work. Guess I know a thing or two 😊"
      ),
      array(
        "Id" => "2",
        "Language" => "C++",
        "Stars" => "2/5",
        "Description" => "Most of the work from my University degree was made in this language. Assignments, O(n) notation algorithms, data structures, and more."
      ),
      array(
        "Id" => "3",
        "Language" => "Java",
        "Stars" => "1/5",
        "Description" => "Made some basic console application early on in my University degree."
      ),
      array(
        "Id" => "4",
        "Language" => "AngularJS 1.*",
        "Stars" => "1/5",
        "Description" => "I made a \"Magic mirror\" at home with this - google it."
      ),
      array(
        "Id" => "5",
        "Language" => "Angular 2+",
        "Stars" => "1/5",
        "Description" => "This page is built with Angular 5, but I have not build anything in production - yet.<br/><br/>
        However, I'm intrested in building an application with Angular 5 as a front-end framework and with C# as \"Code behind\". Then with whatever API inbetween. "
      ),
      array(
        "Id" => "6",
        "Language" => "HTML",
        "Stars" => "3/5",
        "Description" => "Well, I'd say I know the basics here. Pretty much just elements with attributes."
      ),
      array(
        "Id" => "7",
        "Language" => "CSS",
        "Stars" => "2/5",
        "Description" => "I'm alright, I guess. Try this page out on different browser or devices for instance."
      ),
      array(
        "Id" => "8",
        "Language" => "JavaScript",
        "Stars" => "2/5",
        "Description" => "var omg = \"everything is a string language\"; // *wink wink*"
      ),
      array(
        "Id" => "9",
        "Language" => "TypeScript",
        "Stars" => "1/5",
        "Description" => "Compile me to pretty JS please."
      ),
      array(
        "Id" => "10",
        "Language" => "PHP",
        "Stars" => "1/5",
        "Description" => "Serverside language. Used when I have an apache server e.g one.com hosting. Not alot though."
      ),
      array(
        "Id" => "11",
        "Language" => "PowerShell",
        "Stars" => "1/5",
        "Description" => "Done some small scripts with this."
      ),
      array(
        "Id" => "12",
        "Language" => "T-SQL",
        "Stars" => "2/5",
        "Description" => "This is the other part of my day to day work. Stored prosedures mostly."
      ),
      array(
        "Id" => "1337",
        "Language" => "Ping pong 🏓",
        "Stars" => "5/5",
        "Description" => "I'm better then you, challange accepted? 🙊"
      )    
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>
