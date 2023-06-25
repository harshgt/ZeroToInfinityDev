import { LightningElement, wire,api,track } from 'lwc'; 
import fetchAccounts from '@salesforce/apex/AccountController.fetchAccounts';
import { NavigationMixin } from 'lightning/navigation';
const actions = [
    { label: 'View', name: 'view' },
    { label: 'Edit', name: 'edit' },
    
];
 
const columns = [   
    { label: 'Name', fieldName: 'Name' }, 
    { label: 'Industry', fieldName: 'Industry' },
    
    {
        type: 'action',
        typeAttributes: { rowActions: actions },
    }, 
];
export default class SampleLWC extends NavigationMixin( LightningElement ) {
     @api hpgt;
    accounts; 
    error; 
    columns = columns;
    connets = false;
    row;
    //let s1;
    s1;

    @track isShowModal = false;

    

    hideModalBox() {  
        this.isShowModal = false;
    }
    


@wire( fetchAccounts )  
    wiredAccount( { error, data } ) {
if ( data ) {
this.accounts = data;
            this.error = undefined;
} else if ( error ) {
this.error = error;
            this.accounts = undefined;
}
}




handleRowAction( event ) {
const actionName = event.detail.action.name;
         this.row = event.detail.row;
        switch ( actionName ) {
            
            case 'view':
                console.log('printdata', this.row);
                //this.s1 =row;
                //log('printdatas1', this.s1);
                this.connets = true;
                this.isShowModal = true;

                break;
                   
            case 'edit':
                this[NavigationMixin.Navigate]({
                    type: 'standard__recordPage',
                    attributes: {
                        recordId: this.row.Id,
                        objectApiName: 'Account',
                        actionName: 'edit'
                    }
                });
                break;
            default:
        }
}
}