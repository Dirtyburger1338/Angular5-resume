<?php
header("Content-Type: application/json;charset=ISO-8859-1");
header('Access-Control-Allow-Origin: *');

$arr = array(
      array(
        "Id" => "",
        "Language" => "C#",
        "Stars" => "3/5"
      ),
      array(
        "Id" => "",
        "Language" => "C++",
        "Stars" => "2/5"
      ),
      array(
        "Id" => "",
        "Language" => "Java",
        "Stars" => "1/5"
      ),
      array(
        "Id" => "",
        "Language" => "Angular 1.x",
        "Stars" => "1/5"
      ),
      array(
        "Id" => "",
        "Language" => "Angular 2+",
        "Stars" => "1/5"
      ),
      array(
        "Id" => "",
        "Language" => "HTML",
        "Stars" => "3/5"
      ),
      array(
        "Id" => "",
        "Language" => "CSS",
        "Stars" => "2/5"
      ),
      array(
        "Id" => "",
        "Language" => "Javascript",
        "Stars" => "2/5"
      ),
      array(
        "Id" => "",
        "Language" => "Typescript",
        "Stars" => "1/5"
      ),
      array(
        "Id" => "",
        "Language" => "PHP",
        "Stars" => "1/5"
      ),
      array(
        "Id" => "",
        "Language" => "PowerShell",
        "Stars" => "1/5"
      ),
      array(
        "Id" => "",
        "Language" => "T-SQL",
        "Stars" => "2/5"
      ),
      array(
        "Id" => "",
        "Language" => "Pingis racket",
        "Stars" => "5/5"
      )
);

echo json_encode($arr, JSON_PRETTY_PRINT);
?>
