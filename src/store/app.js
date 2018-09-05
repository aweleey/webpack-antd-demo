/*
 * @Author: aweleey.li@qunar.com 
 * @Date: 2018-09-02 23:27:25 
 * @Last Modified by: aweleey.li@qunar.com
 * @Last Modified time: 2018-09-05 10:52:15
 */

import {observable, action} from 'mobx'

export default class App {
    @observable count = 0
    @observable hasLogin = false

    @action
    updateCount(num){
        this.count = this.count + num
    }

    @action updateHasLogin(bool){
        this.hasLogin = bool
    }
}