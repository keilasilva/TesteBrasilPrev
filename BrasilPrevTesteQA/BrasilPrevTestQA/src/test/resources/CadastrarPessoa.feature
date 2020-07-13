Feature: Cadastrar Pessoa
Conforme solicitado a API não deverá permitir o cadastro de uma pessoas caso o CPF ou o Telefone já esteja cadastrado.
A API deverá cadastrar uma pessoa com sucesso caso o CPF ou o Telefone não estejam cadastrados
	Scenario: Validar CPF Duplicado
		Given Informe os dados da Pessoa e informe um CPF ja cadastrado
		When Realizo a requisicao da API
		Then API me retona codigo 400 e mensagem "Já existe pessoa cadastrada com o CPF 12345678909"
		
	Scenario: Validar Telefone Duplicado
		Given Informe os dados da Pessoa e informe um telefone ja cadastrado
		When Realizo a requisicao da API
		Then API me retona codigo 400 e mensagem "Já existe pessoa cadastrada com o Telefone (11)9853ret77"
		
	Scenario: Cadastrar Pessoa com Sucesso
		Given Informe os dados de uma Pessoa nao cadastrada
		When Realizo a requisicao da API
		Then API me retona codigo 201