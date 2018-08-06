import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '../../../../node_modules/@angular/forms';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  myForm: FormGroup;

  allParticipants;
  private participant;
  private currentId;
  errorMessage;

  customerId = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  phone = new FormControl('', Validators.required);
  surveyOwner = new FormControl('', Validators.required);


  constructor(public serviceCustomer: CustomerService, fb: FormBuilder) {
    this.myForm = fb.group({
      customerId: this.customerId,
      name: this.name,
      email: this.email,
      phone: this.phone,
      surveyOwner: this.surveyOwner
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.serviceCustomer.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(participant => {
          tempList.push(participant);
        });
        this.allParticipants = tempList;
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
          this.errorMessage = error;
        }
      });
  }

	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the participant field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the participant updateDialog.
   * @param {String} name - the name of the participant field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified participant field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  addParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.me.survey.Customer',
      'customerId': this.customerId.value,
      'name': this.name.value,
      'email': this.email.value,
      'phone': this.phone.value,
      'surveyOwner': this.surveyOwner.value
    };

    this.myForm.setValue({
      'customerId': null,
      'name': null,
      'email': null,
      'phone': null,
      'surveyOwner': null
    });

    return this.serviceCustomer.addParticipant(this.participant)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.myForm.setValue({
          'customerId': null,
          'name': null,
          'email': null,
          'phone': null,
          'surveyOwner': null
        });
        this.loadAll();
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else {
          this.errorMessage = error;
        }
      });
  }


  updateParticipant(form: any): Promise<any> {
    this.participant = {
      $class: 'org.me.survey.Customer',
      'name': this.name.value,
      'email': this.email.value,
      'phone': this.phone.value,
      'surveyOwner': this.surveyOwner.value
    };

    return this.serviceCustomer.updateParticipant(form.get('customerId').value, this.participant)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.loadAll();
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });
  }


  deleteParticipant(): Promise<any> {

    return this.serviceCustomer.deleteParticipant(this.currentId)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.loadAll();
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });
  }

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceCustomer.getparticipant(id)
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        const formObject = {
          'customerId': null,
          'name': null,
          'email': null,
          'phone': null,
          'surveyOwner': null
        };

        if (result.customerId) {
          formObject.customerId = result.customerId;
        } else {
          formObject.customerId = null;
        }

        if (result.name) {
          formObject.name = result.name;
        } else {
          formObject.name = null;
        }

        if (result.email) {
          formObject.email = result.email;
        } else {
          formObject.email = null;
        }

        if (result.phone) {
          formObject.phone = result.phone;
        } else {
          formObject.phone = null;
        }

        if (result.surveyOwner) {
          formObject.surveyOwner = result.surveyOwner;
        } else {
          formObject.surveyOwner = null;
        }

        this.myForm.setValue(formObject);
      })
      .catch((error) => {
        if (error === 'Server error') {
          this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
          this.errorMessage = '404 - Could not find API route. Please check your available APIs.';
        } else {
          this.errorMessage = error;
        }
      });

  }

  resetForm(): void {
    this.myForm.setValue({
      'customerId': null,
      'name': null,
      'email': null,
      'phone': null,
      'surveyOwner': null
    });
  }

}
