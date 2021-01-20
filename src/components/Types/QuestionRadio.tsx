import React, { Fragment } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

import { Question } from "../../models/Question";

export default function QuestionRadio(props: {
  quest: Question;
  onChange: any;
  value: any;
}): JSX.Element {
  if (props.quest.options === []) return <Fragment>No options</Fragment>;
  return (
    <Fragment>
      <FormControl component="fieldset">
        <RadioGroup onChange={props.onChange} value={props.value}>
          {props.quest.options.map((option, key) => {
            return (
              <FormControlLabel
                key={key}
                value={key + ""}
                control={<Radio />}
                label={option}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Fragment>
  );
}
