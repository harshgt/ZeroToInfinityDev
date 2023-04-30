import { LightningElement,track } from 'lwc';

export default class ZeroToInfyLWC extends LightningElement {
    // salesforce = "salesforce Developer"
    // name = "harshal"
    // role = "SFDC"

    // changeHandler(event){
    //     this.role = event.target.value;
    // }
    
    //  obj = {

    //     name: "parushni",
    //     job: "python Developer"
    // }
    // // nams = ["a","b","c","d"]


    // trackHandler(event){
    //     this.obj = {...this.obj, "job": event.target.value}
    // }

    firstName ='';
    secondName='';

    handleChange(event){
        const fname = event.target.name;
        if(fname === 'firstName')
        {
            this.firstName = event.target.value;
        }else if (fname === 'secondName'){
            this.secondName = event.target.value;
        }
    }
    get uppercasedFullName() {
        return `${this.firstName} ${this.secondName}`.toUpperCase();
      
    }
}