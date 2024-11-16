<?php
$server="localhost";
$username="root";
$password="";
$database="ecom_sepatu";

$koneksi = mysqli_connect($server,$username,$password,$database);

if(mysqli_connect_errno()){
    echo "koneksi Gagal" . mysqli_connect_error();
}else{
    echo "koneksi berhasil";
}

?>