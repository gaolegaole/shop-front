import React from 'react'
export default function SmallFunc(props){
    return (
        <a href={props.url}>
            <div className={props.t.pccDescContainer}>
                <div style={{position:'relative'}}>
                    <img src={props.img} alt={props.title} className={props.t.pccImg}/>
                    <div className={props.t.pLayer}></div>
                    <div className={props.t.defaultIcon}> 首播</div>
                    <div className={props.t.pSummary}>更新至2集</div>
                </div>
                <div className={[props.t.pName,props.t.pccName]}>{props.title}</div>
                <div className={[props.t.pDesc,props.t.pccName]}>{props.title}</div>
            </div>
        </a>
    )
    
}