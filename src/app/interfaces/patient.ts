export interface Patient {
  _id?: string;
  name: string;
  surname: string;
  age: number;
  street: string;
  housenumber: number;
  localnumber: number;
  diseaseHistory: [{
    startedAt: Date;
    typeOfDisease: string;
    typeOfMedicine: string;
    daysOfTreatment: number
  }];
}
