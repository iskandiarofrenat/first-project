import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

let dialogs = [
    {id: 1, name: 'Наташа'},
    {id: 2, name: 'Кирилл'},
    {id: 3, name: 'Дмитрий'},
    {id: 4, name: 'Леха '},
    {id: 5, name: 'Влад'}

]

let messages = [
    {id: 1, message: 'Привет'},
    {id: 2, message: 'Как дела'},
    {id: 3, message: 'Чем занимаешься'},
    {id: 4, message: 'Пошли пить пиво '},
    {id: 5, message: 'С Днем рождения'}

]

let dialogsElements = dialogs.map (dialog => <DialogItem name={dialog.name} id= {dialog.id}/>);
let messagesElements = messages.map (message => <Message message = {message.message}/>);

const Dialogs =(props) => {
           return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
           
            </div>
            
        <div className={s.messages}>
            {messagesElements}
           
            
        </div>
    </div>
   )
   
} 



export default Dialogs;