import React from 'react';
type PropsType={

    AddCount:()=>void
    ResetCount:()=>void
    countClassAdd:boolean

}
export const Buttons = (props:PropsType ) => {
    return (
        <div className={'buttons'}>
            <button onClick={props.AddCount} disabled={props.countClassAdd} className={'button'}>Inc</button>
            <button onClick={props.ResetCount} className={'button'}>Reset</button>
        </div>
    );
};

