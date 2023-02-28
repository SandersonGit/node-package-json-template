const nome = process.argv[2]
const idade = Number(process.argv[3])

if(!nome || !idade){
    console.log("digite sua informções");
}else{
    const idadeSomada = idade + 7

    console.log(`Olá ${nome}! Você tem ${idade} anos
    Em sete anos você terá ${idadeSomada}`);
}