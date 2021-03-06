package stepDefinitions;

import java.awt.Robot;
import java.awt.event.KeyEvent;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;

import com.relevantcodes.extentreports.LogStatus;

public class NSFPayment extends CKM_PDL{

public static void NSFPayment () throws Exception {

		
		int lastrow = TestData.getLastRow("NewLoan");
		System.out.println("NewLoan " + lastrow);
		String sheetName = "NewLoan";
		for (int row = 2; row <= lastrow; row++) {
			String RegSSN = TestData.getCellData(sheetName, "SSN", row);
			String TenderType = TestData.getCellData(sheetName, "TenderType", row);
			if (SSN.equals(RegSSN)) {

				
				
				test.log(LogStatus.INFO, "NSFPayment started");

				//System.out.println(ProductID);
				//String AppURL = TestData.getCellData(sheetName, "AppURL", row);
				//appUrl = AppURL;
				Login.Login(UserName, Password, StoreId);
				driver.switchTo().frame("topFrame");	
				Thread.sleep(3000);
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
				
				driver.findElement(By.name("transactionList")).sendKeys("NSFPayemnt");
			

					driver.findElement(By.xpath("//input[@value='Go' and @type='button']")).click();
					// driver.findElement(By.id("go_Button")).click();
				

				
				driver.switchTo().defaultContent();
				driver.switchTo().frame("mainFrame");
				driver.switchTo().frame("main");
				
				
				
				
				String Pmt= driver.findElement(By.name("transactionDataBean.paymentAmt")).getAttribute("value");						 
				System.out.println(Pmt);						 
				
			

				if(TenderType.equals("Money Order"))			
					
				{
			
				driver.findElement(By.name("transactionDataBean.tenderTypeFirst")).sendKeys("Money Order");
				test.log(LogStatus.PASS, "Tender Type is Selected as Money Order ");
				Thread.sleep(5000);					
				driver.findElement(By.name("transactionDataBean.ccmoNbrFirst")).sendKeys("1234");
				test.log(LogStatus.PASS, "Tender Type ref is 1234");
				
				driver.findElement(By.name("transactionDataBean.tenderAmtFirst")).sendKeys(Pmt);						 
				test.log(LogStatus.PASS, "Tender Amt is entered as "+Pmt);
					
				
			}
				
				
				if(TenderType.equals("Cashiers Check"))
					
		{	
					driver.findElement(By.name("transactionDataBean.tenderTypeFirst")).sendKeys("Cashiers Check");
					test.log(LogStatus.PASS, "Tender Type is Selected as Cashiers Check ");
					Thread.sleep(5000);					
					driver.findElement(By.name("transactionDataBean.ccmoNbrFirst")).sendKeys("2323");
					test.log(LogStatus.PASS, "Tender Type ref is 2323");
					driver.findElement(By.name("transactionDataBean.tenderAmtFirst")).sendKeys(Pmt);						 
					test.log(LogStatus.PASS, "Tender Amt is entered as "+Pmt);
									
		
				
			}
				if(TenderType.equals("Check"))
					
				{	
						
						
						driver.findElement(By.name("transactionDataBean.tenderTypeFirst")).sendKeys("Check");
						test.log(LogStatus.PASS, "Tender Type is Selected as Check");
						Thread.sleep(5000);					
						driver.findElement(By.name("transactionDataBean.checkNbrFirst")).sendKeys("1234");
						test.log(LogStatus.PASS, "Tender Type ref is 1234");	
						
						Thread.sleep(2000);
										
						driver.findElement(By.name("transactionDataBean.tenderAmtFirst")).sendKeys(Pmt);						 
						test.log(LogStatus.PASS, "Tender Amt is entered as "+Pmt);
									
						
					}
				
				
				if(TenderType.equals("Cash"))
					
				{	
					driver.findElement(By.name("transactionDataBean.tenderTypeFirst")).sendKeys("Cash");
					test.log(LogStatus.PASS, "Tender Type is selected as Cash " );
					Thread.sleep(2000);
					
					driver.findElement(By.name("transactionDataBean.tenderAmtFirst")).sendKeys(Pmt);						 
					test.log(LogStatus.PASS, "Tender Amt is entered as "+Pmt);
					
						
					}
				
                  if(TenderType.equals("CCK and MO"))
					
				{	
                	  
                	driver.findElement(By.name("transactionDataBean.tenderTypeFirst")).sendKeys("Cashiers Check");
  					test.log(LogStatus.PASS, "Tender Type is Selected as Cashiers Check ");
  					Thread.sleep(5000);					
  					driver.findElement(By.name("transactionDataBean.ccmoNbrFirst")).sendKeys("2323");
  					test.log(LogStatus.PASS, "Tender Type ref is 2323");
  					driver.findElement(By.name("transactionDataBean.tenderAmtFirst")).sendKeys("200");						 
  					test.log(LogStatus.PASS, "Tender Amt is entered as 200 ");
						
						Thread.sleep(2000);
						
					driver.findElement(By.name("transactionDataBean.tenderTypeSecond")).sendKeys("Money Order");
					test.log(LogStatus.PASS, "Tender Type is Selected as Money Order ");
					Thread.sleep(5000);					
					driver.findElement(By.name("transactionDataBean.tenderTypeSecond")).sendKeys("1234");				
					test.log(LogStatus.PASS, "Tender Type ref is 1234");
						
					driver.findElement(By.name("transactionDataBean.tenderAmtSecond")).sendKeys("200");						 
					test.log(LogStatus.PASS, "Tender Amt is entered as 200");
							
				
						
					}
				
				driver.findElement(By.name("requestBean.password")).sendKeys(Password);
				test.log(LogStatus.PASS, "Password is selected as "+Password);						
				driver.findElement(By.name("Submit22")).click();				
				test.log(LogStatus.PASS, "NSFPayment completed");
				Thread.sleep(1000);

				try { 
					Alert alert = driver.switchTo().alert();
					String alertmsg=alert.getText();
					test.log(LogStatus.PASS, ""+alertmsg);
					alert.accept();
					
					
					driver.switchTo().defaultContent();
					driver.switchTo().frame("mainFrame");
					driver.switchTo().frame("main");
					
					
					driver.findElement(By.name("checkyes")).click();
					test.log(LogStatus.PASS, "NSFPayment Completed Successfully ");
					

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