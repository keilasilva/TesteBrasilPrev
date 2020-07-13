package steps;

import base.BaseUtil;
import cucumber.api.java.Before;
import static io.restassured.RestAssured.given;
public class Hook extends BaseUtil{

	private BaseUtil base;

	public Hook(BaseUtil base) {
		this.base = base;
	}

	@Before
	public void InicializeTest() {

		base.request = given().header("Accept", "application/json").header("Content-Type", "application/json");
	}
}
