<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "ShortDescription" => "Microsoft Windows",
        "Heading" => "Windows Operating System (OS)",
        "Context" => "I have been using Windows OS all my life, from v3.11 to v10 and I have a pretty good understanding of it.",
        "Image" => "windows_logo.png",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://en.wikipedia.org/wiki/Microsoft_Windows",
    ),
    array(
        "Id" => "2",
        "ShortDescription" => "Linux / Unix",
        "Heading" => "Linux / Unix",
        "Context" => "I have some advanced knowledge of Linux distributions. Mostly university courses regarding Linux - in depth.",
        "Image" => "linux_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
            "Administrating UNIX systems",
            "Raspberry pies",
            "sudo make me a sandwich -R",
        ),
        "Link" => "https://en.wikipedia.org/wiki/Linux",
    ),
    array(
        "Id" => "3",
        "ShortDescription" => "IIS",
        "Heading" => "Internet Information Service (IIS)",
        "Context" => "Hence the common day to day work in the Microsoft stack, ofcourse I have encounterd the IIS. Guess you could say I know the basics here as well.",
        "Image" => "iis_logo.png",
        "Introduction" => "Intro",
        "List" => array(
            "Hosting",
            "Web-apps",
            "Services",
            "Other",
        ),
        "Link" => "https://en.wikipedia.org/wiki/Internet_Information_Services",
    ),
    array(
        "Id" => "4",
        "ShortDescription" => "EpiServer 6",
        "Heading" => "EpiSerer 6 - Content Managment System (CMS)",
        "Context" => "Been working in a project where EpiServer 6 was used. Defining pages and displaying properties pretty much, however there is alot more to this CMS tool.",
        "Image" => "epi_logo.png",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://www.episerver.se/",
    ),
    array(
        "Id" => "5",
        "ShortDescription" => "VS 2010-2017",
        "Heading" => "Visual Studio - Integrated Development Enviroment (IDE)",
        "Context" => "Almost all of why work have gone through this IDE. Unless there are some lightweigh applications/scripts or Java for instance.",
        "Image" => "vs_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
        ),
        "Link" => "https://www.visualstudio.com/",
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
