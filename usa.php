<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8">
    <link rel="canonical" href="" />
    <title>USA custom mapping tool | Counties | States | Maps</title>
    <meta name="description" content="This is an Alpha version of a custom map making tool. You can filter states, counties and customize colors.">
    <meta name="author" content="">
	<link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-touch-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-touch-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon-180x180.png">
	<link rel="icon" type="image/png" href="/favicons/favicon-32x32.png" sizes="32x32">
	<link rel="icon" type="image/png" href="/favicons/android-chrome-192x192.png" sizes="192x192">
	<link rel="icon" type="image/png" href="/favicons/favicon-96x96.png" sizes="96x96">
	<link rel="icon" type="image/png" href="/favicons/favicon-16x16.png" sizes="16x16">
	<link rel="manifest" href="/manifest.json">
	<link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png">
	<meta name="theme-color" content="#ffffff">
	<link href="/css/main.css" rel="stylesheet">
	<link href="/css/colorPicker.css" rel="stylesheet">
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-38832104-3', 'auto');
	  ga('send', 'pageview');

	</script>
</head>
<body>
	<div id="info-box">Blank</div>
	<nav>
		<div id="nav-sec-parent">
			<img id="nav-svg-logo" src="/img/MN_logo.svg">
			<p class="alpha-mark">BETA</p>
			<div id="nav-icon1">
			  <span></span>
			  <span></span>
			  <span></span>
			</div>
		</div>
		<di id="tools-parent" class="block">
			<div id="tool-nav-1" class="">	
				<div id="bubble-0" class="bubble-indicator bubble-indicator-fill"></div>
				<div id="bubble-1" class="bubble-indicator"></div>
				<div id="bubble-2" class="bubble-indicator"></div>
				<div id="bubble-3" class="bubble-indicator"></div>
			</div>

			<div id="nav-sec-0" class="tool-blocks">	
				<div class="tool-blocks-child">
					<p>Filters</p>
					<div><img src="/img/filter.svg"></div>
				</div>
				<div class="tool-blocks-child-v2">
					<select id="tool-state-select">
						<option selected disabled value="">Select State</option>
						<option value="AL">Alabama</option>
						<option value="AK">Alaska</option>
						<option value="AZ">Arizona</option>
						<option value="AR">Arkansas</option>
						<option value="CA">California</option>
						<option value="CO">Colorado</option>
						<option value="CT">Connecticut</option>
						<option value="DE">Delaware</option>
						<option value="DC">District Of Columbia</option>
						<option value="FL">Florida</option>
						<option value="GA">Georgia</option>
						<option value="HI">Hawaii</option>
						<option value="ID">Idaho</option>
						<option value="IL">Illinois</option>
						<option value="IN">Indiana</option>
						<option value="IA">Iowa</option>
						<option value="KS">Kansas</option>
						<option value="KY">Kentucky</option>
						<option value="LA">Louisiana</option>
						<option value="ME">Maine</option>
						<option value="MD">Maryland</option>
						<option value="MA">Massachusetts</option>
						<option value="MI">Michigan</option>
						<option value="MN">Minnesota</option>
						<option value="MS">Mississippi</option>
						<option value="MO">Missouri</option>
						<option value="MT">Montana</option>
						<option value="NE">Nebraska</option>
						<option value="NV">Nevada</option>
						<option value="NH">New Hampshire</option>
						<option value="NJ">New Jersey</option>
						<option value="NM">New Mexico</option>
						<option value="NY">New York</option>
						<option value="NC">North Carolina</option>
						<option value="ND">North Dakota</option>
						<option value="OH">Ohio</option>
						<option value="OK">Oklahoma</option>
						<option value="OR">Oregon</option>
						<option value="PA">Pennsylvania</option>
						<option value="RI">Rhode Island</option>
						<option value="SC">South Carolina</option>
						<option value="SD">South Dakota</option>
						<option value="TN">Tennessee</option>
						<option value="TX">Texas</option>
						<option value="UT">Utah</option>
						<option value="VT">Vermont</option>
						<option value="VA">Virginia</option>
						<option value="WA">Washington</option>
						<option value="WV">West Virginia</option>
						<option value="WI">Wisconsin</option>
						<option value="WY">Wyoming</option>
					</select>
					<div id="tool-state-add" class="tool-nav-2-child tool-tweaks-1 tool-state-reset">Filter/Add State</div>
					<div id="tool-state-remove" class="tool-nav-2-child tool-tweaks-1 tool-state-reset">Remove State</div>
					<div id="tool-state-reset" class="tool-nav-2-child tool-tweaks-1 tool-state-reset">Reset Map</div>
				</div>
			</div>
			<div id="nav-sec-1" class="tool-blocks">	
				<div class="tool-blocks-child">
					<p>Map Mode</p>
					<div><img src="/img/map.svg"></div>
				</div>
				<div class="tool-blocks-child-v2">
					<p>Country Fill</p>
					<div class="onoffswitch">
					    <input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="country-fill-switch">
					    <label class="onoffswitch-label" for="country-fill-switch">
					        <span class="onoffswitch-inner"></span>
					        <span class="onoffswitch-switch"></span>
					    </label>
					</div>
				</div>
			</div>
			<div id="nav-sec-2" class="tool-blocks">	
				<div class="tool-blocks-child">
					<p>Design</p>
					<div><img src="/img/design.svg"></div>
				</div>
				<div class="tool-blocks-child-v2">
					<p>Color Picker</p>
					<div id="colorPicker"></div>
				</div>
			</div>
			<div id="nav-sec-3" class="tool-blocks">	
				<div class="tool-blocks-child">
					<p>Settings</p>
					<div><img src="/img/settings.svg"></div>
				</div>
				<div class="tool-blocks-child-v2">
					<div id="setting-tool-share" class="tool-nav-2-child tool-tweaks-1 tool-state-reset">Get Share URL</div>
					<input id="share-textbox" type="textbox" name="textbox" class="input-box">
					<div id="setting-tool-copy" class="tool-nav-2-child tool-tweaks-1 tool-state-reset">Copy URL</div>
				</div>
			</div>

			<div id="tool-nav-2" class="">	
				<div id="tool-up" class="tool-nav-2-child">∧</div>
				<div id="tool-down" class="tool-nav-2-child">∨</div>
			</div>
		</div>
	</nav>
	<section>
		<div id="map-usa" oncontextmenu="return false;">
			<?php include $_SERVER["DOCUMENT_ROOT"].'/includes/map_usa.php'; ?>
		</div>
		<div id="svg-pan-zoom-controls">
			<div id="svg-pan-zoom-zoom-in">+</div>
			<div id="svg-pan-zoom-reset-pan-zoom">RESET</div>
			<div id="svg-pan-zoom-zoom-out">-</div>
		</div>
		<div id="donate-button">
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
			<input type="hidden" name="cmd" value="_s-xclick">
			<input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
			">
			<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
			<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
			</form>
		</div>
	</section>
</body>
<script src="http://code.jquery.com/jquery-latest.min.js" type="text/javascript"></script>
<script type="text/javascript" src="/js/svg-pan-zoom.js"></script>
<script type="text/javascript" src="/js/colorpicker.js"></script>
<script type="text/javascript" src="/js/main.js"></script>
</html>