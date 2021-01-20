import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { Question } from "../models/Question";
import QuestionInput from "./Question";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    background: "#11111",
  },
  card: { paddingLeft: "10px", paddingBottom: "10px" },
  block: {
    marginLeft: "30px",
    width: "90%",
  },
});

function Survey(props: { survey: Question[] }): JSX.Element {
  const [answers, setAnswers] = useState({});

  let handleState = (keys: string, value: string) => {
    setAnswers((answers) => ({ ...answers, [keys]: value }));
  };
  const classes = useStyles();

  let send = () => {

    //HERE THERE THE AXIOS request
    // axios
    //   .post(`URL`, answers)
    //   .then((response) => {
    //     alert("This might not happen");
    //   })
    //   .catch((error) => {
    //     alert(
    //       `Url does not exist :C\r But that it's ok this is just an example :)\n data:${JSON.stringify(
    //         answers
    //       )}`
    //     );
    //   })
    //   .then(() => {});
    alert(JSON.stringify(answers))
  };

  return (
    <Grid item xs={12} sm={8} md={6} lg={5} className={classes.root}>
      <Card className={classes.card}>
        {props.survey.map((quest, key) => {
          return (
            <QuestionInput key={key} quest={quest} onChange={handleState} />
          );
        })}
        <Button
          variant="contained"
          color="primary"
          className={classes.block}
          onClick={send}
        >
          Send
        </Button>
      </Card>
    </Grid>
  );
}
export default Survey;
