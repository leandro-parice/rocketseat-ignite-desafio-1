# rocketseat-ignite-desafio-1

Index:
-Também deve ser possível realizar uma busca, filtrando as tasks pelo title e description

Update:
-Se for enviado somente o title, significa que o description não pode ser atualizado e vice-versa.
-Antes de realizar a atualização, deve ser feito uma validação se o id pertence a uma task salva no banco de dados.

Delete:
-Antes de realizar a atualização, deve ser feito uma validação se o id pertence a uma task salva no banco de dados.

Complete:
-Status normal?!
-Antes de realizar a atualização, deve ser feito uma validação se o id pertence a uma task salva no banco de dados.

Outros:
-Validar se as propriedades title e description das rotas POST e PUT estão presentes no body da requisição.
-Nas rotas que recebem o /:id, além de validar se o id existe no banco de dados, retornar a requisição com uma mensagem informando que o registro não existe.

Dúvidas:
-Verificar se a validação dos dados está sendo feito no arquivo database.js ou se é possível criar uma class do Modelo "Task"