<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Cadastros</title>
    <link rel="stylesheet" href="../estilos/styleCadastrar.css">
</head>

<body>
    <header>
        <nav>
            <ul>
                <li><a href="../index.html">Home</a></li>
                <li><a href="#">Cadastrar Usuário</a></li>
                <li><a href="verficarUsuario.php">Procurar Usuário</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <form action="cadastro.php" method="POST">
            <h2>Cadastro de Alunos</h2>

            <label for="nome">Nome</label>
            <input id="nome" name="nome" type="text">

            <label for="sobrenome">SobreNome</label>
            <input id="sobrenome" name="sobrenome" type="text">

            <label for="email">E-mail</label>
            <input id="email" name="email" type="email">

            <label for="curso">Selecione o Curso</label>
            <select name="curso" id="curso">
                <option selected disabled>Selecione uma opção</option>
                <option value="ads">Análise e Desenvolvimento de Sistemas</option>
                <option value="es">Engenharia de Software</option>
                <option value="si">Sistemas da Informação</option>
                <option value="cc">Ciências da Computação</option>
            </select>

            <input type="submit" value="Cadastrar">
        </form>
    </main>

    <?php

    try {
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            include("../conexao/conexao.php");

            $nome = $_POST["nome"];
            $sobrenome = $_POST["sobrenome"];
            $email = $_POST["email"];
            $curso = $_POST["curso"];

            $hoje = new DateTime();
            $id = $hoje->format("Ym") . rand(100, 999);

            $sql = "INSERT INTO usuarios (id, nome, sobrenome, email, curso) values (?,?,?,?,?)";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("issss", $id, $nome, $sobrenome, $email, $curso);
            $stmt->execute();

            echo "<div class='mensagem sucesso'> Usuario cadastrado com sucesso </div>";
            $stmt->close();
            $conn->close();
        }
    } catch(mysqli_sql_exception $e){
        if(str_contains($e -> getMessage(), "Duplicate entry")){
            echo "<div class='mensagem erro'> E-mail já está cadastrado! </div>";
        } else{
            echo "<div class='mensagem erro'> Erro ao cadastrar, tente novamente mais tarde! </div>";
            
        }

    }
    ?>
</body>

</html>