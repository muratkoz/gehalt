package de.gehalt.pages;

import de.gehalt.utilities.Driver;
import org.openqa.selenium.By;

public abstract class BasePage {

    public void navigateTo(String module){
        String moduleLocator = "//li/a[contains(@data-submissionid, '"+module+"')]";
        Driver.get().findElement(By.xpath(moduleLocator)).click();
    }
}
