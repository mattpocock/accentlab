<?php

$userid = $_POST['userid'];
$title = $_POST['title'];
$desc = $_POST['desc'];
$sym = $_POST['sym'];
$link = $_POST['linktxt'];
$func = $_POST['func'];
$accentcode = $_POST['accentcode'];
$userbehav = $_POST['userbehav'];

$con = mysqli_connect('localhost','root','','userdata');

    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
	
$result = mysql_query("SHOW TABLES LIKE '`table ".$userid."`'");
$tableExists = mysql_num_rows($result) > 0;

if (!$tableExists) {
	$sql = "CREATE TABLE `table ".$userid."` (
    `linedesc` TEXT,
	`title` TEXT,
	`sym` TEXT,
	`link` TEXT,
	`accentcode` TEXT,
	`userbehav` TEXT)";
	
	mysqli_query($con, $sql);
}
	
$entrycheck = mysqli_query($con, "SELECT * FROM `table $userid` WHERE `link`='$link'");
$entryExists = false;
if ($entrycheck->num_rows > 0) {
	$entryExists = true;
}

if (!$entryExists) {

	$sql = "INSERT INTO `table $userid` ( `linedesc`, `title`, `sym`, `link`, `accentcode`, `userbehav`) VALUES ( '".$desc."', '".$title."','".$sym."','".$link."','".$accentcode."','".$userbehav."')";

}
//$sql = "INSERT INTO `table ".$userid."` ( `linedesc`, `title`, `func`, `sym`, `link`, `accentcode` ) VALUES ( ".$desc.", ".$title.",".$func.",".$sym.",".$link.",".$accentcode.")";

//$sql = "INSERT INTO `table ".$userid."`(`title`, `linedesc`, `link`, `sym`, `func`, `accentcode`) VALUES ('woah', 'dude', 'loads', 'of','fun','had')";

mysqli_query($con, $sql);

echo 'ok';




?>