import React from 'react';
import s from './Dialogs.module.css'


const Dialogs =(props) => (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            <div className={s.dialog + ' ' + s.active}>
                Наташа
            </div>
            <div className={s.dialog}>
                Кирилл
            </div>
            <div className={s.dialog}>
                Дмитрий Александрович
            </div>
            <div className={s.dialog}>
                Леха
            </div>
            <div className={s.dialog}>
                Влад
            </div>
        </div>

        <div className={s.messages}>
            <div className={s.dialog}>Привет</div>
            <div className={s.dialog}>Как дела?</div>
            <div className={s.dialog}>Чем занимаешься?</div>

        </div>
    </div>

)

export default Dialogs;