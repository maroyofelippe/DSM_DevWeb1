function validar(){
    var nome = cadastro.nome.value;
    var cpf = cadastro.cpf.value;
    var email = cadastro.email.value;
    var senha = cadastro.senha.value;
    var csenha = cadastro.csenha.value;

    if(nome==""){
        alert("Campo nome não pode ser vazio");
        cadastro.nome.focus();
        return false;
    }

    if(cpf==""){
        alert("CPF é campo de preenchimento obrigatório!");
        cadastro.cpf.focus();
        return false;
    }

    if(cpf.length!=14){
        alert("CPF inválido!");
        cadastro.cpf.focus();
        return false;
    }

    if(email==""){
        alert("Campo e-mail é de preenchimento obrigatório!");
        cadastro.email.focus();
        return false;
    }

    if(senha==""){
        alert("Campo Senha é de preenchimento obrigatório!");
        cadastro.senha.focus();
        return false;
    }

    if(senha.length < 6 || senha.length > 10){
        alert("Campo Senha deve ser maior que 6 e menor que 10 números!");
        cadastro.senha.focus();
        return false;
    }

    if(isNaN(senha)){
        alert("A Senha deverá ser numérica");
        cadastro.senha.focus();
        return false;
    }

    if(csenha==""){
        alert("É obrigatório confirmar a senha!");
        cadastro.csenha.focus();
        return false;
    }

    if(csenha!=senha){
        alert("A Senha e a confirmação não conferem");
        cadastro.csenha.focus();
        return false;
    }

}