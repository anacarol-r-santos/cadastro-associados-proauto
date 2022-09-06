# Teste Sistema para Atualizar o Cadastro de Associados

Repositório referente ao desafio proposto para o processo seletivo da Proauto.

Em construção...

## Objetivo
Uma aplicação web em que o associado poderá se autenticar pelo CPF e placa do veículo e ter acesso aos seus dados: nome, cpf,
placa, endereço e telefone e poderá atualizar o endereço.

---

## Stacks

Node.js, MySQL

## Instalação

1. Clone o repositório
# Via HTTPS:
  * `https://github.com/anacarol-r-santos/cadastro-associados-proauto.git`.

# Via SSH:  
  * `git@github.com:anacarol-r-santos/cadastro-associados-proauto.git`.

2. Entre na pasta do repositório que você acabou de clonar:
    * `cd cadastro-associados-proauto.git`

3. Instale as dependências
  * `npm install`

4. Inicie a aplicação
  * `npm start`

---

## Endpoints:

  - .POST /cadastro
- Nesta rota o usuário que não for cadatrado poderá se cadastrar, informando seus dados no seguinte modelo:

  ```json
  {    
    "nome": "string",
    "cpf": "string",
    "placa": "string",
    "endereco": "string",
    "telefone": "string"
  }
  ```
  - .POST /login
- Nesta rota o usuário receberá um token e seus dados ao informar seu cpf e placa:

  ```json
  {    
    "cpf": "string",
    "placa": "string",
  }
  ```
  
  - .GET /:id
- Aqui será possivel acessar os dados do usuário caso esteja autenticado:
  
  - .PUT /endereco/:id
- Aqui será possivel atualizar  o endereço a partir do id do usuário:
  
   ```json
  {    
    "endereco": "string",
  }
  ```

  
