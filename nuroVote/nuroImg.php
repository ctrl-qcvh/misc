$hostname = "us-phx-web1442.main-hosting.eu";
$username = "u384165119_YUgLW@127.0.0.1";
$password = "$P$BYnYsZ8k0ORFtVQ9DOEDRlJAbJwqck/";
$database = "nuroImgTraningData";
$conn = new mysqli($hostname, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$stmt = $conn->prepare("INSERT INTO `nuroImgTraningData` (`imgData`, `description`, `imgRaiting`) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $imgData, $description, $imgRaiting);
$imgData = "sample image data"; // This should be the actual image data or a path to the image data
$description = "This is a sample image";
$imgRaiting = 5;
$stmt->execute();
echo "New record created successfully";
$stmt->close();
$conn->close();