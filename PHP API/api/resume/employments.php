<?php
header("Content-Type: application/json;charset=utf-8");
header('Access-Control-Allow-Origin: *');

$arr = array(
    array(
        "Id" => "1",
        "From" => "2016 - ",
        "To" => "Today",
        "Employer" => "Sogeti Sverige AB",
        "EmployerLogo" => "assets/images/sogeti_logo.png",
        "Link" => "https://www.sogeti.se/",
        "Description" => "Currently working as a software engineer at Sogeti. Some of my responsibilities are doing project estimations, system testing, system maintenance and developing new systems or features."
    ),
    array(
        "Id" => "1",
        "From" => "2014 & ",
        "To" => "2015",
        "Employer" => "Menigo AB",
        "EmployerLogo" => "assets/images/menigo_logo.jpg",
        "Link" => "https://www.menigo.se/",
        "Description" => "Summer job during my university education as a truck driver in the storage unit."
    ),
    array(
        "Id" => "1",
        "From" => "2012 - ",
        "To" => "2013",
        "Employer" => "MittMedia Print",
        "EmployerLogo" => "assets/images/mittmedia_logo.png",
        "Link" => "http://mittmediaprint.se/",
        "Description" => "Operator in the news paper facility, adjusting and servicing machines in a production line. In short - producing news papers."
    ),
    array(
        "Id" => "1",
        "From" => "2011",
        "To" => "",
        "Employer" => "IKEA",
        "EmployerLogo" => "assets/images/ikea_logo.png",
        "Link" => "https://www.ikea.com/",
        "Description" => "Working with sales at the kids- and wardrobe derpartment. Also worked at times in the self 
        service register machines. Used sales technique from erlier employments."
    ),
    array(
        "Id" => "1",
        "From" => "2006 - ",
        "To" => "2010",
        "Employer" => "Circle K",
        "EmployerLogo" => "assets/images/circlek_logo.jpg",
        "Link" => "https://www.circlek.se/",
        "Description" => "Retail sales, serving customers, car rental, inventory management, cleaning and food processing.
        Basically everything that involves working at a gas station."
    ),
);

echo json_encode($arr, JSON_PRETTY_PRINT);
