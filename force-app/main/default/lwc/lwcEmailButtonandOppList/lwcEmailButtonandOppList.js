import { LightningElement, api, wire, track } from 'lwc';
import getOppo from '@salesforce/apex/getOpportunityForAccount.getOpportunityForAccount';
import getCont from '@salesforce/apex/getContactForAccount.getContactForAccount';
import sendEmails from '@salesforce/apex/EmailHandler.sendEmail';

const COLUMNS = [
    { label: 'Opportunity Name', fieldName: 'Name' },

    { label: 'Stage Name', fieldName: 'StageName', type: 'picklist' },

    { label: 'Amount', fieldName: 'Amount', type: 'currency' },

    { label: 'Id', fieldName: 'Id', type: 'Id' },

    { label: 'Email' },
]



const COLUMNS1 = [
    { label: 'Contact Name', fieldName: 'Name' },

    { label: 'Email', fieldName: 'Email' },

    { label: 'Mobile', fieldName: 'MobilePhone' },

    { label: 'Id', fieldName: 'Id', type: 'Id' },

  
]



export default class LwcEmailButtonandOppList extends LightningElement {

//c/zeroToInfyLWC

    @track isShowModal = false;
    hideModalBox() {  
        this.isShowModal = false;
    }


//c/zeroToInfyLWC
    columns = COLUMNS;
    columns1 = COLUMNS1;
    @api recordId;
    @track data1;
    @track data2;


    selectedRows;



    @wire(getOppo, { recordId: '$recordId' })
    getOppoAcc({ data, error }) {
        if (data) {
            this.data1 = data;

            console.log('Record for the Opportunity', this.data1);
            //console.log(data);

        }
        else if (error) {

        }
    }

    //retrive crelated contact
    @wire(getCont, { recordIds: '$recordId' })
    getContAcc({ data, error }) {
        if (data) {
            this.data2 = data;
            console.log('Record for the Contact', this.data2);
            //console.log(data);


        }
        else if (error) {

        }
    } 


   /*  get OppFound() {
        if (this.data1) {
            console.log('system errrorrrrr data1');
            console.log(data1);
            return true;
        }
        return false;

    } */


    handleClick(event) {
        var selectedRecords = this.template.querySelector("lightning-datatable").getSelectedRows();
        console.log(selectedRecords);

        this.isShowModal = true;

        //console.log('data for the apex contact',data2);
        //this.lwcEmailButtonandOppList = !this.LwcEmail; 


    }


    //sendEmail(event){
        selectedContact=[];
        selectedContactEmail=[];
        onRowSelection( event ) {

            this.selectedRows = event.detail.selectedRows;
            this.selectedContact = this.selectedRows;

            

           
    
        }
        //var selectedRecordsmail = this.template.querySelector("lightning-datatable").getSelectedRows();
        //console.log(selectedRecordsmail);
        //sendEmail({ toAddress: this.email, subject: "Subject", body: "Awesome right!"});
        
    //}


    
    sendEmail(event){
        //@wire(sendContEmail, { ContRecordId: '$recordId' });
        
        console.log(
            'selectedcontact are ',this.selectedContact.Email

        );

        for (let index = 0; index < this.selectedContact.length; index++) {
            let element = this.selectedContact[index];
            //console.log('emails of thr cont',element[2]);
            console.log('emails of thr cont1',element.Email);
            this.selectedContactEmail = [ ...this.selectedContactEmail, element.Email ];
            //console.log('emails of thr cont2',this.selectedContactEmail);

        }
        console.log('emails of thr cont2',this.selectedContactEmail);
        sendEmails({ toAddress: this.selectedContactEmail, subject: "harshal subject", body: "hpgt10 SFDX"});
        this.selectedContactEmail=[];
        this.isShowModal = false;
    }


    




    
   





}