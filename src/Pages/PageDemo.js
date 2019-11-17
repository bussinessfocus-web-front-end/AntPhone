/**
 * Created by Lee on 2019/11/17.
 */

import React from "react";

class PageDemo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    //组件挂载方法
    componentDidMount(){

    }

    //组件被删除时的方法
    componentWillUnmount(){
        
    }

    render(){
        return (
            <h1>我是示例页面,名字是{this.props.name},{this.state.date.toLocaleTimeString()}</h1>
        )
    }
}

export default PageDemo;