// Atividade 13 - 01

document.getElementById("botao").addEventListener("click", function() {
    const nomeDoUsuario = prompt("Digite seu nome");
    document.getElementById("paragrafo").innerHTML = `E aí ${nomeDoUsuario}! Você está deixando o seu site dinâmico.`;
});

