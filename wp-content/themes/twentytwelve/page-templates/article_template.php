<?php /** Template Name: Article Template 
Template Post Type: post, page */

get_header();

$userid = get_current_user_id();
?>

<div id="login-topscreen">
<div class="login-popup">
<h1 class="login-title">Log In</h1>
<p class="login-desc"></p>
<button class="pop-up-btn login" id="log-in-btn">Log In</button>
<button class="pop-up-btn signup" id="sign-up-btn">Sign Up</button>
</div>
</div>


<div class="ontop">
	
	<div id="moreinfoscreen" class="moreinfo floater">
	
		<div id="mi-screen1" class="mi-screen">
	
			<div class="mi-word">
			<h3 id="mi-word-txt"></h3>
			</div>
			<div class="mi-phons">
			<h3 id="mi-phons-txt"></h3>
			</div>
			
			<button class="smallbtn" onclick="phonHighlighted--;highlightNewPhon();" id="phons-left-btn"><i class="fa fa-arrow-left" aria-hidden="true"></i></button>
			<button class="smallbtn" onclick="phonHighlighted++;highlightNewPhon();" id="phons-right-btn"><i class="fa fa-arrow-right" aria-hidden="true"></i></button>
			
			<div class="mi-screen-btns">
			<button class="barbtn" onclick="scanFor(phonInFocus);" id="mi-search-btn"><i class="fa fa-search" aria-hidden="true"></i></button>
			<button class="barbtn" onclick="resetScans();"><i class="fa fa-undo" aria-hidden="true"></i></button>
			<button class="barbtn north" title="Toggle sound on and off" id="mi-sound-btn" onclick="toggleSound();"><i class="fa fa-volume-up" aria-hidden="true"></i></button>
			</div>
			
		
		</div>
		
		<!--<div id="mi-screen2" class="mi-screen">
	
			<div class="float-center">
			<iframe id="mi-youtube-screen" width="290" height="165" frameborder="0" allowfullscreen></iframe>
			</div>
		
		</div> -->
		
		<button class="smallbtn" onclick="closeMIScreen();" id="closemi-screen"><i class="fa fa-times" aria-hidden="true"></i></button>
	
	</div>
	
</div>

			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>
			
<div id="output-div" class="full-width">
<h1 class="gradient-title" id="context-subtitle">Practice Text</h1>
	<a name="practice"></a><p id="output-txt"><div class="loader"></div></p>
</div>
<div id="btn-div" style="text-align: center; margin-bottom: 110px;" class="full-width">
	<button class="readmorebtn" id="readmorebtn" style="text-align: center;display:none;" onclick="onPush(readMoreText, true);">Read More</button>
	<button class="readmorebtn" id="lowernewarticlebtn" style="text-align: center; display: none;" onclick="newArticle();">New Article</button>
</div>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="/js/login-popup.js"></script>
	<script src="/js/main.js"></script>
	<script src="/js/articleworker.js"></script>
	<script src="/js/lowermenu.js"></script>
	<script src="/js/dimensions.js"></script>
	<script src="/js/soundmenu.js"></script>
	<script src="/js/report.js"></script>
	<script src="/js/pagetracker.js"></script>
	<script type="text/javascript">
	
	var userId = <?php echo json_encode($userid); ?>;
	
	var numb = $(".entry-content .sound-line").length;
	
	function soundPracticeBtn (func) {
		eval(func);
	}
	
	var funclist = "";
	
	for (var i = 0; i < numb; i++) {
		
		
		var line = $('.entry-content').find(".sound-line").eq(i);
		
		console.log(line);
		
		var desc = line.attr('desc');
		var title = line.attr('title');
		var func = line.attr('func');
		var link = line.attr('link');
		var sym = line.attr('sym');
		var accentcode = line.attr('accentcode');
		var dashboard = "true";
		if (line.attr('dashboard') != null) {
			dashboard = line.attr('dashboard');
		}
		
		if (i == 0) {
			
			funclist += func;
			
			line.css('background-color', colors[i]);
			
		} else {
			
			$('<button>', {class: 'sound-button practicebtn'})
			.click(function() {
				$('html, body').animate({
					scrollTop: $("#context-subtitle").offset().top
				}, 1000);
				$(this).parent().css('background-color', colors[colorcount]);
				eval(func);
				
				
			})
			.html("Highlight").appendTo(line);
			
		}
		
		
		
		if (dashboard == "true") {
		
			$('<button>', {class: 'sound-button practicebtn', onclick: 'window.location.href = "/'+accentcode+'-'+link+'";'}).html("Learn").appendTo(line);
			$('<button>', {class: 'sound-button practicebtn', onclick: '$(this).animate({opacity: 0}, 500, function() {$(this).hide();});saveToDash("'+desc+'","'+title+'","'+link+'","'+sym+'","'+accentcode+'");'}).html("Save To Dashboard").appendTo(line);
			
		}
		
		if (sym != "") {$('<p>', {class: 'sound-sym', id: 'sound-sym'}).html(sym).appendTo(line);};
		$('<h2>', {class: 'sound-title-txt', id: 'sound-title-txt'+i}).html(title).appendTo(line);
		$('<h3>', {class: 'sound-desc-txt', id: 'sound-desc-txt'+i}).html(desc).appendTo(line);
		
	}
	
	currentFuncList += funclist;
	
	// Removing the Title
	
	$('.entry-title').addClass('gradient-title').removeClass('entry-title');
	
	</script>
	
		
	<?php

$loggedin = false;

if (is_user_logged_in() ) {
	$loggedin = true;
  } else {
    
  }
?>




<script type='text/javascript'>

buildPopUp();
if (!<?php echo json_encode($loggedin); ?>) {
$('#login-topscreen').css('display', 'inherit');

}

</script>

<?php get_footer(); ?>