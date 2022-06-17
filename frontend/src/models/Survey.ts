export interface Option {
  id: string;
  text: string;
}

export interface IItem {
  surveyType: string;
  id: string;
  name: string;
  question: string;
  options?: Option[];
  _id?: string;
}

export interface IQuestion {
  access?: any;
  name: string;
  createdAt: string;
  questions: IItem[];
  updatedAt: string;
  user: string;
  _id: string;
}
