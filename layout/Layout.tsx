import {LayoutProps} from "./Layout.props"
import styles from "./Layout.module.css"
import cn from "classnames"
import Header from "./Header/Header"
import Sidebar from "./SideBar/Sidebar"
import Footer from "./Footer/Footer"
import React from "react"

export const Layout = ({children}:LayoutProps) => {
    return (
        <>
        <Header></Header>
        <div>
            <Sidebar></Sidebar>
            <div>{children}</div>
        </div>
        <Footer/>

        </>
    )
}
//testgi
export const withLayout =<T extends Record<string,unknown >> (Component: React.FC<T>)=> {
    return function withLayoutComponent(props:T) {
        return (
            <Layout>
                <Component {...props}/>
            </Layout>    
        )
    }
}