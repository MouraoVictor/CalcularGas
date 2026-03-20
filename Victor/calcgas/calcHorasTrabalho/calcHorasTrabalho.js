const prompt = require("prompt-sync")()

console.log("\nPrograma que calcula quanto deve ser cobrado por hora para receber tal quantia no mês.\n")
const qtdReceber = prompt("Digite o quanto gostaria de receber por mês: ")
console.log("\n")
const hrsContratadas = prompt("Digite por quantas horas você foi contratado: ")
console.log("\n")

const hrsMes = 22 * 8

const valorHora = (qtdReceber / hrsMes).toFixed(2)

console.log("Valor a ser cobrado por hora: R$" + valorHora + "\n")
console.log(`Para o seu trabalho de ${hrsContratadas}h, deve-se cobrar aproximadamente o valor de ${(valorHora * hrsContratadas).toFixed(2)}\n\n`)

if (hrsContratadas > 8) {
    console.log("Dando um total de " + Math.floor(hrsContratadas / 8) + " dias e " + (hrsContratadas % 8) + " horas de trabalho total.")
}