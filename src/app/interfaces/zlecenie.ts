export interface Zlecenie {
  _id?: string;
  name: string;
  surname: string;
  medicine: string;
  daysLeft: number;
  responsiblePerson: string;
  idOfPatient: string;
  idOfDisease: string;
  idOfResponsible: string;
}
