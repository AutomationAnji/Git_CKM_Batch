package stepDefinitions;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;

import com.relevantcodes.extentreports.LogStatus;

public class Internaltransfer extends CKM_PDL{
public static void Internaltransfer () throws Exception {

		
	int lastrow = TestData.getLastRow("NewLoan");
	System.out.println("NewLoan " + lastrow);
	String sheetName = "NewLoan";
	for (int row = 2; row <= lastrow; row++) {
		String RegSSN = TestData.getCellData(sheetName, "SSN", row);
		String TenderType = TestData.getCellData(sheetName, "TenderType", row);
		if (SSN.equals(RegSSN)) {

			
			
			if(SSN.equals(RegSSN))
			{
				
				String NoOfDollarsAmount = TestData.getCellData(sheetName,"NoOfDollarsAmount",row);

				test.log(LogStatus.INFO, "Safe assign process initiated" );
				Login.Login(UserName, Password, StoreId);
				
				Thread.sleep(3000);
							
				driver.switchTo().frame("topFrame");

				//wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//*[contains(text(),'Cash Management')]")));

				driver.findElement(By.linkText("Cash Management")).click();			
				test.log(LogStatus.PASS, "Clicked on Cash Management");
				Thread.sleep(1500);
				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.findElement(By.linkText("Safe")).click();
				test.log(LogStatus.PASS, "Clicked on Safe");	
				Thread.sleep(1000);
				
				driver.findElement(By.linkText("Internal Transfer")).click();

				test.log(LogStatus.PASS, "Clicked on Internal Transfer");
				
					

				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				
				
				driver.findElement(By.name("D1")).sendKeys("Drawer 808 to Safe");			
				test.log(LogStatus.PASS, "Selected the from the list Drawer 808 Safe ");
				
				Thread.sleep(2500);
				driver.findElement(By.name("requestBean.noOf100Dollars")).sendKeys("50");				
				test.log(LogStatus.PASS, "Selected the Count Dollers");	
				
			
				Thread.sleep(3500);
				driver.findElement(By.name("safeToDrawerRequestBean.password")).sendKeys("1234");

				test.log(LogStatus.PASS, "Entered the Password: 1234");
				Thread.sleep(500);
				
				Thread.sleep(500);
				driver.findElement(By.name("internaltransfer")).click();
				test.log(LogStatus.PASS, "Clicked on Finish internaltransfer");
				
				
					Thread.sleep(5000);
					

				try { 
					Alert alert = driver.switchTo().alert();
					alert.accept();
					//if alert present, accept and move on.														

				}
				catch (NoAlertPresentException e) {
					//do what you normally would if you didn't have the alert.

				}
				
				Thread.sleep(3000);
				driver.findElement(By.xpath("//input[@type='submit' and @value='Ok']")).click();
				
				
						
				
				break;
			}


		}}}}


	
