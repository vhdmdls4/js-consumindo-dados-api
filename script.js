async function searchAdress(cep) {
  var errorWarning = document.getElementById("erro");
  errorWarning.innerHTML = "";
  try {
    var searchCEP = await fetch(`https://viacep.com.br/ws/${cep}/json`);
    var searchCEPconverted = await searchCEP.json();
    if (searchCEPconverted.erro) {
      throw Error("CEP não existente");
    }
    var adress = document.querySelector('input[name="endereco"]');
    var borough = document.querySelector('input[name="bairro"]');
    var city = document.querySelector('input[name="cidade"]');
    var state = document.querySelector('select[name="estado"]');

    adress.value = searchCEPconverted.logradouro;
    borough.value = searchCEPconverted.bairro;
    city.value = searchCEPconverted.localidade;
    state.value = searchCEPconverted.uf;

    console.log(searchCEPconverted);

    return searchCEPconverted;
  } catch (err) {
    errorWarning.innerHTML = `<p> CEP inválido, tente novamente! </p>`;
    console.log(err);
  }
}

var cep = document.getElementById("cep");

cep.addEventListener("focusout", () => {
  searchAdress(cep.value);
});

// let CEPArray = ["01001000", "30330000", 31310350];
// let allCEPs = [CEPArray.map((valores) => searchAdress(valores))];
// Promise.all(allCEPs).then((response) => console.log(response));

/*
//await acima só funciona dentro de uma async function, await async só funciona com uma promisse por vez.
//Para saber: promises usando o .then() são processadas em paralelo e, portanto, mais rápidas.
//Já o método async/await é um método mais palatável do ponto de vista da legibilidade do código, syntax sugar.
//https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar
//muitos callbacks function, forma acima evita isso
async function data() {
  const consultaCEP = fetch("https://viacep.com.br/ws/35330000/json/", {})
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
}

data();

//or

const verCEP = fetch("https://viacep.com.br/ws/35330000/json/", {})
  .then((response) => response.json())
  .then((response) => {
    if (response.erro) {
      throw Error("CEP não deu bom");
    } else console.log(response);
  })
  .catch((err) => console.log(err))
  .finally((message) => console.log("Successful"));

//fetch é um comando assíncrono que executa uma promise que tem
//um resolve e um reject (dois callbacks), caso dê errado, reject;
//Api é basicamente uma aplicação que faz a conexão entre cliente,
//que faz requisição/solicitação, e servidor, que manda resposta
// fetch("https://viacep.com.br/ws/01001000/json/",{
//   method: 'get',
//   headers:{},
// }).then((response)=>{
//   if(!response.ok){
//     console.log("Problema no server")
//   } else{
//     const data = response.json()
//     return data;

//   }
// })

/* HTTP é um protocolo, uma forma de conversa entre duas máquinas,
que permite transferir hiper-texto de um lado a outro.
Daí o nome Hyper Text Transport Protocol.

Códigos comuns de response: 
1XX: Informativo – a solicitação foi aceita ou está em andamento;
2XX: Confirmação – a solicitação foi concluída ou entendida;
3XX: Redirecionamento – faltou alguma coisa na solicitação;
4XX: Erro do cliente – houve um erro na solicitação;
5XX: Erro no servidor – houve uma falha no servidor durante a solicitação.

https://http.cat/

https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript

*/
