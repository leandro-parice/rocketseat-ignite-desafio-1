# Ignite - NodeJS

#### Rocketseat Desafio-1

Repositório criado para o desenvolvimento e entrega do desafio da trilha Ignite NodeJS da 💜[Rocketseat](https://www.rocketseat.com.br/)

### Tecnologias / Linguagens de programação

- Javascript
- NodeJS
- [CSV Parse](https://csv.js.org/)
- GitHub

## Sobre o desafio

Nesse desafio foi desenvolvido uma API para realizar o CRUD de tarefas.
A API também contém rota para marcar a tarefa com completa e foi desenvolvido uma importação de arquivo CSV

### Instalação

    npm install

### Rodar o servidor

    npm run dev

### Importar CSV
    npm run import

# REST API

A API REST para o aplicativo de exemplo é descrita abaixo.

## Listagem de tarefas

### Request

`GET /tasks/`

    curl --request GET \
      --url http://localhost:3333/tasks \
      --header 'Content-type: application/json'

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:49:03 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Content-Length: 2

    200 Ok
    []

## Criação de tarefa

### Request

`POST /tasks/`

    curl --request POST \
      --url http://localhost:3333/tasks \
      --header 'Content-Type: application/json' \
      --data '{
        "title": "Título da tarefa",
        "description": "Descrição da tarefa"
    }'

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:50:14 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5
    Transfer-Encoding: chunked

    201 Created
    No body returned for response

## Edição de tarefa

### Request

`PUT /tasks/:id`

    curl --request PUT \
      --url http://localhost:3333/tasks/02729739-8b1a-4cb7-8365-2a52c1dfc024 \
      --header 'Content-Type: application/json' \
      --data '{
        "title": "Editar título",
        "description": "Editar descrição"
      }'

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:56:38 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response

## Marcar tarefa como finalizada

### Request

`PATCH /tasks/:id/complete`

    curl --request PATCH \
      --url http://localhost:3333/tasks/02729739-8b1a-4cb7-8365-2a52c1dfc024/complete

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:57:54 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response


## Exclusão de tarefa

### Request

`DELETE /tasks/:id`

    curl --request DELETE \
      --url http://localhost:3333/tasks/02729739-8b1a-4cb7-8365-2a52c1dfc024

### Response

    Content-type: application/json
    Date: Mon, 29 May 2023 10:59:40 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    204 No Content
    No body returned for response
