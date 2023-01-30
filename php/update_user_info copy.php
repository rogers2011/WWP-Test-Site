<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// print_r("Printing Variable: " . $_POST['action']);
// print("This should print");
// echo "on the command line";

// debug_to_console("printing to console");

if (isset($_POST['action']) && !empty($_POST['action'])) {
    $action = $_POST['action'];

    $first_name = 'guest';
    $last_name = 'guest';
    $email = 'guest';
    $other_user_email = 'guest';
    $profile_pic_ref = 'guest';
    $about_me = 'about_me';

    if (isset($_POST['email'])) {
        $email = $_POST['email'];
    }

    if (isset($_POST['other_user_email'])) {
        $other_user_email = $_POST['other_user_email'];
    }

    if (isset($_POST['last_name'])) {
        $last_name = $_POST['last_name'];
    }

    if (isset($_POST['first_name'])) {
        $first_name = $_POST['first_name'];
    }

    if (isset($_POST['profile_pic_ref'])) {
        $profile_pic_ref = $_POST['profile_pic_ref'];
    }

    if (isset($_POST['about_me'])) {
        $about_me = $_POST['about_me'];
    }

    $updateUserInfoObj = new update_user_info();

    // do whatever with the result
    switch ($action) {
        case 'addNotification':
            $email = $_POST['email'];
            $notification_text = $_POST['notification_text'];
            $dateandtime = $_POST['dateandtime'];
            $updateUserInfoObj->addNotification($email, $notification_text, $dateandtime);
            break;

        case 'removeNotification':
            $email = $_POST['email'];
            $notification_text = $_POST['notification_text'];
            $updateUserInfoObj->removeNotification($email, $notification_text);
            break;
           
        case 'about_me':
            $email = $_POST['email'];
            $about_me = $_POST['about_me'];
            $updateUserInfoObj->about_me($email, $about_me);
            break;

        case 'submitPost':
            $email = $_POST['email'];
            $username1 = $_POST['username1'];
            $dateandtime = $_POST['dateandtime'];
            $image_url = $_POST['image_url'];
            $userpost = $_POST['userpost'];
            $updateUserInfoObj->submitPost($email, $username1, $dateandtime, $image_url, $userpost);
            break;

        case 'getPostsByUser':
            $emailOfUser = $_POST['emailOfUser'];
            $updateUserInfoObj->getPostsByUser($emailOfUser);
            break;

        case 'getcommenttext';
            $emailOfUser = $_POST['emailOfUser'];
            $numpostsviewed = $_POST['numpostsviewed'];
            $numcommentsviewed = $_POST['emailOfUser'];
            $username_post = $_POST['username_post'];
            $userpost = $_POST['userpost'];
            $dateandtime_post = $_POST['dateandtime_post'];
            $updateUserInfoObj->getcommenttext($emailOfUser, $numpostsviewed, $numcommentsviewed, $username_post, $userpost, $dateandtime_post);
            break;

        case 'getSinglePostByUser':
            $emailOfUser = $_POST['emailOfUser'];
            $rowId = $_POST['rowId'];
            $updateUserInfoObj->getSinglePostByUser($emailOfUser, $rowId);
            break;

        case 'followcheck1';
            $email = $_POST['email'];
            $other_user_email = $_POST['other_user_email'];
            $user = $updateUserInfoObj->followcheck1($boolean_temp);        
            echo $user;
            break;

        case 'userprofileinformation';
            $other_user_email = $_POST['other_user_email'];
            $user = $updateUserInfoObj->userprofileinformation($id, $first_name, $last_name, $username1, $email,  $profile_pic_ref, $banner_pic_ref, $about_me, $username1_lowercase, $dateandtime, $current_location, $numPosts, $numComments, $numLikes, $numDislikes, $numFollowers, $numFollowing);  
            echo $user
            break;


        default:
            die('Access denied for this function!');
    }
}



// 4 functions used to store and return user information from database

class update_user_info

{
    private $conn;
    // constructor

    function __construct()
    {
        require_once 'wwp_connect.php';
        // connecting to database
        $db = new wwp_connect();
        $this->conn = $db->connect();
     //   echo 'connected yo';
    }

    // destructor
    function __destruct()
    {
    }

    public function getSinglePostByUser($emailOfUser, $rowId)
    {
        $stmt = $this->conn->prepare("SELECT * FROM user_posts WHERE email = ? AND id > ? LIMIT 1");
        $stmt->bind_param("s", $emailOfUser, $rowId);

        $result = $stmt->execute();
        if (!$result) {
            echo "Failed to retrieve the user's posts.";
            return;
        } else {
            $stmt->bind_result($id, $email, $username1, $userpost, $userpost, $dateandtime, $image_url, $Likes1, $Dislikes1);

            $i = 0;
            while ($stmt->fetch()) {
                $posts["id"] = $id;
                $posts["email"] = $email;
                $posts["username1"] = $username1;
                $posts["userpost"] = $userpost;
                $posts["dateandtime"] = $dateandtime;
                $posts["image_url"] = $image_url;
                $posts["Likes1"] = $Likes1;
                $posts["Dislikes1"] = $Dislikes1;
                $i++;
            }

            $posts["numPosts"] = $i;
        }

        $stmt->close();
        return $posts;
    }



    public function getPostsByUser($emailOfUser)

    {

        $stmt = $this->conn->prepare("SELECT * FROM user_posts WHERE email = ?");
        $stmt->bind_param("s", $emailOfUser);
        $result = $stmt->execute();

        if (!$result) {
            echo "Failed to retrieve the user's posts.";
            return;

        } else {

            $stmt->bind_result($id, $email, $username1, $userpost, $userpost, $dateandtime, $image_url, $Likes1, $Dislikes1);
            $i = 0;

            while ($stmt->fetch()) {
                $posts["ids"][$i] = $id;
                $posts["emails"][$i] = $email;
                $posts["username1s"][$i] = $username1;
                $posts["userposts"][$i] = $userpost;
                $posts["dateandtimes"][$i] = $dateandtime;
                $posts["image_urls"][$i] = $image_url;
                $posts["Likes1s"][$i] = $Likes1;
                $posts["Dislikes1s"][$i] = $Dislikes1;
                $i++;

            }

            $posts["numPosts"] = $i;

        }

        $stmt->close();

        return $posts;
    }



    public function submitPost($email, $username1, $dateandtime, $image_url, $userpost)

    {

        $stmt = $this->conn->prepare("INSERT INTO user_posts(email, username1, dateandtime, image_url, userpost) VALUES(?, ?, ?, ?, ?)");

        $stmt->bind_param("sssss", $email, $username1, $dateandtime, $image_url, $userpost);



        $result = $stmt->execute();

        if (!$result) {

            echo 'Failed saving post in the database.';

            return;

        }

        $stmt->close();



        echo 'Post successfully saved!';



    }



    public function addNotification($email, $notification_text, $dateandtime)

    {

        $stmt = $this->conn->prepare("INSERT INTO notifications(email, notification_text, dateandtime) VALUES(?, ?, ?)");

        $stmt->bind_param("sss", $email, $notification_text, $dateandtime);



        $result = $stmt->execute();

        if (!$result) {

            echo 'Notification failed to be saved in database.';

            return;

        }

        $stmt->close();



        return "Notification successfully saved!";

    }



    public function removeNotification($email, $notification_text)

    {

        $stmt = $this->conn->prepare("DELETE FROM notifications WHERE email = ? AND notification_text = ?");

        $stmt->bind_param("ss", $email, $notification_text);



        $result = $stmt->execute();

        if (!$result) {

            echo 'Notification failed to be removed from the database.';

            return;

        }

        $stmt->close();



        return "Notification successfully removed!";

    }



    // send a random code to verify a user's email

    public function sendRandomCode($email)

