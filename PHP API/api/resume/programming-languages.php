<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "Language" => "C#",
        "Stars" => "3/5",
        "Description" => "This is the primary language I currently use in my day to day work. Guess I know a thing or two here 😊",
    ),
    array(
        "Id" => "2",
        "Language" => "C++",
        "Stars" => "2/5",
        "Description" => "Most of the work from my University degree was made in this language. Assignments, O(n) notation algorithms, data structures, and more.",
    ),
    array(
        "Id" => "3",
        "Language" => "Java",
        "Stars" => "1/5",
        "Description" => "Made some basic console applications early on and a tiny webb-app in my University studies.",
    ),
    array(
        "Id" => "4",
        "Language" => "AngularJS",
        "Stars" => "2/5",
        "Description" => "I made a <i style='font-style: italic; text-decoration: underline;'>\"Magic mirror\"</i> at home with this - google it.",
    ),
    array(
        "Id" => "5",
        "Language" => "Angular 2+",
        "Stars" => "2/5",
        "Description" => "This page is built with Angular 5, but I have not build anything in production - yet.",
    ),
    array(
        "Id" => "6",
        "Language" => "HTML",
        "Stars" => "3/5",
        "Description" => "Well, I'd say I know the basics here. Pretty much just elements with attributes.",
    ),
    array(
        "Id" => "7",
        "Language" => "CSS",
        "Stars" => "3/5",
        "Description" => "I'm alright, I guess. Try this page out on different browser or devices for instance.",
    ),
    array(
        "Id" => "8",
        "Language" => "JavaScript",
        "Stars" => "3/5",
        "Description" => "<span style='background-color: black; opacity: 0.8; padding: 10px;'><span style='color: #169eb6;'>var</span> <span style='color: lightblue;'>omg</span> <span style='color: white;'>=<span> <span style='color: #db6923'>\"everything is a string language\"</span><span style='color: white; padding-right: 10px;'>;</span> <span style='color: green;'></span></span> ",
    ),
    array(
        "Id" => "9",
        "Language" => "TypeScript",
        "Stars" => "1/5",
        "Description" => " I do know a little here aswell.",
    ),
    array(
        "Id" => "10",
        "Language" => "PHP",
        "Stars" => "2/5",
        "Description" => "Used when I have an apache server, e.g one.com hosting. Don't know alot though, but propably enough.",
    ),
    array(
        "Id" => "11",
        "Language" => "PowerShell",
        "Stars" => "1/5",
        "Description" => "Done some small scripts with this.",
    ),
    array(
        "Id" => "12",
        "Language" => "MS T-SQL",
        "Stars" => "3/5",
        "Description" => "This is the other part of my day to day work. Stored prosedures mostly combined with Entity Framework.",
    ),
    array(
        "Id" => "13",
        "Language" => "ASP.NET MVC",
        "Stars" => "1/5",
        "Description" => "Guess I can make some magic happen here, have not used in production yet though.",
    ),
    array(
        "Id" => "14",
        "Language" => "ASP.NET Web forms",
        "Stars" => "3/5",
        "Description" => "I do know a some stuffs here aswell. But I don't really like this kind of post-back shenanigans.",
    ),
    array(
        "Id" => "15",
        "Language" => "WPF (C# Desktop)",
        "Stars" => "2/5",
        "Description" => "Been working in a pretty big desktop application for a relatively large scale customer. <br/><br/>The project setup is domain models, services/databases, reports and the client application. Structure of the application is MVVM.",
    ),
    array(
        "Id" => "16",
        "Language" => "Python",
        "Stars" => "1/5",
        "Description" => "Written a few lines for Machine Lerning.",
    ),
    array(
        "Id" => "17",
        "Language" => "Arduino (C/C++)",
        "Stars" => "1/5",
        "Description" => "I got a small dev-kid at home that I'm fiddeling with when I got some spare time.",
    ),
    array(
        "Id" => "18",
        "Language" => "Go-lang",
        "Stars" => "1/5",
        "Description" => "Tried this out for a bit in Advent of Code: <a href='http://www.adventofcode.com' target='_blank'>adventofcode.com</a>.",
    ),
    array(
        "Id" => "19",
        "Language" => "SASS / SCSS",
        "Stars" => "2/5",
        "Description" => "Currently taking some online courses regarding sass / scss hence it's getting quite important to use graceful degradations for cross browser support.",
    ),
    array(
        "Id" => "1337",
        "Language" => "Ping pong 🏓",
        "Stars" => "5/5",
        "Description" => "I'm better then you, challange accepted? 🙊",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
