<?php

$file = 'reports.txt';
$handle = fopen($file, "a") or die("Unable to open file!");
$input = $_POST['input'];

fwrite($handle, $input . "\r\n");

fclose($myfile);
?>