    {



        $RandomCode = substr(md5(uniqid(rand())), 0, 6);



        // CURRENT_TIMESTAMP() returns a value like 20210421012129 which = 04/21/21 1:21 and 29 seconds.

        $stmt = $this->conn->prepare("INSERT INTO random_code(RandomCode, email, CreatedAt) VALUES(?, ?, CURRENT_TIMESTAMP())");



        $stmt->bind_param("ss", $RandomCode, $email);



        $result = $stmt->execute();

        if (!$result) {

            echo 'Random code failed to be saved in database.';

            return;

        }

        $stmt->close();



        require 'Exception.php';

        require 'PHPMailer.php';

        require 'SMTP.php';



        $mail = new PHPMailer();



        // The message with the confirmation code

        $message = "Here is your code to verify your email address. \r\n\n";

        $message .= "$RandomCode\n\n";

        $message .= "\n\n";

        $message .= "This code will expire in 20 minutes.";



        $mail->setFrom("worldwideprayer@worldwideprayer.world");

        $mail->addAddress($email);

        $mail->Subject = "Reset Password Verification Code";

        $mail->Body = $message;

        $mail->IsSMTP();

        $mail->SMTPDebug = 2; // show debugging stuff

        $mail->SMTPSecure = "ssl";

        $mail->Host = "mail.worldwideprayer.world";

        $mail->SMTPAuth = true;

        $mail->Port = 465;



        // Set your existing gmail address as user name

        $mail->Username = "worldwideprayer@worldwideprayer.world";



        // Set the password of your gmail address here

        $mail->Password = "Sinc30358";



        if (!$mail->send()) {

            echo "Mail failed to send: " . $mail->ErrorInfo;

            return false;

        } else {



            echo "Verification code sent.";

        }

    }





    public function report_post($username1, $username_post, $userpost, $dateandtime_post)

    {



        require '/usr/share/php/libphp-phpmailer/class.phpmailer.php';

        require '/usr/share/php/libphp-phpmailer/class.smtp.php';

        $mail = new PHPMailer();

        // The Client's Email ID

        $to = 'sportscoach12345@gmail.com';



        // Header Information

        // $header = "From: rogersjohn44@example.com";



        // The Subject of the email

        // $subject = "=?UTF-8?B?".base64_encode($subject)."?=";



        // $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";

        // $headers = "From: $from_user <$from_email>\r\n".

        // "MIME-Version: 1.0" . "\r\n" .

        // "Content-type: text/html; charset=UTF-8" . "\r\n";



        // The message with the confirmation code

        $message = $username1 . " has reported the following post:\r\n\n";

        $message .= "$username_post \r\n";

        $message .= "$dateandtime_post \r\n";

        $message .= "$userpost \r\n";



        // Send the actual mail and wait for status

        // $sentmail = mail($to, $subject, $message, $header);



        $mail->setFrom('admin@example.com');

        $mail->addAddress('sportscoach12345@gmail.com');

        $mail->Subject = 'Report - Post';

        $mail->Body = $message;

        $mail->IsSMTP();

        $mail->SMTPSecure = 'ssl';

        $mail->Host = 'ssl://smtp.gmail.com';

        $mail->SMTPAuth = true;

        $mail->Port = 465;



        // Set your existing gmail address as user name

        $mail->Username = 'sportscoach12345@gmail.com';



        // Set the password of your gmail address here

        $mail->Password = '07180718Jr!';



        if (!$mail->send()) {

            return false;

        } else {

            $user = true;

            return $user;

        }

    }



    public function report_comment($username1, $username_post, $username_comments, $userpost, $comments, $dateandtime_post, $dateandtime_comments)

    {

        require '/usr/share/php/libphp-phpmailer/class.phpmailer.php';

        require '/usr/share/php/libphp-phpmailer/class.smtp.php';

        $mail = new PHPMailer();

        // The Client's Email ID

        $to = 'sportscoach12345@gmail.com';



        // Header Information

        // $header = "From: rogersjohn44@example.com";



        // The Subject of the email

        // $subject = "=?UTF-8?B?".base64_encode($subject)."?=";



        // $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";

        // $headers = "From: $from_user <$from_email>\r\n".

        // "MIME-Version: 1.0" . "\r\n" .

        // "Content-type: text/html; charset=UTF-8" . "\r\n";



        // The message with the confirmation code

        $message = $username1 . " has reported the following comment:\r\n\n";

        $message .= "$username_post \r\n";

        $message .= "$dateandtime_post \r\n";

        $message .= "$userpost \r\n\n";



        $message .= "$username_comments \r\n";

        $message .= "$comments \r\n";

        $message .= "$dateandtime_comments \r\n";



        // Send the actual mail and wait for status

        // $sentmail = mail($to, $subject, $message, $header);



        $mail->setFrom('admin@example.com');

        $mail->addAddress('sportscoach12345@gmail.com');

        $mail->Subject = 'Report - Comment';

        $mail->Body = $message;

        $mail->IsSMTP();

        $mail->SMTPSecure = 'ssl';

        $mail->Host = 'ssl://smtp.gmail.com';

        $mail->SMTPAuth = true;

        $mail->Port = 465;



        // Set your existing gmail address as user name

        $mail->Username = 'sportscoach12345@gmail.com';



        // Set the password of your gmail address here

        $mail->Password = '07180718Jr!';



        if (!$mail->send()) {

            return false;

        } else {

            $user = true;

            return $user;

        }

    }



    public function postcomment($username_post, $username_comments, $userpost, $comments, $dateandtime_post)

    {



        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("INSERT INTO post_comments(username_post, username_comments, userpost, comments, dateandtime_post) VALUES(?, ?, ?, ?, ?)");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $stmt->bind_param("sssss", $username_post, $username_comments, $userpost, $comments, $dateandtime_post);

        // Checking successful storage using $result

        $result = $stmt->execute();

        $stmt->close();



        // Check for successful store

        if ($result) {

            $stmt = $this->conn->prepare("SELECT dateandtime_comments FROM post_comments WHERE username_post = ? AND username_comments = ? AND userpost = ? AND comments = ? AND dateandtime_post = ?");

            $stmt->bind_param("sssss", $username_post, $username_comments, $userpost, $comments, $dateandtime_post);

            $stmt->execute();

            $stmt->bind_result($token7);



            // Information returned in the form of $user has the information regarding

            // name, email, gender etc. which will be later used by Android App

            while ($stmt->fetch()) {

                $user["dateandtime_comments"] = $token7;

            }

            $stmt->close();

            return $user;

        } else {

            return false;

        }

    }



    public function delete_post($username_post, $userpost, $dateandtime_post, $imageURL)

