import { Flex } from "@chakra-ui/react"
import { LoginCard } from "../components/login/loginCard"
import { Navigate } from "react-router-dom"


export const LoginPage = () => {
    const token = localStorage.getItem("token")
    return token ? (<Navigate to="/" />)
    : (
        <Flex justifyContent="center" minH="100vh" bg="#f0f8ff">
           <LoginCard /> 
        </Flex>
    )
}