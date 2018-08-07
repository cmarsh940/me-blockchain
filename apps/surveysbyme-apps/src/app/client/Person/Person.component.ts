/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PersonService } from './Person.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [PersonService]
})
export class PersonComponent implements OnInit {

  myForm: FormGroup;

  private allParticipants;
  private participant;
  private currentId;
  private errorMessage;

  personId = new FormControl('', Validators.required);
  firstName = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  email = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  mobilePhone = new FormControl('', Validators.required);
  homePhone = new FormControl('', Validators.required);
  city = new FormControl('', Validators.required);
  country = new FormControl('', Validators.required);
  address = new FormControl('', Validators.required);
  address2 = new FormControl('', Validators.required);
  postalCode = new FormControl('', Validators.required);
  postOfficeBoxNumber = new FormControl('', Validators.required);
  subscription = new FormControl('', Validators.required);
  numberOfSurveys = new FormControl('', Validators.required);


  constructor(public servicePerson: PersonService, fb: FormBuilder) {
    this.myForm = fb.group({
      personId: this.personId,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      mobilePhone: this.mobilePhone,
      homePhone: this.homePhone,
      city: this.city,
      country: this.country,
      address: this.address,
      address2: this.address2,
      postalCode: this.postalCode,
      postOfficeBoxNumber: this.postOfficeBoxNumber,
      subscription: this.subscription,
      numberOfSurveys: this.numberOfSurveys
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    const tempList = [];
    return this.servicePerson.getAll()
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
      $class: 'org.me.survey.Person',
      'personId': this.personId.value,
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'email': this.email.value,
      'password': this.password.value,
      'mobilePhone': this.mobilePhone.value,
      'homePhone': this.homePhone.value,
      'city': this.city.value,
      'country': this.country.value,
      'address': this.address.value,
      'address2': this.address2.value,
      'postalCode': this.postalCode.value,
      'postOfficeBoxNumber': this.postOfficeBoxNumber.value,
      'subscription': this.subscription.value,
      'numberOfSurveys': this.numberOfSurveys.value
    };

    this.myForm.setValue({
      'personId': null,
      'firstName': null,
      'lastName': null,
      'email': null,
      'password': null,
      'mobilePhone': null,
      'homePhone': null,
      'city': null,
      'country': null,
      'address': null,
      'address2': null,
      'postalCode': null,
      'postOfficeBoxNumber': null,
      'subscription': null,
      'numberOfSurveys': null
    });

    return this.servicePerson.addParticipant(this.participant)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.myForm.setValue({
        'personId': null,
        'firstName': null,
        'lastName': null,
        'email': null,
        'password': null,
        'mobilePhone': null,
        'homePhone': null,
        'city': null,
        'country': null,
        'address': null,
        'address2': null,
        'postalCode': null,
        'postOfficeBoxNumber': null,
        'subscription': null,
        'numberOfSurveys': null
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
      $class: 'org.me.survey.Person',
      'firstName': this.firstName.value,
      'lastName': this.lastName.value,
      'email': this.email.value,
      'password': this.password.value,
      'mobilePhone': this.mobilePhone.value,
      'homePhone': this.homePhone.value,
      'city': this.city.value,
      'country': this.country.value,
      'address': this.address.value,
      'address2': this.address2.value,
      'postalCode': this.postalCode.value,
      'postOfficeBoxNumber': this.postOfficeBoxNumber.value,
      'subscription': this.subscription.value,
      'numberOfSurveys': this.numberOfSurveys.value
    };

    return this.servicePerson.updateParticipant(form.get('personId').value, this.participant)
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

    return this.servicePerson.deleteParticipant(this.currentId)
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

    return this.servicePerson.getparticipant(id)
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      const formObject = {
        'personId': null,
        'firstName': null,
        'lastName': null,
        'email': null,
        'password': null,
        'mobilePhone': null,
        'homePhone': null,
        'city': null,
        'country': null,
        'address': null,
        'address2': null,
        'postalCode': null,
        'postOfficeBoxNumber': null,
        'subscription': null,
        'numberOfSurveys': null
      };

      if (result.personId) {
        formObject.personId = result.personId;
      } else {
        formObject.personId = null;
      }

      if (result.firstName) {
        formObject.firstName = result.firstName;
      } else {
        formObject.firstName = null;
      }

      if (result.lastName) {
        formObject.lastName = result.lastName;
      } else {
        formObject.lastName = null;
      }

      if (result.email) {
        formObject.email = result.email;
      } else {
        formObject.email = null;
      }

      if (result.password) {
        formObject.password = result.password;
      } else {
        formObject.password = null;
      }

      if (result.mobilePhone) {
        formObject.mobilePhone = result.mobilePhone;
      } else {
        formObject.mobilePhone = null;
      }

      if (result.homePhone) {
        formObject.homePhone = result.homePhone;
      } else {
        formObject.homePhone = null;
      }

      if (result.city) {
        formObject.city = result.city;
      } else {
        formObject.city = null;
      }

      if (result.country) {
        formObject.country = result.country;
      } else {
        formObject.country = null;
      }

      if (result.address) {
        formObject.address = result.address;
      } else {
        formObject.address = null;
      }

      if (result.address2) {
        formObject.address2 = result.address2;
      } else {
        formObject.address2 = null;
      }

      if (result.postalCode) {
        formObject.postalCode = result.postalCode;
      } else {
        formObject.postalCode = null;
      }

      if (result.postOfficeBoxNumber) {
        formObject.postOfficeBoxNumber = result.postOfficeBoxNumber;
      } else {
        formObject.postOfficeBoxNumber = null;
      }

      if (result.subscription) {
        formObject.subscription = result.subscription;
      } else {
        formObject.subscription = null;
      }

      if (result.numberOfSurveys) {
        formObject.numberOfSurveys = result.numberOfSurveys;
      } else {
        formObject.numberOfSurveys = null;
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
      'personId': null,
      'firstName': null,
      'lastName': null,
      'email': null,
      'password': null,
      'mobilePhone': null,
      'homePhone': null,
      'city': null,
      'country': null,
      'address': null,
      'address2': null,
      'postalCode': null,
      'postOfficeBoxNumber': null,
      'subscription': null,
      'numberOfSurveys': null
    });
  }
}