    {



        $imageURL = str_replace("http://108.87.160.5", "/var/www/html", $imageURL);

        unlink($imageURL);



        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("DELETE FROM user_posts WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

        $stmt->bind_param("sss", $username_post, $userpost, $dateandtime_post);

        if ($stmt->execute()) {

            $stmt->close();

            $user = true;

        } else {

            return false;

        }



        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("DELETE FROM post_comments WHERE username_post = ? AND userpost = ? AND dateandtime_post = ?");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $stmt->bind_param("sss", $username_post, $userpost, $dateandtime_post);

        // Checking successful storage using $result

        if ($stmt->execute()) {

            $stmt->close();

            $user = true;

            return $user;

        } else {

            $stmt->close();

            return false;

        }

    }



    public function delete_comment($username_post, $username_comments, $userpost, $comments, $dateandtime_post, $dateandtime_comments)

    {



        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("DELETE FROM post_comments WHERE username_post = ? AND username_comments = ? AND userpost = ? AND comments = ? AND dateandtime_post = ? AND dateandtime_comments = ?");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $stmt->bind_param("ssssss", $username_post, $username_comments, $userpost, $comments, $dateandtime_post, $dateandtime_comments);

        // Checking successful storage using $result

        if ($stmt->execute()) {

            $stmt->close();

            $user = true;

            return $user;

        } else {

            $stmt->close();

            return false;

        }

    }



    public function likingpost($username1, $userpost, $dateandtime)

    {

        $stmt = $this->conn->prepare("SELECT username1, userpost from post_likes_dislikes WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

        $stmt->bind_param("sss", $username1, $userpost, $dateandtime);

        $stmt->execute();

        $stmt->store_result();



        // We are searching table user_info for the entry according to email provided by user.

        // If it exists then true is returned otherwise false.

        if ($stmt->num_rows > 0) {

            // user existed

            $stmt->close();



            $stmt = $this->conn->prepare("SELECT Likes1, Dislikes1 from post_likes_dislikes WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

            $stmt->bind_param("sss", $username1, $userpost, $dateandtime);

            $stmt->execute();

            $stmt->store_result();



            // If there exist any entry in database then its password is matched against the one provided by user in android login form.

            if ($stmt->execute()) {

                $stmt->bind_result($token4, $token5);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $Likes1 = $token4;

                    $Dislikes1 = $token5;

                    // $user["rowcount"] = $rowcount;

                }

                $stmt->close();



                if ($Likes1 == 1 and $Dislikes1 == 0) {

                    // User data is inserted in the database using query "INSERT INTO".

                    // The query we used is known as Prepared Statements in MySQLi.

                    // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value

                    $stmt = $this->conn->prepare("DELETE FROM post_likes_dislikes WHERE username1 = ?  AND userpost = ? AND dateandtime = ?");

                    $stmt->bind_param('sss', $username1, $userpost, $dateandtime);

                    $result1 = $stmt->execute();

                    $stmt->close();



                    // Entry is selected from table user_posts according to id provided.

                    $stmt = $this->conn->prepare("SELECT Likes1, Dislikes1 FROM user_posts WHERE userpost = ? AND dateandtime = ?");

                    $stmt->bind_param("ss", $userpost, $dateandtime);



                    // If there exist any entry in database then its password is matched against the one provided by user in android login form.

                    if ($stmt->execute()) {

                        $stmt->bind_result($token7, $token8);



                        // to pass informatio to original php script, which will pass it to java

                        while ($stmt->fetch()) {

                            $Likes11 = $token7;

                            $Dislikes11 = $token8;

                            // $user["rowcount"] = $rowcount;

                        }

                        $stmt->close();



                        $Likes11 = $Likes11 - 1;

                        $user["Likes1"] = $Likes11;

                        $user["Dislikes1"] = $Dislikes11;



                        $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Likes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('iss', $Likes11, $userpost, $dateandtime);

                        $result = $stmt->execute();

                        $stmt->close();



                        if ($result) {

                            return $user;

                        }

                    } else {

                        return false;

                    }

                } elseif ($Likes1 == 0 and $Dislikes1 == 1) {

                    // Entry is selected from table user_posts according to id provided.

                    $stmt = $this->conn->prepare("SELECT Likes1, Dislikes1 FROM user_posts WHERE userpost = ? AND dateandtime = ?");

                    $stmt->bind_param("ss", $userpost, $dateandtime);



                    // If there exist any entry in database then its password is matched against the one provided by user in android login form.

                    if ($stmt->execute()) {

                        $stmt->bind_result($token7, $token8);



                        // $user["Likes1"] = 1;

                        // $user["Dislikes1"] = 2;

                        // return $user;



                        // to pass informatio to original php script, which will pass it to java

                        while ($stmt->fetch()) {

                            $Likes11 = $token7;

                            $Dislikes11 = $token8;

                            // $user["rowcount"] = $rowcount;

                        }

                        $stmt->close();



                        $Likes11 = $Likes11 + 1;

                        $Dislikes11 = $Dislikes11 - 1;

                        $user["Likes1"] = $Likes11;

                        $user["Dislikes1"] = $Dislikes11;



                        $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Likes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('iss', $Likes11, $userpost, $dateandtime);

                        $result = $stmt->execute();

                        $stmt->close();



                        $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Dislikes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('iss', $Dislikes11, $userpost, $dateandtime);

                        $stmt->execute();

                        $stmt->close();



                        $like111 = 1;

                        $dislike111 = 0;



                        $stmt = $this->conn->prepare("UPDATE post_likes_dislikes " . "SET Likes1 = ? " . "WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('isss', $like111, $username1, $userpost, $dateandtime);

                        $stmt->execute();

                        $stmt->close();



                        $stmt = $this->conn->prepare("UPDATE post_likes_dislikes " . "SET Dislikes1 = ? " . "WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('isss', $dislike111, $username1, $userpost, $dateandtime);

                        $stmt->execute();

                        $stmt->close();



                        return $user;

                    } else {

                        return false;

                    }

                } else {

                    return false;

                }

            } else {

                return false;

            }

        } else {

            $stmt->close();

            // User data is inserted in the database using query "INSERT INTO".

            // The query we used is known as Prepared Statements in MySQLi.

            // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

            $Likes1 = 1;

            $Dislikes1 = 0;

            $stmt = $this->conn->prepare("INSERT INTO post_likes_dislikes(username1, userpost, Likes1, Dislikes1, dateandtime) VALUES(?, ?, ?, ?, ?)");



            // This function binds the parameters to the SQL query and tells the database what the parameters are.

            // The â€œssssssâ€� argument lists the types of data that the parameters are.

            // The s character tells MySQL that the parameter is a string

            // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

            $stmt->bind_param("ssiis", $username1, $userpost, $Likes1, $Dislikes1, $dateandtime);

            // Checking successful storage using $result

            $result = $stmt->execute();

            $stmt->close();



            // Entry is selected from table user_posts according to id provided.

            $stmt = $this->conn->prepare("SELECT dateandtime, Likes1, Dislikes1 FROM user_posts WHERE userpost = ? AND dateandtime = ?");

            $stmt->bind_param("ss", $userpost, $dateandtime);



            // If there exist any entry in database then its password is matched against the one provided by user in android login form.

            if ($stmt->execute()) {

                $stmt->bind_result($token4, $token7, $token8);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $dateandtime = $token4;

                    $Likes11 = $token7;

                    $Dislikes11 = $token8;

                    // $user["rowcount"] = $rowcount;

                }

                $stmt->close();



                $Likes11 = $Likes11 + 1;

                $user["Likes1"] = $Likes11;

                $user["Dislikes1"] = $Dislikes11;



                $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Likes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                $stmt->bind_param('iss', $Likes11, $userpost, $dateandtime);

                $result = $stmt->execute();

                $stmt->close();



                if ($result) {

                    return $user;

                }

            } else {

                return false;

            }

        }

    }



    public function dislikingpost($username1, $userpost, $dateandtime)

    {

        $stmt = $this->conn->prepare("SELECT username1, userpost from post_likes_dislikes WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

        $stmt->bind_param("sss", $username1, $userpost, $dateandtime);

        $stmt->execute();

        $stmt->store_result();



        // We are searching table user_info for the entry according to email provided by user.

        // If it exists then true is returned otherwise false.

        if ($stmt->num_rows > 0) {

            // user existed

            $stmt->close();



            $stmt = $this->conn->prepare("SELECT Likes1, Dislikes1 from post_likes_dislikes WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

            $stmt->bind_param("sss", $username1, $userpost, $dateandtime);

            $stmt->execute();

            $stmt->store_result();



            // If there exist any entry in database then its password is matched against the one provided by user in android login form.

            if ($stmt->execute()) {

                $stmt->bind_result($token4, $token5);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $Likes1 = $token4;

                    $Dislikes1 = $token5;

                    // $user["rowcount"] = $rowcount;

                }

                $stmt->close();



                if ($Likes1 == 0 and $Dislikes1 == 1) {

                    // User data is inserted in the database using query "INSERT INTO".

                    // The query we used is known as Prepared Statements in MySQLi.

                    // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value

                    $stmt = $this->conn->prepare("DELETE FROM post_likes_dislikes WHERE username1 = ?  AND userpost = ? AND dateandtime = ?");

                    $stmt->bind_param('sss', $username1, $userpost, $dateandtime);

                    $result1 = $stmt->execute();

                    $stmt->close();



                    // Entry is selected from table user_posts according to id provided.

                    $stmt = $this->conn->prepare("SELECT Likes1, Dislikes1 FROM user_posts WHERE userpost = ? AND dateandtime = ?");

                    $stmt->bind_param("ss", $userpost, $dateandtime);



                    // If there exist any entry in database then its password is matched against the one provided by user in android login form.

                    if ($stmt->execute()) {

                        $stmt->bind_result($token7, $token8);



                        // to pass informatio to original php script, which will pass it to java

                        while ($stmt->fetch()) {

                            $Likes11 = $token7;

                            $Dislikes11 = $token8;

                            // $user["rowcount"] = $rowcount;

                        }

                        $stmt->close();



                        $Dislikes11 = $Dislikes11 - 1;

                        $user["Likes1"] = $Likes11;

                        $user["Dislikes1"] = $Dislikes11;



                        $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Dislikes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('iss', $Dislikes11, $userpost, $dateandtime);

                        $result = $stmt->execute();

                        $stmt->close();



                        if ($result) {

                            return $user;

                        }

                    } else {

                        return false;

                    }

                } elseif ($Likes1 == 1 and $Dislikes1 == 0) {

                    // Entry is selected from table user_posts according to id provided.

                    $stmt = $this->conn->prepare("SELECT Likes1, Dislikes1 FROM user_posts WHERE userpost = ? AND dateandtime = ?");

                    $stmt->bind_param("ss", $userpost, $dateandtime);



                    // If there exist any entry in database then its password is matched against the one provided by user in android login form.

                    if ($stmt->execute()) {

                        $stmt->bind_result($token7, $token8);



                        // to pass informatio to original php script, which will pass it to java

                        while ($stmt->fetch()) {

                            $Likes11 = $token7;

                            $Dislikes11 = $token8;

                            // $user["rowcount"] = $rowcount;

                        }

                        $stmt->close();



                        $Likes11 = $Likes11 - 1;

                        $Dislikes11 = $Dislikes11 + 1;

                        $user["Likes1"] = $Likes11;

                        $user["Dislikes1"] = $Dislikes11;



                        $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Dislikes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('iss', $Dislikes11, $userpost, $dateandtime);

                        $result = $stmt->execute();

                        $stmt->close();



                        $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Likes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('iss', $Likes11, $userpost, $dateandtime);

                        $stmt->execute();

                        $stmt->close();



                        $like111 = 0;

                        $dislike111 = 1;



                        $stmt = $this->conn->prepare("UPDATE post_likes_dislikes " . "SET Dislikes1 = ? " . "WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('isss', $dislike111, $username1, $userpost, $dateandtime);

                        $stmt->execute();

                        $stmt->close();



                        $stmt = $this->conn->prepare("UPDATE post_likes_dislikes " . "SET Likes1 = ? " . "WHERE username1 = ? AND userpost = ? AND dateandtime = ?");

                        $stmt->bind_param('isss', $like111, $username1, $userpost, $dateandtime);

                        $stmt->execute();

                        $stmt->close();



                        return $user;

                    } else {

                        return false;

                    }

                } else {

                    return false;

                }

            } else {

                return false;

            }

        } else {



            $stmt->close();

            // User data is inserted in the database using query "INSERT INTO".

            // The query we used is known as Prepared Statements in MySQLi.

            // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

            $Likes1 = 0;

            $Dislikes1 = 1;

            $stmt = $this->conn->prepare("INSERT INTO post_likes_dislikes(username1, userpost, Likes1, Dislikes1, dateandtime) VALUES(?, ?, ?, ?, ?)");



            // This function binds the parameters to the SQL query and tells the database what the parameters are.

            // The â€œssssssâ€� argument lists the types of data that the parameters are.

            // The s character tells MySQL that the parameter is a string

            // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

            $stmt->bind_param("ssiis", $username1, $userpost, $Likes1, $Dislikes1, $dateandtime);

            // Checking successful storage using $result

            $result = $stmt->execute();

            $stmt->close();



            // Entry is selected from table user_posts according to id provided.

            $stmt = $this->conn->prepare("SELECT dateandtime, Likes1, Dislikes1 FROM user_posts WHERE userpost = ? AND dateandtime = ?");

            $stmt->bind_param("ss", $userpost, $dateandtime);



            // If there exist any entry in database then its password is matched against the one provided by user in android login form.

            if ($stmt->execute()) {

                $stmt->bind_result($token4, $token7, $token8);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $dateandtime = $token4;

                    $Likes11 = $token7;

                    $Dislikes11 = $token8;

                    // $user["rowcount"] = $rowcount;

                }

                $stmt->close();



                $Dislikes11 = $Dislikes11 + 1;

                $user["Likes1"] = $Likes11;

                $user["Dislikes1"] = $Dislikes11;



                $stmt = $this->conn->prepare("UPDATE user_posts " . "SET Dislikes1 = ? " . "WHERE userpost = ? AND dateandtime = ?");

                $stmt->bind_param('iss', $Dislikes11, $userpost, $dateandtime);

                $result = $stmt->execute();

                $stmt->close();



                if ($result) {

                    return $user;

                }

            } else {

                return false;

            }

        }

    }



    public function about_me($email, $about_me)

    {
        $stmt = $this->conn->prepare("UPDATE user_info " . "SET About_Me = ? " . "WHERE email = ?");
        $stmt->bind_param('ss', $about_me, $email);
        $result = $stmt->execute();
        $stmt->execute();
        $stmt->close();

        // Check for successful store

        if ($result) {
            $user["About_Me"] = $About_Me;
            return true;
        } else {
            return false;
        }
    }



    public function getposttext($numpostsviewed)

    {

        $message1 = "Number of posts viewed is greater than or equal to row count";

        $message2 = "Could not obtain post";



        $stmt = $this->conn->prepare("SELECT id FROM user_posts ORDER BY id");

        $stmt->execute();

        $stmt->store_result();

        $rowcount = $stmt->num_rows;

        $stmt->close();



        // return $rowcount;

        // Entry is selected from table user_posts according to id provided.

        $stmt = $this->conn->prepare("SELECT id, username1, userpost, dateandtime, image_url, video_url, Likes1, Dislikes1 FROM user_posts ORDER BY dateandtime DESC LIMIT 1 OFFSET ?");

        $stmt->bind_param("i", $numpostsviewed);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            if ($numpostsviewed < $rowcount) {

                $stmt->bind_result($token1, $token2, $token3, $token4, $token5, $token6, $token7, $token8);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $user["id"]             = $token1;

                    $user["username1"]      = $token2;

                    $user["userpost"]       = $token3;

                    $user["dateandtime"]    = $token4;

                    $user["image_url"]      = $token5;

                    $user["video_url"]      = $token6;

                    $user["Likes1"]         = $token7;

                    $user["Dislikes1"]      = $token8;

                    $user["rowcount"]       = $rowcount;

                }

                $stmt->close();



                return $user;

            } else {

                return $message1;

            }

        } else {

            return $message2;

        }

    }





    public function getposttext_userprofile($numpostsviewed_userprofile, $username1_user)

    {

        $message1 = "Number of posts viewed is greater than or equal to row count";

        $message2 = "Could not obtain post";



        $stmt = $this->conn->prepare("SELECT id FROM user_posts where username1 = ? ORDER BY id");

        $stmt->bind_param("s", $username1_user);

        $stmt->execute();

        $stmt->store_result();

        $rowcount = $stmt->num_rows;

        $stmt->close();



        // return $rowcount;

        // Entry is selected from table user_posts according to id provided.

        $stmt = $this->conn->prepare("SELECT id, username1, userpost, dateandtime, image_url, video_url, Likes1, Dislikes1 FROM user_posts where username1 = ? ORDER BY dateandtime DESC LIMIT 1 OFFSET ?");

        $stmt->bind_param("si", $username1_user, $numpostsviewed_userprofile);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            if ($numpostsviewed_userprofile < $rowcount) {

                $stmt->bind_result($token1, $token2, $token3, $token4, $token5, $token6, $token7, $token8);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $user["id"]             = $token1;

                    $user["username1"]      = $token2;

                    $user["userpost"]       = $token3;

                    $user["dateandtime"]    = $token4;

                    $user["image_url"]      = $token5;

                    $user["video_url"]      = $token6;

                    $user["Likes1"]         = $token7;

                    $user["Dislikes1"]      = $token8;

                    $user["rowcount"]       = $rowcount;

                }

                $stmt->close();



                return $user;

            } else {

                return $message1;

            }

        } else {

            return $message2;

        }

    }





