function buildPopUp() {
	$('.login-title').html('Join The Club!');
	$('.login-desc').html('Get started with a <strong>FREE</strong> AccentLab account to start working on your accents.'); 
	$('#log-in-btn').attr('onclick', 'window.location.href="/wp-login.php"');
	$('#sign-up-btn').attr('onclick', 'window.location.href="/wp-login.php?action=register"');
	}