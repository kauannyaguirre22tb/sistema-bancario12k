const input = require("prompt-sync")();

console.log(`Bem-vindo ao Banco Virtus!`)
const nomeCliente = input(`Digite seu nome completo: `)
const numeroConta = input(`Digite um número de 5 digitos para a conta: `)
let saldo = 0
let extrato = []

console.log(`\tConta criada com sucesso!\n\n\tDetalhes da conta:\n\t\tConta Corrente: ${numeroConta}\n\t\tTitular: ${nomeCliente}\n\t\tSaldo atual: ${saldo.toFixed(2)}\n`)

let resposta = 0

while(resposta !== 5){
    console.log(`Digite a opção:
        \t1-Saldo
        \t2-Extrato
        \t3-Saque
        \t4-Depósito
        \t5-Sair\n`)
    resposta = Number(input(`Escolha uma opção para prosseguir: `))

    if(resposta === 1){
        console.log(`Opção escolhida: 1 - Saldo`)
        console.log(`\n\tDetalhes da conta:\n\t\tConta Corrente: ${numeroConta}\n\t\tTitular: ${nomeCliente}\n\t\tSaldo atual: ${saldo.toFixed(2)}\n`)


    } else if(resposta === 2){
        if(extrato.length > 0){
            for(let i = 0; extrato.length > i; i++){
                console.log(extrato[i])   
    }
        } else {
            console.log(`Ainda não existe extrato!`)
        }

    } else if(resposta === 3){
        let valorSaque = Number(input(`Digite o valor que deseja sacar: `))
        
        if(valorSaque <= saldo){
            saldo -= valorSaque
            console.log(`\n\tDetalhes da conta:\n\t\tConta Corrente: ${numeroConta}\n\t\tNome do titular: ${nomeCliente}\n\t\tSaldo atual: ${saldo.toFixed(2)}\n`)
            extrato.push(`Operação: Saque, Valor: R$${valorSaque.toFixed(2)}, Saldo após: R$${saldo.toFixed(2)}`)
        } else {
            console.log(`Saldo insuficiente para efetuar esse saque!`)
        }
    } else if(resposta === 4){
        let valorDeposito = Number(input(`Digite o valor que deseja depositar: `))

        saldo += valorDeposito
        extrato.push(`Operação: Depósito, Valor: R$:${valorDeposito.toFixed(2)}, Saldo após: R$${saldo.toFixed(2)}`)
        console.log(`\n\tDetalhes da conta:\n\t\tConta Corrente: ${numeroConta}\n\t\tTitular: ${nomeCliente}\n\t\tSaldo atual: ${saldo.toFixed(2)}\n`)
    
    } else if(resposta === 5){
        console.log(`Você escolheu sair. Obrigado por escolher o Banco Virtus!\n`)
        console.log(`\n\tDetalhes da conta:\n\t\tConta Corrente: ${numeroConta}\n\t\tTitular: ${nomeCliente}\n\t\tSaldo atual: ${saldo.toFixed(2)}\n`)
    
    } else {
        console.log(`\nOpção invalida!\n`)
    }
}