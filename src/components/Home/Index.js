import React from 'react'
import {Fragment} from 'react'
import headerStyle from './header.module.scss'
import loaderStyle from './loader.module.scss'
import t from './loaderext.module.scss'
import Big from './Big'
import Small from './Small'
console.log(t)
let s = {};
for (let i in headerStyle) {
    let tmp = i.replace(/-/g, '_');
    s[tmp] = headerStyle[i];
}
console.log(s)
let m = {};
for (let i in loaderStyle) {
    let tmp = i.replace(/-/g, '_');
    s[tmp] = loaderStyle[i];
}
export default class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Fragment>
                <div id={s.yk_header}>
                    <header>
                        <div className={s.yk_header_container}>
                            <span>
                                <a href="https://www.youku.com">
                                    <img src="https://gw.alicdn.com/tfs/TB1trOpXEz1gK0jSZLeXXb9kVXa-168-34.png" alt="" id={s.yk_logo} />
                                </a>
                            </span>
                            <span>
                                <a><div className={s.yk_search_container}>
                                <input type="text" value="1" id={s.yk_search_input} readOnly />
                                <img src="https://img.alicdn.com/tfs/TB15zSoX21TBuNjy0FjXXajyXXa-48-48.png" alt="" className={s.search_logo} /><div className={s.default_search} >飞虎之雷霆极战</div></div></a></span>

                            <span><a href="https://account.youku.com/?callback=https://youku.com/"><img src="https://img.alicdn.com/tfs/TB10zdbXL5TBuNjSspmXXaDRVXa-44-44.png" alt="" id={s.default_user_img} /></a></span>
                            <span><a href="https://i.youku.com/u/profile"><img src="" alt="" id={s.yk_user_img} /></a></span>
                        </div>
                        <div className={s.yk_search_result_container}>
                            <div id={s.yk_search_result}>
                                <ul id={s.yk_search_ul}>

                                </ul>
                            </div>
                            <div className={s.yk_search_close}>关闭</div>
                        </div>
                        <div className={s.hot_search_container}>
                            <div className={s.tip}>
                                <i className={s.hot}></i>
                                大家都在搜
                        </div>
                        <ul className={s.hot_search_ul} >
                            <a href="https://www.soku.com/m/y/video?q=德云社己亥年纲丝节庆典 2019">
                                <li>
                                    <div className={s.hot_container}>
                                        <i className={[s.hot_common_tip, s.hot_1_tip]}>1</i>
                                    <div className={s.search_res_name}>德云社己亥年纲丝节庆典 2019</div>
                                    </div>
                                </li>
                            </a>
                        </ul>
                            <div className="yk-hot-close">关闭</div>
                        </div>
                        <nav className={s.yk_nav} style={{ display: 'block' }}>
                            <ul className={s.header_nav}>
                                <li><a href="https://www.youku.com" className={s.nav_active}>首页</a><span className={s.nav_active_bottom}></span></li>
                                <li><a href="https://www.youku.com" className={s.nav_active}>首页</a><span className={s.nav_active_bottom}></span></li>
                                <li><a href="https://www.youku.com" className={s.nav_active}>首页</a><span className={s.nav_active_bottom}></span></li>
                            </ul>
                            <img src="https://img.alicdn.com/tfs/TB18vFaXGmWBuNjy1XaXXXCbXXa-44-44.png" alt="" className={s.nav_arrow} />
                        </nav>
                        <div className={s.panel_nav_container} style={{ display: 'none' }}>
                            <ul className="panel-nav">
                                <li><a href="https://www.youku.com">首页</a></li>
                                <li><a href="https://www.youku.com">首页</a></li>
                                <li><a href="https://www.youku.com">首页</a></li>
                                <li><a href="https://www.youku.com">首页</a></li>
                            </ul>
                        </div>
                    </header >
                </div >
                <div className={[m.slick_slider, m.slick_initialized]}>
                    <div className={m.slick_list}>
                        <div className={m.slick_track}>
                            <div className={[m.slick_slide, m.slick_cloned]} style={{ width: '414px' }}>
                                <div>
                                    <a style={{ width: '100%' , display: 'inline-block' }}>
                                        <div className={m.sliderContainer}>
                                            <img src="//liangcang-material.alicdn.com/prod/upload/54512d2cf06841f6b7a118d23ec31545.jpg?x-oss-process=image/resize,w_1242/format,webp/interlace,1"
                                alt="<中国史>汉废帝跌宕的一生" className={m.carouselImg} />
                                            <div className={m.sliderDescContainer}>
                                                <div className={[m.defaultIcon, m.sliderMark]}>全网独播</div>
                                                <span className={m.sliderTitle}>&lt;中国史&gt;汉废帝跌宕的一生</span>
                                                <span className={m.sliderDesc}>  25:06</span>
                                            </div>
                                            <div className={m.sliderLayer}></div>
                                        </div>
                                    </a>
                                </div>
                            </div >
                        </div >
                    </div >
                    <ul style={{ display: 'block' }} className={[m.slick_dots, m.slick_dots_bottom]}>
                        <li>
                            <button>1</button>
                        </li>
                    </ul>
                </div >
                <div>
                    <Big 
                    title='<飞虎2>马国明深陷"畏枪症阴影'
                    img='//liangcang-material.alicdn.com/prod/upload/b364ba6c035b4055921a1fd793f0a838.jpg'
                    t={t}
                    />
                    <div>
                        <div className={t.pccContainer}>
                            <Small 
                            url='123' 
                            img={'//r1.ykimg.com/050E00005D70C435ADA7B206450C662E'} 
                            t={t}
                            title='你是我的答案'
                            />
                            <div className={t.bottomContainer} style={{display:'flex'}}>
                                <a href="https://tv.youku.com/">
                                    <div className={t.goToChannel}>进入 剧集</div> 
                                    频道
                                    <img src="https://gw.alicdn.com/tfs/TB1Ryc7GCzqK1RjSZFjXXblCFXa-72-72.png" alt="" className={t.toChannelImg}/>
                                </a>
                                <div className={t.goToChannel}>
                                    换一换
                                    <img src="https://gw.alicdn.com/tfs/TB1Jo7SGwTqK1RjSZPhXXXfOFXa-36-36.png" alt="" className={t.toChannelImg}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment >
        );
    }
}