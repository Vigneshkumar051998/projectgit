package org.mainobject;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginPage {
	
	WebDriver driver;

	@Given("user is on the adactinhotelapp page")
	public void user_is_on_the_adactinhotelapp_page() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.get("http://adactinhotelapp.com/");
		driver.manage().timeouts().implicitlyWait(10,TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}

	@When("user should enter{string} and{string}")
	public void user_should_enter_and(String userName, String pass) {
		driver.findElement(By.id("username")).sendKeys(userName);
		driver.findElement(By.name("password")).sendKeys(pass);
		
	}

	@When("user should click login button")
	public void user_should_click_login_button() {
		driver.findElement(By.id("login")).click();
	}

	@When("user is select hotel page {string},{string},{string},{string},{string},{string},{string},{string}")
	public void user_is_select_hotel_page(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		Select loc = new Select(driver.findElement(By.id("location")));loc.selectByVisibleText(string);
		Select htls = new Select(driver.findElement(By.id("hotels")));htls.selectByVisibleText(string2);
		Select htl = new Select(driver.findElement(By.id("room_type")));htl.selectByVisibleText(string3);
        driver.findElement(By.id("room_nos")).sendKeys(string4);		
		WebElement datepin = driver.findElement(By.id("datepick_in"));
		datepin.clear();datepin.sendKeys(string5);
		WebElement dateout = driver.findElement(By.id("datepick_out"));
		dateout.clear();dateout.sendKeys(string6);
		
		driver.findElement(By.id("adult_room")).sendKeys(string7);
		driver.findElement(By.id("child_room")).sendKeys(string8);
	}

	@When("user should click search button")
	public void user_should_click_search_button() {
		driver.findElement(By.id("Submit")).click();
	}

	@When("user should  Select hotel")
	public void user_should_Select_hotel() {
		driver.findElement(By.id("radiobutton_0")).click();
		 
		
	}

	@When("user should click Continue")
	public void user_should_click_Continue() {
		driver.findElement(By.id("continue")).click();
	}

	@When("user is on book a hotel page{string},{string},{string},{string},{string},{string},{string},{string},")
	public void user_is_on_book_a_hotel_page(String string, String string2, String string3, String string4, String string5, String string6, String string7, String string8) {
		driver.findElement(By.id("first_name")).sendKeys(string);
		driver.findElement(By.id("last_name")).sendKeys(string2);
		driver.findElement(By.id("address")).sendKeys(string3);
		driver.findElement(By.id("cc_num")).sendKeys(string4);
		
		driver.findElement(By.id("cc_type")).sendKeys(string5);
		driver.findElement(By.id("cc_exp_month")).sendKeys(string6);
		driver.findElement(By.id("cc_exp_year")).sendKeys(string7);
		driver.findElement(By.id("cc_cvv")).sendKeys(string8);
		
	}

	@When("user should click  book now")
	public void user_should_click_book_now() {
		driver.findElement(By.id("book_now")).click();
		driver.findElement(By.xpath("//a[contains(text(),'Booked Itinerary')]")).click();
	}

	@Then("user should verify valid msg")
	public void user_should_verify_valid_msg() {
	driver.findElement(By.id("book_now")).click();
	WebElement btnprint = driver.findElement(By.id("order_id_513774"));
	btnprint.click();
	String main = driver.getCurrentUrl();
	boolean v =main.contains("btnprint");
	Assert.assertTrue("verify url",v);
	driver.quit();
	
	}

	

}
