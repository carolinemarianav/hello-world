const valorDaCompra = 100;
const numeroDeParcelas = 7;

if (numeroDeParcelas === 1) {
  const desconto = valorDaCompra * (10 / 100);
  const valorFinal = (valorDaCompra - desconto).toFixed(2);

  console.log(`O valor da compra a vista é R$ ${valorFinal}`);
} else {
  let valorDaParcela = (valorDaCompra / numeroDeParcelas).toFixed(2);

  if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    const valorTotalComJuros = valorDaCompra * (1 + 0.01) ** numeroDeParcelas;

    valorDaParcela = (valorTotalComJuros / numeroDeParcelas).toFixed(2);
  }

  console.log(
    `O valor da compra a prazo de cada parcela é R$ ${valorDaParcela} em ${numeroDeParcelas}x`
  );
}
