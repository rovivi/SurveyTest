import React, { Fragment, useState, useEffect } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import { Question } from "../../models/Question";

export default function QuestionCheckBox(props: {
  quest: Question;
  onChange: any;
  setValue: any;
}): JSX.Element {
  var aux: boolean[] = [];
  props.quest.options.map(() => aux.push(false));
  const [state, setState] = useState(aux);
  const handleChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  useEffect(() => {
    props.setValue(JSON.stringify(state));
  }, [state]);

  if (props.quest.options === []) return <Fragment>No options</Fragment>;
  return (
    <Fragment>
      {props.quest.options.map((option, key) => {
        return (
          <FormControlLabel
            control={
              <Checkbox
                checked={state[key]}
                onChange={handleChange}
                name={key + ""}
              />
            }
            label={option}
          />
        );
      })}
    </Fragment>
  );
}
