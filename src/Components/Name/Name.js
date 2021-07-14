import classes from "./Name.module.css"
import { Input } from 'antd';
import { Button } from 'antd';


export default function Name(props) {
  return (
      <>
        <div className={classes.Hello}>Добро Пожаловать</div>
        <p className={classes.Name}>Введите Ваше имя</p>
        <Input placeholder="Имя" value={props.name} onChange={props.InputNameHandler} className={classes.Input} />
        <Button type="primary" onClick={props.CheckNameField}>Подтвердить</Button>
      </>
  )
}