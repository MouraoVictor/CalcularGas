const frm = document.querySelector("form")
const respCombustivelGasto = document.querySelector("#outCombustivelGasto")
const respKmL = document.querySelector("#outKmL")
const respValorDia = document.querySelector("#outValorDia")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const combustivelInicial = Number(frm.inCombustivelComeco.value)
    const combustivelFinal = Number(frm.inCombustivelFinal.value)

    const combustivelGasto = combustivelFinal - combustivelInicial;

    const kmInicial = Number(frm.inKmComeco.value)
    const kmFinal = Number(frm.inKmFinal.value)

    const kmRodado = kmFinal - kmInicial

    respCombustivelGasto.innerText = `O combustível gasto nesse dia foi: ${combustivelGasto.toFixed(2)}L e o número de Km rodados: ${kmRodado.toFixed(2)}.\n`
    respKmL.innerText = `Resultando em ${(kmRodado / combustivelGasto).toFixed(2)} Km/L\n`

    let resposta = prompt("Abasteceu? Caso não, deixe em branco. Usaremos o valor de R$7,00 por litro de Gasolina como padrão: ")

    let precoCombustível = 7

    if (resposta != "") {
        precoCombustível = Number(prompt("Digite o preço do combustível no último abastecimento: "))

    }

    console.log(`O combustível gasto resulta em R$${(combustivelGasto * precoCombustível).toFixed(2)} gastos para fazer o trajeto completo hoje,\n`)
    respValorDia.innerText = `O combustível gasto resulta em R$${(combustivelGasto * precoCombustível).toFixed(2)} gastos para fazer o trajeto completo hoje,\n`

})