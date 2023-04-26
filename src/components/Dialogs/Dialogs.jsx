import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs =(props) => {
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