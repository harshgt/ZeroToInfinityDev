import { LightningElement, api, wire, track } from 'lwc';
import getOppo from '@salesforce/apex/getOpportunityForAccount.getOpportunityForAccount';
import getCont from '@salesforce/apex/getContactForAccount.getContactForAccount';
import sendEmails from '@salesforce/apex/EmailHandler.sendEmail';
import getEmailOpposCont from '@salesforce/apex/getEmailCont.getEmailCont';

const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
    
];

const COLUMNS = [
    { label: 'Opportunity Name', fieldName: 'Name' },

    { label: 'Stage Name', fieldName: 'StageName', type: 'picklist' },

    { label: 'Amount', fieldName: 'Amount', type: 'currency' },

    { label: 'Id', fieldName: 'Id', type: 'Id' },

    { label: 'Email' },

    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    },
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
    selectedOpp;



    @wire(getOppo, { recordId: '$recordId' })
    getOppoAcc({ data, error }) {
        if (data) {
            this.data1 = data;

            //console.log('Record for the Opportunity', this.data1);
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
           // console.log('Record for the Contact', this.data2);
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
    selectedOpportunity=[];

    handleClick(event) {
        var selectedRecords = this.template.querySelector("lightning-datatable").getSelectedRows();
        console.log(selectedRecords.length);
        this.selectedOpportunity= selectedRecords;
        //this.selectedOpp = this.selectedRecords;
        
        this.isShowModal = true;

        console.log('data for the apex opyt',this.selectedOpportunity);
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

    selectedOppEmail=[];
    
    sendEmail(event){
        //@wire(sendContEmail, { ContRecordId: '$recordId' });
        
        console.log(
            'selectedcontact are ',this.selectedContact

        ); //.Email

        console.log(
            'selected opyt are ',this.selectedOpportunity

        );
       // ooportunity selected  this.selectedOpp.

       //this.selectedOpportunity
       console.log(this.selectedOpportunity.length);
      // for (let indexopp = 0; indexopp < this.selectedOpportunity.length; indexopp++) {
       // runs 2 times if 2 select
      // let elementops = this.selectedOpportunity[indexopp];
      // console.log('Success meg for contactOpp1',elementops);
      // console.log('Success meg for contactOpp2',elementops.Id);



            for (let index = 0; index < this.selectedContact.length; index++) {

                let element = this.selectedContact[index];
                //console.log('emails of thr cont',element[2]);
               // console.log('emails of thr cont1',element.Email);

               


               //add element of oop in con list
                this.selectedContactEmail = [ ...this.selectedContactEmail, element.Id ];  //.Email
                //this.selectedContactEmail = [ ...this.selectedContactEmail, elementops.Id ];
                //console.log('emails of thr cont2',this.selectedContactEmail);
                //console.log(this.selectedContactEmail);

                //sendEmails({ toAddress:element.Email, subject: "Subject is SFDX", body: "Awesome SFDX", selectOpp :elementops.Id });
                //this.selectedContactEmail =[];
            }  


            for (let indexopp = 0; indexopp < this.selectedOpportunity.length; indexopp++) {
                // runs 2 times if 2 select
               let elementops = this.selectedOpportunity[indexopp];
                //console.log('Success meg for contactOpp1',elementops);
              // console.log('Success meg for contactOpp2',elementops.Id);

               this.selectedOppEmail = [ ...this.selectedOppEmail, elementops.Id ]; 
               }
    

            sendEmails({ toAddress: this.selectedContactEmail, subject: "Alo re bhau", body: "bas ata", selectOpp :this.selectedOppEmail });
        
   // }
    //console.log('emails of thr cont2',this.selectedContactEmail);

        /* for (let index = 0; index < this.selectedContact.length; index++) {



            let element = this.selectedContact[index];
            //console.log('emails of thr cont',element[2]);
            console.log('emails of thr cont1',element.Email);
            this.selectedContactEmail = [ ...this.selectedContactEmail, element.Id ];  //.Email
            //console.log('emails of thr cont2',this.selectedContactEmail);

        } */
        //console.log('emails of thr cont2',this.selectedContactEmail);
       //sendEmails({ toAddress: this.selectedContactEmail, subject: "Subject is SFDX", body: "Awesome SFDX"});
        
        
        
        this.selectedContactEmail = [];
        this.isShowModal = false;
    }







    //////////////////////////////////


    row;
    actionName
    row1;

    
       

    handleRowAction(event) {
        this.actionName = event.detail.action.name;
        this.row = event.detail.row;
        console.log(this.row.Id);  
        this.row1 = this.row.Id;


      }  
       
      
      @wire(getEmailOpposCont, { recordIdsas: '$this.row1' })
      getEma({ data, error }){
          if(data)
          {
              //this.showEmailData=data;
              console.log(data.Id);
          }
          else{

          }
        }





}