Feature: Checkmate Scenarios for CA State



		
Scenario: Loan--Age the store--Perform the Buyback
 	 			
 	 			Given CA_PDL_022
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback    		
  		
 		
Scenario: Advance =>Buyback with tender types as Cash  =>Transaction should be processed
 	 			
 	 			Given CA_PDL_029
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback    		
    		
    		

	
Scenario: Advance =>Buyback with tender types as CCK  =>Transaction should be processed
 	 			
 	 			Given CA_PDL_030
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
 

 		
Scenario: Advance =>Buyback with tender types as CK  =>Transaction should be processed
 	 			
 	 			Given CA_PDL_031
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback    		
    		

	
Scenario: Advance =>Buyback with tender types as MO  =>Transaction should be processed

 	 			
 	 			Given CA_PDL_032
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback    		
    		
    		
    		
    		



Scenario: Loan--Age the store--Perform the Buyback  ->void on same day

 	 			
 	 			Given CA_PDL_037
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
    	  
    	  


Scenario: Loan--Age the store--Perform the Buyback  -> Next day void on same day

 	 			
 	 			Given CA_PDL_038
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    		And Get the Due Date from History
    		Then Age the store to "-1"
    	  Then BVoid the transaction
    	  



Scenario: Advance => partial payment => Buyback in rescind period  =>Transaction should be processed

 	 			
 	 			Given CA_PDL_035
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		Then Partial Payment   		    	
    		Then Buyback


 		
    		
Scenario: Advance =>Buyback with tender types as Cash  =>Transaction should be processed => Void buyback with cash

 	 			
 	 			Given CA_PDL_042
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
  
 		
Scenario: Advance =>Buyback with tender types as CCK  =>Transaction should be processed => Void buyback with OT

 	 			
 	 			Given CA_PDL_043
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
    	  
    	  
 		
 		
Scenario: Advance =>Buyback with tender types as CCK  =>Transaction should be processed => Void buyback with cash

 	 			
 	 			Given CA_PDL_044
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction 	    
    	  
  		
  		
Scenario: Advance =>Buyback with tender types as Check  =>Transaction should be processed => Void buyback with OT

 	 			
 	 			Given CA_PDL_045
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction 	  	  
 			
		
  		
Scenario: Advance =>Buyback with tender types as Check  =>Transaction should be processed => Void buyback with cash

 	 			
 	 			Given CA_PDL_046
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
    	  
    	  

Scenario: loan->verify buyback should accept only total due

 	 			
 	 			Given CA_PDL_039
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback





	    
Scenario: Advance =>Buyback with tender types as MO  =>Transaction should be processed => Void buyback with OT

 	 			
 	 			Given CA_PDL_047
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
    	  
    	  

    
Scenario: Advance =>Buyback with tender types as MO  =>Transaction should be processed => Void buyback with OT

 	 			
 	 			Given CA_PDL_047
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
    	  

  
Scenario: Advance =>Buyback with tender types as MO  =>Transaction should be processed => Void buyback with Cash

 	 			
 	 			Given CA_PDL_048
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction
    	  
   	  

 	  
Scenario: Advance =>Buyback with tender types as MO  =>Transaction should be processed => Void buyback with Cash

 	 			
 	 			Given CA_PDL_049
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback
    	  Then BVoid the transaction		
 
 


  
Scenario: Advance =>Buyback with 2 tender types as MO with different numbers =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_024
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback  Diff No
    		
    		
  	  
Scenario: Advance =>Buyback with 2 tender types as MO with same numbers =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_025
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback_Same_No
    		
    		

 	  
Scenario: Advance =>Buyback with 2 tender types as CCK with Diff numbers =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_026
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback  Diff No
    		
 
  Scenario: Advance =>Buyback with 2 tender types as CCK with same numbers =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_026_1
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback_Same_No
    		
    		

Scenario: Advance =>Buyback with 2 tender types as cash Transaction should not be processed

 	 			
 	 			Given CA_PDL_028
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-2"
    		Then Buyback  Diff No    		
    		
    		

Scenario: New Loan --> Age store to some days before due date -> Partial Payment -->Age store up to some days after due date -->  BuyBack

 	 			
 	 			Given CA_PDL_078
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-4"
    		Then Partial Payment
    		And Get the Due Date from History
    		Then Age the store to "2"
    		Then Buyback
    
 	    
