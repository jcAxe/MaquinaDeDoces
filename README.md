# Máquina de doces

Um software que simula a compra por moedas em uma máquina de doces capaz de dar o troco com o mínimo possível de moedas.

Esta máquina vende os seguintes itens com os respectivos preços:

	* KitKat: R$ 0,80
	* Diamante Negro: R$ 0,75
	* Suflair: R$ 1,00

A quantidade de moedas de entrada têm que ser suficiente para cobrir o preço dos produtos requisitados!

As informações das vendas do sistema serão armazenadas. É necessário conhecer:
	* O nome do funcionário
	* O nome do cliente
	* O produto vendido
	* A quantidade vendida
	* O valor da compra
	* O valor recebido pelo caixa
	* O valor do troco
	* A data da compra

Uma tela de exibição das vendas dos últimos 5 dias deve ser construída, junto a uma versão de impressão dessa tela.

É desejável que você utilize Angular (escolha a versão de sua preferência) para realizar a tarefa mas pode considerar outras bibliotecas, ou core JavaScript.

É desejável que você disponibilize uma interface REST para o seu backend e consuma pelo frontend.


## Tarefas concluídas

* A página da loja em html
* Código Javascript para realização das funcionalidades necessárias, como o método comprar, assim como configuração dos botões e restrições
  * Botão comprar
  * Restrições de troca de página
  * Cálculo do troco
  * Campos para o nome do cliente e atendente
  * Agrupamento dos dados da compra (Nome do cliente, valor da compra, troco, ...)
* Uso dos princípios OOCSS, SMACSS, e BEM para ajudar a modularizar a folha de estilos
* Organização completa do código no github em branchs e commits


## Tarefas não concluídas

* Utilização de uma biblioteca de organização de folhas de estilo
* Persistência dos dados
* Conexão com sistema de banco de dados
* Interface REST
* Tela de exibição de vendas dos últimos 5 dias (Dados não persistidos)

### Motivos da inconclusão das tarefas

Primeiramente, eu não possuo muita experiência em lidar com a persistência de dados obtidos de uma página web. Como consequência acabei encontrando mais problemas que o esperado na realização das tarefas relacionadas a isso, como: recuperação pela interface REST, tela de exibição destes dados, e a utilização de um sistema de bancos de dados.

Dado isto, busquei priorizar finalizar as tarefas mais envolvidas com meu conhecimento prévio (html e javascript).

