import { Flex } from "@chakra-ui/react"
import { RegisCard } from "../components/register/registerCard"


export const RegisterPage = () => {
    return (
        <Flex justifyContent="center" minH="100vh" bg="#f0f8ff">
           <RegisCard />
        </Flex>
    )
}