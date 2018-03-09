<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(      
      array(
        "Id" => "1",
        "ShortDescription" => "IIS",
        "Heading" => "Internet Information Service (IIS)",
        "Context" => "Hence the common day to day work in the Microsoft stack, ofcourse I have encounterd the IIS. Guess you could say I know the basics here as well.",
        "Image" => "iis_logo.png",
        "Introduction" => "Intro",
        "List" => array(
            "Hosting",
            "Web-apps",
            "Services",
            "Other"
        ),
        "Link" => "https://en.wikipedia.org/wiki/Internet_Information_Services"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "Linux / Unix",
        "Heading" => "Linux / Unix",
        "Context" => "I have some basic knowledge of Linux distributions.",
        "Image" => "linux_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(
            "Administrating UNIX systems",
            "Raspberry pies",
            "sudo make me a sandwich -R"
        ),
        "Link" => "https://en.wikipedia.org/wiki/Linux"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "EpiServer 6",
        "Heading" => "EpiSerer 6 - Content Managment System (CMS)",
        "Context" => "Been working in a project where EpiServer 6 was used. Defining pages and displaying properties pretty much, however there is alot more to this CMS tool.",
        "Image" => "epi_logo.png",
        "Introduction" => "Intro",
        "List" => array(           
        ),
        "Link" => "https://www.episerver.se/"
      ),
      array(
        "Id" => "1",
        "ShortDescription" => "VS 2010-2017",
        "Heading" => "Visual Studio - Integrated Development Enviroment (IDE)",
        "Context" => "Almost all of why work have gone through this IDE. Unless there are some lightweigh applications/scripts or Java for instance.",
        "Image" => "vs_logo.jpg",
        "Introduction" => "Intro",
        "List" => array(           
        ),
        "Link" => "https://www.visualstudio.com/"
      )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>