public with sharing class getOpportunityForAccount {
    
    @AuraEnabled(Cacheable = true)
    public static List<Opportunity> getOpportunityForAccount(Id recordId) {
        return [Select Id,Name, StageName,AccountID,Amount,Document_Id__c,Type__c,Document_Date__c,Local_CRCY__c,Net_Due_Date__c from Opportunity where AccountId =: recordId  ] ; 

    }


    

    
}