let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

let nomeAtletas = atletas.map(function (nomes) {
  return nomes.nome;
});

let notasDosAtletas = atletas.map(function (notas) {
  let total = notas.notas;
  total.sort(function (a, b) {
    return a - b;
  });
  return total;
});
for (let i = 0; i < notasDosAtletas.length; i++) {
  let cortarNotaMaiorEMenor = notasDosAtletas.map(function (cortar) {
    return cortar.slice(1, 4);
  });
  let somaDasNotas = cortarNotaMaiorEMenor.map(function (media) {
    let total = 0;
    media.forEach(function (nota) {
      return (total += nota);
    });
    return total;
  });
  let mediaDasNotas = somaDasNotas.map(function (media) {
    return media / 3;
  });
  console.log(
    `Atleta: ${nomeAtletas[i]} \nNotas obtidas: ${notasDosAtletas[i]} \nMédia Válida: ${mediaDasNotas[i]}\n`
  );
}
