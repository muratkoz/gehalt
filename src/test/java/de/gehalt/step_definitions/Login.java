package de.gehalt.step_definitions;

import de.gehalt.pages.LoginPage;
import de.gehalt.utilities.ConfigurationReader;
import de.gehalt.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import java.util.concurrent.TimeUnit;


public class Login {
    LoginPage loginpage = new LoginPage();

    @Given("the user is on the main page")
    public void the_user_is_on_the_main_page() {
        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("user logs in with valid credentials")
    public void user_logs_in_with_valid_credentials() {
        String userName = ConfigurationReader.get("username");
        String password = ConfigurationReader.get("password");
        loginpage.login(userName,password);
    }

    @Then("{string} header text should be displayed")
    public void header_text_should_be_displayed(String expectedURL) {
        String actualURL = Driver.get().getCurrentUrl();
        Assert.assertEquals(expectedURL, actualURL);
    }

    @When("user logs in with {string} and {string}")
    public void user_logs_in_with_and(String string, String string2) {
        loginpage.login(string,string2);
    }

    @Then("{string}  should be displayed")
    public void should_be_displayed(String string) {
        String errorMessage = loginpage.errorMessage.getText();
        System.out.println(errorMessage);
        Assert.assertEquals(string, errorMessage);
    }
}
