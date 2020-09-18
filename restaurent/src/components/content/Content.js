import React, { Component } from 'react';
import Blog from './Blog';
import About from './About'
import Chef from './Chef'
import Comment from './Comment'
import Contact from './Contact'
import Galery from './Galery'
import Menu from './Menu'

class Content extends Component {
    render() {
        return <>
            <About />
            <Menu />
            <Galery />
            <Comment />
            <Chef />
            <Blog />
            <Contact />
        </>
    }
}

export default Content;