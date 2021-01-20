import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { QuestionTypes, Question } from "../models/Question";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import QuestionBool from "./Types/QuestionBool";
import QuestionRadio from "./Types/QuestionRadio";
import QuestionCheckBox from "./Types/QuestionCheckBox";
import Card from "@material-ui/core/Card";
const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: "22px 15px",
  },
  card: { paddingLeft: "10px", paddingBottom: "10px" },
  red: { color: "red" },
});

function QuestionInput(props: { quest: Question; onChange: any }): JSX.Element {
  const [answer, setAnswer] = useState({});

  let handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    setAnswer(value);
  };

  useEffect(() => {
    props.onChange(props.quest.id,answer)
  }, [answer]);

  const classes = useStyles();
  let renderInput = (): JSX.Element => {
    switch (props.quest.type) {
      case QuestionTypes.Text:
        return (
          <TextField
            name={"name"}
            label={"Your answer"}
            onChange={handleInputChange}
          />
        );
      case QuestionTypes.Boolean:
        return (
          <QuestionBool
            quest={props.quest}
            onChange={handleInputChange}
            value={answer}
          />
        );
      case QuestionTypes.CheckBox:
        return (
          <QuestionCheckBox
            quest={props.quest}
            onChange={handleInputChange}
            setValue={setAnswer}
          />
        );
      case QuestionTypes.Radio:
        return (
          <QuestionRadio
            quest={props.quest}
            onChange={handleInputChange}
            value={answer}
          />
        );
    }
  };

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
      <Card className={classes.card}>
        <h4>{props.quest.displayText}</h4>
        {props.quest.required ? <div className={classes.red}>*</div> : null}
        <p>{props.quest.description}</p>
        {renderInput()}
      </Card>
    </Grid>
  );
}
export default QuestionInput;
