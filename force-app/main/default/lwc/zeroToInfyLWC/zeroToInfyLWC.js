import { LightningElement,track } from 'lwc';

export default class ZeroToInfyLWC extends LightningElement {
    salesforce = "salesforce Developer"
    name = "harshal"
    role = "SFDC"

    changeHandler(event){
        this.role = event.target.value;
    }
    
     obj = {

        name: "parushni",
        job: "python Developer"
    }
    // nams = ["a","b","c","d"]


    trackHandler(event){
        this.obj = {...this.obj, "job": event.target.value}
    }
    
}