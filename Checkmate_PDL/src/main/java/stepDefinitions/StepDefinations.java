package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinations extends CKM_PDL {

	
	
	
//	@Before
//    public void beforeScenario(){
//        System.out.println("This will run before the Scenario");
//    } 
	
	@Given("^CA_PDL_014$")
	public void CA_PDL_014() throws Throwable {
		String FileName = "CA_PDL_014.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_014" + "_" + PayFrequency + "_" + CollateralType,
						"Loan– same day Void with secret code");

			}
		}
	}

	@Given("^CA_PDL_015$")
	public void CA_PDL_015() throws Throwable {
		FileName = "CA_PDL_015.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_015" + "_" + PayFrequency + "_" + CollateralType,
						"Loan – void on next day with secret code");

			}
		}
	}
	@Given("^CA_PDL_016$")
	public void CA_PDL_016() throws Throwable {
		FileName = "CA_PDL_016.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_016" + "_" + PayFrequency + "_" + CollateralType,
						"loan with disbursement cash ->void with cash");

			}
		}
	}
	@Given("^CA_PDL_017$")
	public void CA_PDL_017() throws Throwable {
		FileName = "CA_PDL_017.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_017" + "_" + PayFrequency + "_" + CollateralType,
						"loan with disbursement cash ->void with DC");

			}
		}
	}
	@Given("^CA_PDL_019$")
	public void CA_PDL_019() throws Throwable {
		FileName = "CA_PDL_019.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_019" + "_" + PayFrequency + "_" + CollateralType,
						"Loan– same day Rescind");
				

			}
		}
	}
	@Given("^CA_PDL_051$")
	public void CA_PDL_051() throws Throwable {
		FileName = "CA_PDL_051.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_051" + "_" + PayFrequency + "_" + CollateralType,
						"New Loan --> Age store up to some days before due date --> Partial Payment.");
				

			}
		}
	}
	@Given("^CA_PDL_052$")
	public void CA_PDL_052() throws Throwable {
		FileName = "CA_PDL_052.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_052" + "_" + PayFrequency + "_" + CollateralType,
						"New Loan --> Age store up to some days after due date --> Check Partial Payment transaction is displayed or not.");
				

			}
		}
	}
	@Given("^CA_PDL_053$")
	public void CA_PDL_053() throws Throwable {
		FileName = "CA_PDL_053.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_053" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as MO with different numbers =>Transaction should not be processed");
				

			}
		}
	}
	@Given("^CA_PDL_054$")
	public void CA_PDL_054() throws Throwable {
		FileName = "CA_PDL_054.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_054" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as MO with same numbers =>Transaction should not be processed");
				

			}
		}
	}
	@Given("^CA_PDL_055$")
	public void CA_PDL_055() throws Throwable {
		FileName = "CA_PDL_055.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_055" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as CCK with different numbers =>Transaction should not be processed");
				

			}
		}
	}
	@Given("^CA_PDL_056$")
	public void CA_PDL_056() throws Throwable {
		FileName = "CA_PDL_056.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_056" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as CCK and MO =>Transaction should be processed");
				

			}
		}
	}
	@Given("^CA_PDL_057$")
	public void CA_PDL_057() throws Throwable {
		FileName = "CA_PDL_057.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_057" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as Cash  =>Transaction should not be processed");
				

			}
		}
	}
	@Given("^CA_PDL_058$")
	public void CA_PDL_058() throws Throwable {
		FileName = "CA_PDL_058.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_058" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as Cash  =>Transaction should be processed");
				

			}
		}
	}
	@Given("^CA_PDL_059$")
	public void CA_PDL_059() throws Throwable {
		FileName = "CA_PDL_059.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_059" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CCK  =>Transaction should be processed");
				

			}
		}
	}
	@Given("^CA_PDL_060$")
	public void CA_PDL_060() throws Throwable {
		FileName = "CA_PDL_060.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_060" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CK  =>Transaction should be processed");
				

			}
		}
	}
	@Given("^CA_PDL_061$")
	public void CA_PDL_061() throws Throwable {
		FileName = "CA_PDL_061.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_061" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as MO  =>Transaction should be processed");
				

			}
		}
	}
	@Given("^CA_PDL_066$")
	public void CA_PDL_066() throws Throwable {
		FileName = "CA_PDL_066.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_066" + "_" + PayFrequency + "_" + CollateralType,
						"Loan -- Age the store up to some days before due date --Partial Payment with cash –Void");
				

			}
		}
	}
	@Given("^CA_PDL_067$")
	public void CA_PDL_067() throws Throwable {
		FileName = "CA_PDL_067.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_067" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as CCK and MO =>Transaction should be processed => Void with original tender");
				

			}
		}
	}	
	@Given("^CA_PDL_068$")
	public void CA_PDL_068() throws Throwable {
		FileName = "CA_PDL_068.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_068" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with 2 tender types as CCK and MO =>Transaction should be processed => Void with Cash");
				

			}
		}
	}
	@Given("^CA_PDL_069$")
	public void CA_PDL_069() throws Throwable {
		FileName = "CA_PDL_069.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_069" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CCK  =>Transaction should be processed => Void with original tender");
				

			}
		}
	}
	
	@Given("^CA_PDL_070$")
	public void CA_PDL_070() throws Throwable {
		FileName = "CA_PDL_070.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_070" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CCK  =>Transaction should be processed => Void with cash"
						+ "");
				

			}
		}
	}
	
	@Given("^CA_PDL_071$")
	public void CA_PDL_071() throws Throwable {
		FileName = "CA_PDL_071.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_070" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CK  =>Transaction should be processed => Void with Original Tender"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_072$")
	public void CA_PDL_072() throws Throwable {
		FileName = "CA_PDL_072.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_072" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CK  =>Transaction should be processed => Void with Cash"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_073$")
	public void CA_PDL_073() throws Throwable {
		FileName = "CA_PDL_073.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_073" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as MO  =>Transaction should be processed => Void with Original Tender"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_074$")
	public void CA_PDL_074() throws Throwable {
		FileName = "CA_PDL_074.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_074" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as MO  =>Transaction should be processed => Void with Cash"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_083$")
	public void CA_PDL_083() throws Throwable {
		FileName = "CA_PDL_083.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_083" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with ACH --> Safe deposit on Due date → Payoff amount should display in Safe deposit"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_084$")
	public void CA_PDL_084() throws Throwable {
		FileName = "CA_PDL_083.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_084" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with ACH --> Partial Payment --> Safe deposit on Due date → pending amount should display in Safe deposit"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_085$")
	public void CA_PDL_085() throws Throwable {
		FileName = "CA_PDL_085.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_085" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with ACH --> Check edit from admin → Should display as Manual in Safe deposit on Due date"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_087$")
	public void CA_PDL_087() throws Throwable {
		FileName = "CA_PDL_087.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_087" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with ACH → mark Revoke from admin → Process Safe deposit on Due date"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_088$")
	public void CA_PDL_088() throws Throwable {
		FileName = "CA_PDL_088.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_088" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with RCPO --> Safe deposit on Due date → Payoff amount should display in Safe deposit"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_089$")
	public void CA_PDL_089() throws Throwable {
		FileName = "CA_PDL_089.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_089" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with RCPO --> Partial Payment --> Safe deposit on Due date → pending amount should display in Safe deposit"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_090$")
	public void CA_PDL_090() throws Throwable {
		FileName = "CA_PDL_090.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_090" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with RCPO --> Check edit from admin → Should display as Manual in Safe deposit on Due date"
						+ "");
				

			}
		}
	}
	@Given("^CA_PDL_092$")
	public void CA_PDL_092() throws Throwable {
		FileName = "CA_PDL_092.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_092" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with RCPO → mark Revoke from admin → Process Safe deposit on Due date"
						+ "");
				

			}
		}
	}
	
	@Given("^CA_PDL_022$")
	public void CA_PDL_022() throws Throwable {
		FileName = "CA_PDL_022.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_022" + "_" + PayFrequency + "_" + CollateralType,
						"Loan--Age the store--Perform the Buyback\n" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_029$")
	public void CA_PDL_029() throws Throwable {
		FileName = "CA_PDL_029.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_029" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as Cash  =>Transaction should be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_030$")
	public void CA_PDL_030() throws Throwable {
		FileName = "CA_PDL_030.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_030" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as CCK  =>Transaction should be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_031$")
	public void CA_PDL_031() throws Throwable {
		FileName = "CA_PDL_031.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_031" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as CK  =>Transaction should be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_032$")
	public void CA_PDL_032() throws Throwable {
		FileName = "CA_PDL_032.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_032" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as Cash  =>Transaction should be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_037$")
	public void CA_PDL_037() throws Throwable {
		FileName = "CA_PDL_037.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_037" + "_" + PayFrequency + "_" + CollateralType,
						"Loan Age the store Perform the Buyback void on same day" + 
						"" + "");
				

			}
		}
	}

	@Given("^CA_PDL_038$")
	public void CA_PDL_038() throws Throwable {
		FileName = "CA_PDL_038.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_038" + "_" + PayFrequency + "_" + CollateralType,
						"Loan Age the store Perform the Buyback Next Day void" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_035$")
	public void CA_PDL_035() throws Throwable {
		FileName = "CA_PDL_035.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_035" + "_" + PayFrequency + "_" + CollateralType,
						"Advance => partial payment => Buyback in rescind period  =>Transaction should be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_042$")
	public void CA_PDL_042() throws Throwable {
		FileName = "CA_PDL_042.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_042" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as Cash  =>Transaction should be processed => Void buyback with cash" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_043$")
	public void CA_PDL_043() throws Throwable {
		FileName = "CA_PDL_043.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_043" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as CCK  =>Transaction should be processed => Void buyback with OT" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_044$")
	public void CA_PDL_044() throws Throwable {
		FileName = "CA_PDL_044.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_044" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as CCK  =>Transaction should be processed => Void buyback with cash" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_045$")
	public void CA_PDL_045() throws Throwable {
		FileName = "CA_PDL_045.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_045" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as CK  =>Transaction should be processed => Void buyback with OT" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_046$")
	public void CA_PDL_046() throws Throwable {
		FileName = "CA_PDL_046.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_046" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as CK  =>Transaction should be processed => Void buyback with Cash" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_039$")
	public void CA_PDL_039() throws Throwable {
		FileName = "CA_PDL_039.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_039" + "_" + PayFrequency + "_" + CollateralType,
						"loan->verify buyback should accept only total due" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_047$")
	public void CA_PDL_047() throws Throwable {
		FileName = "CA_PDL_047.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_047" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as MO  =>Transaction should be processed => Void buyback with OT" + 
						"" + "");
				

			}
		}
	}
	
	
	@Given("^CA_PDL_048$")
	public void CA_PDL_048() throws Throwable {
		FileName = "CA_PDL_048.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_048" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with tender types as MO  =>Transaction should be processed => Void buyback with Cash" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_024$")
	public void CA_PDL_024() throws Throwable {
		FileName = "CA_PDL_024.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_024" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with 2 tender types as MO with different numbers =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_025$")
	public void CA_PDL_025() throws Throwable {
		FileName = "CA_PDL_025.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_025" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with 2 tender types as MO with same numbers =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_026$")
	public void CA_PDL_026() throws Throwable {
		FileName = "CA_PDL_026.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_026" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with 2 tender types as CCk with DIFF numbers =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_026_1$")
	public void CA_PDL_026_1() throws Throwable {
		FileName = "CA_PDL_026_1.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_026_1" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with 2 tender types as CCk with same numbers =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_028$")
	public void CA_PDL_028() throws Throwable {
		FileName = "CA_PDL_028.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_028" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Buyback with 2 tender types as Cash  =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_078$")
	public void CA_PDL_78() throws Throwable {
		FileName = "CA_PDL_078.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_078" + "_" + PayFrequency + "_" + CollateralType,
						"New Loan --> Age store to some days before due date -> Partial Payment Age store up to some days after due date BuyBack " + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_079$")
	public void CA_PDL_79() throws Throwable {
		FileName = "CA_PDL_079.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_079" + "_" + PayFrequency + "_" + CollateralType,
						"New Loan --> Age store to some days before due date -> Partial Payment -->Age store up to some days before due date --> BuyBack transaction --> Void BuyBack Transaction => transaction should display in safe Deposit" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_080$")
	public void CA_PDL_80() throws Throwable {
		FileName = "CA_PDL_080.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_080" + "_" + PayFrequency + "_" + CollateralType,
						"New Loan --> Age store to some days before due date -> Partial Payment -->Age store up to some days before due date --> BuyBack transaction with change --> Void BuyBack Transaction --> check whether change amount is displayed or not " + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_097$")
	public void CA_PDL_97() throws Throwable {
		FileName = "CA_PDL_097.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_097" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with Check --> Safe deposit on Due date → Full amount should display in Safe deposit " + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_098$")
	public void CA_PDL_98() throws Throwable {
		FileName = "CA_PDL_098.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_098" + "_" + PayFrequency + "_" + CollateralType,
						"Loan with Check --> Partial Payment --> Safe deposit on Due date → Full amount should display in Safe deposit" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_099$")
	public void CA_PDL_99() throws Throwable {
		FileName = "CA_PDL_099.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_099" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CCK → Internal transfer → Safe deposit" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_100$")
	public void CA_PDL_100() throws Throwable {
		FileName = "CA_PDL_100.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_0100" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as CK → Internal transfer → Safe deposit" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_101$")
	public void CA_PDL_101() throws Throwable {
		FileName = "CA_PDL_101.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_101" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Partial Payment with tender types as MO → Internal transfer → Safe deposit" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_001$")
	public void CA_PDL_001() throws Throwable {
		FileName = "CA_PDL_001.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_001" + "_" + PayFrequency + "_" + CollateralType,
						"Login--> Home screen--> Borrower -->Registration-->New loan" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_002$")
	public void CA_PDL_003() throws Throwable {
		FileName = "CA_PDL_003.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_003" + "_" + PayFrequency + "_" + CollateralType,
						"Borrower -> PayFrequency (Weekly) -> New Loan ->Check Due Date for Min Term" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_004$")
	public void CA_PDL_004() throws Throwable {
		FileName = "CA_PDL_004.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_004" + "_" + PayFrequency + "_" + CollateralType,
						"Borrower -> PayFrequency (Bi Weekly) -> New Loan ->Check Due Date for Min Term" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_005$")
	public void CA_PDL_005() throws Throwable {
		FileName = "CA_PDL_005.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_005" + "_" + PayFrequency + "_" + CollateralType,
						"Borrower -> PayFrequency (SemiMonthly) -> New Loan ->Check Due Date for Min Term" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_007$")
	public void CA_PDL_007() throws Throwable {
		FileName = "CA_PDL_007.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_007" + "_" + PayFrequency + "_" + CollateralType,
						"Login--> Home screen--> Borrower -->Registration--> verify whether loan amount is based on Customer Income or not" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_027$")
	public void CA_PDL_027() throws Throwable {
		FileName = "CA_PDL_027.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_027" + "_" + PayFrequency + "_" + CollateralType,
						"Login--> Home screen--> Borrower -->Registration--> buyback with MO and CCK " + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_040$")
	public void CA_PDL_040() throws Throwable {
		FileName = "CA_PDL_040.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_040" + "_" + PayFrequency + "_" + CollateralType,
						"Login--> Home screen--> Borrower -->Registration--> buyback with cck and Mo void with OT" + 
						"" + "");
				

			}
		}
	}
	
	@Given("^CA_PDL_041$")
	public void CA_PDL_041() throws Throwable {
		FileName = "CA_PDL_041.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_041" + "_" + PayFrequency + "_" + CollateralType,
						"Login--> Home screen--> Borrower -->Registration--> buyback with cck and Mo void with Cash" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_117$")
	public void CA_PDL_117() throws Throwable {
		FileName = "CA_PDL_117.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_117" + "_" + PayFrequency + "_" + CollateralType,
						"Loan → Deposit → Clear" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_118$")
	public void CA_PDL_118() throws Throwable {
		FileName = "CA_PDL_118.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_118" + "_" + PayFrequency + "_" + CollateralType,
						"Loan → Deposit → Return" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_102$")
	public void CA_PDL_102() throws Throwable {
		FileName = "CA_PDL_102.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_102" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with 2 tender types as MO with different numbers =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_103$")
	public void CA_PDL_103() throws Throwable {
		FileName = "CA_PDL_103.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_103" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with 2 tender types as MO with same numbers =>Transaction should not be processed" + 
						"" + "");
				

			}
		}
	}

	@Given("^CA_PDL_137$")
	public void CA_PDL_137() throws Throwable {
		FileName = "CA_PDL_137.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_137" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with 2 tender types as CCK with same numbers =>Transaction should not be processed\n" + 
						"" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_104$")
	public void CA_PDL_104() throws Throwable {
		FileName = "CA_PDL_104.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_104" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with 2 tender types as CCK with diffrent numbers =>Transaction should not be processed\n" + 
						"" + 
						"" + "");
				

			}
		}
	}
	@Given("^CA_PDL_105$")
	public void CA_PDL_105() throws Throwable {
		FileName = "CA_PDL_105.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_105" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with 2 tender types as CCK and MO =>Transaction should be processed" + 
						"" + "" + "");
				

			}
		}
	}
	@Given("^CA_PDL_106$")
	public void CA_PDL_106() throws Throwable {
		FileName = "CA_PDL_106.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_106" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with 2 tender types as Cash  =>Transaction should not be processed" + 
						"" + "" + "");
				

			}
		}
	}
	
	
@Given("^CA_PDL_107$")
	public void CA_PDL_107() throws Throwable {
		FileName = "CA_PDL_107.xls";
		TestData = new Excel(System.getProperty("user.dir")
				+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
		int lastrow = TestData.getLastRow("NewLoan");
		String sheetName = "NewLoan";
		// int lastrow=TestData.getLastRow("Borrower");
		System.out.println(lastrow);
		for (int row = 2; row <= lastrow; row++) {
			String RunFlag = TestData.getCellData(sheetName, "Run", row);
			// System.out.println(RunFlag);
			if (RunFlag.equals("Y")) {
				String ProductID = TestData.getCellData(sheetName, "ProductID", row);
				String StateID = TestData.getCellData(sheetName, "StateID", row);
				SSN = TestData.getCellData(sheetName, "SSN", row);
				String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
				String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
				
				// System.out.println(SSN);
				test = reports.startTest("CA_PDL_107" + "_" + PayFrequency + "_" + CollateralType,
						"Advance =>Deposit => Pre-Payment with tender types as Cash  =>Transaction should be processed" + 
						"" + "" + "");

			}
		}
	}

@Given("^CA_PDL_108$")
public void CA_PDL_108() throws Throwable {
	FileName = "CA_PDL_108.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_108" + "_" + PayFrequency + "_" + CollateralType,
					"Advance =>Deposit => Pre-Payment with tender types as CCK  =>Transaction should be processed" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_109$")
public void CA_PDL_109() throws Throwable {
	FileName = "CA_PDL_109.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_109" + "_" + PayFrequency + "_" + CollateralType,
					"Advance =>Deposit => Pre-Payment with tender types as CK  =>Transaction should be processed" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_110$")
public void CA_PDL_110() throws Throwable {
	FileName = "CA_PDL_110.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_110" + "_" + PayFrequency + "_" + CollateralType,
					"Advance =>Deposit => Pre-Payment with tender types as MO  =>Transaction should be processed" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_119$")
public void CA_PDL_119() throws Throwable {
	FileName = "CA_PDL_119.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_119" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Clear → Deposit Return" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_120$")
public void CA_PDL_120() throws Throwable {
	FileName = "CA_PDL_120.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_120" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Partial Payment → Deposit → Prepayment" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_121$")
public void CA_PDL_121() throws Throwable {
	FileName = "CA_PDL_121.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_121" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Prepayment with Cash → Void" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_122_1$")
public void CA_PDL_122_1() throws Throwable {
	FileName = "CA_PDL_122_1.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_122_1" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Prepayment with CK→ Void" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_122_2$")
public void CA_PDL_122_2() throws Throwable {
	FileName = "CA_PDL_122_2.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_122_2" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Prepayment with CCK→ Void" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_122_3$")
public void CA_PDL_122_3() throws Throwable {
	FileName = "CA_PDL_122_3.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_122_3" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Prepayment with MO→ Void" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_127$")
public void CA_PDL_127() throws Throwable {
	FileName = "CA_PDL_127.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_127" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → full NSF Payment" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_126$")
public void CA_PDL_126() throws Throwable {
	FileName = "CA_PDL_126.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_126" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → full NSF Payment→void" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_124$")
public void CA_PDL_124() throws Throwable {
	FileName = "CA_PDL_124.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_124" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Prepayment with Cash → Deposit Return" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_125$")
public void CA_PDL_125() throws Throwable {
	FileName = "CA_PDL_125.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_125" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Partial NSF Payment" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_128$")
public void CA_PDL_128() throws Throwable {
	FileName = "CA_PDL_128.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_128" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Partial NSF Payment-->void" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_138$")
public void CA_PDL_138() throws Throwable {
	FileName = "CA_PDL_138.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_138" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Prepayment with CK → Return Pre-payment" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_129_1$")
public void CA_PDL_129_1() throws Throwable {
	FileName = "CA_PDL_129_1.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_129_1" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Full NSF Payment with CK" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_129_2$")
public void CA_PDL_129_2() throws Throwable {
	FileName = "CA_PDL_129_2.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_129_2" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Full NSF Payment with CCK" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_129_3$")
public void CA_PDL_129_3() throws Throwable {
	FileName = "CA_PDL_129_3.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_129_3" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Full NSF Payment with MO" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_130$")
public void CA_PDL_130() throws Throwable {
	FileName = "CA_PDL_130.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_130" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Schedule Partial RCPO with Partial amount from Admin" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_132$")
public void CA_PDL_132() throws Throwable {
	FileName = "CA_PDL_132.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_132" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → partial payment-- Deposit → Deposit Return → Schedule Partial RCPO with Partial amount from Admin" + 
					"" + "" + "");

		}
	}
}
@Given("^CA_PDL_131$")
public void CA_PDL_131() throws Throwable {
	FileName = "CA_PDL_131.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_131" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Deposit → Deposit Return → Schedule Partial RCPO with full amount from Admin" + 
					"" + "" + "");

		}
	}
}

@Given("^CA_PDL_133$")
public void CA_PDL_133() throws Throwable {
	FileName = "CA_PDL_133.xls";
	TestData = new Excel(System.getProperty("user.dir")
			+ prop.getProperty("CKM_Store_Test_data_CA_PDL_path_samatha") + FileName);
	int lastrow = TestData.getLastRow("NewLoan");
	String sheetName = "NewLoan";
	// int lastrow=TestData.getLastRow("Borrower");
	System.out.println(lastrow);
	for (int row = 2; row <= lastrow; row++) {
		String RunFlag = TestData.getCellData(sheetName, "Run", row);
		// System.out.println(RunFlag);
		if (RunFlag.equals("Y")) {
			String ProductID = TestData.getCellData(sheetName, "ProductID", row);
			String StateID = TestData.getCellData(sheetName, "StateID", row);
			SSN = TestData.getCellData(sheetName, "SSN", row);
			String PayFrequency = TestData.getCellData(sheetName, "Income_PayFrequency", row);
			String CollateralType = TestData.getCellData(sheetName, "ESign_CollateralType", row);
			
			// System.out.println(SSN);
			test = reports.startTest("CA_PDL_133" + "_" + PayFrequency + "_" + CollateralType,
					"Loan → Partial Payment Deposit → Deposit Return → Schedule Partial RCPO with full amount from Admin" + 
					"" + "" + "");

		}
	}
}
	@And("^Login into CSR$")
	public void login_into_CSR() throws Throwable {

		
		Login.Login(UserName, Password, StoreId);

	}
	
	@And("^Login into Admin$")
	public void login_into_Admin() throws Throwable {

				
		LoginAdmin.LoginAdmin(UserNameAdmin, Password, StoreId);

	}
	
	@Then("^NSFPaymentPartial$")
	public void NSFPayment_Partial () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		NSFPayment_Partial.NSFPayment_Partial();
	}
	@Then("^ReturnAdmin$")
	public void Return_Admin () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Return_Admin.Return_Admin();
	}
	
	@Then("^RCPOReturn$")
	public void RCPOReturn () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		RCPOReturn.RCPOReturn();
	}
	@Then("^PrepaymentPartial$")
	public void Prepayment_Partial () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Prepayment_Partial.Prepayment_Partial();
	}
	
	@Given("^Registration of the Borrower PDL$")
	public void Registration_of_the_Borrower_PDL() throws Throwable {

		Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(driver, test, AppURL, SSN, FileName);
	}

	@Then("^New Loan taken for the user$")
	public void new_Loan_taken_for_the_user() throws Throwable {
		new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(SSN, FileName, "200");

	}
	
	@Then("^Get the Due Date from History$")
	public void get_the_Due_Date_from_History() throws Throwable 
	{
		get_the_Due_Date_from_History.get_the_Due_Date_from_History(SSN);
	}

	
	@Then("^Age the store to \"(.*)\"$")  
	public void age_the_store_to_days(String days) throws Throwable {
		age_the_store.age_the_store(SSN, FileName, days);
	}
	
	
	
	
	@Then("^Void the transaction$")
	public void void_the_transaction() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		void_the_transaction.void_the_transaction();
	}
	
	@Then("^BVoid the transaction$")
	public void Bvoid () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Bvoid.Bvoid();
	}
	
	@Then("^Get the Loan Date from History$")
	public void get_the_Loan_Date_from_History() throws Throwable 
	{
		get_the_Loan_Date_from_History.get_the_Loan_Date_from_History(SSN);
	}
	
	@Then("^Rescind the transaction$")
	public void rescind_the_transaction() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		rescind_the_transaction.rescind_the_transaction();
	}
	
	@Then("^Partial Payment Diff No$")
	public void partial_Payment_diff_no() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		partial_payment_diff_no.partial_payment_diff_no();
	}
	@Then("^Buyback  Diff No$")
	public void Buyback_diff_no() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Buyback_diff_no.Buyback_diff_no();
	}
	
	@Then("^Buyback_Same_No$")
	public void Buyback_Same_No () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Buyback_Same_No.Buyback_Same_No();
	}
	@Then("^Partial Payment Same No$")
	public void partial_Payment_same_no() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		partial_payment_same_no.partial_payment_same_no();
	}
	@Then("^Partial Payment$")
	public void partial_Payment() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		partial_payment.partial_payment();
	}
	
	@Then("^NSFPayment$")
	public void NSFPayment () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		NSFPayment.NSFPayment();
	}
	 
	@Then("^Single Partial Payment$")
	public void Singlepartial_Payment () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Singlepartial_Payment.Singlepartial_Payment();
	}
	
	@Then("^Prepayment$")
	public void Prepayment () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Prepayment.Prepayment();
	}
	

