package stepDefinitions;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;

import com.relevantcodes.extentreports.LogStatus;

public class Check_Clear extends CKM_PDL{

public static void Check_Clear () throws Exception {

		
		int lastrow = TestData.getLastRow("NewLoan");
		System.out.println("NewLoan " + lastrow);
		String sheetName = "NewLoan";
		for (int row = 2; row <= lastrow; row++) {
			String RegSSN = TestData.getCellData(sheetName, "SSN", row);
			String TenderType = TestData.getCellData(sheetName, "TenderType", row);
			if (SSN.equals(RegSSN)) {

				
				
				test.log(LogStatus.INFO, "clear started");

				//System.out.println(ProductID);
				//String AppURL = TestData.getCellData(sheetName, "AppURL", row);
				//appUrl = AppURL;
				Login.Login(UserName, Password, StoreId);
				driver.switchTo().frame("topFrame");	
				Thread.sleep(5000);
				driver.findElement(By.linkText("Loan Transactions")).click();
				test.log(LogStatus.PASS, "Clicked on Loan Transactions");
				Thread.sleep(500);
				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				Thread.sleep(500);
				driver.findElement(By.xpath("//*[@id=\'911101\']/a")).click();
				test.log(LogStatus.PASS, "Clicked on Transaction");		
				driver.switchTo().frame("main");	
				Thread.sleep(1000);
				driver.findElement(By.name("requestBean.ssn")).sendKeys(SSN);
				test.log(LogStatus.PASS, "SSN entered as :" +SSN);
				Thread.sleep(2000);
				driver.findElement(By.name("submit")).click();
				test.log(LogStatus.PASS, "Click on submit Button");
				Thread.sleep(2000);

				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				driver.findElement(By.name("button")).click();
				test.log(LogStatus.PASS, "Click on Go Button");				
				Thread.sleep(5000);
			
				
				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				driver.findElement(By.xpath("//input[@value='Go' and @type='button']")).click();
				test.log(LogStatus.PASS, "Click on GO Button");
			
			
				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				
				driver.findElement(By.name("transactionList")).sendKeys("Clear Check");
			

					driver.findElement(By.xpath("//input[@value='Go' and @type='button']")).click();
					// driver.findElement(By.id("go_Button")).click();
				

				
				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				
				driver.findElement(By.name("requestBean.password")).sendKeys(Password);
				test.log(LogStatus.PASS, "Password is selected as "+Password);						
				driver.findElement(By.name("finish")).click();																									
				test.log(LogStatus.PASS, "Clicked on Finish check clear button ");
				Thread.sleep(1000);

				try { 
					Alert alert = driver.switchTo().alert();
					String alertmsg=alert.getText();
					test.log(LogStatus.PASS, ""+alertmsg);
					alert.accept();
					
					driver.switchTo().defaultContent();
					driver.switchTo().frame("mainFrame");
					driver.switchTo().frame("main");
					
					Thread.sleep(1000);
					
					
					driver.findElement(By.name("checkyes")).click();
					test.log(LogStatus.PASS, "Clear check Completed Successfully ");
					

				}
				catch (Exception e) {
				}
				
		/*		driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				
				
				driver.findElement(By.name("checkyes")).click();
				test.log(LogStatus.PASS, "Void Loan is Completed Successfully ");*/
			
				

			}
		}
	}
	
	
	
	
	
}