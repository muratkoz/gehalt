package de.gehalt.step_definitions;

import de.gehalt.pages.GehaltCheck;
import io.cucumber.java.en.Then;

public class GehaltsCheckFunktion {
    @Then("user navigates to {string} page")
    public void user_navigates_to_page(String string) throws InterruptedException {
        new GehaltCheck().schnellerGehalt.click();
        Thread.sleep(3000);
    }

    @Then("user inputs the answers of the questions as requirment  information for GehaltsCheck")
    public void user_inputs_the_answers_of_the_questions_as_requirment_information_for_GehaltsCheck() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("user should see {string} message on the page")
    public void user_should_see_message_on_the_page(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }
}