Scenario: New Loan --> Age store to some days before due date -> Partial Payment -->Age store up to some days before due date --> BuyBack transaction --> Void BuyBack Transaction => transaction should display in safe Deposit

 	 			
 	 			Given CA_PDL_079
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-4"
    		Then Partial Payment
    		And Get the Due Date from History
    		Then Age the store to "2"
    		Then Buyback
    		Then BVoid the transaction
    		Then Payoff amount in Safe deposit
    		
	
Scenario: New Loan --> Age store to some days before due date -> Partial Payment -->Age store up to some days before due date --> BuyBack transaction --> Void BuyBack Transaction => transaction should display in safe Deposit

 	 			
 	 			Given CA_PDL_080
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    	  Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "-4"
    		Then Partial Payment
    		And Get the Due Date from History
    		Then Age the store to "2"
    		Then Buyback_Change
    		Then BVoid the transaction
    		

	
 Scenario: Loan with Check --> Safe deposit on Due date → Full amount should display in Safe deposit

 	 			
 	 			Given CA_PDL_097
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		

Scenario: Loan with Check --> Partial Payment --> Safe deposit on Due date → Full amount should display in Safe deposit

 	 			
 	 			Given CA_PDL_098
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		Then Partial Payment
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		
	
Scenario: Advance =>Partial Payment with tender types as CCK → Internal transfer → Safe deposit

 	 			
 	 			Given CA_PDL_099
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		Then Partial Payment
    		Then InternalTransfer
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		
	
Scenario: Advance =>Partial Payment with tender types as CK → Internal transfer → Safe deposit

 	 			
 	 			Given CA_PDL_100
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		Then Partial Payment
    		Then InternalTransfer
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		
 				
Scenario: Advance =>Partial Payment with tender types as MO → Internal transfer → Safe deposit

 	 			
 	 			Given CA_PDL_101
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user    		
    		Then Partial Payment
    		Then InternalTransfer
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		

Scenario: Login--> Home screen--> Borrower -->Registration-->New loan

 	 			
 	 			Given CA_PDL_001
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		
    		

Scenario: Borrower -> PayFrequency (Monthly) -> New Loan ->Check Due Date for Min Term

 	 			
 	 			Given CA_PDL_002
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		Then Verification
    		
    		
 
Scenario: Borrower -> PayFrequency (Weekly) -> New Loan ->Check Due Date for Min Term


 	 			
 	 			Given CA_PDL_003
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		Then Verification
 							

Scenario: Borrower -> PayFrequency (Bi-Weekly) -> New Loan ->Check Due Date for Min Term

 	 			
 	 			Given CA_PDL_004
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		Then Verification
 							

Scenario: Borrower -> PayFrequency (SeminMonthly) -> New Loan ->Check Due Date for Min Term
 	 			
 	 			Given CA_PDL_005
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		Then Verification
 							
 
Scenario: Borrower -> PayFrequency (SeminMonthly) -> New Loan ->Check Due Date for Min Term

 	 			
 	 			Given CA_PDL_007
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user

Scenario: Borrower ->Buyback with MO and CCK

 	 			
 	 			Given CA_PDL_027
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "2"
    		Then Buyback


Scenario: Borrower ->Buyback with MO and CCK void OT

 	 			
 	 			Given CA_PDL_040
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "2"
    		Then Buyback
    		Then BVoid the transaction
    		

Scenario: Borrower ->Buyback with MO and CCK void Cash

 	 			
 	 			Given CA_PDL_041
    		And Login into CSR
    		Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "2"
    		Then Buyback
    		Then BVoid the transaction
    		

Scenario: Loan → Deposit → Clear

 	 			
 	 			Given CA_PDL_117
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then Check_Clear
    		


Scenario: Loan → Deposit → Return

 	 			
 	 			Given CA_PDL_118
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		


Scenario: Advance =>Deposit => Pre-Payment with 2 tender types as MO with different numbers =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_102
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then Prepayment diff No
    		
    		


Scenario: Advance =>Deposit => Pre-Payment with 2 tender types as MO with different numbers =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_137
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment Same
    		


Scenario: Advance =>Deposit => Pre-Payment with 2 tender types as CCK with different numbers =>Transaction should not be processed
 	 			
 	 			Given CA_PDL_104
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment diff No
    		


Scenario: Advance =>Deposit => Pre-Payment with 2 tender types as CCK and MO =>Transaction should be processed
 	 			
 	 			Given CA_PDL_105
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		


Scenario: Advance =>Deposit => Pre-Payment with 2 tender types as Cash  =>Transaction should not be processed

 	 			
 	 			Given CA_PDL_106
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment Same




