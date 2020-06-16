$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Checkmate Scenarios for CA State",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state",
  "keyword": "Feature"
});
formatter.before({
  "duration": 118500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Loan--Age the store--Perform the Buyback",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan--age-the-store--perform-the-buyback",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "CA_PDL_022",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_022()"
});
formatter.result({
  "duration": 402085100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 14470677600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 53073830500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 81208255800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.PDL(new_Loan_taken_for_the_user.java:542)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:163)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:2902)\r\n\tat ✽.Then New Loan taken for the user(login.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 41800,
  "status": "passed"
});
formatter.before({
  "duration": 48000,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Advance \u003d\u003eBuyback with tender types as Cash  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-cash--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "CA_PDL_029",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_029()"
});
formatter.result({
  "duration": 146153400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1777841800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34695169300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:21)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 42200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Advance \u003d\u003eBuyback with tender types as CCK  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-cck--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "CA_PDL_030",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 35,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 38,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_030()"
});
formatter.result({
  "duration": 122424800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1805798400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34183181400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:34)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38600,
  "status": "passed"
});
formatter.before({
  "duration": 33000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Advance \u003d\u003eBuyback with tender types as CK  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-ck--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "CA_PDL_031",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_031()"
});
formatter.result({
  "duration": 40457800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1767763100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34392454900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:46)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38500,
  "status": "passed"
});
formatter.before({
  "duration": 34100,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Advance \u003d\u003eBuyback with tender types as MO  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 57,
  "name": "CA_PDL_032",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_032()"
});
formatter.result({
  "duration": 62898400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1790680200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36795291700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 74181347600,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.PDL(new_Loan_taken_for_the_user.java:542)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:163)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:2902)\r\n\tat ✽.Then New Loan taken for the user(login.feature:60)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 46200,
  "status": "passed"
});
formatter.before({
  "duration": 58600,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Loan--Age the store--Perform the Buyback  -\u003evoid on same day",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan--age-the-store--perform-the-buyback---\u003evoid-on-same-day",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 74,
  "name": "CA_PDL_037",
  "keyword": "Given "
});
formatter.step({
  "line": 75,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 76,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 77,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 79,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 80,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 81,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_037()"
});
formatter.result({
  "duration": 49777700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1902828600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 43648082400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 20998622100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with link text \u003d\u003d Loan Transactions (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dlink text, value\u003dLoan Transactions}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:373)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:122)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:2902)\r\n\tat ✽.Then New Loan taken for the user(login.feature:77)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 135000,
  "status": "passed"
});
formatter.before({
  "duration": 124800,
  "status": "passed"
});
formatter.scenario({
  "line": 86,
  "name": "Loan--Age the store--Perform the Buyback  -\u003e Next day void on same day",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan--age-the-store--perform-the-buyback---\u003e-next-day-void-on-same-day",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 89,
  "name": "CA_PDL_038",
  "keyword": "Given "
});
formatter.step({
  "line": 90,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 91,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 92,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 93,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 94,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 95,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 96,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 97,
  "name": "Age the store to \"-1\"",
  "keyword": "Then "
});
formatter.step({
  "line": 98,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_038()"
});
formatter.result({
  "duration": 47458000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1732783900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37306751700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 78100786400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 18606959700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with link text \u003d\u003d Loan Transactions (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dlink text, value\u003dLoan Transactions}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:373)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.get_the_Due_Date_from_History.get_the_Due_Date_from_History(get_the_Due_Date_from_History.java:44)\r\n\tat stepDefinitions.StepDefinations.get_the_Due_Date_from_History(StepDefinations.java:2909)\r\n\tat ✽.And Get the Due Date from History(login.feature:93)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-1",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37500,
  "status": "passed"
});
formatter.before({
  "duration": 23800,
  "status": "passed"
});
formatter.scenario({
  "line": 103,
  "name": "Advance \u003d\u003e partial payment \u003d\u003e Buyback in rescind period  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003e-partial-payment-\u003d\u003e-buyback-in-rescind-period--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 106,
  "name": "CA_PDL_035",
  "keyword": "Given "
});
formatter.step({
  "line": 107,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 109,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 110,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_035()"
});
formatter.result({
  "duration": 26865300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1792306000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37606509000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 60154171300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with xpath \u003d\u003d //*[@id\u003d\u0027riskViewBdy\u0027]/table[3]/tbody/tr[1]/td/table/tbody/tr[3]/td/table/tbody/tr[5]/td[4]/table/tbody/tr[1]/td[2] (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027riskViewBdy\u0027]/table[3]/tbody/tr[1]/td/table/tbody/tr[3]/td/table/tbody/tr[5]/td[4]/table/tbody/tr[1]/td[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.PDL(new_Loan_taken_for_the_user.java:374)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:163)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:2902)\r\n\tat ✽.Then New Loan taken for the user(login.feature:109)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 62500,
  "status": "passed"
});
formatter.before({
  "duration": 54700,
  "status": "passed"
});
formatter.scenario({
  "line": 116,
  "name": "Advance \u003d\u003eBuyback with tender types as Cash  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with cash",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-cash--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 119,
  "name": "CA_PDL_042",
  "keyword": "Given "
});
formatter.step({
  "line": 120,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 121,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 122,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 123,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 125,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_042()"
});
formatter.result({
  "duration": 38253000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1749051900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37876929600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 77389061900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 34843756600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 556742100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "duration": 35555256200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "duration": 27244895700,
  "status": "passed"
});
formatter.after({
  "duration": 29600,
  "status": "passed"
});
formatter.before({
  "duration": 20400,
  "status": "passed"
});
formatter.scenario({
  "line": 129,
  "name": "Advance \u003d\u003eBuyback with tender types as CCK  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with OT",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-cck--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-ot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 132,
  "name": "CA_PDL_043",
  "keyword": "Given "
});
formatter.step({
  "line": 133,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 134,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 135,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 136,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 137,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 138,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 139,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_043()"
});
formatter.result({
  "duration": 47624600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1713194900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35306846300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:134)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38200,
  "status": "passed"
});
formatter.before({
  "duration": 34500,
  "status": "passed"
});
formatter.scenario({
  "line": 144,
  "name": "Advance \u003d\u003eBuyback with tender types as CCK  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with cash",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-cck--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 147,
  "name": "CA_PDL_044",
  "keyword": "Given "
});
formatter.step({
  "line": 148,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 150,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 152,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 153,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_044()"
});
formatter.result({
  "duration": 26454900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2678185600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34697024800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:149)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 39200,
  "status": "passed"
});
formatter.before({
  "duration": 29600,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "Advance \u003d\u003eBuyback with tender types as Check  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with OT",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-check--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-ot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 161,
  "name": "CA_PDL_045",
  "keyword": "Given "
});
formatter.step({
  "line": 162,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 163,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 167,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 168,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_045()"
});
formatter.result({
  "duration": 30853100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2032513600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35039306100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:163)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 35900,
  "status": "passed"
});
formatter.before({
  "duration": 34000,
  "status": "passed"
});
formatter.scenario({
  "line": 172,
  "name": "Advance \u003d\u003eBuyback with tender types as Check  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with cash",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-check--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 175,
  "name": "CA_PDL_046",
  "keyword": "Given "
});
formatter.step({
  "line": 176,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 178,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 179,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 180,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 181,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 182,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_046()"
});
formatter.result({
  "duration": 60979700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2013616800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35007934900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:177)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42300,
  "status": "passed"
});
formatter.before({
  "duration": 32900,
  "status": "passed"
});
formatter.scenario({
  "line": 186,
  "name": "loan-\u003everify buyback should accept only total due",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-\u003everify-buyback-should-accept-only-total-due",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 189,
  "name": "CA_PDL_039",
  "keyword": "Given "
});
formatter.step({
  "line": 190,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 191,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 192,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 193,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 194,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 195,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_039()"
});
formatter.result({
  "duration": 23401500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1934180100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34848952200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:191)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34400,
  "status": "passed"
});
formatter.before({
  "duration": 24300,
  "status": "passed"
});
formatter.scenario({
  "line": 202,
  "name": "Advance \u003d\u003eBuyback with tender types as MO  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with OT",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-ot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 205,
  "name": "CA_PDL_047",
  "keyword": "Given "
});
formatter.step({
  "line": 206,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 207,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 208,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 209,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 210,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 211,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 212,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_047()"
});
formatter.result({
  "duration": 62209700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1991357000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35057898200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:207)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37100,
  "status": "passed"
});
formatter.before({
  "duration": 744100,
  "status": "passed"
});
formatter.scenario({
  "line": 217,
  "name": "Advance \u003d\u003eBuyback with tender types as MO  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with OT",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-ot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 220,
  "name": "CA_PDL_047",
  "keyword": "Given "
});
formatter.step({
  "line": 221,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 222,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 223,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 224,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 225,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 226,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 227,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_047()"
});
formatter.result({
  "duration": 16301400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1828295000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37221308200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 76808369600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 34578134800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 38862500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "duration": 35322385400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "duration": 27439294900,
  "status": "passed"
});
formatter.after({
  "duration": 370000,
  "status": "passed"
});
formatter.before({
  "duration": 38700,
  "status": "passed"
});
formatter.scenario({
  "line": 231,
  "name": "Advance \u003d\u003eBuyback with tender types as MO  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with Cash",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 234,
  "name": "CA_PDL_048",
  "keyword": "Given "
});
formatter.step({
  "line": 235,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 236,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 237,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 238,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 239,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 240,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 241,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_048()"
});
formatter.result({
  "duration": 34795600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1757055000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34551919800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:236)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 40600,
  "status": "passed"
});
formatter.before({
  "duration": 21700,
  "status": "passed"
});
formatter.scenario({
  "line": 246,
  "name": "Advance \u003d\u003eBuyback with tender types as MO  \u003d\u003eTransaction should be processed \u003d\u003e Void buyback with Cash",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed-\u003d\u003e-void-buyback-with-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 249,
  "name": "CA_PDL_049",
  "keyword": "Given "
});
formatter.step({
  "line": 250,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 251,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 252,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 253,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 254,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 255,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 256,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32400,
  "status": "passed"
});
formatter.before({
  "duration": 21700,
  "status": "passed"
});
formatter.scenario({
  "line": 262,
  "name": "Advance \u003d\u003eBuyback with 2 tender types as MO with different numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-2-tender-types-as-mo-with-different-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 265,
  "name": "CA_PDL_024",
  "keyword": "Given "
});
formatter.step({
  "line": 266,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 267,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 268,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 269,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 270,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 271,
  "name": "Buyback  Diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_024()"
});
formatter.result({
  "duration": 30895400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1838052100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35268362500,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:267)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback_diff_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 26600,
  "status": "passed"
});
formatter.before({
  "duration": 20100,
  "status": "passed"
});
formatter.scenario({
  "line": 275,
  "name": "Advance \u003d\u003eBuyback with 2 tender types as MO with same numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-2-tender-types-as-mo-with-same-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 278,
  "name": "CA_PDL_025",
  "keyword": "Given "
});
formatter.step({
  "line": 279,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 280,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 281,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 282,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 283,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 284,
  "name": "Buyback_Same_No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_025()"
});
formatter.result({
  "duration": 59498900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1997103100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34962834900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:280)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback_Same_No()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.before({
  "duration": 20900,
  "status": "passed"
});
formatter.scenario({
  "line": 289,
  "name": "Advance \u003d\u003eBuyback with 2 tender types as CCK with Diff numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-2-tender-types-as-cck-with-diff-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 292,
  "name": "CA_PDL_026",
  "keyword": "Given "
});
formatter.step({
  "line": 293,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 294,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 295,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 296,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 297,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 298,
  "name": "Buyback  Diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_026()"
});
formatter.result({
  "duration": 44255600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1864806000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35298127100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:294)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback_diff_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 31900,
  "status": "passed"
});
formatter.scenario({
  "line": 301,
  "name": "Advance \u003d\u003eBuyback with 2 tender types as CCK with same numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-2-tender-types-as-cck-with-same-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 304,
  "name": "CA_PDL_026_1",
  "keyword": "Given "
});
formatter.step({
  "line": 305,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 306,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 307,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 308,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 309,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 310,
  "name": "Buyback_Same_No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_026_1()"
});
formatter.result({
  "duration": 41472800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1899606600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35259125400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:306)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback_Same_No()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30700,
  "status": "passed"
});
formatter.before({
  "duration": 21600,
  "status": "passed"
});
formatter.scenario({
  "line": 314,
  "name": "Advance \u003d\u003eBuyback with 2 tender types as cash Transaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003ebuyback-with-2-tender-types-as-cash-transaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 317,
  "name": "CA_PDL_028",
  "keyword": "Given "
});
formatter.step({
  "line": 318,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 319,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 320,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 321,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 322,
  "name": "Age the store to \"-2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 323,
  "name": "Buyback  Diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_028()"
});
formatter.result({
  "duration": 33036400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1910351500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35229971300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:319)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback_diff_no()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30400,
  "status": "passed"
});
formatter.before({
  "duration": 20000,
  "status": "passed"
});
formatter.scenario({
  "line": 327,
  "name": "New Loan --\u003e Age store to some days before due date -\u003e Partial Payment --\u003eAge store up to some days after due date --\u003e  BuyBack",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;new-loan---\u003e-age-store-to-some-days-before-due-date--\u003e-partial-payment---\u003eage-store-up-to-some-days-after-due-date---\u003e--buyback",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 330,
  "name": "CA_PDL_078",
  "keyword": "Given "
});
formatter.step({
  "line": 331,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 332,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 333,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 334,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 335,
  "name": "Age the store to \"-4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 336,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 337,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 338,
  "name": "Age the store to \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 339,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_78()"
});
formatter.result({
  "duration": 56521200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1933624700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 34759755200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:332)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-4",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22700,
  "status": "passed"
});
formatter.before({
  "duration": 32100,
  "status": "passed"
});
formatter.scenario({
  "line": 342,
  "name": "New Loan --\u003e Age store to some days before due date -\u003e Partial Payment --\u003eAge store up to some days before due date --\u003e BuyBack transaction --\u003e Void BuyBack Transaction \u003d\u003e transaction should display in safe Deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;new-loan---\u003e-age-store-to-some-days-before-due-date--\u003e-partial-payment---\u003eage-store-up-to-some-days-before-due-date---\u003e-buyback-transaction---\u003e-void-buyback-transaction-\u003d\u003e-transaction-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 345,
  "name": "CA_PDL_079",
  "keyword": "Given "
});
formatter.step({
  "line": 346,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 347,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 348,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 349,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 350,
  "name": "Age the store to \"-4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 351,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 352,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 353,
  "name": "Age the store to \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 354,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 355,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.step({
  "line": 356,
  "name": "Payoff amount in Safe deposit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_79()"
});
formatter.result({
  "duration": 79079900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2025154000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35224161200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dcss selector, value\u003dframe[name\u003d\u0027mainFrame\u0027],iframe[name\u003d\u0027mainFrame\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:346)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:877)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:347)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-4",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Payoff_amount_in_safe_deposit()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22100,
  "status": "passed"
});
formatter.before({
  "duration": 20200,
  "status": "passed"
});
formatter.scenario({
  "line": 359,
  "name": "New Loan --\u003e Age store to some days before due date -\u003e Partial Payment --\u003eAge store up to some days before due date --\u003e BuyBack transaction --\u003e Void BuyBack Transaction \u003d\u003e transaction should display in safe Deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;new-loan---\u003e-age-store-to-some-days-before-due-date--\u003e-partial-payment---\u003eage-store-up-to-some-days-before-due-date---\u003e-buyback-transaction---\u003e-void-buyback-transaction-\u003d\u003e-transaction-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 362,
  "name": "CA_PDL_080",
  "keyword": "Given "
});
formatter.step({
  "line": 363,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 364,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 365,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 366,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 367,
  "name": "Age the store to \"-4\"",
  "keyword": "Then "
});
formatter.step({
  "line": 368,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 369,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 370,
  "name": "Age the store to \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 371,
  "name": "Buyback_Change",
  "keyword": "Then "
});
formatter.step({
  "line": 372,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_80()"
});
formatter.result({
  "duration": 24523100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2112257500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35278086900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:364)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "-4",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback_change()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 33700,
  "status": "passed"
});
formatter.before({
  "duration": 26400,
  "status": "passed"
});
formatter.scenario({
  "line": 376,
  "name": "Loan with Check --\u003e Safe deposit on Due date → Full amount should display in Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-with-check---\u003e-safe-deposit-on-due-date-→-full-amount-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 379,
  "name": "CA_PDL_097",
  "keyword": "Given "
});
formatter.step({
  "line": 380,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 381,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 382,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 383,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 384,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 385,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_97()"
});
formatter.result({
  "duration": 30226000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1995546900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35091691100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:381)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30300,
  "status": "passed"
});
formatter.before({
  "duration": 22500,
  "status": "passed"
});
formatter.scenario({
  "line": 388,
  "name": "Loan with Check --\u003e Partial Payment --\u003e Safe deposit on Due date → Full amount should display in Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-with-check---\u003e-partial-payment---\u003e-safe-deposit-on-due-date-→-full-amount-should-display-in-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 391,
  "name": "CA_PDL_098",
  "keyword": "Given "
});
formatter.step({
  "line": 392,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 393,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 394,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 395,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 396,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 397,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 398,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_98()"
});
formatter.result({
  "duration": 25147000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1994424300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35639207700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dcss selector, value\u003dframe[name\u003d\u0027main\u0027],iframe[name\u003d\u0027main\u0027]}\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:346)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementsByCssSelector(RemoteWebDriver.java:417)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElements(By.java:441)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElements(RemoteWebDriver.java:307)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:877)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:422)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:393)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24300,
  "status": "passed"
});
formatter.before({
  "duration": 23600,
  "status": "passed"
});
formatter.scenario({
  "line": 401,
  "name": "Advance \u003d\u003ePartial Payment with tender types as CCK → Internal transfer → Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-cck-→-internal-transfer-→-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 404,
  "name": "CA_PDL_099",
  "keyword": "Given "
});
formatter.step({
  "line": 405,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 406,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 407,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 408,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 409,
  "name": "InternalTransfer",
  "keyword": "Then "
});
formatter.step({
  "line": 410,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 411,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 412,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_99()"
});
formatter.result({
  "duration": 47674400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1987409800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35647968100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:406)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.InternalTransfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25900,
  "status": "passed"
});
formatter.before({
  "duration": 21500,
  "status": "passed"
});
formatter.scenario({
  "line": 415,
  "name": "Advance \u003d\u003ePartial Payment with tender types as CK → Internal transfer → Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-ck-→-internal-transfer-→-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 418,
  "name": "CA_PDL_100",
  "keyword": "Given "
});
formatter.step({
  "line": 419,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 420,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 421,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 422,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 423,
  "name": "InternalTransfer",
  "keyword": "Then "
});
formatter.step({
  "line": 424,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 425,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 426,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_100()"
});
formatter.result({
  "duration": 73740700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2160306800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 35492420700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:420)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.InternalTransfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23900,
  "status": "passed"
});
formatter.before({
  "duration": 37900,
  "status": "passed"
});
formatter.scenario({
  "line": 429,
  "name": "Advance \u003d\u003ePartial Payment with tender types as MO → Internal transfer → Safe deposit",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003epartial-payment-with-tender-types-as-mo-→-internal-transfer-→-safe-deposit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 432,
  "name": "CA_PDL_101",
  "keyword": "Given "
});
formatter.step({
  "line": 433,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 434,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 435,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 436,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 437,
  "name": "InternalTransfer",
  "keyword": "Then "
});
formatter.step({
  "line": 438,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 439,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 440,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_101()"
});
formatter.result({
  "duration": 29853900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2080452500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38142701200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 73190909200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.PDL(new_Loan_taken_for_the_user.java:542)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:163)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:2902)\r\n\tat ✽.Then New Loan taken for the user(login.feature:435)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.InternalTransfer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 31200,
  "status": "passed"
});
formatter.before({
  "duration": 24800,
  "status": "passed"
});
formatter.scenario({
  "line": 443,
  "name": "Login--\u003e Home screen--\u003e Borrower --\u003eRegistration--\u003eNew loan",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;login--\u003e-home-screen--\u003e-borrower---\u003eregistration--\u003enew-loan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 446,
  "name": "CA_PDL_001",
  "keyword": "Given "
});
formatter.step({
  "line": 447,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 448,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 449,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_001()"
});
formatter.result({
  "duration": 32209300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2184124400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38120707900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:448)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 37500,
  "status": "passed"
});
formatter.before({
  "duration": 28400,
  "status": "passed"
});
formatter.scenario({
  "line": 453,
  "name": "Borrower -\u003e PayFrequency (Monthly) -\u003e New Loan -\u003eCheck Due Date for Min Term",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003e-payfrequency-(monthly)--\u003e-new-loan--\u003echeck-due-date-for-min-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 456,
  "name": "CA_PDL_002",
  "keyword": "Given "
});
formatter.step({
  "line": 457,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 458,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 459,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 460,
  "name": "Verification",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_003()"
});
formatter.result({
  "duration": 25454900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2185252600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36490347700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:458)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29200,
  "status": "passed"
});
formatter.before({
  "duration": 24700,
  "status": "passed"
});
formatter.scenario({
  "line": 464,
  "name": "Borrower -\u003e PayFrequency (Weekly) -\u003e New Loan -\u003eCheck Due Date for Min Term",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003e-payfrequency-(weekly)--\u003e-new-loan--\u003echeck-due-date-for-min-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 468,
  "name": "CA_PDL_003",
  "keyword": "Given "
});
formatter.step({
  "line": 469,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 470,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 471,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 472,
  "name": "Verification",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32000,
  "status": "passed"
});
formatter.before({
  "duration": 32600,
  "status": "passed"
});
formatter.scenario({
  "line": 475,
  "name": "Borrower -\u003e PayFrequency (Bi-Weekly) -\u003e New Loan -\u003eCheck Due Date for Min Term",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003e-payfrequency-(bi-weekly)--\u003e-new-loan--\u003echeck-due-date-for-min-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 478,
  "name": "CA_PDL_004",
  "keyword": "Given "
});
formatter.step({
  "line": 479,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 480,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 481,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 482,
  "name": "Verification",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_004()"
});
formatter.result({
  "duration": 53222600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2180567300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37102144400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:480)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 24200,
  "status": "passed"
});
formatter.before({
  "duration": 21100,
  "status": "passed"
});
formatter.scenario({
  "line": 485,
  "name": "Borrower -\u003e PayFrequency (SeminMonthly) -\u003e New Loan -\u003eCheck Due Date for Min Term",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003e-payfrequency-(seminmonthly)--\u003e-new-loan--\u003echeck-due-date-for-min-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 487,
  "name": "CA_PDL_005",
  "keyword": "Given "
});
formatter.step({
  "line": 488,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 489,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 490,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 491,
  "name": "Verification",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_005()"
});
formatter.result({
  "duration": 53892300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2291329000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37404206100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:489)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Verification()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28900,
  "status": "passed"
});
formatter.before({
  "duration": 23200,
  "status": "passed"
});
formatter.scenario({
  "line": 494,
  "name": "Borrower -\u003e PayFrequency (SeminMonthly) -\u003e New Loan -\u003eCheck Due Date for Min Term",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003e-payfrequency-(seminmonthly)--\u003e-new-loan--\u003echeck-due-date-for-min-term",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 497,
  "name": "CA_PDL_007",
  "keyword": "Given "
});
formatter.step({
  "line": 498,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 499,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 500,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_007()"
});
formatter.result({
  "duration": 105787800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2503312000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37138924400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:499)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 49900,
  "status": "passed"
});
formatter.before({
  "duration": 50700,
  "status": "passed"
});
formatter.scenario({
  "line": 502,
  "name": "Borrower -\u003eBuyback with MO and CCK",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003ebuyback-with-mo-and-cck",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 505,
  "name": "CA_PDL_027",
  "keyword": "Given "
});
formatter.step({
  "line": 506,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 507,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 508,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 509,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 510,
  "name": "Age the store to \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 511,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_027()"
});
formatter.result({
  "duration": 40137300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2385053800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38042866300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:507)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27300,
  "status": "passed"
});
formatter.before({
  "duration": 28900,
  "status": "passed"
});
formatter.scenario({
  "line": 514,
  "name": "Borrower -\u003eBuyback with MO and CCK void OT",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003ebuyback-with-mo-and-cck-void-ot",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 517,
  "name": "CA_PDL_040",
  "keyword": "Given "
});
formatter.step({
  "line": 518,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 519,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 520,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 521,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 522,
  "name": "Age the store to \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 523,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 524,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_040()"
});
formatter.result({
  "duration": 74534600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2471024500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38758669300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:519)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27600,
  "status": "passed"
});
formatter.before({
  "duration": 26900,
  "status": "passed"
});
formatter.scenario({
  "line": 527,
  "name": "Borrower -\u003eBuyback with MO and CCK void Cash",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;borrower--\u003ebuyback-with-mo-and-cck-void-cash",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 530,
  "name": "CA_PDL_041",
  "keyword": "Given "
});
formatter.step({
  "line": 531,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 532,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 533,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 534,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 535,
  "name": "Age the store to \"2\"",
  "keyword": "Then "
});
formatter.step({
  "line": 536,
  "name": "Buyback",
  "keyword": "Then "
});
formatter.step({
  "line": 537,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_041()"
});
formatter.result({
  "duration": 35138700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2160584800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37202901000,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:532)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Buyback()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 29300,
  "status": "passed"
});
formatter.before({
  "duration": 35000,
  "status": "passed"
});
formatter.scenario({
  "line": 540,
  "name": "Loan → Deposit → Clear",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-clear",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 543,
  "name": "CA_PDL_117",
  "keyword": "Given "
});
formatter.step({
  "line": 544,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 545,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 546,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 547,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 548,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 549,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 550,
  "name": "Check_Clear",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_117()"
});
formatter.result({
  "duration": 34353700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2367576200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37237812400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:545)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Check_Clear()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32800,
  "status": "passed"
});
formatter.before({
  "duration": 27500,
  "status": "passed"
});
formatter.scenario({
  "line": 554,
  "name": "Loan → Deposit → Return",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 557,
  "name": "CA_PDL_118",
  "keyword": "Given "
});
formatter.step({
  "line": 558,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 559,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 560,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 561,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 562,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 563,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 564,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_118()"
});
formatter.result({
  "duration": 31798500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2192668400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36752295000,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:559)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 22700,
  "status": "passed"
});
formatter.before({
  "duration": 20000,
  "status": "passed"
});
formatter.scenario({
  "line": 568,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with 2 tender types as MO with different numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-2-tender-types-as-mo-with-different-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 571,
  "name": "CA_PDL_102",
  "keyword": "Given "
});
formatter.step({
  "line": 572,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 573,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 574,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 575,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 576,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 577,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 578,
  "name": "Prepayment diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_102()"
});
formatter.result({
  "duration": 28674800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 1959098700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36688927500,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:573)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment_Diff()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27400,
  "status": "passed"
});
formatter.before({
  "duration": 21300,
  "status": "passed"
});
formatter.scenario({
  "line": 583,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with 2 tender types as MO with different numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-2-tender-types-as-mo-with-different-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 586,
  "name": "CA_PDL_137",
  "keyword": "Given "
});
formatter.step({
  "line": 587,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 588,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 589,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 590,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 591,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 592,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 593,
  "name": "Prepayment Same",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_137()"
});
formatter.result({
  "duration": 25716200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2189854300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36829352200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:588)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment_Same()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25800,
  "status": "passed"
});
formatter.before({
  "duration": 28500,
  "status": "passed"
});
formatter.scenario({
  "line": 597,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with 2 tender types as CCK with different numbers \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-2-tender-types-as-cck-with-different-numbers-\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 599,
  "name": "CA_PDL_104",
  "keyword": "Given "
});
formatter.step({
  "line": 600,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 601,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 602,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 603,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 604,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 605,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 606,
  "name": "Prepayment diff No",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_104()"
});
formatter.result({
  "duration": 60346400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2283959900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 39221258300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 79175137000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 34979979800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 51967600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "duration": 120719329100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Prepayment_Diff()"
});
formatter.result({
  "duration": 55385557700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d requestBean.password (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003drequestBean.password}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Prepayment_Diff.Prepayment_Diff(Prepayment_Diff.java:172)\r\n\tat stepDefinitions.StepDefinations.Prepayment_Diff(StepDefinations.java:3001)\r\n\tat ✽.Then Prepayment diff No(login.feature:606)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 27500,
  "status": "passed"
});
formatter.before({
  "duration": 18500,
  "status": "passed"
});
formatter.scenario({
  "line": 610,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with 2 tender types as CCK and MO \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-2-tender-types-as-cck-and-mo-\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 612,
  "name": "CA_PDL_105",
  "keyword": "Given "
});
formatter.step({
  "line": 613,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 614,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 615,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 616,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 617,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 618,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 619,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_105()"
});
formatter.result({
  "duration": 29999400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2002159700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37530636100,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:614)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 38000,
  "status": "passed"
});
formatter.before({
  "duration": 24800,
  "status": "passed"
});
formatter.scenario({
  "line": 623,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with 2 tender types as Cash  \u003d\u003eTransaction should not be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-2-tender-types-as-cash--\u003d\u003etransaction-should-not-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 626,
  "name": "CA_PDL_106",
  "keyword": "Given "
});
formatter.step({
  "line": 627,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 628,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 629,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 630,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 631,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 632,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 633,
  "name": "Prepayment Same",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_106()"
});
formatter.result({
  "duration": 44019300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2052075300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37571390400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:628)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment_Same()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 42700,
  "status": "passed"
});
formatter.before({
  "duration": 27900,
  "status": "passed"
});
formatter.scenario({
  "line": 638,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with tender types as Cash  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-tender-types-as-cash--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 641,
  "name": "CA_PDL_107",
  "keyword": "Given "
});
formatter.step({
  "line": 642,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 643,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 644,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 645,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 646,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 647,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 648,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_107()"
});
formatter.result({
  "duration": 42995400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 4548782100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38210928400,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:643)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 45000,
  "status": "passed"
});
formatter.before({
  "duration": 80000,
  "status": "passed"
});
formatter.scenario({
  "line": 652,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with tender types as CK  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-tender-types-as-ck--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 655,
  "name": "CA_PDL_108",
  "keyword": "Given "
});
formatter.step({
  "line": 656,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 657,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 658,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 659,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 660,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 661,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 662,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_108()"
});
formatter.result({
  "duration": 24628700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2170883800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36893715300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:657)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 23100,
  "status": "passed"
});
formatter.before({
  "duration": 21100,
  "status": "passed"
});
formatter.scenario({
  "line": 667,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with tender types as CCK  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-tender-types-as-cck--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 670,
  "name": "CA_PDL_109",
  "keyword": "Given "
});
formatter.step({
  "line": 671,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 672,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 673,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 674,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 675,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 676,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 677,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_109()"
});
formatter.result({
  "duration": 134705600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2232886700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36391639800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:672)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32700,
  "status": "passed"
});
formatter.before({
  "duration": 23700,
  "status": "passed"
});
formatter.scenario({
  "line": 681,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with tender types as MO  \u003d\u003eTransaction should be processed",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-tender-types-as-mo--\u003d\u003etransaction-should-be-processed",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 684,
  "name": "CA_PDL_110",
  "keyword": "Given "
});
formatter.step({
  "line": 685,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 686,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 687,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 688,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 689,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 690,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 691,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_110()"
});
formatter.result({
  "duration": 32385300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2385419100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37054894200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:686)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 32200,
  "status": "passed"
});
formatter.before({
  "duration": 31800,
  "status": "passed"
});
formatter.scenario({
  "line": 693,
  "name": "Loan → Deposit → Clear → Deposit Return",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-clear-→-deposit-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 697,
  "name": "CA_PDL_119",
  "keyword": "Given "
});
formatter.step({
  "line": 698,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 699,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 700,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 701,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 702,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 703,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 704,
  "name": "Check_Clear",
  "keyword": "Then "
});
formatter.step({
  "line": 705,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_119()"
});
formatter.result({
  "duration": 24872600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2328417900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36755536900,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:699)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Check_Clear()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 30700,
  "status": "passed"
});
formatter.before({
  "duration": 27700,
  "status": "passed"
});
formatter.scenario({
  "line": 708,
  "name": "Loan → Partial Payment → Deposit → Prepayment",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-partial-payment-→-deposit-→-prepayment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 711,
  "name": "CA_PDL_120",
  "keyword": "Given "
});
formatter.step({
  "line": 712,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 713,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 714,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 715,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 716,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 717,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 718,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 719,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_120()"
});
formatter.result({
  "duration": 56707500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2409662800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36566914300,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:713)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34200,
  "status": "passed"
});
formatter.before({
  "duration": 30600,
  "status": "passed"
});
formatter.scenario({
  "line": 722,
  "name": "Advance \u003d\u003eDeposit \u003d\u003e Pre-Payment with tender types as Cash  \u003d\u003e void",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;advance-\u003d\u003edeposit-\u003d\u003e-pre-payment-with-tender-types-as-cash--\u003d\u003e-void",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 725,
  "name": "CA_PDL_121",
  "keyword": "Given "
});
formatter.step({
  "line": 726,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 727,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 728,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 729,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 730,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 731,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 732,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.step({
  "line": 733,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_121()"
});
formatter.result({
  "duration": 39401800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2517043300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37008826800,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:727)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 34500,
  "status": "passed"
});
formatter.before({
  "duration": 19600,
  "status": "passed"
});
formatter.scenario({
  "line": 736,
  "name": "Loan → Deposit → Prepayment with CK→ Void",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-prepayment-with-ck→-void",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 740,
  "name": "CA_PDL_122_1",
  "keyword": "Given "
});
formatter.step({
  "line": 741,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 742,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 743,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 744,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 745,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 746,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 747,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.step({
  "line": 748,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_122_1()"
});
formatter.result({
  "duration": 37594700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2407805900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36756462600,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:742)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 27000,
  "status": "passed"
});
formatter.before({
  "duration": 20800,
  "status": "passed"
});
formatter.scenario({
  "line": 751,
  "name": "Loan → Deposit → Prepayment with CCK→ Void",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-prepayment-with-cck→-void",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 755,
  "name": "CA_PDL_122_2",
  "keyword": "Given "
});
formatter.step({
  "line": 756,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 757,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 758,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 759,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 760,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 761,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 762,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.step({
  "line": 763,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_122_2()"
});
formatter.result({
  "duration": 36089400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2210959000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 39856736500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 78509846300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "duration": 34787282500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "duration": 51259600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "duration": 113829668100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "duration": 41556840200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d requestBean.password (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003drequestBean.password}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Prepayment.Prepayment(Prepayment.java:182)\r\n\tat stepDefinitions.StepDefinations.Prepayment(StepDefinations.java:2987)\r\n\tat ✽.Then Prepayment(login.feature:762)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 64000,
  "status": "passed"
});
formatter.before({
  "duration": 43700,
  "status": "passed"
});
formatter.scenario({
  "line": 766,
  "name": "Loan → Deposit → Prepayment with MO→ Void",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-prepayment-with-mo→-void",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 770,
  "name": "CA_PDL_122_3",
  "keyword": "Given "
});
formatter.step({
  "line": 771,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 772,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 773,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 774,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 775,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 776,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 777,
  "name": "Prepayment",
  "keyword": "Then "
});
formatter.step({
  "line": 778,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_122_3()"
});
formatter.result({
  "duration": 72217000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2190240800,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 38228147700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:772)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 25900,
  "status": "passed"
});
formatter.before({
  "duration": 19500,
  "status": "passed"
});
formatter.scenario({
  "line": 781,
  "name": "Loan → Deposit → Deposit Return → Full NSF Payment",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-full-nsf-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 784,
  "name": "CA_PDL_127",
  "keyword": "Given "
});
formatter.step({
  "line": 785,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 786,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 787,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 788,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 789,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 790,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 791,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 792,
  "name": "NSFPayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_127()"
});
formatter.result({
  "duration": 50766200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2337955100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36685939500,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:786)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 45400,
  "status": "passed"
});
formatter.before({
  "duration": 21800,
  "status": "passed"
});
formatter.scenario({
  "line": 795,
  "name": "Loan → Deposit → Deposit Return → Full NSF Payment → Void",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-full-nsf-payment-→-void",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 798,
  "name": "CA_PDL_126",
  "keyword": "Given "
});
formatter.step({
  "line": 799,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 800,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 801,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 802,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 803,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 804,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 805,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 806,
  "name": "NSFPayment",
  "keyword": "Then "
});
formatter.step({
  "line": 807,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_126()"
});
formatter.result({
  "duration": 48146900,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2241966400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 36476351200,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.defaultContent(RemoteWebDriver.java:921)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:420)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:800)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 53600,
  "status": "passed"
});
formatter.before({
  "duration": 34000,
  "status": "passed"
});
formatter.scenario({
  "line": 810,
  "name": "Loan → Deposit → Prepayment with Cash → Deposit Return",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-prepayment-with-cash-→-deposit-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 813,
  "name": "CA_PDL_124",
  "keyword": "Given "
});
formatter.step({
  "line": 814,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 815,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 816,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 817,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 818,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 819,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 820,
  "name": "PrepaymentPartial",
  "keyword": "Then "
});
formatter.step({
  "line": 821,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_124()"
});
formatter.result({
  "duration": 72679600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2045606000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 37511204700,
  "error_message": "org.openqa.selenium.UnhandledAlertException: Modal dialog present: There is a problem with Adobe Acrobat/Reader.\nIf it is running, please exit and try again. (523:523)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\r\n\tat sun.reflect.GeneratedConstructorAccessor86.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createUnhandledAlertException(ErrorHandler.java:195)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:891)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.frame(RemoteWebDriver.java:886)\r\n\tat stepDefinitions.Registration_of_the_Borrower_PDL.Registration_of_the_Borrower_PDL(Registration_of_the_Borrower_PDL.java:421)\r\n\tat stepDefinitions.StepDefinations.Registration_of_the_Borrower_PDL(StepDefinations.java:2897)\r\n\tat ✽.Given Registration of the Borrower PDL(login.feature:815)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Prepayment_Partial()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 35600,
  "status": "passed"
});
formatter.before({
  "duration": 22000,
  "status": "passed"
});
formatter.scenario({
  "line": 823,
  "name": "Loan → Deposit → Deposit Return → Partial NSF Payment",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-partial-nsf-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 826,
  "name": "CA_PDL_125",
  "keyword": "Given "
});
formatter.step({
  "line": 827,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 828,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 829,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 830,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 831,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 832,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 833,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 834,
  "name": "NSFPaymentPartial",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_125()"
});
formatter.result({
  "duration": 29876600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 2203514500,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "duration": 200709928600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "duration": 21823500600,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.new_Loan_taken_for_the_user.new_Loan_taken_for_the_user(new_Loan_taken_for_the_user.java:118)\r\n\tat stepDefinitions.StepDefinations.new_Loan_taken_for_the_user(StepDefinations.java:2902)\r\n\tat ✽.Then New Loan taken for the user(login.feature:829)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment_Partial()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 86600,
  "status": "passed"
});
formatter.before({
  "duration": 78800,
  "status": "passed"
});
formatter.scenario({
  "line": 837,
  "name": "Loan → Deposit → Deposit Return → Partial NSF Payment-\u003e void",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-partial-nsf-payment-\u003e-void",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 840,
  "name": "CA_PDL_128",
  "keyword": "Given "
});
formatter.step({
  "line": 841,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 842,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 843,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 844,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 845,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 846,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 847,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 848,
  "name": "NSFPaymentPartial",
  "keyword": "Then "
});
formatter.step({
  "line": 849,
  "name": "BVoid the transaction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_128()"
});
formatter.result({
  "duration": 44084000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10468088700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:841)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment_Partial()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Bvoid()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 72900,
  "status": "passed"
});
formatter.before({
  "duration": 74600,
  "status": "passed"
});
formatter.scenario({
  "line": 851,
  "name": "Loan → Deposit → Deposit Return → Check Full NSF Payment",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-check-full-nsf-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 854,
  "name": "CA_PDL_129_1",
  "keyword": "Given "
});
formatter.step({
  "line": 855,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 856,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 857,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 858,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 859,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 860,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 861,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 862,
  "name": "NSFPayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_129_1()"
});
formatter.result({
  "duration": 32595400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10402562700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:855)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 91400,
  "status": "passed"
});
formatter.before({
  "duration": 92500,
  "status": "passed"
});
formatter.scenario({
  "line": 865,
  "name": "Loan → Deposit → Deposit Return → CCK Full NSF Payment",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-cck-full-nsf-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 868,
  "name": "CA_PDL_129_2",
  "keyword": "Given "
});
formatter.step({
  "line": 869,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 870,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 871,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 872,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 873,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 874,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 875,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 876,
  "name": "NSFPayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_129_2()"
});
formatter.result({
  "duration": 33667700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10349974700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:869)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 43300,
  "status": "passed"
});
formatter.before({
  "duration": 33400,
  "status": "passed"
});
formatter.scenario({
  "line": 880,
  "name": "Loan → Deposit → Deposit Return → MO Full NSF Payment",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-mo-full-nsf-payment",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 883,
  "name": "CA_PDL_129_2",
  "keyword": "Given "
});
formatter.step({
  "line": 884,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 885,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 886,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 887,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 888,
  "name": "ReturnAdmin",
  "keyword": "Then "
});
formatter.step({
  "line": 889,
  "name": "NSFPayment",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_129_2()"
});
formatter.result({
  "duration": 24535200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10297157100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:884)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.Return_Admin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.NSFPayment()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 88300,
  "status": "passed"
});
formatter.before({
  "duration": 100400,
  "status": "passed"
});
formatter.scenario({
  "line": 892,
  "name": "Loan → Deposit → Deposit Return → Schedule Partial RCPO with Partial amount from Admin",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-schedule-partial-rcpo-with-partial-amount-from-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 895,
  "name": "CA_PDL_130",
  "keyword": "Given "
});
formatter.step({
  "line": 896,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 897,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 898,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 899,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 900,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 901,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 902,
  "name": "RCPOReturn",
  "keyword": "Then "
});
formatter.step({
  "line": 903,
  "name": "AdminOtherPayments",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_130()"
});
formatter.result({
  "duration": 30862400,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10466224500,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:896)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.RCPOReturn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.AdminOtherPayments()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 45100,
  "status": "passed"
});
formatter.before({
  "duration": 38300,
  "status": "passed"
});
formatter.scenario({
  "line": 906,
  "name": "Loan → Deposit → Deposit Return → Schedule Partial RCPO with Full amount from Admin",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-deposit-→-deposit-return-→-schedule-partial-rcpo-with-full-amount-from-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 909,
  "name": "CA_PDL_131",
  "keyword": "Given "
});
formatter.step({
  "line": 910,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 911,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 912,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 913,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 914,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 915,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 916,
  "name": "RCPOReturn",
  "keyword": "Then "
});
formatter.step({
  "line": 917,
  "name": "AdminOtherPayments",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_131()"
});
formatter.result({
  "duration": 39601600,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10659000700,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:910)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.RCPOReturn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.AdminOtherPayments()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 35300,
  "status": "passed"
});
formatter.before({
  "duration": 25600,
  "status": "passed"
});
formatter.scenario({
  "line": 920,
  "name": "Loan → partial payment Deposit → Deposit Return → Schedule Partial RCPO with Partial amount from Admin",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-partial-payment-deposit-→-deposit-return-→-schedule-partial-rcpo-with-partial-amount-from-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 923,
  "name": "CA_PDL_132",
  "keyword": "Given "
});
formatter.step({
  "line": 924,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 925,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 926,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 927,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 928,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 929,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 930,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 931,
  "name": "RCPOReturn",
  "keyword": "Then "
});
formatter.step({
  "line": 932,
  "name": "AdminOtherPayments",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_132()"
});
formatter.result({
  "duration": 28328700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10561638300,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:924)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.RCPOReturn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.AdminOtherPayments()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 82400,
  "status": "passed"
});
formatter.before({
  "duration": 66900,
  "status": "passed"
});
formatter.scenario({
  "line": 935,
  "name": "Loan → partial payment Deposit → Deposit Return → Schedule Partial RCPO with Full amount from Admin",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state;loan-→-partial-payment-deposit-→-deposit-return-→-schedule-partial-rcpo-with-full-amount-from-admin",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 938,
  "name": "CA_PDL_133",
  "keyword": "Given "
});
formatter.step({
  "line": 939,
  "name": "Login into CSR",
  "keyword": "And "
});
formatter.step({
  "line": 940,
  "name": "Registration of the Borrower PDL",
  "keyword": "Given "
});
formatter.step({
  "line": 941,
  "name": "New Loan taken for the user",
  "keyword": "Then "
});
formatter.step({
  "line": 942,
  "name": "Get the Due Date from History",
  "keyword": "And "
});
formatter.step({
  "line": 943,
  "name": "Age the store to \"0\"",
  "keyword": "Then "
});
formatter.step({
  "line": 944,
  "name": "Partial Payment",
  "keyword": "Then "
});
formatter.step({
  "line": 945,
  "name": "Safe deposit on duedate",
  "keyword": "Then "
});
formatter.step({
  "line": 946,
  "name": "RCPOReturn",
  "keyword": "Then "
});
formatter.step({
  "line": 947,
  "name": "AdminOtherPaymentsfull",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinations.CA_PDL_133()"
});
formatter.result({
  "duration": 64805700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinations.login_into_CSR()"
});
formatter.result({
  "duration": 10395517100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with name \u003d\u003d loginRequestBean.userId (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027QTLSYS0-238\u0027, ip: \u0027192.168.0.238\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_212-3-redhat\u0027\nDriver info: org.openqa.selenium.ie.InternetExplorerDriver\nCapabilities {browserAttachTimeout: 0, browserName: internet explorer, cssSelectorsEnabled: true, elementScrollBehavior: 0, enableElementCacheCleanup: true, enablePersistentHover: true, handlesAlerts: true, ie.browserCommandLineSwitches: , ie.ensureCleanSession: false, ie.forceCreateProcessApi: false, ie.usePerProcessProxy: false, ignoreProtectedModeSettings: false, ignoreZoomSetting: false, initialBrowserUrl: http://localhost:13197/, javascriptEnabled: true, nativeEvents: true, platform: WINDOWS, platformName: WINDOWS, requireWindowFocus: false, takesScreenshot: true, unexpectedAlertBehaviour: dismiss, unhandledPromptBehavior: dismiss, version: 11}\nSession ID: 6675cf55-b5bb-434d-a30a-11b83ef6493a\n*** Element info: {Using\u003dname, value\u003dloginRequestBean.userId}\r\n\tat sun.reflect.GeneratedConstructorAccessor87.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:397)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:303)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat stepDefinitions.Login.Login(Login.java:71)\r\n\tat stepDefinitions.StepDefinations.login_into_CSR(StepDefinations.java:2860)\r\n\tat ✽.And Login into CSR(login.feature:939)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "StepDefinations.Registration_of_the_Borrower_PDL()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.new_Loan_taken_for_the_user()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.get_the_Due_Date_from_History()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 18
    }
  ],
  "location": "StepDefinations.age_the_store_to_days(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.partial_Payment()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.safe_deposit_on_duedate()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.RCPOReturn()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinations.AdminOtherPayments_full()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 28200,
  "status": "passed"
});
formatter.uri("sample.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 19,
  "name": "Checkmate Scenarios for CA State",
  "description": "",
  "id": "checkmate-scenarios-for-ca-state",
  "keyword": "Feature"
});
});