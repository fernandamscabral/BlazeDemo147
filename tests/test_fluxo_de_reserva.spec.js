// Importações / Bibliotecas / Frameworks 
import { test, expect } from '@playwright/test';

// Função ou método
test('Fluxo de Reserva - Cenario Positivo', async ({ page }) => {
  // Abre o navegador na URL
  await page.goto('https://www.blazedemo.com/');
  // Seleciona a origem como São Paolo
  await page.locator('select[name="fromPort"]').selectOption('São Paolo');
  // Seleciona o destino como London
  await page.locator('select[name="toPort"]').selectOption('London');
  // Clica no botão "Find Flights"
  await page.getByRole('button', { name: 'Find Flights' }).click();

  // Mudar de página
  // Verificação do texto esperado
  await expect(page.getByRole('heading')).toContainText('Flights from São Paolo to London:');
  // Selecionou um voo a partir da linha da tabela que contem essas informações
  await page.getByRole('row', { name: 'Choose This Flight 43 Virgin' }).getByRole('button').click(); // pega a linha e depois pega o botão dentro dela
  
  // Muda de página
  // Preenchimento de campos no formulário
  await page.getByRole('textbox', { name: 'Name', exact: true }).click(); // clica no campo Nome
  await page.getByRole('textbox', { name: 'Name', exact: true }).fill('Fernanda'); // preenche o nome
  await page.locator('#cardType').selectOption('amex'); // seleciona a bandeira do cartão
  await page.getByRole('checkbox', { name: 'Remember me' }).check(); // seleciona o checkbox "Remember me"
  await page.getByRole('button', { name: 'Purchase Flight' }).click(); // clica no botão "Purchase Flight"

  //Muda de página
  //Verifica o texto de agradecimento
  await expect(page.getByRole('heading')).toContainText('Thank you for your purchase today!');
  // Veriica o preço (de forma grosseira)
  await expect(page.locator('tbody')).toContainText('555 USD');
});
