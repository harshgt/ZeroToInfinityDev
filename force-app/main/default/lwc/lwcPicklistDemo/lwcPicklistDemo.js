import { LightningElement,wire, api, track } from 'lwc';
import fetchsObjectData from '@salesforce/apex/lwcDemoController.fetchsObjectData';
import fetchPickListValue from '@salesforce/apex/lwcDemoController.fetchPickListValue';

export default class LwcPicklistDemo extends LightningElement {
@api objectName = 'Account';
@track sObjData= [];

    @wire(fetchsObjectData, {obName :'$objectName'} )
    wiredResult(result) { 
        if (result.data) {
            this.sObjData = result.data;
        }
    }

    @wire(fetchPickListValue, {objInfo: {'sobjectType' : 'Account'},
    picklistFieldApi: 'Industry'}) IndustryValues;
	@wire(fetchPickListValue, {objInfo: {'sobjectType' : 'Account'},
    picklistFieldApi: 'Type'}) TypeValue;

	onValueSelection1(event){
	// eslint-disable-next-line no-alert
	alert(event.target.value);
	}    
	onValueSelection2(event){
	// eslint-disable-next-line no-alert
	alert(event.target.value);
    }  
    
    handleClick(){
        // eslint-disable-next-line no-alert
        alert('Remove clicked');
    }

}