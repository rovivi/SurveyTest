enum QuestionTypes {
    Text,
    Boolean,
    Radio, 
    CheckBox
  }

class Question {
  id: number=0;
  type: QuestionTypes=QuestionTypes.Text;
  required : boolean=false;
  displayText : string="Please set a display text";
  description : string="Description";
  options:string[]=[];
}

export { Question,QuestionTypes };
