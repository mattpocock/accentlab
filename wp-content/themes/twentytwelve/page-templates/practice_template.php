<?php /** Template Name: Practice Template */ ?>

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

<div id="blackscreen">

</div>

<div id="tutorial-blackscreen">

</div>

<div id="tutorial">
<h1 id="tutorial-txt">Try pressing the <i class="fa fa-list" aria-hidden="true"></i> button to see your accent dashboard.</h1>
<button class="tutorial-btn" id="tutorial-next-btn" onclick="tutorialGoButton();">Go</button>
</div>

<button id="return-to-tutorial" onclick="tutorialReturnButton();">Show Tutorial</button>
<h1 id="tutorial-action-txt"></h1>

<div id="learnsection">

<button class="top-right-x" onclick="closeLearnSection();"><i class="fa fa-times" aria-hidden="true"></i></button>


<?php


$userid = get_current_user_id();


// Getting basic test data


/*$con = mysqli_connect('localhost','root','','accentlab');;

    if (mysqli_connect_errno())
    {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
    }
	
$allWords = mysqli_query($con, "SELECT * FROM `userdata $userid`");
 
$linedescarr = array();
$titlearr = array();
$symarr = array();
$linkarr = array();
$accentcodearr = array();
$userbehavarr = array();
$orderarr = array();

while($row = mysqli_fetch_assoc($allWords)) {

		array_push($linedescarr, $row["linedesc"]);
		array_push($titlearr, $row["title"]);
		array_push($symarr, $row["sym"]);
		array_push($linkarr, $row["link"]);
		array_push($accentcodearr, $row["accentcode"]);
		array_push($userbehavarr, $row["userbehav"]);

		array_push($orderarr, $row["order"]);
		
} */


?>

<?php /*

$pagesvisited = mysqli_query($con, "SELECT * FROM `pagetracker` WHERE `userid`='$userid';");
$allcols = mysqli_query($con, "SHOW COLUMNS FROM `pagetracker` FROM `accentlab`;");
$pagesrow = $pagesvisited->fetch_row();

$colarr = array();

while($col = mysqli_fetch_assoc($allcols)) {
	array_push($colarr, $col["Field"]);
} */

?>

<!--<script type="text/javascript">

var pagesvisited = <?php //echo json_encode($pagesrow); ?>;
var colsvisited = <?php //echo json_encode($colarr); ?>;

</script> -->$_SESSION



</div>


<div class="row">

	<div class="" style="position: relative;">

		<h1 class="gradient-title" id="context-subtitle">Practice Tool</h1>
		<button class="tutorial-btn" id="tutorial-bottom-right-btn" onclick="nextTutorial();">Tutorial</button>

	</div>
</div>

<div class="row practice-container">
	<div class="col-xs-12 col-md-7 practice-article">
		<h1>Practice Article</h1>
		<div id="input-div" class="full-width">
			<textarea id="input-txt" style="width:960px;height:240px; display:none;"
			placeholder="Copy and paste some text into this box, then press 'Convert' to practice with it."></textarea>
		</div>

		<div id="btn-div" style="text-align: center;" class="full-width">
			<button class="sound-btn" id="convertBtn" style="text-align: center; display:none;" onclick="convertBtn();">Convert</button>
			<button class="sound-btn" id="clearBtn" style="text-align: center; display:none;" onclick="clearBox();">Clear Box</button>
		</div>
		<div id="output-div" class="full-width">
			<p id="output-txt"><div class="loader"></div></p>
		</div>
		<div id="btn-div" style="text-align: center; margin-bottom: 110px;" class="full-width">
			<button class="readmorebtn" id="read-more-btn" style="text-align: center;display:none;">Read More</button>
			<button class="readmorebtn" id="lower-new-article-btn" style="text-align: center; display: none;">New Article</button>
		</div>
	</div>
	<div class="col-xs-12 col-md-5 practice-dashboard">
		<h1>Dashboard</h1>
	</div>
</div>

<script src="<?php echo get_template_directory_uri(); ?>/build/main.bundle.js"></script>
<script type="text/javascript">

/*var linedescarr = <?php echo json_encode($linedescarr); ?>;
var titlearr = <?php echo json_encode($titlearr); ?>;
var symarr = <?php echo json_encode($symarr); ?>;
var linkarr = <?php echo json_encode($linkarr); ?>;
var accentcodearr = <?php echo json_encode($accentcodearr); ?>;
var userbehavarr = <?php echo json_encode($userbehavarr); ?>;
var orderarr = <?php echo json_encode($orderarr); ?>;
buildPopUp();
buildResults('#learnsection', false);

*/

</script>

<?php

$loggedin = false;

if (is_user_logged_in() ) {
	$loggedin = true;
  } else {
    
  }
?>

<script type='text/javascript'>

if (!<?php echo json_encode($loggedin); ?>) {
console.log("not logged in!");
$('#login-topscreen').css('display', 'inherit');

}

</script>


</div><!-- .content-area -->

<?php get_footer(); ?>
