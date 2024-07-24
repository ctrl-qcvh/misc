$hostname = "127.0.0.1";//localHost
$username = "u384165119_ctrl_h_macro";
$password = "Pyuxjkwt21381g";
$database = "u384165119_ctr_H";//
$conn = new mysqli($hostname, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$stmt = $conn->prepare("INSERT INTO `nuroImgTraningData` (`imgData`, `description`, `imgRating`) VALUES (?, ?, ?)");
$stmt->bind_param("iii", $imgData, $description, $imgRating);
$imgData=[]
print_r($imgData) 
print_r("worked4")
$description=[] 
$imgRating=[50]
$stmt->execute();
echo "New record created successfully";
$stmt->close();
$conn->close();

//pdo
