
function consisteNome() {
    if (document.feedback.nome.value.length < 10) {
        alert("Preencha com o nome completo");
        document.feedback.nome.focus();
    }
  }
  
  function consisteEmail() {
    if (document.feedback.email.value.length < 10) {
        alert("Preencha com o email completo");
        document.feedback.email.focus();
    }
  }
  
  function consisteTelefone() {
    if (document.feedback.telefone.value.length < 11 || 
        document.feedback.telefone.value.length > 14) {
        alert("Preencha com o DDD e telefone completo");
    }
  }
  
  function consisteIdade() {
    if (document.feedback.idade.value > 120) {
        alert("Preencha com uma idade válida (máx. 120 anos)");
        document.feedback.idade.style.backgroundColor="yellow";
        //document.feedback.datanascimento.focus();
    } else {
        document.feedback.idade.style.backgroundColor="white";
    }
  }
  
  function consiste() {
    consisteNome();
    consisteEmail();
    consisteTelefone();
    consisteIdade();
  }

  
  function quantificaErrada() {
    document.feedback.medidor1.value = document.feedback.quantidade.value;
    document.feedback.medidor2.value = document.feedback.quantidade.value / 10;
    document.feedback.barraProgresso.value = document.feedback.quantidade.value * 10;
  }
  
  function preencheBarra() {
    document.getElementById("medidor1").value = document.getElementById("quantidade").value;
    document.getElementById("medidor2").value = document.getElementById("quantidade").value / 10;
    document.getElementById("barraProgresso").value = document.getElementById("quantidade").value * 10;
  }

  function medidor() {
    var range = document.querySelector("#agradou");

    var medidor1 = document.getElementById("medidor1");
    medidor1.value = range.value;

    var medidor2 = document.getElementById("medidor2");
    medidor2.value = range.value / 10;

    var bProgresso = document.getElementById("barraProgresso");
    bProgresso.value = range.value * range.max;
}
