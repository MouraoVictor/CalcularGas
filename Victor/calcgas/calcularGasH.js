//capturando os itens do HTML para o JS
const frm = document.querySelector("form")
const respCombustivelGasto = document.querySelector("#outCombustivelGasto")
const respKmL = document.querySelector("#outKmL")
const respValorDia = document.querySelector("#outValorDia")

//ao clicar no botão de calcular
frm.addEventListener("submit", (e) => {
    e.preventDefault()

    //capturando os itens nas caixas de texto
    const combustivelInicial = Number(frm.inCombustivelComeco.value)
    const combustivelFinal = Number(frm.inCombustivelFinal.value)

    //fazendo a conta de combustível gasto
    const combustivelGasto = combustivelFinal - combustivelInicial;

    //capturando os itens nas caixas de texto
    const kmInicial = Number(frm.inKmComeco.value)
    const kmFinal = Number(frm.inKmFinal.value)

    //fazendo a conta de combustível gasto
    const kmRodado = kmFinal - kmInicial

    //'printa' os resultados nos devidos lugares
    respCombustivelGasto.innerText = `Combustível gasto: ${combustivelGasto.toFixed(2)}L\n Em ${kmRodado.toFixed(2)} Kms rodados.\n`
    respKmL.innerText = `Resultando em ${(kmRodado / combustivelGasto).toFixed(2)} Km/L\n`

    //pergunta se o carro foi abastecido para utilizar o preço correto da gasolina
    let resposta = prompt("Abasteceu? Caso não, deixe em branco. Usaremos o valor de R$7,00 por litro de Gasolina como padrão: ")

    let precoCombustível = 7

    if (resposta != "") {
        precoCombustível = Number(prompt("Digite o preço do combustível no último abastecimento: "))

    }

    console.log(`O combustível gasto resulta em R$${(combustivelGasto * precoCombustível).toFixed(2)} gastos para fazer o trajeto completo hoje,\n`)
    respValorDia.innerText = `O combustível gasto resulta em R$${(combustivelGasto * precoCombustível).toFixed(2)} gastos para fazer o trajeto completo hoje.\n`

})