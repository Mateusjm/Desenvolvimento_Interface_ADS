const botao = document.getElementById("calcular");
const saida = document.getElementById("resultado");

botao.addEventListener("click", function () {
    const t1 = document.getElementById("n1").value.trim();
    const t2 = document.getElementById("n2").value.trim();
    const t3 = document.getElementById("n3").value.trim();

    // TODO 1: Verifique se algum campo está vazio
    if (t1 === "" || t2 === "" || t3 === "") {
        saida.textContent = "Preencha todos os campos!";
        return;
    }

    // TODO 2: Converta os textos para números
    const n1 = Number(t1);
    const n2 = Number(t2);
    const n3 = Number(t3);

    // TODO 3: Valide as notas entre 0 e 10
    if (
        !Number.isFinite(n1) || n1 < 0 || n1 > 10 ||
        !Number.isFinite(n2) || n2 < 0 || n2 > 10 ||
        !Number.isFinite(n3) || n3 < 0 || n3 > 10
    ) {
        saida.textContent = "Digite notas válidas entre 0 e 10!";
        return;
    }

    // TODO 4: Calcule a média
    const media = (n1 + n2 + n3) / 3;

    // TODO 5: Use if/else para definir a situação
    let situacao;

    if (media >= 6) {
        situacao = "Aprovado";
    } else {
        situacao = "Recuperação";
    }

    // TODO 6: Mostre a média e a situação
    saida.textContent = `Média: ${media.toFixed(2)} - Situação: ${situacao}`;
});
