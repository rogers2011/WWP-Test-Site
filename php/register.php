<?php
//echo("You are inside Register.php ");

// It will check the email and password provided by user in android login form.
// Accordingly call VerifyUserAuthentication for authentication
require_once 'update_user_info.php';
$db = new update_user_info();

// json response array
$response = array("error" => FALSE);
//echo(" First Name: " . $_POST['first_name']);
//echo("; Last Name: " . $_POST['last_name']);
//echo("; Email: " . $_POST['email']);
//echo("; Username: " . $_POST['username']);
//echo("; Password: " . $_POST['password']);
// if (isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['username']) && isset($_POST['email']) && isset($_POST['password']) && isset($_POST['gender']) && isset($_POST['dob'])) {
if (isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['email']) && isset($_POST['username']) && isset($_POST['password'])) {

    // receiving the post params
    $first_name 	= $_POST['first_name'];
	$last_name 		= $_POST['last_name'];
	$username 		= $_POST['username'];
    $email 			= $_POST['email'];
    $password 		= $_POST['password'];
    // $gender 		= $_POST['gender'];
    // $dob 			= $_POST['dob'];
	$confirm 		= (string)1;
	$alphaNumRegex = "/^[a-zA-Z0-9]+$/";
	//echo "password: " . $password;

    // check if user is already existed with the same email
    if ($db->CheckExistingUserEmail($email)) {
        // user already existed
        $response["error"] = TRUE;
        $response["error_msg"] = "User already existed with this email.";
        echo json_encode($response);
    } elseif ($db->CheckExistingUserEmailRandomCodeTable($email)) {
        // user already existed
        $response["error"] = TRUE;
        $response["error_msg"] = "User already being confirmed with this email.";
        echo json_encode($response);
	} elseif (empty($first_name)) {
		$response["error"] = TRUE;
        $response["error_msg"] = "First name is missing";
        echo json_encode($response);
	} elseif (empty($last_name)) {
		$response["error"] = TRUE;
        $response["error_msg"] = "Last name is missing";
        echo json_encode($response);
	}  
	// elseif (empty($username)) {
	// 	$response["error"] = TRUE;
    //     $response["error_msg"] = "Username is missing";
    //     echo json_encode($response);
	// } 
	elseif (empty($email)) {
		$response["error"] = TRUE;
        $response["error_msg"] = "Email is missing";
        echo json_encode($response);
	} elseif (empty($password)) {
		$response["error"] = TRUE;
        $response["error_msg"] = "Password is missing";
        echo json_encode($response);
	} elseif (empty($username)) {
		$response["error"] = TRUE;
        $response["error_msg"] = "Username is missing";
        echo json_encode($response);
	} elseif (!preg_match($alphaNumRegex, $username)) {
		$response["error"] = TRUE;
        $response["error_msg"] = "Username can only contain alphanumeric characters.";
        echo json_encode($response);
	} elseif ((strpos($username, 'no_music') !== FALSE) || (strpos($username, 'no_background') !== FALSE) || (strpos($username, 'no_recording') !== FALSE)) {
		//(($username == 'no_music') || ($username == 'no_background') || ($username == 'no_recording') ||
		$response["error"] = TRUE;
        $response["error_msg"] = "Sorry, your username cannot contain 'no_music', 'no_background', or 'no_recording'";
        echo json_encode($response);
	}
	// elseif ($db->CheckExistingUsernameRandomCodeTable($username)) {
        // user already existed
        // $response["error"] = TRUE;
        // $response["error_msg"] = "User already being confirmed with this username.";
        // echo json_encode($response);
	// } 
	elseif ($db->CheckExistingUsername($username)) {
        // user already existed
        $response["error"] = TRUE;
        $response["error_msg"] = "User already existed with this username.";
        echo json_encode($response);
	}
	// elseif (empty($gender)){
	// 	$response["error"] = TRUE;
    //     $response["error_msg"] = "Gender is missing";
    //     echo json_encode($response);
	// } elseif (empty($dob)) {
	// 	$response["error"] = TRUE;
    //     $response["error_msg"] = "Date of birth is missing";
    //     echo json_encode($response);		
	// } 
	else {
		// Password is encrypted using hash function.
        $hash = hashFunction($password);
        $encrypted_password = $hash["encrypted"]; // encrypted password
        $salt = $hash["salt"]; // salt
	    // $user 	= $db->randomcodecheck($first_name, $last_name, $username, $email, $password, $gender, $dob, $confirm);
	    $user 	= $db->randomcodecheck($first_name, $last_name, $email, $username, $confirm, $encrypted_password, $salt);
		if ($user) {
			// confirm_user stored successfully
			// use is found
		    $response["error"] 				  = FALSE;
		    $response["user"]["first_name"]   = $user["first_name"];
		    $response["user"]["last_name"] 	  = $user["last_name"];
		    $response["user"]["username"] 	  = $user["username"];
		    $response["user"]["email"] 		  = $user["email"];
		    // $response["user"]["password"] 	  = $user["password"];
		    // $response["user"]["gender"] 	  = $user["gender"];
		    // $response["user"]["dob"] 		  = $user["dob"];
		    $response["user"]["confirm"]      = $user["confirm"];
		    echo json_encode($response);
			echo "Register Successful";
		} else {
			// user failed to store
			$response["error"] 		= TRUE;
			$response["error_msg"] 	= "Unknown error occurred in confirmation email.";
			echo json_encode($response);
		}
	}
} else {
    $response["error"] = TRUE;
    $response["error_msg"] = "Required parameters (name, username, email, password) are missing.";
    echo json_encode($response);
}

// Encrypting password @param password returns salt and encrypted password
function hashFunction($password)
{
	$salt = sha1(rand());
	$salt = substr($salt, 0, 10);
	$encrypted = base64_encode(sha1($password . $salt, true) . $salt);
	$hash = array(
		"salt" => $salt,
		"encrypted" => $encrypted
	);
	return $hash;
}