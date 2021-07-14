import classes    from './App.module.css';
import Name       from './Components/Name/Name';
import {useState} from 'react'
import Examples   from './Components/Examples/Examples';


function App() {

  const [state, setState] = useState({
    regisiter: false,
    name: "",
    countGoodAnswer: 0,
    countBadAnswer: 0,
    finish: false,
  });

  function InputNameHandler(event) {
    const val = event.target.value;

    setState( prevState => {
      return {...prevState, name: val}
    });
  }
  
  function CheckNameField() {
    if (state.name.trim() !== "") {
      setState(prevState => {
        return { ...prevState, regisiter: true, }
      });

      CreateExample()
    }
    else {
      setState(prevState => {
        return { ...prevState, name: "" }
      });
    }
  }

  function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function CreateExample() {
    const mathematicalOperations = ['+', '-', '*', '/'];
    const examples = [];

    for (let index = 1; index <= 10; index++) {
      let obj = {};

      let left        = randomInteger(1, 100)
      let operations  = `${mathematicalOperations[randomInteger(0, 3)]}`
      let right       = randomInteger(1, 100)
      
      obj.example = `${left}  ${operations}  ${right}`;
      obj.answer  = eval(`${left}  ${operations}  ${right}`).toFixed(2);
      
      obj.userAnswer = '';

      obj.handleForm  = function (event) {
        obj.userAnswer = event.target.value;
        
        setState(prevState => {
          return { ...prevState, examples}
        });
      }

      examples.push(obj);
    }

    setState(prevState => {
      return { ...prevState, examples }
    });
  }

  function CheckAnswer() {
    const stateCopy = { ...state }

    state.examples.map( (i, _) => {

      if(i.answer === Number(i.userAnswer).toFixed(2)) {

        ++stateCopy.countGoodAnswer
      }
       
      else {

        ++stateCopy.countBadAnswer
      }

    })
    showAnswer(stateCopy)

  }

  function showAnswer(state) {

    state.finish = true

    setState(state)
  }
  
  return (
    <div className={classes.App}>
      { state.regisiter 
        ? <Examples
            examples={state.examples}
            CheckAnswer={CheckAnswer}
            finish={state.finish}
            good={state.countGoodAnswer}
            bad={state.countBadAnswer}
            name={state.name}
          />
        : <Name 
            name={state.name}
            InputNameHandler={InputNameHandler}
            CheckNameField={CheckNameField}
          />
      }
    </div>
  );
}

export default App;
