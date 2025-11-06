<?php 
    //verifica se id está vazio
if (isset($_POST["id"])){
    //conexão com bd
    include("../conexao/conexao.php");

    //armazena valor de id
    $id = $_POST["id"];

    //prepara a consulta SQL
    $sql = "DELETE FROM usuarios WHERE ID = ?";
    $stmt = $conn->prepare($sql);

    if($stmt) {
        $stmt->bind_param("i", $id);
        //executa a query
        $stmt->execute();
        $stmt->close();

        header("Location: verificarUsuario.php");
    } else{
        echo "<div class='mensagem erro'>Erro na consulta!</div>";
    }

}

?>