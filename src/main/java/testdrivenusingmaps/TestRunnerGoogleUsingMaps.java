package testdrivenusingmaps;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "F:\\Selenium\\CucumberDemo\\src\\main\\java\\features\\DataTableWithMapsGoogle.feature",
		glue = {"testdrivenusingmaps" }, 
		format = { "pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-output/cucumber.xml" },
		dryRun = false,
		strict = true,
		monochrome = true)
public class TestRunnerGoogleUsingMaps {

}
