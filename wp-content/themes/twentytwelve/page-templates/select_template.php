<?php /** Template Name: Select Template */

get_header(); ?>

<div id="login-topscreen">
<div class="login-popup">
<h1 class="login-title">Log In</h1>
<p class="login-desc"></p>
<button class="pop-up-btn login" id="log-in-btn">Log In</button>
<button class="pop-up-btn signup" id="sign-up-btn">Sign Up</button>
</div>
</div>

			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="/js/login-popup.js"></script>
	<script src="/js/main.js"></script>
	<script src="/js/articleworker.js"></script>
	<script src="/js/lowermenu.js"></script>
	<script src="/js/dimensions.js"></script>
	<script src="/js/soundmenu.js"></script>
	<script src="/js/report.js"></script>
	<script type="text/javascript">
	
	var numb = $(".entry-content .sound-line").length;
	
	var funclist = "";
	
	for (var i = 0; i < numb; i++) {
		
		console.log("i = "+i);
		
		
		var line = $('.entry-content').find(".sound-line").eq(i);
		
		var desc = line.attr('desc');
		var title = line.attr('title');
		var func = line.attr('func');
		var accent = line.attr('link');
		var sym = line.attr('sym');
		var accentcode = line.attr('accentcode');
		
		funclist += func;
		
		//$('<button>', {class: 'sound-button practicebtn', onclick: 'window.location.href = "/'+link+'";'}).html("Learn").appendTo(line);
		$('<p>', {class: 'sound-sym', id: 'sound-sym'}).html('<img src="/raw/img/'+sym+'"></img>').appendTo(line);
		$('<h2>', {class: 'sound-title-txt', id: 'sound-title-txt'+i}).html(title).appendTo(line);
		$('<h3>', {class: 'sound-desc-txt', id: 'sound-desc-txt'+i}).html(desc).appendTo(line);
		
		// Lines between
		
		var links = line.children().length - 3;
		
		console.log("links = "+ links);
		
		for (var p = 0; p < links; p++) {
			
			console.log("p = "+p);
			
			var linktoadd = line.find(".sound-link").eq(p);
			
			console.log(linktoadd);
			
			var id = ((i+1)* 100) + p;
			console.log("id = " + id);
			var desc = linktoadd.attr('desc');
			var title = linktoadd.attr('title');
			var link = linktoadd.attr('link');
			
			$('<div>', {class: 'report-line', id: 'line-div'+id}).appendTo(linktoadd);
			$('<button>', {class: 'sound-button learnbtn', onclick: "window.location.href = '/"+accent+"-"+link+"';"}).html("Go To Article").appendTo('#line-div'+id);
			$('<div>', {class: 'report-title', id: 'report-title-div'+id}).appendTo("#line-div"+id);
			$('<div>', {class: 'report-desc', id: 'report-desc-div'+id}).appendTo("#line-div"+id);
			$('<h3>', {class: 'report-desc-txt', id: 'report-desc-txt'+id}).html(desc + '.').appendTo('#report-desc-div'+id);
			$('<h2>', {class: 'report-title-txt', id: 'report-title-txt'+id}).html(title).appendTo('#report-title-div'+id);
			
		}
		
		line.find(".sound-link").appendTo(line);
		
	}
	
	currentFuncList += funclist;
	
	// Changing the Title
	
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