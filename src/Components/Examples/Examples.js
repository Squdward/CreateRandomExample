import { Input }  from 'antd';
import { Button } from 'antd';

import classes  from './Example.module.css';


export default function Examples(props) {
  return (
    <div className={classes.List}>
        {props.examples !== undefined ? props.examples.map( (i, index) => {
          return <div className={classes.example} key={index}>
                    <h4>{i.example}</h4>
                    <Input onChange={i.handleForm}/>
                </div>
        }) : ""}
        
      <Button type="primary" className={classes.Button} onClick={props.CheckAnswer}>Подтвердить</Button>
   
      {props.finish ?  <p>{props.name} Правильных ответов {props.good} неправильных {props.bad}</p> : null }

    </div >
  )
}