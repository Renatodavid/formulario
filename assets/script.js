function Verificarcampospreenchidos(){
    var Cadastrar= document.getElementById("cadastrar-input").Value;
    var usuario= document.getElementById("usuario-input").Value;
    var senha= document.getElementById("senha-input"). Value;
    if(usuario,Cadastrar ===''|| senha ===''){
        return alert('obrigadorio o preenchimento de todos os campos.')
    }
    return alert('campos preenchidos com sucesso.')
}