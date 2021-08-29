//Evento com limitação de 18 anos de idade, e máximo de 100 participantes

const dataAtual = new Date();
const dataEvento = new Date('2021-10-24 12:30:00');


//Verificação se a data cadastro é anterior a data de envento
if (dataAtual <= dataEvento) {
    console.log("Seja bem vindo, por favor informe data de nascimento.")
} else {
    console.log("Evento expirado") 
}


//metodo calcular idade
let data_nascimento = new Date('1994-12-10')

function idade(data_nascimento) {
      const aniversario = new Date(data_nascimento)
    let idade = dataAtual.getFullYear() - aniversario.getFullYear(aniversario)
    const mes = dataAtual.getMonth() - aniversario.getMonth(aniversario)
    return idade
}
console.log(idade(data_nascimento) + " anos")


//Verifica se participante tem idade superior a 18 anos.
if (idade(data_nascimento) >= 18) {
    console.log("Por favor informe seus dados:");
} else {
 
   console.log("Desculpe, idade não permitida")
}

//Analiza a quantidade de participantes com limite de 100 pessoas. Menor que 100 permite cadastro.
let palestrantes = ["Bussunda", " Chico Anísio"]
let participantes = ["","Roberto Carlos", "Carmen Miranda", "Paulo Gustavo", "Carlos Roberto", "Cassia Eller", "Fulano de tal"]
if (participantes.length <= 100) {
    console.log("Cadastro realizado com sucesso!!!");
} else {
    console.log("Desculpe!!! Quantidade de participantes atingida!!!")
}

//Imprime de forma ordenada a lista de participantes, com total.
console.log("Palestrantes do evento: " + palestrantes)
for (let index = 1; index < participantes.length; index++) {

    console.log(" Participante "+ index + " " + participantes[index])  
}
participantes.shift();
console.log("Total de participantes: " + participantes.length + " pessoas")

