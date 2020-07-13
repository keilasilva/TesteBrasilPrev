package steps;

import static org.hamcrest.Matchers.is;
import base.BaseUtil;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class PesquisarPessoa extends BaseUtil {
	private String ddd;
	private String numero;
	private BaseUtil base;
	private String endpoint = "/pessoas/";

	public PesquisarPessoa(BaseUtil base) {
		this.base = base;
	}
	public PesquisarPessoa() {

	}
	@Given("^Informe um DDD nao cadastrado e um telefone cadastrado$")
	public void informe_um_DDD_nao_cadastrado_e_um_telefone_cadastrado() throws Throwable {
		ddd = "12";
		numero = "985388877";
	}
	@When("^Realizar a requisicao da API$")
	public void realizar_a_requisicao_da_API() throws Throwable {
	//	System.out.println("URL SOLICITADA: " + base.urlDigital + endpoint + ddd +"/"+ numero);
		base.response = base.request.get(base.urlDigital + endpoint + ddd +"/"+ numero);
	}
	
	@Then("^API  retorna o codigo (\\d+) e mensagem \"([^\"]*)\"$")
	public void api_retorna_o_codigo_e_mensagem(int codigo, String mensagem) throws Throwable {
		base.response.then().statusCode(codigo).body("erro",
				is(mensagem));	

	}
	@Given("^Informe um Telefone nao cadastrado e um DDD cadastrado$")
	public void informe_um_Telefone_nao_cadastrado_e_um_DDD_cadastrado() throws Throwable {
		ddd = "11";
		numero = "985358877";
	}

	@Then("^API  retorna o codigo de erro (\\d+) e mensagem \"([^\"]*)\"$")
	public void api_retorna_o_codigo_de_erro_e_mensagem(int codigo, String mensagem) throws Throwable {
		base.response.then().statusCode(codigo).body("erro",
				is(mensagem));	
	}
	@Given("^Informe um DDD e Telefone Cadastrado$")
	public void informe_um_DDD_e_Telefone_Cadastrado() throws Throwable {
		ddd = "11";
		numero = "985388877";
	}

	@Then("^API  retorna o codigo de (\\d+)$")
	public void api_retorna_o_codigo_de(int codigo) throws Throwable {
		base.response.then().statusCode(codigo);
	}



}