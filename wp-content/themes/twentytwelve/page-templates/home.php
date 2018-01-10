<?php /** Template Name: Home Template */ ?>

<?php

get_header(); ?>

<div class="home-section top-section">
<div class="home-text-box">
<h1 class="home-section-title">Meet Your New Accent Coach</h1>
<h2 class="home-section-subtitle">Get teaching tailored to you, with help from a 4,000-lesson voice coach. Learn with AccentLab.</h2>
<button class="home-section-btn" onclick="window.location.href='wp-login.php?action=register'">Sign Up</button>
</div>
<div class="img-background img-right"><img src="/raw/img/learnonmac.png"></img></div>
</div>

<div class="home-section right-gradient">
<div class="home-text-box float-right">
<h1 class="home-section-title">How Strong Is Your Accent?</h1>
<h2 class="home-section-subtitle">Want to improve your pronunciation, but don't know where to start? Get a full accent diagnosis from our test.</h2>
<button class="home-section-btn" onclick="window.location.href='test/'">Take The Test</button>
</div>
<div class="img-background"><img src="/raw/img/testonmac.png"></img></div>
</div>

<div class="home-section gradient-3">
<div class="home-text-box">
<h1 class="home-section-title">Become an Accent Master</h1>
<h2 class="home-section-subtitle">Get accent breakdowns on a growing database of accents, with articles and videos on each sound.</h2>
<button class="home-section-btn" onclick="window.location.href='accents/'">Learn More</button>
</div>
<div class="img-background img-right"><img src="/raw/img/accentsonmac.png"></img></div>
</div>

<div class="home-section last-gradient bottom-home-section">
<div class="home-text-box float-right">
<h1 class="home-section-title">Infinite Practice Tool</h1>
<h2 class="home-section-subtitle">Our software works like a great coach: pointing out mistakes, and highlighting words to focus on.</h2>
<button class="home-section-btn" onclick="window.location.href='practice/'">Try It Out</button>
</div>
<div class="img-background"><img src="/raw/img/practicemac.png"></img></div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://use.fontawesome.com/2adec87542.js"></script>

</div><!-- .content-area -->

<?php get_footer(); ?>
