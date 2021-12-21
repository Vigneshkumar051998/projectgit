package org.exact;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.easy.Develop;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features= {"src/test/resources"},glue= {"org.mainobject"},
monochrome=true,plugin= {"pretty","json:src/test/resources/Report/output.json"},
dryRun=false,snippets=SnippetType.CAMELCASE,strict=true)

public class TestRunnerClass {
	
	@AfterClass
	public static void Afterclass() {
		String path = System.getProperty("user.dir");
		Develop.generateJvmReport(path+"/src/test/resources/Report/output.json");
		
	}
}
