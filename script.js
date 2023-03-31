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
