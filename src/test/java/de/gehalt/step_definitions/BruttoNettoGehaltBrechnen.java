package de.gehalt.step_definitions;

import de.gehalt.pages.GehaltCheck;
import de.gehalt.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class BruttoNettoGehaltBrechnen {

    @Then("user navigates to {string} menu")
    public void user_navigates_to_menu(String string) throws InterruptedException {
        new GehaltCheck().navigateTo(string);
        Thread.sleep(3000);
    }

    @Then("user inputs the requried data to calculate salary")
    public void user_inputs_the_requried_data_to_calculate_salary() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("user should able to see Monatlich and Jährlich net salary calculation as a result")
    public void user_should_able_to_see_Monatlich_and_Jährlich_net_salary_calculation_as_a_result() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("user should able to see the {string} Job offers {int} km around {string}")
    public void user_should_able_to_see_the_Job_offers_km_around(String string, Integer int1, String string2) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
