import React,{Fragment} from 'react'
export default function Big(props){
    return (
        <Fragment>
            <div className={props.t.drawerTitle}>剧集</div>
                <div>
                    <div className={props.t.paaContainer}>
                        <a href={props.url}>
                            <div style={{position:'relative'}}>
                                <img src={props.img} alt={props.title} className={props.t.paaImg} />
                                <div className={props.t.pLayer}></div>
                                <div className={props.t.defaultIcon}> 全网独播(右)</div>
                                <div className={props.t.pSummary}>更新至9集</div>
                            </div>
                            <div className={[props.t.pName,props.t.paaName]}>{props.title}</div>
                            <div className={[props.t.pDesc,props.t.paaName]}>面对罪犯不敢开枪险些丧命</div>
                        </a>
                    </div>
                </div>
        </Fragment>
    )
    
}