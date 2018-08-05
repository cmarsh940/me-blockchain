import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace org.me.survey{
   export enum Subscription {
      FREE,
      BASIC,
      ADVANCED,
      CUSTOM,
   }
   export enum SurveyStatus {
      OPEN,
      CLOSED,
   }
   export enum QustionType {
      BOOLEAN,
      MULTIPLECHOICE,
      TEXT,
   }
   export class Address {
      city: string;
      country: string;
      address: string;
      address2: string;
      postalCode: string;
      postOfficeBoxNumber: string;
   }
   export class Question {
      type: QustionType;
      question: string;
      answer: string;
      options: string[];
      creater: Person;
      survey: Survey;
   }
   export class Survey extends Asset {
      surveyId: string;
      category: SurveyCategory;
      name: string;
      owner: Person;
      status: SurveyStatus;
      questions: Question[];
   }
   export class SurveyCategory extends Asset {
      categoryId: string;
      name: string;
      surveys: Survey[];
   }
   export class Customer extends Participant {
      customerId: string;
      name: string;
      email: string;
      phone: string;
      surveyOwner: Person;
   }
   export class Person extends Participant {
      personId: string;
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      mobilePhone: string;
      homePhone: string;
      city: string;
      country: string;
      address: string;
      address2: string;
      postalCode: string;
      postOfficeBoxNumber: string;
      subscription: Subscription;
      numberOfSurveys: number;
   }
   export class addSurvey extends Transaction {
      creater: Person;
      survey: Survey;
   }
// }
