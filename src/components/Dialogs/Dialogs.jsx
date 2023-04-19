import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {

    let path = "/dialogs/*" + props.id;
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

const Dialogs =(props) => {
           return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <DialogItem name="Наташа" id="1"/>
            <DialogItem name="Кирилл" id="2"/>
            <DialogItem name="Дмитрий" id="3"/>
            <DialogItem name="Леха" id="4"/>
            <DialogItem name="Влад" id="5"/>
        </div>
 
        <div className={s.messages}>
            <Message message ="Привет"/>
            <Message message ="Как дела"/>
            <Message message ="Чем занимаешься"/>
            <Message message ="Пошли пить пиво"/>
            <Message message ="S Днем рождения"/>
            

        </div>
    </div>
   

)
} 

export default Dialogs;