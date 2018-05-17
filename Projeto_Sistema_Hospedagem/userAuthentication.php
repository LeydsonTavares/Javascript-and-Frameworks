<?php
$host = "localhost:3308";
$user = "root";
$pass = "";
$banco = "hotelnet";
$conexao = mysqli_connect($host, $user, $pass) or die(mysqli_error());
$conexao->select_db($banco) or die(mysqli_error());
?>

<!DOCTYPE html>
<html>
<head>
	<title>Autenticando usuário</title>
	<script type="text/javascript">
		function loginSuccessfully() {
			setTimeout("window.location='www.google.com.br'", 5000);
		}
		function loginFailed(){
			setTimeout("window.location='index.html'", 5000);
		}
	</script>
</head>
<body>	
	<?php
	$login = $_POST['login'];
	$senha = $_POST['senha'];
	
	$sql = $conexao->query("SELECT * FROM login where login = '$login' and senha = '$senha'") or die(mysql_error());
	$row = $sql->num_rows($sql); // retorna o numero de colunas da query
	if($row > 0){
		session_start();
		$_SESSION['login'] = $_POST['login'];
		$_SESSION['senha'] = $_POST['senha'];
		echo "<center>Você foi autenticado com sucesso<center>";
		echo "<script>loginSuccessfully()</script>";
	}else{
		echo "<center>Nome de usuário ou senha inválidos, aguarde um instante para tentar novamente</center>";
		echo "<script>loginFailed()</script>";
	}

	?>
</body>
</html>