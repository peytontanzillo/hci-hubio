<?php

DEFINE ('DB_USER', 'hci_hub_io');
DEFINE ('DB_PSWD', 'HThpytpXkvty5fV');
DEFINE ('DB_HOST', 'db4free.net:3306');
DEFINE ('DB_NAME', 'hci_hub_io');

$dbcon = mysqli_connect(DB_HOST, DB_USER, DB_PSWD, DB_NAME);

if (!$dbcon) {
  die('error connecting to database');
}

echo 'you have connected successfully';

?>
