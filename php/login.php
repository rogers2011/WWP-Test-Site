<?php

if (isset($_POST['action']) && !empty($_POST['action'])) {
	$action = $_POST['action'];

	if ($email == null) {
		$email = $_POST['email'];
	}
	if ($password == null) {
		$password = $_POST['password'];
	}

	// do whatever with the result
	switch ($action) {
		case 'login':
			tryToLoginUser($email, $password);
			break;
		case 'getUserData':
			getUserData($email);
			break;
		case 'getUserInfo':
			getUserInfo($email);
			break;
		default:
			die('Access denied for this function!');
	}

	return;
}

function getUserData($email)
{
	require_once 'wwp_config.php';
	$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
		exit();
	}

	$stmt = $mysqli->prepare("SELECT first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm, profile_pic_ref, About_Me FROM user_info WHERE email = ?");
	$stmt->bind_param("s", $email);

	// If there exist any entry in database then its password is matched against the one provided by user in android login form.
	if ($stmt->execute()) {
		$stmt->bind_result($token2, $token3, $token4, $token5, $token6, $token7, $token8, $token9, $token10, $token11, $token12);

		// to pass informatio to original php script, which will pass it to java
		while ($stmt->fetch()) {
			$user["first_name"] = $token2;
			$user["last_name"] = $token3;
			$user["username1"] = $token4;
			$user["email"] = $token5;
			$user["encrypted_password"] = $token6;
			$user["salt"] = $token7;
			$user["gender"] = $token8;
			$user["dob"] = $token9;
			$user["confirm"] = $token10;
			$user["profile_pic_ref"] = $token11;
			$user["About_Me"] = $token12;
		}

		$stmt->close();

		if (!$token5) {
			// Email does not exist in database.
			echo "This email does not belong to any account.";
		}
		$stmt->close();

		return $user;
	} else {
		// Even if the email does not exist in the db, the if statement above will be true and the code inside will run. So this will only
		// run if some error occurred preventing the SQL statement from going through.
		echo "SQL statement didn't work for some reason.";
		return null;
	}
}

function getUserInfo($email)
{
	require_once 'wwp_config.php';
	$mysqli = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);
	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
		exit();
	}

	$stmt = $mysqli->prepare("SELECT first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm, profile_pic_ref, About_Me FROM user_info WHERE email = ?");
	$stmt->bind_param("s", $email);

	// If there exist any entry in database then its password is matched against the one provided by user in android login form.
	if ($stmt->execute()) {
		$stmt->bind_result($token2, $token3, $token4, $token5, $token6, $token7, $token8, $token9, $token10, $token11, $token12);

		// to pass informatio to original php script, which will pass it to java
		while ($stmt->fetch()) {
			$response["error"] 						= FALSE;
			$response["user"]["first_name"] = $token2;
			$response["user"]["last_name"] = $token3;
			$response["user"]["username1"] = $token4;
			$response["user"]["gender"] = $token5;
			$response["user"]["dob"] = $token9;
			$response["user"]["profile_pic_ref"] = $token11;
			$response["user"]["About_Me"] = $token12;
			$response["Login Successful"] = TRUE;
		}

		$stmt->close();

		if (!$token5) {
			// Email does not exist in database.
			echo "This email does not belong to any account.";
		}

		echo json_encode($response);
	} else {
		// Even if the email does not exist in the db, the if statement above will be true and the code inside will run. So this will only
		// run if some error occurred preventing the SQL statement from going through.
		echo "SQL statement didn't work for some reason.";
		return null;
	}
}

