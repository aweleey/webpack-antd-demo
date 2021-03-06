/*
 * @Author: aweleey.li@qunar.com 
 * @Date: 2018-09-04 15:32:51 
 * @Last Modified by: aweleey.li@qunar.com
 * @Last Modified time: 2018-09-04 16:37:56
 */

import React, { Component } from "react";
import getRouter from "./router";
import { IntlProvider, addLocaleData } from "react-intl";
import { uiStore } from "./store";
import { observer } from "mobx-react";
import zh from 'react-intl/locale-data/zh'
import en from 'react-intl/locale-data/en'
addLocaleData([...en, ...zh])

@observer
export default class App extends Component {
    getLocale() {
        let result = {};
        switch (uiStore.language) {
            case "zh":
                result = require("./I18N/zh_CN");
                break;
            case "en":
                result = require("./I18N/en_US");
                break;
            default:
                result = require("./I18N/zh_CN");
        }
        return result.default || result;
    }

    render() {
        console.log('uiStore.language:', uiStore.language)
        const messages = this.getLocale()

        return (
            <IntlProvider locale={uiStore.language} messages={messages}>
                {getRouter()}
            </IntlProvider>
        );
    }
}
