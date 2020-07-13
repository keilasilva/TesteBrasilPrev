Feature: Pesquisar Pessoa
Conforme solicitado a API deverá retornar erro caso o telefone pesquisado seja inexistente.
Conforme solicitado será possivel realizar a pesquisa utilizando o DDD e Telefone.
	Scenario: Validar o DDD do Telefone Inexistente
		Given Informe um DDD nao cadastrado e um telefone cadastrado
		When Realizar a requisicao da API
		Then API  retorna o codigo 404 e mensagem "Não existe pessoa com o telefone (12)985388877"
		Scenario: Validar o Telefone Inexistente
		Given Informe um Telefone nao cadastrado e um DDD cadastrado
		When Realizar a requisicao da API
		Then API  retorna o codigo de erro 404 e mensagem "Não existe pessoa com o telefone (11)985358877"
		Scenario: Pesquisa Pessoa com Sucesso
		Given Informe um DDD e Telefone Cadastrado
		When Realizar a requisicao da API
		Then API  retorna o codigo de 200