function tryToLoginUser($email, $password)
{
	// It will check the email and password provided by user in android login form.
	// Accordingly call VerifyUserAuthentication for authentication
	require_once 'update_user_info.php';
	$db = new update_user_info();

	// json response array
	$response = array("error" => FALSE);

	// If user exists in database then JSON Encoded response will be 
	// returned which will later be used in Android App to login.

	// isset — Determine if a variable is set and is not NULL
	// if (isset($_POST["email"]) && isset($_POST["password"])) {

	// receiving the post params
	// $username1 	= $_POST["username1"];
	$email      = $_POST["email"];
	$password 	= $_POST["password"];

	// get the user by email and password
	// $user = $db->VerifyUsernameAuthentication($username1, $password);
	$user = $db->VerifyEmailAndPasswordAuthentication($email, $password);

	// inputs provided from login form are email and password
	if (empty($email)) {
		$response["error"] = TRUE;
		$response["error_msg"] = "Email is missing";
		echo json_encode($response);
	} elseif (empty($password)) {
		$response["error"] = TRUE;
		$response["error_msg"] = "Password is missing";
		echo json_encode($response);
	} elseif ($user) {
		// user is found
		$response["error"] 							= FALSE;
		$response["user"]["id"]                     = $user["id"];
		$response["user"]["first_name"] 			= $user["first_name"];
		$response["user"]["last_name"] 				= $user["last_name"];
		$response["user"]["username1"] 				= $user["username1"];
		$response["user"]["email"] 					= $user["email"];
		$response["user"]["gender"] 				= $user["gender"];
		$response["user"]["dob"] 					= $user["dob"];
		$response["user"]["profile_pic_ref"]		= $user["profile_pic_ref"];
		$response["user"]["About_Me"] 				= $user["About_Me"];
		$response["user"]["banner_pic_ref"]         = $user["banner_pic_ref"];
		$response["user"]["username1_lowercase"]    = $user["username1_lowercase"]; 
		$response["user"]["dateandtime"]            = (string) $user["dateandtime"];
		$response["user"]["current_location"]       = (string) $user["current_location"];
		$response["user"]["numPosts"]               = (string) $user["numPosts"];
		$response["user"]["numComments"]            = (string) $user["numComments"];
		$response["user"]["numLikes"]               = (string) $user["numLikes"];
		$response["user"]["numDislikes"]            = (string) $user["numDislikes"];
		$response["user"]["numFollowers"]           = (string) $user["numFollowers"];
		$response["user"]["numFollowing"]       	= (string) $user["numFollowing"];
		$response["Login Successful!"] 				= TRUE;
		echo json_encode($response);

		// storing everything in the session variable to keep track that the user is logged in throughout their time on the website
		// not full sure how it works yet but I think this saves the user data in cookies on the browser or something
		// $_SESSION["first_name"] 		= $user["first_name"];
		// $_SESSION["last_name"] 			= $user["last_name"];
		// $_SESSION["username1"] 			= $user["username1"];
		// $_SESSION["email"] 				= $user["email"];
		// $_SESSION["gender"] 			= $user["gender"];
		// $_SESSION["dob"] 				= $user["dob"];
		// $_SESSION["profile_pic_ref"]	= $user["profile_pic_ref"];
		// $_SESSION["About_Me"] 			= $user["About_Me"];
	} else {
		// User is not found with the credentials
		// If email or password mismatched then output message will be shown as 
		// Login credentials are wrong. Please try again
		$response["error"] = TRUE;
		$response["error_msg"] = "Login credentials are wrong. Please try again.";
		echo json_encode($response);
	}
	// } else {
	// 	// required post params is missing
	// 	$response["error"] = TRUE;
	// 	$response["error_msg"] = "Required parameters username and/or password are missing.";
	// 	echo json_encode($response);
	// }
}

?>

<!DOCTYPE html>
<html>

<head>
	<meta name="viewport" content="width=device-width">

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>
	<script>
		$(function() {
			$("head").append("head.html")
		});
	</script>

	<title>Login/Register for World Wide Prayer</title>

	<!-- Matomo -->
	<script>
		var _paq = window._paq = window._paq || [];
		/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);
		(function() {
			var u = "//worldwideprayer.world/analytics/matomo/";
			_paq.push(['setTrackerUrl', u + 'matomo.php']);
			_paq.push(['setSiteId', '1']);
			var d = document,
				g = d.createElement('script'),
				s = d.getElementsByTagName('script')[0];
			g.async = true;
			g.src = u + 'matomo.js';
			s.parentNode.insertBefore(g, s);
		})();
	</script>
	<!-- End Matomo Code -->

</head>

