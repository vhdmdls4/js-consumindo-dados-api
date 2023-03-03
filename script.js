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
