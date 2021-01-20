import React from "react";
import Checkbox from "@material-ui/core/Checkbox";

import { Question } from "../../models/Question";

export default function QuestionBool(props: { quest: Question,onChange:any,value:any }): JSX.Element {
  return (
    <Checkbox
      checked={props.value}
      onChange={props.onChange}
      name={"name"+props.quest.id}
      indeterminate
    />
  );
}
