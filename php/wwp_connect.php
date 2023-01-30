<?php

//Used to connect to the server.
//After connection, we can make queries to insert, update, or delete data.

//make class, same name as php file
class wwp_connect {
	// Private variable
    private $conn;

    // Connecting to database
    public function connect() {

        // need to see more detailed error messages
        mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

		//Include the wwp_config.php file to bring credemtials to the wamp server
        require_once 'wwp_config.php';

        if ($mysqli_connection->connect_error) {
            echo "Could not connect to " . DB_USER . ", error: " . $mysqli_connection->connect_error;
        } else {
            // echo "Connected to " . DB_USER;
        }

        // Connecting to mysql database
        $this->conn = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE);

        // return database object
        return $this->conn;
    }
}

?>