package stepDefinitions;
import java.awt.List;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import com.relevantcodes.extentreports.ExtentReports;
import com.relevantcodes.extentreports.ExtentTest;
import com.relevantcodes.extentreports.LogStatus;

import net.bytebuddy.agent.builder.AgentBuilder.RedefinitionStrategy.DiscoveryStrategy.Explicit;
import stepDefinitions.CKM_PDL;



public class AdminOtherPayments_full extends CKM_PDL{
	public static void AdminOtherPayments_full () throws Exception {
		int lastrow = TestData.getLastRow("NewLoan");
	System.out.println("NewLoan " + lastrow);
	String sheetName = "NewLoan";
	for (int row = 2; row <= lastrow; row++) {
		String RegSSN = TestData.getCellData(sheetName, "SSN", row);
		ProductID=prop.getProperty("ProductID");
		if (SSN.equals(RegSSN)) {

			
			
			test.log(LogStatus.INFO, "AdminOtherPayments");

			//System.out.println(ProductID);
			//String AppURL = TestData.getCellData(sheetName, "AppURL", row);
			//appUrl = AppURL;
			LoginAdmin.LoginAdmin(UserNameAdmin, Password, StoreId);
			
			Thread.sleep(2000);
			driver.switchTo().frame("topFrame");				
			driver.findElement(By.linkText("Transactions")).click();
			test.log(LogStatus.PASS, "Clicked on Transactions");
			Thread.sleep(500);
			driver.switchTo().defaultContent();
			driver.switchTo().frame("mainFrame");
			Thread.sleep(500);
			driver.findElement(By.linkText("Admin Payments")).click();
			test.log(LogStatus.PASS, "Clicked on Admin Payments");
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
			
			
				
			
			
			String DueDate;
					
					DueDate = driver.findElement(By.xpath("/html/body/form[1]/table/tbody/tr/td/table/tbody/tr/td/table[2]/tbody/tr[7]/td[2]/table/tbody/tr/td/table/tbody/tr[4]/td[4]")).getText();
					
					DateFormat  df=new SimpleDateFormat("MM/dd/yyyy");	
					String DDueDate[] =DueDate.split("/");


					Date DDueDateminus1 = df.parse(DueDate);

					Calendar cal = Calendar.getInstance();

					cal.setTime(DDueDateminus1);

					cal.add(Calendar.DATE, -2);

					Date DDueDate1= cal.getTime();

					DueDate =df.format(DDueDate1);

					String DueDate0[] =DueDate.split("/");

					String DueDate1 = DueDate0[0];

					String DueDate2 = DueDate0[1];

					String DueDate3 = DueDate0[2];

		
			driver.findElement(By.xpath("//input[@value='Go' and @type='button']")).click();
			test.log(LogStatus.PASS, "Click on GO Button");
		
		
			driver.switchTo().defaultContent();
			driver.switchTo().frame("mainFrame");
			driver.switchTo().frame("main");
			
			driver.findElement(By.name("transactionList")).sendKeys("Partial RCPO");
		

				driver.findElement(By.xpath("//input[@value='Go' and @type='button']")).click();
				// driver.findElement(By.id("go_Button")).click();
			

			
			driver.switchTo().defaultContent();
			driver.switchTo().frame("mainFrame");
			driver.switchTo().frame("main");
			
			Thread.sleep(2000);
			
			driver.findElement(By.name("requestBean.scheduleAmount")).sendKeys("315");
			
			Thread.sleep(2000);
			
          
			
			
			driver.findElement(By.name("schDate1")).sendKeys(DueDate1.trim());
		
			test.log(LogStatus.PASS, "Date Entered is :" +DueDate1);
			
			Thread.sleep(500);
			
			
			driver.findElement(By.name("schDate2")).sendKeys(DueDate2.trim());
			
		   
			
			test.log(LogStatus.PASS, "Date Entered is :" +DueDate2);
			
			Thread.sleep(500);
			
		
			driver.findElement(By.name("schDate3")).sendKeys(DueDate3.trim());		   
			
			test.log(LogStatus.PASS, "Date Entered is :" +DueDate3);
			
			
			
		
			driver.findElement(By.name("recordSchdule")).click();
			test.log(LogStatus.PASS, "Partial RCP Schedule Added");
			

			
			
		
			

		}
	}
}





}