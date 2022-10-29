export type InputType = TextField | Button;

export interface Form {
  id: string;
  name: string;
  elements: Array<FormElement>;
  theme: Theme;
}

export interface FormElement {
  id: number;
  type: string;
  name?: string;
  attr: InputType;
}

export interface TextField {
  label: string;
  placeholder?: string;
}

export interface Button {
  content: string;
}

export interface Theme {
  id: string;
  name?: string;
  primary: string;
  secondary: string;
  highlight?: string;
}
