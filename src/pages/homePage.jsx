import { Flex } from "@chakra-ui/react"
import { Sidebar } from "../components/navbar/sidebar"
import { MobileNav } from "../components/navbar/mobileNav"
import { Outlet } from "react-router-dom"



export const HomePage = () => {
    return (
        <Flex bg="#f0f8ff" minH="100vh">
            <Sidebar />
            <MobileNav />
            <Outlet />
        </Flex>
    )
}