    public function getposttext_user($numpostsviewed_user, $username1)

    {



        /* Bind parameters. Types: s = string, i = integer, d = double,  b = blob */

        $message1 = "Number of posts viewed is greater than or equal to row count";

        $message2 = "Could not obtain post";



        $stmt = $this->conn->prepare("SELECT id FROM FollowList where username1 = ? ORDER BY id");

        $stmt->bind_param("s", $username1);

        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        $stmt->execute();

        $stmt->store_result();

        $rowcount = $stmt->num_rows;

        $stmt->close();



        for ($i = 0; $i < $rowcount; $i++) {



            $stmt = $this->conn->prepare("SELECT username1_user FROM FollowList where username1 = ? LIMIT 1 OFFSET ?");

            $stmt->bind_param("si", $username1, $i);

            // If there exist any entry in database then its password is matched against the one provided by user in android login form.

            if ($stmt->execute()) {

                $stmt->bind_result($token1);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $username1_user1[] = &$token1;

                }

                $stmt->close();

            }

        }



        $params = array_merge($username1_user1, [$username1]);

        $in              = str_repeat('?,', count($params) - 1) . '?';

        $stringcount     = str_repeat('s',  count($params) - 1) . 's' . 'i';

        $stringcountrowcount     = str_repeat('s',  count($params) - 1) . 's';



        $comma_separated = implode('","', $params);

        $comma_separated = str_replace('"', "", $comma_separated);

        //$comma_separated = str_replace("'", '"', $comma_separated);

        //return $stringcount;

        //$username1_user = "{".implode(', ',$username1_user1)."}";  //create comma separated list

        //$username1_user  = str_repeat('?,', count($username1_user1) - 1) . '?';

        //return $params;

        $parameters = array_merge([$stringcount], $params, [$numpostsviewed_user]);





        $stmt = $this->conn->prepare("SELECT id FROM user_posts WHERE username1 IN ($in) ORDER BY id");

