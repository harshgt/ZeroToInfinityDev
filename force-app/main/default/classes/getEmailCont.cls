public with sharing class getEmailCont {
    
    @AuraEnabled(Cacheable = true)
    public static List<Email_Contact_Status__c> getEmailCont(Id recordIdsas) {
        return [select Id, Name, Status__c,Contact_Name__c,Opportunity_Name__c from Email_Contact_Status__c] ; 

    }

}