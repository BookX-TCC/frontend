const lblCep = document.getElementById("cep");
const btnProcuraCep = document.querySelector(".icone");

const lblEndereco = document.getElementById("endereco");
const lblComplemento = document.getElementById("comp");
const lblBairro = document.getElementById("bairro");
const lblCidade = document.getElementById("cidade");
const lblEstado = document.getElementById("estado");

const options = {
   method: "GET",
   mode: "cors",
   cache: "default",
};

console.log(lblCep.value);

btnProcuraCep.addEventListener("click", () => {
   fetch(`https://viacep.com.br/ws/${lblCep.value}/json/`, options).then(
      (res) => {
         res.json().then((data) => {
            console.log(data);
            lblEndereco.value = data.logradouro;
            lblComplemento.value = data.complemento;
            lblBairro.value = data.bairro;
            lblCidade.value = data.localidade;
            lblEstado.value = data.uf;
         });
      }
   );
});
