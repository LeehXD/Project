function update() {
    if (document.getElementById("valor").value > 0) {
      var select = document.getElementById("moeda");
      var valor = parseInt(select.options[select.selectedIndex].value);
      if (valor == 0) {
        var valorMoeda = 1;
      }
      if (valor == 2) {
        var valorMoeda = 6.19;
      }
      if (valor == 3) {
        var valorMoeda = 7.26;
      }
      if (valor == 1) {
        var valorMoeda = 5.25;
      }
      if (valor == 4) {
        var valorMoeda = 252124.59;
      }
      var valorReal = parseFloat(document.getElementById("valor").value);
      var valorFinal = valorReal * valorMoeda;
      var elementoValorConvertido = document.getElementById("valorConvertido");
      var valorConvertido = "O valor em real é " + valorFinal.toFixed(2);
      elementoValorConvertido.innerHTML = valorConvertido;
    } else {
      var elementoValorConvertido = document.getElementById("valorConvertido");
      elementoValorConvertido.innerHTML = "Voce deve preencher o valor";
    }
  }
  
}

