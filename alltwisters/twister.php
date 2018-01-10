<?php
$file = $_POST['file'];
fopen($file, "a") or die("Unable to open file!");
$input = $_POST['input'];

$twisterString = file_get_contents($file);

$twisterArr = array();

for ($x = 0; $x < strlen($twisterString); $x++) {
	
	$temp = "";
    
	if (substr($twisterString, $x, 0 - (strlen($twisterString) + $x)) == "/" && substr($twisterString, ($x + 2), 0 - (strlen($twisterString) + ($x + 2))) == "/") {
		
		array_push($twisterArr, $temp);
		$temp = "";
		
	} else {
		
		$temp += substr($twisterString, $x, 0 - strlen($twisterString) + $x);

	}
}

$hereAlready = false;

for ($x = 0; $x < sizeof($twisterArr); $x++) {
	
	if ($twisterArr[$x] == $input) {
		$hereAlready = true;
	}
}

echo $twisterArr;

if (!hereAlready) {
	file_put_contents($file, $input . "///", FILE_APPEND);
}
fclose($myfile);
?>