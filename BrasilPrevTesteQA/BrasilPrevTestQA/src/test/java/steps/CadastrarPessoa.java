package steps;

import static org.hamcrest.Matchers.is;
import base.BaseUtil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class CadastrarPessoa extends BaseUtil {
	private BaseUtil base;
	private String endpoint = "/pessoas";

	public CadastrarPessoa(BaseUtil base) {
		this.base = base;
	}
	public CadastrarPessoa() {

	}
	@Given("^Informe os dados da Pessoa e informe um CPF ja cadastrado$")
	public void informe_os_dados_da_Pessoa_e_informe_um_CPF_ja_cadastrado() throws Throwable {	
		base.request.given()
		.contentType("application/json")
		// dados que estão sendo enviados para cadastro
				.body("{\r\n" + 
						"\"codigo\": 0,\r\n" + 
						"\"nome\": \"Rafael Teixeira\",\r\n" + 
						"\"cpf\": \"12345678909\",\r\n" + 
						"\"enderecos\": [\r\n" + 
						"{\r\n" + 
						"\"logradouro\": \"Rua Alexandre Dumas\",\r\n" + 
						"\"numero\": 123,\r\n" + 
						"\"complemento\": \"Empresa\",\r\n" + 
						"\"bairro\": \"Chacara Santo Antonio\",\r\n" + 
						"\"cidade\": \"S�o Paulo\",\r\n" + 
						"\"estado\": \"SP\"\r\n" + 
						"}\r\n" + 
						"],\r\n" + 
						"\"telefones\": [\r\n" + 
						"{\r\n" + 
						"\"ddd\": \"11\",\r\n" + 
						"\"numero\": \"985388877\"\r\n" + 
						"}]\r\n" + 
						"}");
	}

	@When("^Realizo a requisicao da API$")
	public void realizo_a_requisicao_da_API() throws Throwable {
		 //System.out.println(base.urlDigital+endpoint);
	   base.response = base.request.post(base.urlDigital + endpoint);
	}

	@Then("^API me retona codigo (\\d+) e mensagem \"([^\"]*)\"$")
	public void api_me_retona_codigo_e_mensagem(int codigo, String mensagem) throws Throwable {
		base.response.then().statusCode(codigo).body("erro",
				is(mensagem));
		
	}
	@Given("^Informe os dados da Pessoa e informe um telefone ja cadastrado$")
	public void informe_os_dados_da_Pessoa_e_informe_um_telefone_ja_cadastrado() throws Throwable {
		base.request.given()
		.contentType("application/json")
		// dados que est�o sendo enviados para cadastro
				.body("{\r\n" + 
						"\"codigo\": 0,\r\n" + 
						"\"nome\": \"Rafael Teixeira\",\r\n" + 
						"\"cpf\": \"1234888909\",\r\n" + 
						"\"enderecos\": [\r\n" + 
						"{\r\n" + 
						"\"logradouro\": \"Rua Alexandre Dumas\",\r\n" + 
						"\"numero\": 123,\r\n" + 
						"\"complemento\": \"Empresa\",\r\n" + 
						"\"bairro\": \"Chacara Santo Antonio\",\r\n" + 
						"\"cidade\": \"S�o Paulo\",\r\n" + 
						"\"estado\": \"SP\"\r\n" + 
						"}\r\n" + 
						"],\r\n" + 
						"\"telefones\": [\r\n" + 
						"{\r\n" + 
						"\"ddd\": \"11\",\r\n" + 
						"\"numero\": \"9853ret77\"\r\n" + 
						"}]\r\n" + 
						"}");

	}
	@Given("^Informe os dados de uma Pessoa nao cadastrada$")
	public void informe_os_dados_de_uma_Pessoa_nao_cadastrada() throws Throwable {
		base.request.given()
		.contentType("application/json")
		// dados que estão sendo enviados para cadastro
				.body("{\r\n" + 
						"\"codigo\": 0,\r\n" + 
						"\"nome\": \"Rafael Teixeira\",\r\n" + 
						"\"cpf\": \"5584888009\",\r\n" + 
						"\"enderecos\": [\r\n" + 
						"{\r\n" + 
						"\"logradouro\": \"Rua Alexandre Dumas\",\r\n" + 
						"\"numero\": 123,\r\n" + 
						"\"complemento\": \"Empresa\",\r\n" + 
						"\"bairro\": \"Chacara Santo Antonio\",\r\n" + 
						"\"cidade\": \"S�o Paulo\",\r\n" + 
						"\"estado\": \"SP\"\r\n" + 
						"}\r\n" + 
						"],\r\n" + 
						"\"telefones\": [\r\n" + 
						"{\r\n" + 
						"\"ddd\": \"11\",\r\n" + 
						"\"numero\": \"999355796\"\r\n" + 
						"}]\r\n" + 
						"}");
	}

	@Then("^API me retona codigo (\\d+)$")
	public void api_me_retona_codigo(int codigo) throws Throwable {
		base.response.then().statusCode(codigo);

	}


	

}
