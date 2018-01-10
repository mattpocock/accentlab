<?php

$userid = $_POST['userid'];
$slug = $_POST['slug'];
$con = mysqli_connect('mysql.accentlab.voicehacker.co.uk','admin_mattpocock','singapore17','accentlabvoicehacker');

    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
	
$tablecheck = mysqli_query($con, "SHOW TABLES LIKE 'pagetracker'");
$tableExists = false;
if ($tablecheck->num_rows > 0) {
	$tableExists = true;
}

if (!$tableExists) {
	$sql = "CREATE TABLE `pagetracker` (`userid` TEXT)";
	mysqli_query($con, $sql);
}
	
$entrycheck = mysqli_query($con, "SELECT * FROM `pagetracker` WHERE `userid`='$userid'");
if (!$entrycheck->num_rows > 0) {
	$sql = "INSERT INTO `pagetracker` (`userid`) select '$userid'";
	mysqli_query($con, $sql);
}

$columnCheck = mysqli_query($con, "SHOW COLUMNS FROM `pagetracker` LIKE `$slug`");
if(!$columnCheck->num_rows > 0) {
   $sql = "ALTER TABLE `pagetracker` ADD `$slug` DATE";
   mysqli_query($con, $sql);
}

$date = date('Y-m-d');

$finalCheck = mysqli_query($con, "SELECT `$slug` FROM `pagetracker` WHERE `userid`='$userid'");
if ($finalCheck->num_rows > 0) {
	$sql = "UPDATE `pagetracker` SET `$slug`='$date' WHERE `userid`='$userid';";
	mysqli_query($con, $sql);
} else {
	$sql = "INSERT INTO `pagetracker` (`$slug`) select '$date'";
	mysqli_query($con, $sql);
}

echo 'ok';



?>