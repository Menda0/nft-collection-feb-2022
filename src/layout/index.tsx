import { Component1, Component2 } from "../components"
import { Content } from "./Content"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = () => {
    return (
        <>
            <Header />
            <Content />
            <Footer />
        </>
    )
}