        call_user_func_array(array($stmt, "bind_param"), array_merge([$stringcountrowcount], $params));

        $stmt->execute();

        $stmt->store_result();

        $rowcount1 = $stmt->num_rows;

        $stmt->close();



        //return $rowcount1;



        $stmt = $this->conn->prepare("SELECT id, username1, userpost, dateandtime, image_url, video_url, Likes1, Dislikes1 FROM user_posts WHERE username1 IN ($in) ORDER BY dateandtime DESC LIMIT 1 OFFSET ?");





        call_user_func_array(array($stmt, 'bind_param'), $parameters);

        // If there exist any entry in database then its password is matched against the one provided by user in android login form.



        if ($stmt->execute()) {

            if ($numpostsviewed_user < $rowcount1) {

                $stmt->bind_result($token1, $token2, $token3, $token4, $token5, $token6, $token7, $token8);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $user["id"]             = $token1;

                    $user["username1"]      = $token2;

                    $user["userpost"]       = $token3;

                    $user["dateandtime"]    = $token4;

                    $user["image_url"]      = $token5;

                    $user["video_url"]      = $token6;

                    $user["Likes1"]         = $token7;

                    $user["Dislikes1"]      = $token8;

                    $user["rowcount"]       = $rowcount1;

                }

                $stmt->close();



                return $user;

            } else {

                return $message1;

            }

        } else {

            return $message2;

        }

    }



    public function getcommenttext($numpostsviewed, $numcommentsviewed, $username_post, $userpost, $dateandtime_post)

    {

        $stmt = $this->conn->prepare("SELECT id FROM post_comments WHERE username_post = ? AND userpost = ? AND dateandtime_post = ? ORDER BY id");

        $stmt->bind_param("sss", $username_post, $userpost, $dateandtime_post);

        $stmt->execute();

        $stmt->store_result();

        $rowcount = $stmt->num_rows;

        $stmt->close();



        // $message2 = "Could not obtain post comments";

        // return $rowcount;



        // return $rowcount;

        if ($numcommentsviewed < $rowcount) {

            // Entry is selected from table user_posts according to id provided.

            $stmt = $this->conn->prepare("SELECT id, username_post, username_comments, userpost, comments, dateandtime_post, dateandtime_comments FROM post_comments WHERE username_post = ? AND userpost = ? AND dateandtime_post = ? ORDER BY dateandtime_comments DESC LIMIT 1 OFFSET ?");

            $stmt->bind_param("sssi", $username_post, $userpost, $dateandtime_post, $numcommentsviewed);



            // If there exist any entry in database then its password is matched against the one provided by user in android login form.

            if ($stmt->execute()) {



                $stmt->bind_result($token1, $token2, $token3, $token4, $token5, $token6, $token7);



                // to pass informatio to original php script, which will pass it to java

                while ($stmt->fetch()) {

                    $user["id"] = $token1;

                    $user["username_post2"] = $token2;

                    $user["username_comments"] = $token3;

                    $user["userpost2"] = $token4;

                    $user["comments"] = $token5;

                    $user["dateandtime_post2"] = $token6;

                    $user["dateandtime_comments"] = $token7;

                    // $user["rowcount"] = $rowcount;

                }

                $stmt->close();



                return $user;

            } else {

                $message3 = "Number of comments viewed is greater than or equal to row count";

                return $message3;

            }

        } else {

            $message2 = "Could not obtain post comments";

            return $message2;

        }

    }



    public function uploading_file($username1, $userpost, $image_string, $image_name, $save_path, $image_url, $video_url, $idnum)

    {



        // $image_string = str_replace('data:image/png;base64,', '', $image_string);

        // $image_string = str_replace(' ', '+', $image_string);

        // $image = base64_decode($image_string);

        // return false;

        $imgarr = explode(',', $image_string);

        if (!isset($imgarr[0])) {

            $response["error_msg"] = "Error on post data image. String is not the expected string.";

            // return $image_string;

            return $response;

        }



        $image = base64_decode($imgarr[0]);

        if (!is_null($image)) {

            $file = $save_path . $image_name;

            // return true;

            if (file_put_contents($file, $image)) {

                return true;

            }

        } else {

            $response['error'] = TRUE;

            $response['error_msg'] = 'Error decoding base64 string.';

            return $response;

        }

    }



    public function StoreUserPosts($username1, $userpost, $image_url, $video_url)

    {

        $Likes1 = 0;

        $Dislikes1 = 0;

        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("INSERT INTO user_posts(username1, userpost, image_url, video_url, Likes1, Dislikes1) VALUES(?, ?, ?, ?, ?, ?)");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $stmt->bind_param("ssssii", $username1, $userpost, $image_url, $video_url, $Likes1, $Dislikes1);

        // Checking successful storage using $result

        $result = $stmt->execute();

        $stmt->close();



        // Check for successful store

        if ($result) {

            $stmt = $this->conn->prepare("SELECT id, username1, userpost, dateandtime, image_url, video_url FROM user_posts WHERE userpost = ?");

            $stmt->bind_param("s", $userpost);

            $stmt->execute();

            $stmt->bind_result($token1, $token2, $token3, $token4, $token5, $token6);



            // Information returned in the form of $user has the information regarding

            // name, email, gender etc. which will be later used by Android App

            while ($stmt->fetch()) {

                $user["id"] = $token1;

                $user["username1"] = $token2;

                $user["userpost"] = $token3;

                $user["dateandtime"] = $token4;

                $user["image_url"] = $token5;

                $user["video_url"] = $token6;

            }

            $stmt->close();

            return $user;

        } else {

            return false;

        }

    }



    public function followuser($username1, $username1_user)

    {

        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $follow_number = 1;

        $stmt = $this->conn->prepare("INSERT INTO FollowList(username1, username1_user, follow_number) VALUES(?, ?, ?)");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $stmt->bind_param("ssi", $username1, $username1_user, $follow_number);

        // Checking successful storage using $result

        $result = $stmt->execute();

        $stmt->close();



        // Check for successful store

        if ($result) {

            $stmt->close();

            return true;

        } else {

            return false;

        }

    }



    public function unfollowuser($username1, $username1_user)

    {

        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $follow_number = 1;

        $stmt = $this->conn->prepare("DELETE FROM FollowList WHERE username1 = ? AND username1_user = ?");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $stmt->bind_param("ss", $username1, $username1_user);

        // Checking successful storage using $result

        $result = $stmt->execute();

        $stmt->close();



        // Check for successful store

        if ($result) {

            $stmt->close();

            return true;

        } else {

            return false;

        }

    }



    public function followcheck1($email, $other_user_email)
    {
        // Entry is selected from table user_info according to username1 id provided.
        $stmt = $this->conn->prepare("SELECT email, other_user_email FROM FollowList WHERE email = ? AND other_user_email = ?");
        $stmt->bind_param("ss", $username1, $username1_user);
        // If there exist any entry in database 
        $stmt->execute();
        $stmt->store_result();
        // We are searching table user_info for the entry according to username1 provided by user.
        // If it exists then true is returned otherwise false.

        if ($stmt->num_rows > 0) {
            // users are friends
            $stmt->close();
            $boolean_temp = true;
            return $boolean_temp;

        } else {
            // users are not friends
            $stmt->close();
            $boolean_temp = false;
            return $boolean_temp;
        }
    }



    public function profile_picture($username1, $image_string, $image_name, $save_path)

    {



        // $image_string = str_replace('data:image/png;base64,', '', $image_string);

        // $image_string = str_replace(' ', '+', $image_string);

        // $image = base64_decode($image_string);

        $imgarr = explode(',', $image_string);

        if (!isset($imgarr[0])) {

            $response['message'] = 'Error on post data image. String is not the expected string.';

            // return $image_string;



            return $response;

        }

        $image = base64_decode($imgarr[0]);



        if (!is_null($image)) {

            $file = $save_path . $image_name;



            if (file_put_contents($file, $image) !== false) {



                // $image = imagecreatefromstring($image);



                // Getting the server ip (not used)

                $server_ip = gethostbyname(gethostname());



                $extension = 'jpg';

                // importing dbDetails file

                // creating the upload url



                $upload_url = 'http://108.87.160.5/android_login_example/AndroidUploadImage/ProfilePicture/';



                // file url to store in the database

                $profile_pic_ref = $upload_url . $username1 . '.' . $extension;

                $image_url = $upload_url . $username1 . '.' . $extension;



                // trying to save the file in the directory

                // $check = file_put_contents($file_path, imagejpeg($image, $file_path, 100));



                // User data is inserted in the database using query "INSERT INTO".

                // The query we used is known as Prepared Statements in MySQLi.

                // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

                // $stmt = $this->conn->prepare("INSERT INTO user_info image_url VALUES(?)");



                $stmt = $this->conn->prepare("UPDATE user_info " . "SET profile_pic_ref = ? " . "WHERE username1 = ?");

                $stmt->bind_param('ss', $profile_pic_ref, $username1);

                $result = $stmt->execute();

                $stmt->close();



                // Check for successful store

                if ($result) {

                    $user["profile_pic_ref"] = $profile_pic_ref;



                    return $user;

                } else {

                    return false;

                }

            } else {

                $response['message'] = 'Error writing file to disk';

                return $response;

            }

        } else {

            $response['message'] = 'Error decoding base64 string.';

            return $response;

        }

    }



    public function getFileName()

    {

        // $idnum=1;

        // return $idnum;

        $stmt = $this->conn->prepare("SELECT max(id) as id FROM user_posts");

        $stmt->execute();

        $stmt->bind_result($token1);



        while ($stmt->fetch()) {

            $max_id = $token1;

        }



        if ($max_id == null) {

            return 1;

        } else {

            return ++$max_id;

        }

    }



    public function fetchfiles()

    {

        $stmt = $this->conn->prepare("SELECT * FROM user_posts");
        // $stmt->bind_param("s", $id);
        // $stmt->bind_result($token1);
        $result = $stmt->execute();

        // Information returned in the form of $user has the information regarding

        // name, email, gender etc. which will be later used by Android App

        // response array

        $response = array();
        $response['error'] = false;
        $response['images'] = array();

        // traversing through all the rows

        while ($row = mysqli_fetch_array($result)) {
            $temp = array();
            $temp['id'] = $row['id'];
            $temp['name'] = $row['name'];
            $temp['url'] = $row['url'];
            return array_push($response['user_posts'], $temp);
        }

    }



    public function getusernames()

    {

        $usernameList = array();

        $stmt = $this->conn->prepare("SELECT username1 FROM user_info");

        $stmt->execute();

        // $row = bind_result_array($stmt);



        foreach ($stmt->get_result() as $row) {

            $usernameList[] = $row['username1'];

        }

        // return false;



        $stmt->close();

        return $usernameList;

    }



    public function verifyrandomcode($Code, $email)

    {

        // Entry is selected from table user_info according to email id provided.

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 20 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        // Entry is selected from table user_info according to username1 id provided.

        $stmt = $this->conn->prepare("SELECT RandomCode, email FROM random_code WHERE email = ?");

        $stmt->bind_param("s", $email);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            $stmt->bind_result($token2, $token3);



            // to pass informatio to original php script, which will pass it to java

            while ($stmt->fetch()) {

                $RandomCode1 = $token2;

                $email = $token3;

            }



            $stmt->close();



            // Verifying code

            $RandomCode1 = $token2;

            $Code1 = $Code;

            // Check for code equality

            if ($RandomCode1 == $Code1) {

                // confirm_code authentication details are correct

                $stmt = $this->conn->prepare("DELETE FROM random_code WHERE RandomCode = ?");

                $stmt->bind_param('s', $Code1);

                $stmt->execute();

                $stmt->close();

                return true;

            } else {

                return false;

            }

        } else {

            // user not existed



            return false;

        }

        // } else {

        // If code is matched then $confirm_code is returned otherwise NULL.

        // return NULL;

        // }

    }



    public function password_change($NewPassword, $ConfirmNewPassword, $username1)

    {

        // Password is encrypted using hash function.

        // This in turn is encrypted by base84_encode()

        $hash = $this->hashFunction($NewPassword);

        $encrypted_password = $hash["encrypted"]; // encrypted password

        $salt = $hash["salt"]; // salt



        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("UPDATE user_info " . "SET encrypted_password = ? " . "WHERE username1 = ?");

        $stmt->bind_param('ss', $encrypted_password, $username1);

        $result1 = $stmt->execute();

        $stmt->close();



        // Entry is selected from table user_info according to username1 id provided.

        $stmt = $this->conn->prepare("SELECT first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm FROM user_info WHERE username1 = ?");

        $stmt->bind_param("s", $username1);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            $stmt->bind_result($token2, $token3, $token4, $token5, $token6, $token7, $token8, $token9, $token10);



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

            }



            if ($result1) {

                $stmt = $this->conn->prepare("UPDATE user_info " . "SET salt = ? " . "WHERE username1 = ?");

                $stmt->bind_param('ss', $salt, $username1);

                $result2 = $stmt->execute();

                $stmt->close();

            } else {

                return FALSE;

            }



            if ($result2) {

                return $user;

            }

        }

    }



    // Get user by email and password

    public function userprofileinformation($other_user_email)
    {
    
        // Entry is selected from table user_info according to username1 id provided.
        $stmt = $this->conn->prepare("SELECT id, first_name, last_name, username1, email, profile_pic_ref, banner_pic_ref, About_Me, username1_lowercase, dateandtime, current_location, numPosts, numComments, numLikes, numDislikes, numFollowers, numFollowing  FROM user_info WHERE email = ?");
        $stmt->bind_param("s", $other_user_email);

        // If there exist any entry in database then data is retrieved
        if ($stmt->execute()) {
            $stmt->bind_result($token1, $token2, $token3, $token4, $token5, $token11, $token12, $token13, $token14, $token15, $token16, $token17, $token18, $token19, $token20, $token21, $token22);

            // to pass informatio to original php script, which will pass it to java
            while ($stmt->fetch()) {
                $user["id"]                     = $token1;
                $user["first_name"]             = $token2;
                $user["last_name"]              = $token3;
                $user["username1"]              = $token4;
                $user["email"]                  = $token5;
                $user["profile_pic_ref"]        = $token11;
                $user["banner_pic_ref"]         = $token12;
                $user["About_Me"]               = $token13;
                $user["username1_lowercase"]    = $token14;
                $user["dateandtime"]            = $token15;
                $user["current_location"]       = $token16;
                $user["numPosts"]               = $token17;
                $user["numComments"]            = $token18;
                $user["numLikes"]               = $token19;
                $user["numDislikes"]            = $token20;
                $user["numFollowers"]           = $token21;
                $user["numFollowing"]           = $token22;

            }

            $stmt->close();
            return $user;

        } else {
            // If password matched then $user is returned otherwise NULL.
            return null;
        }
    }



    public function check_password($username1, $OldPassword)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 5 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        // Entry is selected from table user_info according to username1 id provided.

        $stmt = $this->conn->prepare("SELECT first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm FROM user_info WHERE username1 = ?");

        $stmt->bind_param("s", $username1);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            $stmt->bind_result($token2, $token3, $token4, $token5, $token6, $token7, $token8, $token9, $token10);



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

            }



            $stmt->close();



            // Verifying user password

            $encrypted_password = $token6;

            $salt = $token7;



            // Matching is done by decrypting password using checkHashFunction.

            $hash = $this->CheckHashFunction($salt, $OldPassword);



            // Check for password equality

            if ($encrypted_password == $hash) {

                // User authentication details are correct

                return FALSE;

            } else {

                // If password matched then $user is returned otherwise NULL.

                return TRUE;

            }

        }

    }



    public function sendemailforusername($email)

    {

        // Entry is selected from table user_info according to email id provided.

        $stmt = $this->conn->prepare("SELECT username1, email FROM user_info WHERE email = ?");

        $stmt->bind_param("s", $email);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            $stmt->bind_result($token4, $token5);



            while ($stmt->fetch()) {

                $user["username1"] = $token4;

                $user["email"] = $token5;

            }



            $stmt->close();



            // Verifying code

            // $username1 = $token4;

            $email = $token5;

            // send email



            require '/usr/share/php/libphp-phpmailer/class.phpmailer.php';

            require '/usr/share/php/libphp-phpmailer/class.smtp.php';

            $mail = new PHPMailer();

            // The Client's Email ID

            $to = $email;



            // Header Information

            // $header = "From: rogersjohn44@example.com";



            // The Subject of the email

            // $subject = "=?UTF-8?B?".base64_encode($subject)."?=";



            // $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";

            // $headers = "From: $from_user <$from_email>\r\n".

            // "MIME-Version: 1.0" . "\r\n" .

            // "Content-type: text/html; charset=UTF-8" . "\r\n";



            // The message with the confirmation code

            $message = "Your Account Information Email \r\n";

            $message .= "Your Username is the following: \r\n\n";



            // The confirmation link to confirmation.php

            // We use 'get' method to retrieve the random code from the URL

            // {host address}/{confirmation processing page}?{random code name}={actual variable}

            $message .= "$username1  \r\n\n";

            // Send the actual mail and wait for status

            // $sentmail = mail($to, $subject, $message, $header);



            $mail->setFrom('admin@example.com');

            $mail->addAddress($email);

            $mail->Subject = 'Sports Coach - Account Information';

            $mail->Body = $message;

            $mail->IsSMTP();

            $mail->SMTPSecure = 'ssl';

            $mail->Host = 'ssl://smtp.gmail.com';

            $mail->SMTPAuth = true;

            $mail->Port = 465;



            // Set your existing gmail address as user name

            $mail->Username = 'sportscoach12345@gmail.com';



            // Set the password of your gmail address here

            $mail->Password = '07180718Jr!';



            if (!$mail->send()) {

                return false;

            } else {

                return $user;

            }

        } else {

            // If code is matched then $confirm_code is returned otherwise NULL.

            return null;

        }

    }



    public function sendemailforpassword($email)

    {

        // Entry is selected from table user_info according to email id provided.

        $stmt = $this->conn->prepare("SELECT encrypted_password, email FROM user_info WHERE email = ?");

        $stmt->bind_param("s", $email);



        // If there exist any entry in database then its password is matched against the one provided by user in android login form.

        if ($stmt->execute()) {

            $stmt->bind_result($token6, $token5);



            while ($stmt->fetch()) {



                $user["encrypted_password1"] = $token6;

                $user["email"] = $token5;



                $encrypted_password1 = $token6;

                $email = $token5;

            }



            $stmt->close();



            // send email

            $password = substr(md5(uniqid(rand())), 0, 10);



            // Password is encrypted using hash function.

            // This in turn is encrypted by base84_encode()

            $hash = $this->hashFunction($password);

            $encrypted_password = $hash["encrypted"]; // encrypted password

            $salt = $hash["salt"]; // salt



            // User data is inserted in the database using query "INSERT INTO".

            // The query we used is known as Prepared Statements in MySQLi.

            // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

            $stmt = $this->conn->prepare("UPDATE user_info " . "SET encrypted_password = ? " . "WHERE email = ?");

            $stmt->bind_param('ss', $encrypted_password, $email);

            $result = $stmt->execute();

            $stmt->close();



            $stmt = $this->conn->prepare("UPDATE user_info " . "SET salt = ? " . "WHERE email = ?");

            $stmt->bind_param('ss', $salt, $email);

            $result = $stmt->execute();

            $stmt->close();



            require '/usr/share/php/libphp-phpmailer/class.phpmailer.php';

            require '/usr/share/php/libphp-phpmailer/class.smtp.php';

            $mail = new PHPMailer();

            // The Client's Email ID

            $to = $email;



            // Header Information

            // $header = "From: rogersjohn44@example.com";



            // The Subject of the email

            // $subject = "=?UTF-8?B?".base64_encode($subject)."?=";



            // $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";

            // $headers = "From: $from_user <$from_email>\r\n".

            // "MIME-Version: 1.0" . "\r\n" .

            // "Content-type: text/html; charset=UTF-8" . "\r\n";



            // The message with the confirmation code

            $message = "Your Account Information Email \r\n";

            $message .= "Your new password is the following: \r\n\n";



            // The confirmation link to confirmation.php

            // We use 'get' method to retrieve the random code from the URL

            // {host address}/{confirmation processing page}?{random code name}={actual variable}

            $message .= "$password  \r\n\n";

            $message .= "Change your password next time you login.  \r\n\n";

            // Send the actual mail and wait for status

            // $sentmail = mail($to, $subject, $message, $header);



            $mail->setFrom('admin@example.com');

            $mail->addAddress($email);

            $mail->Subject = 'Sports Coach - Account Information';

            $mail->Body = $message;

            $mail->IsSMTP();

            $mail->SMTPSecure = 'ssl';

            $mail->Host = 'ssl://smtp.gmail.com';

            $mail->SMTPAuth = true;

            $mail->Port = 465;



            // Set your existing gmail address as user name

            $mail->Username = 'sportscoach12345@gmail.com';



            // Set the password of your gmail address here

            $mail->Password = '07180718Jr!';



            if (!$mail->send()) {

                return false;

            } else {

                return $user;

            }

        } else {

            // If code is matched then $confirm_code is returned otherwise NULL.

            return null;

        }

    }



    // public function randomcodecheck($first_name, $last_name, $username1, $email, $password, $gender, $dob, $confirm)

    public function randomcodecheck($first_name, $last_name, $email, $confirm, $encrypted_password, $salt)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 20 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        // require '/usr/share/php/libphp-phpmailer/class.phpmailer.php';

        // require '/usr/share/php/libphp-phpmailer/class.smtp.php';

        require 'Exception.php';

        require 'PHPMailer.php';

        require 'SMTP.php';

        // require 'OAuth.php';

        // require 'POP3.php';



        $mail = new PHPMailer();

        $smtpobj = new SMTP();



        // Generate a random hash with the unique and rand functions

        // This is to ensure that every user gets a unique and non-repeating

        // random identifier

        $RandomCode = substr(md5(uniqid(rand())), 0, 10);



        // The Client's Email ID

        $to = $email;



        // Header Information

        // $header = "From: rogersjohn44@example.com";



        // The Subject of the email

        // $subject = "=?UTF-8?B?".base64_encode($subject)."?=";



        // $from_user = "=?UTF-8?B?".base64_encode($from_user)."?=";

        // $headers = "From: $from_user <$from_email>\r\n".

        // "MIME-Version: 1.0" . "\r\n" .

        // "Content-type: text/html; charset=UTF-8" . "\r\n";



        // The message with the confirmation code

        $message = "Thank you for making your presence more known on WWP! The connection we all share on the platform is stronger with you doing so. \r\n\n";

        // $message .= "The following 10 digits are needed to activate your account: \r\n\n";



        // The confirmation link to confirmation.php

        // We use 'get' method to retrieve the random code from the URL

        // {host address}/{confirmation processing page}?{random code name}={actual variable}

        // $message .= "$RandomCode  \r\n\n";

        $message .= "Click the link below to confirm your email and create your account!\n\n";

        $message .= "https://worldwideprayer.world/email_confirmation.php?RandomCode=$RandomCode&first_name=$first_name&last_name=$last_name&email=$email&confirm=1&encrypted_password=$encrypted_password&salt=$salt";

        $message .= "\n\n";

        $message .= "This code will expire in 5 minutes.";

        // Send the actual mail and wait for status

        // $sentmail = mail($to, $subject, $message, $header);



        $mail->setFrom("worldwideprayer@worldwideprayer.world");

        $mail->addAddress($email);

        $mail->Subject = "World Wide Prayer - Confirmation";

        $mail->Body = $message;

        $mail->IsSMTP();

        $mail->SMTPDebug = 2; // show debugging stuff

        $mail->SMTPSecure = "ssl";

        // $mail->Host = "ssl://smtp.gmail.com";

        // $mail->Host = "88.214.194.166";

        $mail->Host = "mail.worldwideprayer.world";

        echo "  Host: $mail->Host  ";

        $mail->SMTPAuth = true;

        $mail->Port = 465;

        // $mail->Port = 25;



        // Set your existing gmail address as user name

        $mail->Username = "worldwideprayer@worldwideprayer.world";



        // Set the password of your gmail address here

        $mail->Password = "Sinc30358";



        if (!$mail->send()) {

            echo "Mail failed to send: " . $mail->ErrorInfo;

            return false;

        } else {



            // If email is sent or not sent

            // if($sentmail){

            // Check for successful store



            // User data is inserted in the database using query "INSERT INTO".

            // The query we used is known as Prepared Statements in MySQLi.

            // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

            $stmt = $this->conn->prepare("INSERT INTO random_code(RandomCode, email) VALUES(?, ?)");



            // This function binds the parameters to the SQL query and tells the database what the parameters are.

            // The â€œssssssâ€� argument lists the types of data that the parameters are.

            // The s character tells MySQL that the parameter is a string

            // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

            $stmt->bind_param("ss", $RandomCode, $email);

            // Checking successful storage using $result

            $result = $stmt->execute();

            $stmt->close();



            if ($result) {

                $stmt = $this->conn->prepare("SELECT RandomCode, email FROM random_code WHERE email = ?");

                $stmt->bind_param("s", $email);

                $stmt->execute();

                $stmt->bind_result($token2, $token3);



                // Information returned in the form of $confirm_user has the information regarding

                // name, email, gender etc. which will be later used by Android App

                $i = 0;

                while ($stmt->fetch()) {

                    $user[$i]["first_name"] = $first_name;

                    $user[$i]["last_name"] = $last_name;

                    // $user["username1"] = $username1;

                    $user[$i]["email"] = $email;

                    // $user["gender"] = $gender;

                    // $user["dob"] = $dob;

                    $user[$i]["confirm"] = $confirm;

                    // $user = TRUE;

                    $i++;

                }

                $stmt->close();

                // echo "Your Confirmation link Has Been Sent To Your Email Address.";

                return $user;

            } else {

                // $user = false;

                // echo "Cannot send Confirmation link to your e-mail address";

                return false;

            }

        }

    }



    // Storing new user

    // Returns user details

    public function StoreUserInfo($first_name, $last_name, $username1, $email, $password, $gender, $dob, $confirm)

    {

        // Password is encrypted using hash function.

        // This in turn is encrypted by base84_encode()

        $hash = $this->hashFunction($password);

        $encrypted_password = $hash["encrypted"]; // encrypted password

        $salt = $hash["salt"]; // salt



        // User data is inserted in the database using query "INSERT INTO".

        // The query we used is known as Prepared Statements in MySQLi.

        // In our SQL, we insert a question mark (?) where we want to substitute in an integer, string, double or blob value.

        $stmt = $this->conn->prepare("INSERT INTO user_info(first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm, profile_pic_ref) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?,?)");



        // This function binds the parameters to the SQL query and tells the database what the parameters are.

        // The â€œssssssâ€� argument lists the types of data that the parameters are.

        // The s character tells MySQL that the parameter is a string

        // By telling MySQL what type of data to expect, we minimize the risk of SQL injections.

        $profile_pic_ref = "hello";

        $stmt->bind_param("ssssssssss", $first_name, $last_name, $username1, $email, $encrypted_password, $salt, $gender, $dob, $confirm, $profile_pic_ref);

        // Checking successful storage using $result

        $result = $stmt->execute();

        $stmt->close();



        // Check for successful store

        if ($result) {

            $stmt = $this->conn->prepare("SELECT first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm FROM user_info WHERE email = ?");

            $stmt->bind_param("s", $email);

            $stmt->execute();

            $stmt->bind_result($token2, $token3, $token4, $token5, $token6, $token7, $token8, $token9, $token10);



            // Information returned in the form of $user has the information regarding

            // name, email, gender etc. which will be later used by Android App

            while ($stmt->fetch()) {

                $user["email"] = $token5;

            }

            $stmt->close();

            return $user;

        } else {

            return false;

        }

    }



    // Encrypting password @param password returns salt and encrypted password

    public function hashFunction($password)

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



    // Get user by email and password

    public function VerifyUsernameAuthentication($username1, $password)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 5 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        // Entry is selected from table user_info according to username1 id provided.

        $stmt = $this->conn->prepare("SELECT first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm, profile_pic_ref, About_Me FROM user_info WHERE email = ?");

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



            // Verifying user password

            $encrypted_password = $token6;

            $salt = $token7;



            // Matching is done by decrypting password using checkHashFunction.

            $hash = $this->CheckHashFunction($salt, $password);



            // Check for password equality

            if ($encrypted_password == $hash) {

                // User authentication details are correct

                return $user;

            } else {

                // If password matched then $user is returned otherwise NULL.

                return null;

            }

        } else {

            // If password matched then $user is returned otherwise NULL.

            return null;

        }

    }



    // Get user by email and password

    public function VerifyEmailAndPasswordAuthentication($email, $password)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 5 MINUTE)");
        // $stmt->bind_param('s', $email);
        $stmt->execute();
        $stmt->close();

        // Entry is selected from table user_info according to username1 id provided.
        $stmt = $this->conn->prepare("SELECT id, first_name, last_name, username1, email, encrypted_password, salt, gender, dob, confirm, profile_pic_ref, banner_pic_ref, About_Me, username1_lowercase, dateandtime, current_location, numPosts, numComments, numLikes, numDislikes, numFollowers, numFollowing  FROM user_info WHERE email = ?");
        $stmt->bind_param("s", $email);

        // If there exist any entry in database then data is retrieved
        if ($stmt->execute()) {
            $stmt->bind_result($token1, $token2, $token3, $token4, $token5,$token6, $token7, $token8, $token9, $token10, $token11, $token12, $token13, $token14, $token15, $token16, $token17, $token18, $token19, $token20, $token21, $token22);

            // to pass informatio to original php script, which will pass it to java
            while ($stmt->fetch()) {
                $user["id"]                     = $token1;
                $user["first_name"]             = $token2;
                $user["last_name"]              = $token3;
                $user["username1"]              = $token4;
                $user["email"]                  = $token5;
                $user["encrypted_password"]     = $token6;
                $user["salt"]                   = $token7;
                $user["gender"]                 = $token8;
                $user["dob"]                    = $token9;
                $user["confirm"]                = $token10;
                $user["profile_pic_ref"]        = $token11;
                $user["banner_pic_ref"]         = $token12;
                $user["About_Me"]               = $token13;
                $user["username1_lowercase"]    = $token14;
                $user["dateandtime"]            = $token15;
                $user["current_location"]       = $token16;
                $user["numPosts"]               = $token17;
                $user["numComments"]            = $token18;
                $user["numLikes"]               = $token19;
                $user["numDislikes"]            = $token20;
                $user["numFollowers"]           = $token21;
                $user["numFollowing"]           = $token22;

            }

            $stmt->close();



            if (!$token5) {

                // Email does not exist in database.

                echo "This email does not belong to any account.";

            }



            // Verifying user password

            $encrypted_password = $token6;

            $salt = $token7;



            // Matching is done by decrypting password using checkHashFunction.

            $hash = $this->CheckHashFunction($salt, $password);



            // echo " password: " . "$password, ";

            // echo " salt: " . "$salt, ";

            // echo " encrypted_password: " . "$encrypted_password, ";

            // echo " hash: " . "$hash, ";



            // Check for password equality

            if ($encrypted_password == $hash) {

                // User authentication details are correct

                return $user;

            } else {

                // If password matched then $user is returned otherwise NULL.

                echo "This password does not match this email.";

                return null;

            }

        } else {

            // Even if the email does not exist in the db, the if statement above will be true and the code inside will run. So this will only

            // run if some error occurred preventing the SQL statement from going through.

            echo "SQL statement didn't work for some reason.";

            return null;

        }

    }



    // Decrypting password @param salt, password returns hash string

    public function CheckHashFunction($salt, $password)

    {

        $hash = base64_encode(sha1($password . $salt, true) . $salt);

        return $hash;

    }



    // Check if user exists or not

    public function CheckExistingUserEmail($email)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 5 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        $stmt = $this->conn->prepare("SELECT email from user_info WHERE email = ?");



        $stmt->bind_param("s", $email);



        $stmt->execute();



        $stmt->store_result();



        // We are searching table user_info for the entry according to email provided by user.

        // If it exists then true is returned otherwise false.

        if ($stmt->num_rows > 0) {

            // user existed

            $stmt->close();

            return true;

        } else {

            // user not existed

            $stmt->close();

            return false;

        }

    }



    // Check user is existed or not

    public function CheckExistingUserEmailRandomCodeTable($email)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 20 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        $stmt = $this->conn->prepare("SELECT email from random_code WHERE email = ?");



        $stmt->bind_param("s", $email);



        $stmt->execute();



        $stmt->store_result();



        // We are searching table random_code for the entry according to email provided by user.

        // If it exists then true is returned otherwise false.

        if ($stmt->num_rows > 0) {

            // user existed

            $stmt->close();

            return true;

        } else {

            // user not existed

            $stmt->close();

            return false;

        }

    }



    // Check user is existed or not

    public function CheckExistingUsername($username1)

    {

        $stmt = $this->conn->prepare("DELETE FROM random_code WHERE CreatedAt < (NOW() - INTERVAL 20 MINUTE)");

        // $stmt->bind_param('s', $email);

        $stmt->execute();

        $stmt->close();



        $stmt = $this->conn->prepare("SELECT username1 from user_info WHERE username1 = ?");



        $stmt->bind_param("s", $username1);



        $stmt->execute();



        $stmt->store_result();



        // We are searching table user_info for the entry according to username1 provided by user.

        // If it exists then true is returned otherwise false.

        if ($stmt->num_rows > 0) {

            // user existed

            $stmt->close();

            return true;

        } else {

            // user not existed

            $stmt->close();

            return false;

        }

    }

}

