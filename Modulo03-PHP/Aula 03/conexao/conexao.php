<?php 
    $servername = "localhost";  //ip ou domínio do server
    $username = "root"; //usuário do banco
    $password = ""; // senha do banco
    $dbname = "DBfaculdade";
    //Criar conexão
    $conn = new mysqli($servername, $username, $password, $dbname);

    //verificar conexão
    if ($conn->connect_error){
        die("Conexão Falhou");
    }
?>