<?php /** Template Name: Learn Template */ ?>

<?php

get_header(); ?>

<div id="top-target-blackscreen">

<div id="top-target">
<h1 id="top-target-txt"></h1>
<button id="top-target-btn">Practice</button>

</div>

</div>

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

<h1 class="gradient-title" style="margin-bottom: 25px;">Dashboard</h1>

<div id="container">
</div>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/2adec87542.js"></script>
<script src="/js/main.js"></script>
<script src="/js/articleworker.js"></script>
<script src="/js/lowermenu.js"></script>
<script src="/js/dimensions.js"></script>
<script src="/js/soundmenu.js"></script>
<script src="/js/report.js"></script>
<script src="/js/testconfig.js"></script>
<script src="/js/Cookies.src.js"></script>
<script src="/js/getcookies.js"></script>
<script src="/js/jquery.powertip.js"></script>
<script src="/js/results.js"></script>
<script src="/js/login-popup.js"></script>

<?php

// Getting basic test data

$userid = get_current_user_id();

$con = mysqli_connect('mysql.accentlab.voicehacker.co.uk','admin_mattpocock','singapore17','accentlabvoicehacker');;

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
		
}



?>

<?php

$pagesvisited = mysqli_query($con, "SELECT * FROM `pagetracker` WHERE `userid`='$userid';");
$allcols = mysqli_query($con, "SHOW COLUMNS FROM `pagetracker` FROM `accentlabvoicehacker`;");
$row = $pagesvisited->fetch_row();

$colarr = array();

while($col = mysqli_fetch_assoc($allcols)) {
	array_push($colarr, $col["Field"]);
}

?>

<script type="text/javascript">

var pagesvisited = <?php echo json_encode($row); ?>;

var colsvisited = <?php echo json_encode($colarr); ?>;


</script>

<script type="text/javascript">

var linedescarr = <?php echo json_encode($linedescarr); ?>;
var titlearr = <?php echo json_encode($titlearr); ?>;
var symarr = <?php echo json_encode($symarr); ?>;
var linkarr = <?php echo json_encode($linkarr); ?>;
var accentcodearr = <?php echo json_encode($accentcodearr); ?>;
var userbehavarr = <?php echo json_encode($userbehavarr); ?>;
var orderarr = <?php echo json_encode($orderarr); ?>;
buildPopUp();
buildResults('#container', true);

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
$('#login-topscreen').css('display', 'inherit');

}

</script>


</div><!-- .content-area -->

<?php get_footer(); ?>