Scenario: Advance =>Deposit => Pre-Payment with tender types as Cash  =>Transaction should be processed

 	 			
 	 			Given CA_PDL_107
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment



Scenario: Advance =>Deposit => Pre-Payment with tender types as CK  =>Transaction should be processed

 	 			
 	 			Given CA_PDL_108
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		
    		


Scenario: Advance =>Deposit => Pre-Payment with tender types as CCK  =>Transaction should be processed

 	 			
 	 			Given CA_PDL_109
 	 			And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		


Scenario: Advance =>Deposit => Pre-Payment with tender types as MO  =>Transaction should be processed

 	 			
 	 			Given CA_PDL_110
 	 			And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment

Scenario: Loan → Deposit → Clear → Deposit Return


 	 			
 	 			Given CA_PDL_119
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then Check_Clear
    		Then ReturnAdmin
    		
  
Scenario: Loan → Partial Payment → Deposit → Prepayment

	 			
 	 			Given CA_PDL_120
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		Then Partial Payment
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then Prepayment
    		

Scenario: Advance =>Deposit => Pre-Payment with tender types as Cash  => void

 	 			
 	 			Given CA_PDL_121
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		Then BVoid the transaction
    		

Scenario: Loan → Deposit → Prepayment with CK→ Void


 	 			
 	 			Given CA_PDL_122_1
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		Then BVoid the transaction


Scenario: Loan → Deposit → Prepayment with CCK→ Void


 	 			
 	 			Given CA_PDL_122_2
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		Then BVoid the transaction
 

Scenario: Loan → Deposit → Prepayment with MO→ Void


 	 			
 	 			Given CA_PDL_122_3
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate   
    		Then Prepayment
    		Then BVoid the transaction
    		

Scenario: Loan → Deposit → Deposit Return → Full NSF Payment

 	 			
 	 			Given CA_PDL_127
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPayment
    		
   
Scenario: Loan → Deposit → Deposit Return → Full NSF Payment → Void

 	 			
 	 			Given CA_PDL_126
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPayment
    		Then BVoid the transaction
  
 
  Scenario: Loan → Deposit → Prepayment with Cash → Deposit Return

 	 			
 	 			Given CA_PDL_124
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then PrepaymentPartial
    		Then ReturnAdmin
    		
  Scenario: Loan → Deposit → Deposit Return → Partial NSF Payment

 	 			
 	 			Given CA_PDL_125
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPaymentPartial
   
 
Scenario: Loan → Deposit → Deposit Return → Partial NSF Payment-> void

 	 			
 	 			Given CA_PDL_128
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPaymentPartial
    		Then BVoid the transaction

Scenario: Loan → Deposit → Deposit Return → Check Full NSF Payment

 	 			
 	 			Given CA_PDL_129_1
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPayment
    		

Scenario: Loan → Deposit → Deposit Return → CCK Full NSF Payment

 	 			
 	 			Given CA_PDL_129_2
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPayment
    		
    		

Scenario: Loan → Deposit → Deposit Return → MO Full NSF Payment

 	 			
 	 			Given CA_PDL_129_3
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then ReturnAdmin
    		Then NSFPayment
    

Scenario: Loan → Deposit → Deposit Return → Schedule Partial RCPO with Partial amount from Admin

 	 			
 	 			Given CA_PDL_130
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History	
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then RCPOReturn
    		Then AdminOtherPayments
    		

Scenario: Loan → Deposit → Deposit Return → Schedule Partial RCPO with Full amount from Admin

 	 			
 	 			Given CA_PDL_131
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History    		
    		Then Age the store to "0"
    		Then Safe deposit on duedate
    		Then RCPOReturn
    		Then AdminOtherPayments
    		

Scenario: Loan → partial payment Deposit → Deposit Return → Schedule Partial RCPO with Partial amount from Admin

 	 			
 	 			Given CA_PDL_132
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History
    		Then Age the store to "0"
    		Then Partial Payment 
    		Then Safe deposit on duedate    		   		
    		Then RCPOReturn
    		Then AdminOtherPayments
    		

Scenario: Loan → partial payment Deposit → Deposit Return → Schedule Partial RCPO with Full amount from Admin

 	 			
 	 			Given CA_PDL_133
    		And Login into CSR
    	  Given Registration of the Borrower PDL
    		Then New Loan taken for the user
    		And Get the Due Date from History    		
    		Then Age the store to "0"
    		Then Partial Payment
    		Then Safe deposit on duedate    		 		
    		Then RCPOReturn
    		Then AdminOtherPaymentsfull
    		
    		