import React from 'react'
import loginStyle from './login.scss'
export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '', password: ''
        }
    }
    render() {
        return (
            <div className={loginStyle.pb_wrap}>
    <div className={loginStyle.wap_header} id={loginStyle.YT_wap_header} data-title="手机快捷登录">
        <a href="javascript:history.back();" className={loginStyle.go_back}></a>
    </div>
    <div className={loginStyle.wap_content} id="wapBox">
        <div>
            <div id={loginStyle.YT_riskWrap} class="YT-risk-wrap"></div>
            <div id={loginStyle.YT_loginWrap} className={loginStyle.YT_loginWrap}>
                <div class="YT-loginFrame-main" id={loginStyle.YT_loginFrame_main}><input type="hidden"
                                                                                          id={loginStyle.YT_countryRegion}
                                                                                          name="YT-countryRegion"
                                                                                          data-name="中国大陆"
                                                                                          data-code="86"
                                                                                          data-region="CN"
                                                                                          value="CN">
                    <div class="YT-loginFrame-body YT-login-body">
                        <form class="YT-form login-form" name="YT-normalLogin" id={loginStyle.YT_normalLogin}
                              method="post"
                              onsubmit="return false" autocomplete="off" style="display:none">
                            <ul class="YT-default-list" id={loginStyle.YT_normalLoginList}>
                                <li class="YT-account-wrap"><input type="password"
                                                                   name="fakePassword"><label
                                        for="YT-ytaccount"><input type="text" id={loginStyle.YT_ytaccount}

                                                                  maxlength="50"
                                                                  class="YT-form-input account-input" autocomplete="off"
                                                                  placeholder="手机/邮箱/优酷土豆账号"></label><span
                                        class="YT-label-clean" id={loginStyle.YT_cleanNormal}></span>
                                </li>
                                <li><label for="YT-ytpassword"><input type="password"
                                                                      id={loginStyle.YT_ytpassword}
                                                                      name="YT-ytpassword"
                                                                      maxlength="16"
                                                                      tabindex="2"
                                                                      class="YT-form-input"
                                                                      autocomplete="off"
                                                                      placeholder="登录密码"></label><a
                                        href="http://id.youku.com/resetPwdView.htm" className={loginStyle.forget_pwd}
                                        id={loginStyle.YT_forgetPwd}>忘记密码</a></li>
                            </ul>
                            <button type="submit" id={loginStyle.YT_nloginSubmit} class="YT-form-btn"
                                    title="登 录">登 录
                            </button>
                            <div class="YT-login-other"><a href="#" class="YT-other-link"
                                                           id={loginStyle.YT_showMobileLogin}>手机快捷登录</a></div>
                        </form>
                        <form class="YT-form login-form" name="YT-mobileLogin" id={loginStyle.YT_mobileLogin}
                              method="post"
                              onsubmit="return false" autocomplete="off">
                            <ul class="YT-default-list inside" id={loginStyle.YT_mobileLoginList}>
                                <li class="YT-country-chouse"><label id={loginStyle.YT_openListBtn}
                                                                     class="YT-mobile-chouse">
                                    <div class="YT-country-chouse-box"><span id={loginStyle.YT_countryCode}
                                                                             className={loginStyle.YT_countryCode}>+86</span><span
                                            id={loginStyle.YT_countryName}
                                            className={loginStyle.YT_countryName}>中国大陆</span></div>
                                </label></li>
                                <li class="YT-account-wrap"><label for="YT-mAccount"><input type="tel"
                                                                                            id={loginStyle.YT_mAccount}

                                                                                            name="YT-mAccount"
                                                                                            maxlength="11"
                                                                                            class="YT-form-input"
                                                                                            autocomplete="off"
                                                                                            placeholder="手机号码"></label><span
                                        class="YT-label-clean" id={loginStyle.YT_cleanMobile}></span>
                                </li>
                                <li><label for="YT-mPassword"><input type="tel" id={loginStyle.YT_mPassword}
                                                                     name="YT-mPassword"
                                                                     tabindex="2" maxlength="6" class="YT-form-input"
                                                                     autocomplete="off" placeholder="动态密码"></label>
                                    <button id={loginStyle.YT_getMobileCode} data-name="mobileCode"
                                            class="YT-getcode-btn disabled">获取动态密码
                                    </button>
                                </li>
                            </ul>
                            <div class="YT-reg-agreement" id="quickRegAgreement" style="display:none"><input
                                    type="checkbox" id={loginStyle.YT_agreement} hidden=""
                                    className={loginStyle.YT_checkbox}><label
                                    for="YT-agreement" className={loginStyle.YT_label}>已阅读并同意<a
                                    href="http://mapp.youku.com/service/agreement" target="_blank">《用户协议》</a><a
                                    href="http://mapp.youku.com/service/flsm2" target="_blank">《隐私政策》</a></label></div>
                            <button type="submit" id={loginStyle.YT_mloginSubmit} class="YT-form-btn"
                                    title="登 录">登 录
                            </button>
                            <div class="YT-login-other">
                                <div className={loginStyle.YT_voiceAndSmsCont}></div>
                                <a href="#" class="YT-other-link" id={loginStyle.YT_showNormalLogin}>账号登录</a></div>
                        </form>
                    </div>
                    <div class="YT-loginFrame-foot" id={loginStyle.YT_thirdParyBody}>
                        <div class="YT-third-list"><span data-name="qq"
                                                         data-link="https://account.youku.com/thirdparty/authLogin.htm?buid=youku&amp;pid=20160317PLF000211&amp;callback=https%3A%2F%2Fyouku.com%2F&amp;tlsite=qq"
                                                         class="YT-third-item for-qq"><a href="javascript:;"><i
                                class="YT-l-icon icon-qq"></i></a></span><span data-name="weibo"
                                                                               data-link="https://account.youku.com/thirdparty/authLogin.htm?buid=youku&amp;pid=20160317PLF000211&amp;callback=https%3A%2F%2Fyouku.com%2F&amp;tlsite=weibo"
                                                                               class="YT-third-item for-weibo"><a
                                href="javascript:;"><i class="YT-l-icon icon-weibo"></i></a></span><span
                                data-name="alipay"
                                data-link="https://account.youku.com/thirdparty/authLogin.htm?buid=youku&amp;pid=20160317PLF000211&amp;callback=https%3A%2F%2Fyouku.com%2F&amp;tlsite=alipay"
                                class="YT-third-item for-alipay"><a href="javascript:;"><i
                                class="YT-l-icon icon-alipay"></i></a></span><span data-name="taobao"
                                                                                   data-link="https://account.youku.com/thirdparty/authLogin.htm?buid=youku&amp;pid=20160317PLF000211&amp;callback=https%3A%2F%2Fyouku.com%2F&amp;tlsite=taobao"
                                                                                   class="YT-third-item for-taobao"><a
                                href="javascript:;"><i class="YT-l-icon icon-taobao"></i></a></span></div>
                        <div className={loginStyle.YT_footer}><em>还没有账号？</em><a
                                href="https://account.youku.com/wap/register.htm">立即注册</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={loginStyle.wap_footer}></div>
</div>
        );
    }
}