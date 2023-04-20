import { LightningElement } from 'lwc';

export default class ZeroToInfyLWC extends LightningElement {
    salesforce = "salesforce Developer"
    name = "harshal"
    role = "SFDC"

    changeHandler(event){
        this.role = event.target.value;
    }
    // obj = {

    //     a: 12,
    //     b: 13
    // }
    // nams = ["a","b","c","d"]


    
}