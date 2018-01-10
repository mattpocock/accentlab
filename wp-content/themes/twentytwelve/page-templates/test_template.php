<?php /** Template Name: Test Template */ ?>

<?php

get_header(); ?>

<div id="login-topscreen">
<div class="login-popup">
<h1 class="login-title">Log In</h1>
<p class="login-desc"></p>
<button class="pop-up-btn login" id="log-in-btn">Log In</button>
<button class="pop-up-btn signup" id="sign-up-btn">Sign Up</button>
</div>
</div>

<div id="primary" class="content-area">
<h1 class="gradient-title">Pronunciation Test</h1>

<div id="container">

<div class="test-content-container">

<div class="question">

<h2 id="question-txt">How Good Is Your Pronunciation?</h2>

<p id="question-desc">Clear speech is crucial. Let's see how your voice stacks up.</p>

</div>
</div>
<div class="test-content-container" id="option-container">

</div>


<div id="progress-bar-outer">
<div id="progress-bar-inner">
</div>
</div>

<div class="bottom-bar">

<!--<div style="display:inline-block;"><h2 id="percentage-txt">52% Complete!</h2></div>-->
<div style="display:inline-block;"><button id="complete-btn" class="choose-btn" onclick="beginTest();">Begin</button></div>

</div>

</div>

<?php

$con = mysqli_connect('mysql.accentlab.voicehacker.co.uk','admin_mattpocock','singapore17','accentlabvoicehacker');;

    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
	
$allWords = mysqli_query($con, "SELECT * FROM `basictest`");
 
$wordArr = array();
$titleArr = array();
$optionsArr = array();
$soundsArr = array();
$idArr = array();
$descArr = array();
$orderArr = array();

while($row = mysqli_fetch_assoc($allWords)) {

		array_push($wordArr, $row["COL 1"]);
		array_push($idArr, $row["COL 2"]);
		array_push($soundsArr, $row["COL 3"]);
		array_push($titleArr, $row["COL 4"]);
		
		$i = 6;
		
		$tempArr = array();
		$tempDescArr = array();
		$tempOrderArr = array();
		
		array_push($tempArr, "na");
		array_push($tempDescArr, "");
		array_push($tempOrderArr, "");
		
		$o = $i+1;
		$p = $i+2;
		
		while (!empty($row["COL " . $i])) {
			array_push($tempArr, $row["COL " . $i]);
			array_push($tempDescArr, $row["COL " . $o]);
			array_push($tempOrderArr, $row["COL " . $p]);
			$i+=3;
			$o = $i+1;
			$p = $i+2;
		}
		
		array_push($optionsArr, $tempArr);
		array_push($descArr, $tempDescArr);
		array_push($orderArr, $tempOrderArr);
		
}

// Getting User Data

 $userid = get_current_user_id();
 
 $con = mysqli_connect('mysql.accentlab.voicehacker.co.uk','admin_mattpocock','singapore17','accentlabvoicehacker');;

    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }

 


?>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/2adec87542.js"></script>
<script src="/js/test.js"></script>
<script src="/js/testconfig.js"></script>
<script src="/js/Cookies.src.js"></script>
<script src="/js/login-popup.js"></script>
<script type="text/javascript">

var wordsArr = <?php echo json_encode($wordArr); ?>;
var titlesArr = <?php echo json_encode($titleArr); ?>;
var optionsArr = <?php echo json_encode($optionsArr); ?>;
var soundsArr = <?php echo json_encode($soundsArr); ?>;
var idArr = <?php echo json_encode($idArr); ?>;
var descArr = <?php echo json_encode($descArr); ?>;
var orderArr = <?php echo json_encode($orderArr); ?>;
var userId = <?php echo json_encode($userid); ?>;

console.log(descArr);
console.log(orderArr);

buildPopUp();

</script>

<!-- Log In Handler -->

<?php

$loggedin = false;

if (is_user_logged_in() ) {
	$loggedin = true;
  } else {
    
  }
?>

<script type='text/javascript'>
if (!<?php echo json_encode($loggedin); ?>) {
$('#login-topscreen').css('display', 'inherit');

}

</script>

</div>

<?php get_footer(); ?>
