package com.easy;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;



public class Develop {

	
	public static void generateJvmReport(String jsonfile) {
		
		File reportDirectory = new File (System.getProperty("user.dir") + "/src/test/resources/Report/");
		 Configuration configuration = new Configuration (reportDirectory,"https://www.facebook.com/AutomationAnywhereSoftware/");
	
	configuration.addClassifications("Os","Windows 11");
	configuration.addClassifications("BrowserName","Chrome");
	configuration.addClassifications("Version","98");
	configuration.addClassifications("Sprint","24");
	
	List<String> jsonfiles=new ArrayList<String>();
	jsonfiles.add(jsonfile);
	
	ReportBuilder builder = new ReportBuilder(jsonfiles, configuration);
	builder.generateReports();
	
	}

}
