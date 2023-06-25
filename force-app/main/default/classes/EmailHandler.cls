public with sharing class EmailHandler {
    @AuraEnabled
    public static void sendEmail(List<String> toAddress, String subject, String body) {      
        
        
 //System.debug('Success 1',List<String> toAddress);
           
               
                //System.debug(toAddress);
                List<Messaging.SingleEmailMessage> mails =  new List<Messaging.SingleEmailMessage>();     
                
                 Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
              
              // Step 2: Set list of people who should get the email
                List<String> sendTo = new List<String>();
                 sendTo.add(toAddress);
                 mail.setToAddresses(sendTo);
              
              /*// Step 3: Set who the email is sent from
                 mail.setReplyTo('noreply@gmail.com'); // change it with your mail address.
                 mail.setSenderDisplayName('salesforce test User'); 
              
              // Step 4. Set email contents - you can use variables!
                mail.setSubject(subject);
                mail.setHtmlBody(body);
              
              // Step 5. Add your email to the master list
                mails.add(mail);    
                
               
              // Step 6: Send all emails in the master list
               Messaging.sendEmail(mails);*/
        
        
    }
}


