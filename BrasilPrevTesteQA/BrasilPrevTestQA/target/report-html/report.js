$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CadastrarPessoa.feature");
formatter.feature({
  "line": 1,
  "name": "Cadastrar Pessoa",
  "description": "Conforme solicitado a API não deverá permitir o cadastro de uma pessoas caso o CPF ou o Telefone já esteja cadastrado.\nA API deverá cadastrar uma pessoa com sucesso caso o CPF ou o Telefone não estejam cadastrados",
  "id": "cadastrar-pessoa",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1032143600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validar CPF Duplicado",
  "description": "",
  "id": "cadastrar-pessoa;validar-cpf-duplicado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Informe os dados da Pessoa e informe um CPF ja cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Realizo a requisicao da API",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "API me retona codigo 400 e mensagem \"Já existe pessoa cadastrada com o CPF 12345678909\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarPessoa.informe_os_dados_da_Pessoa_e_informe_um_CPF_ja_cadastrado()"
});
formatter.result({
  "duration": 155114900,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarPessoa.realizo_a_requisicao_da_API()"
});
formatter.result({
  "duration": 1568069800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 21
    },
    {
      "val": "Já existe pessoa cadastrada com o CPF 12345678909",
      "offset": 37
    }
  ],
  "location": "CadastrarPessoa.api_me_retona_codigo_e_mensagem(int,String)"
});
formatter.result({
  "duration": 981396800,
  "status": "passed"
});
formatter.before({
  "duration": 1569000,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Validar Telefone Duplicado",
  "description": "",
  "id": "cadastrar-pessoa;validar-telefone-duplicado",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "Informe os dados da Pessoa e informe um telefone ja cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "Realizo a requisicao da API",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "API me retona codigo 400 e mensagem \"Já existe pessoa cadastrada com o Telefone (11)9853ret77\"",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarPessoa.informe_os_dados_da_Pessoa_e_informe_um_telefone_ja_cadastrado()"
});
formatter.result({
  "duration": 3283200,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarPessoa.realizo_a_requisicao_da_API()"
});
formatter.result({
  "duration": 75970700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 21
    },
    {
      "val": "Já existe pessoa cadastrada com o Telefone (11)9853ret77",
      "offset": 37
    }
  ],
  "location": "CadastrarPessoa.api_me_retona_codigo_e_mensagem(int,String)"
});
formatter.result({
  "duration": 25089000,
  "status": "passed"
});
formatter.before({
  "duration": 1259900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Cadastrar Pessoa com Sucesso",
  "description": "",
  "id": "cadastrar-pessoa;cadastrar-pessoa-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "Informe os dados de uma Pessoa nao cadastrada",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Realizo a requisicao da API",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "API me retona codigo 201",
  "keyword": "Then "
});
formatter.match({
  "location": "CadastrarPessoa.informe_os_dados_de_uma_Pessoa_nao_cadastrada()"
});
formatter.result({
  "duration": 582300,
  "status": "passed"
});
formatter.match({
  "location": "CadastrarPessoa.realizo_a_requisicao_da_API()"
});
formatter.result({
  "duration": 75398100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "201",
      "offset": 21
    }
  ],
  "location": "CadastrarPessoa.api_me_retona_codigo(int)"
});
formatter.result({
  "duration": 34779800,
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c400\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1262)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat steps.CadastrarPessoa.api_me_retona_codigo(CadastrarPessoa.java:114)\r\n\tat ✽.Then API me retona codigo 201(CadastrarPessoa.feature:17)\r\n",
  "status": "failed"
});
formatter.uri("PesquisarPessoa.feature");
formatter.feature({
  "line": 1,
  "name": "Pesquisar Pessoa",
  "description": "Conforme solicitado a API deverá retornar erro caso o telefone pesquisado seja inexistente.\nConforme solicitado será possivel realizar a pesquisa utilizando o DDD e Telefone.",
  "id": "pesquisar-pessoa",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2435400,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Validar o DDD do Telefone Inexistente",
  "description": "",
  "id": "pesquisar-pessoa;validar-o-ddd-do-telefone-inexistente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "Informe um DDD nao cadastrado e um telefone cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Realizar a requisicao da API",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "API  retorna o codigo 404 e mensagem \"Não existe pessoa com o telefone (12)985388877\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PesquisarPessoa.informe_um_DDD_nao_cadastrado_e_um_telefone_cadastrado()"
});
formatter.result({
  "duration": 132300,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarPessoa.realizar_a_requisicao_da_API()"
});
formatter.result({
  "duration": 147501500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 22
    },
    {
      "val": "Não existe pessoa com o telefone (12)985388877",
      "offset": 38
    }
  ],
  "location": "PesquisarPessoa.api_retorna_o_codigo_e_mensagem(int,String)"
});
formatter.result({
  "duration": 24948800,
  "status": "passed"
});
formatter.before({
  "duration": 742400,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Validar o Telefone Inexistente",
  "description": "",
  "id": "pesquisar-pessoa;validar-o-telefone-inexistente",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "Informe um Telefone nao cadastrado e um DDD cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "Realizar a requisicao da API",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "API  retorna o codigo de erro 404 e mensagem \"Não existe pessoa com o telefone (11)985358877\"",
  "keyword": "Then "
});
formatter.match({
  "location": "PesquisarPessoa.informe_um_Telefone_nao_cadastrado_e_um_DDD_cadastrado()"
});
formatter.result({
  "duration": 140800,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarPessoa.realizar_a_requisicao_da_API()"
});
formatter.result({
  "duration": 57679200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 30
    },
    {
      "val": "Não existe pessoa com o telefone (11)985358877",
      "offset": 46
    }
  ],
  "location": "PesquisarPessoa.api_retorna_o_codigo_de_erro_e_mensagem(int,String)"
});
formatter.result({
  "duration": 25931200,
  "status": "passed"
});
formatter.before({
  "duration": 798700,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Pesquisa Pessoa com Sucesso",
  "description": "",
  "id": "pesquisar-pessoa;pesquisa-pessoa-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Informe um DDD e Telefone Cadastrado",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "Realizar a requisicao da API",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "API  retorna o codigo de 200",
  "keyword": "Then "
});
formatter.match({
  "location": "PesquisarPessoa.informe_um_DDD_e_Telefone_Cadastrado()"
});
formatter.result({
  "duration": 160600,
  "status": "passed"
});
formatter.match({
  "location": "PesquisarPessoa.realizar_a_requisicao_da_API()"
});
formatter.result({
  "duration": 129022800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 25
    }
  ],
  "location": "PesquisarPessoa.api_retorna_o_codigo_de(int)"
});
formatter.result({
  "duration": 1627100,
  "status": "passed"
});
});