@Then("^Buyback$")
public void Buyback() throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Buyback.Buyback();
}


@Then("^Prepayment diff No$")
public void Prepayment_Diff () throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Prepayment_Diff.Prepayment_Diff();
}

@Then("^Prepayment Same$")
public void Prepayment_Same () throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Prepayment_Same.Prepayment_Same();
}

@Then("^Buyback_Change$")
public void Buyback_change () throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Buyback_change.Buyback_change();
}

@Then("^Verification$")
public void Verification () throws Throwable {
    // Write code here that turns the phrase above into concrete actions
	Verification.Verification(SSN);
}
	
	@Then("^Safe deposit on duedate$")
	public void safe_deposit_on_duedate() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		safe_deposit_on_duedate.safe_deposit_on_duedate();
	}

	@Then("^InternalTransfer$")
	public void InternalTransfer() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions	
		Internaltransfer.Internaltransfer();
	}
	@Then("^Payoff amount in Safe deposit$")
	public void Payoff_amount_in_safe_deposit() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Payoff_amount_in_safe_deposit.Payoff_amount_in_safe_deposit();
	}
	
	@Then("^Check edit from admin$")
	public void check_edit_from_admin() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		check_edit_from_admin.check_edit_from_admin();
	}
	@Then("^History$")
	public void History() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		History.History(SSN,AppURL);
	}
	@Then("^Revoke from admin$")
	public void revoke_from_admin() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		revoke_from_admin.revoke_from_admin();
	}
	@Then("^Check_Clear$")
	public void Check_Clear() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Check_Clear.Check_Clear();
	}
	@Then("^AdminOtherPayments$")
	public void AdminOtherPayments () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		AdminOtherPayments.AdminOtherPayments();
	}
	
	@Then("^AdminOtherPaymentsfull$")
	public void AdminOtherPayments_full () throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		AdminOtherPayments_full.AdminOtherPayments_full();
	}
	
//	@Then("^Revoke from admin$")
//	public void revoke_from_admin() throws Throwable {
//	    // Write code here that turns the phrase above into concrete actions
//		revoke_from_admin.revoke_from_admin();
//	}
}
