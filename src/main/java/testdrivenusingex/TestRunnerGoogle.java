package testdrivenusingex;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		//features = "F:\\Selenium\\CucumberDemo\\src\\main\\java\\features\\Google.feature", 
		//features = "F:\\Selenium\\CucumberDemo\\src\\main\\java\\features\\DDWithoutEXGoogle.feature",
		features = "F:\\Selenium\\CucumberDemo\\src\\main\\java\\features\\DDWithEXGoogle.feature",
		//features = "F:\\Selenium\\CucumberDemo\\src\\main\\java\\features\\DataTableGoogle.feature",
		glue = {"testdrivenusingex" }, 
		format = { "pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-output/cucumber.xml" },
		dryRun = false,
		strict = true,
		monochrome = true)
public class TestRunnerGoogle {

}
