<<<<<<< HEAD
# ECommerceAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
=======
# Desafio Semana 1 - Eldorado Tech Training

Projeto para desenvolver uma plataforma de E-commerce:
- Adiciona / remove itens do carrinho;
- Aplicar cupom de desconto;
- Calcula em tempo real os produtos adicionados e desconto aplicado;
- Finaliza pedido;

# Desafio Semana 2 - Eldorado Tech Training

Desenvolvimento da navegação na **Jornada Simples de Compra**.

Esta semana precisaremos destas rotas criadas:

```
|-- home
  |-- PDP
  |-- Cart
    |-- resume
    |-- checkout
    |-- confirmation
```

## Critérios de Aceite

### Home page

- Deve Apresentar um banner principal onde pode ser uma única imagem ou um carrosel de imagens.
- Uma lista de no mínimo 8 produtos. Podem ser apresentados em uma lista na tela ou em um carrossel de produtos.
- Cada produto será um card onde terá a imagem do produto, nome, preço e o botão de "adicionar no carrinho". Pode alterar a quantidade de produtos ao ser enviada no carrinho através dele, mas não é obrigatório.
- Fique a vontade para deixar o site mais próximo do segmento que você escolheu, e pode apresentar mais de uma lista de produtos (novidades, mais vendidos, etc.).

### PDP (Product Details Page)

- Deverá abrir o produto com a imagem mais ampliada.
- Nome do produto.
- Preço.
- Quantidade a ser lançada no carrinho.
- Botão para adicionar este produto ao carrinho.

### Carrinho

- Os mesmos critério anteriores:
  - O carrinho será uma lista de produtos onde terá imagem, o nome, preço e quantidade de cada produto
  - Também precisa mostrar o Total dos valores dos produtos
  - Poderá ter o Desconto adicionando através de um cupom (Este cupom é uma string que representa exatamente o valor de um desconto)
  - Se seu carrinho tem *desconto* então precisa ter Subtotal (Total sem desconto)
  - Precisa ter como excluir o produto do carrinho.
  - Precisam ter uma rota para o resumo do pedido (`/cart`), que a lista de produtos adicionados. Nele haverá o botão para ir para a tela de pagamento.
  - Nesta tela será aplicado o cupom de desconto. Então a partir de agora é necessário termos um input para o nome do cupom e o demonstrativo de subtotal, desconto aplicado(valor e/ou porcentagem) e total (total = subtotal - desconto).
  - Precisam ter uma rota para o pagamento do pedido (`/checkout`), onde deve só passar para a próxima após escolher a forma de pagamento. Ou seja, sem ter uma pagamento escohido o botão de Finalizar compra deverá ficar desabilitado.
  - Precisam ter uma rota para a confirmação do pedido(`/confirmation`), onde o usuário será avisado que o seu pedido foi realizado com sucesso e logo abaixo terá os detalhes do mesmo:
  -- Lista de itens comprados, com imagem, nome, quantidade e preço em cada
  -- Subtotal, Desconto aplicado e Total.

### Header/Footer

Para toda a navegação pode apresentar um header e um footer, e estes também devem condizer com o segmento escolhido para o seu site.

- Header:
  - Logo
  - Menu categorias do site
  - Ícone para a conta do usuário (cliente)
  - Ícone para ir para o carrinho

- Footer:
  - Os links para diferentes parte do site e/ou Links externos.
  - Powered by Angular e a sua autoria no site.
  
### Testes

Ter 20% do code coverage.
>>>>>>> 43a12063f90b87293fcfcbb95eb0123fc1667326