<body id="login-body" style="display: none;" class="loginBody">

	<div id="barba-wrapper">
		<div class="barba-container">

			<?php
			include('./menus.php');
			?>

			<div class="login-page">

				<!-- snackbar div (like toasts on Android) -->
				<div id="snackbar"></div>

				<!-- need this because was getting bug where adding margin to the form was lowering the 3 bar menu button as well because menu is absolute position so changing the margin of the form changed the margin of the body which in turn moved down the box the menu was contained in -->
				<div id="dummy-div" style="visibility: hidden; height: 0;">~</div>


				<!-- <div id="age-restriction-message">Under COPPA Act, the FTC (Federal Trade Commission) doesn't allow information
          to
          be
          taken from children under 18 without going through some hoops.
          So we have just made it so people under 18 cannot create an account on WWP.
          If you are younger than 18, we are sorry that you cannot make an account - but please, feel free to still join
          us in
          prayer and enjoy the website!
        
        The GDPR says people under 16 need to require parental consent first..... just saying 18 or older. W/e</div> -->

				<!-- <div id="firebaseui-auth-container"></div>
        <div id="loader">Loading...</div> -->

				<div id="form-container">
					<div class="form">

						<ul class="tab-group">
							<li class="tab active"><a href="#signup">Sign Up</a></li>
							<li class="tab"><a href="#login">Log In</a></li>
						</ul>

						<div class="tab-content">
							<div id="signup">
								<h1>Sign Up For Free</h1>

								<!-- <form action="/" method="post"> -->
								<form id="register-form" method="post">

									<div class="top-row">
										<div class="field-wrap">
											<label>
												First Name<span class="req">*</span>
											</label>
											<input id="first-name" type="text" required autocomplete="off" />
										</div>

										<div class="field-wrap">
											<label>
												Last Name<span class="req">*</span>
											</label>
											<input id="last-name" type="text" required autocomplete="off" />
										</div>
									</div>

									<div class="field-wrap">
										<label>
											Username (How Others Will See You)<span class="req">*</span>
										</label>
										<input id="username-input" type="text" required autocomplete="off" />
									</div>

									<div class="field-wrap">
										<label>
											Email Address<span class="req">*</span>
										</label>
										<input id="email-address" type="email" required autocomplete="off" />
									</div>

									<div class="field-wrap last-item">
										<label>
											Set A Password<span class="req">*</span>
										</label>
										<input id="password" type="password" required autocomplete="off" />
									</div>

									<p class="privacy_policy"><a href="./privacy-policy" target="_blank">Privacy Policy</a></p>
									<p class="terms_of_service"><a href="./terms-and-conditions" target="_blank">Terms of Service</a></p>

									<button id="register-button" type="submit" class="button button-block">Create Account</button>

								</form>

							</div>

							<div id="login">
								<h1>Welcome Back!</h1>

								<form id="login-form" action="/" method="post">

									<div class="field-wrap">
										<label>
											Email Address<span class="req">*</span>
										</label>
										<input id="email-address-login" type="email" required autocomplete="off" />
									</div>

									<div class="field-wrap last-item">
										<label>
											Password<span class="req">*</span>
										</label>
										<input id="password-login" type="password" required autocomplete="off" />
									</div>

									<p id="forgot" class="forgot"><a href="#">Forgot Password?</a></p>

									<button id="login-button" class="button button-block">Log In</button>

								</form>

							</div>

						</div><!-- tab-content -->

					</div> <!-- /form -->

				</div>

				<div id="confirmation-email-message" class="firebaseui-info-bar firebaseui-id-info-bar" style="display: none; font-size:25px;">
					<p class="firebaseui-info-bar-message">
						A confirmation email has been sent to your email. Please
						click the link inside to activate your account.
						If you don't see the email, please check your Spam as well. You may have to click 'Report Not Spam' and
						re-register
						by filling out this form
						again in order to click the link.&nbsp;&nbsp;
						<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar" onclick="HideConfirmationEmailMessage()">Dismiss</a>

					</p>
				</div>

				<div id="username-taken-message" class="firebaseui-info-bar firebaseui-id-info-bar" style="display: none; font-size:25px;">
					<p class="firebaseui-info-bar-message">Username is taken.&nbsp;&nbsp;
						<a href="javascript:void(0)" class="firebaseui-link firebaseui-id-dismiss-info-bar" onclick="HideUsernameTakenMessage()">Dismiss</a>
					</p>
				</div>

				<!-- <script type="text/javascript" src="js/login.js?version=330"></script> -->
				<script type="text/javascript">
					var _c = new Date().getTime();
					document.write('<script type="text/javascript" src="js/login.js?c=' + _c + '"><\/script>');
				</script>


				<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/barba.js/1.0.0/barba.min.js"></script> -->
				<!-- <script type="text/javascript" src="js/barba-transition.js?version=29"></script> -->
				<!-- <script type="text/javascript" src="js/global-functions.js?version=1"></script> -->

			</div>
		</div>
	</div>

</body>

</html>