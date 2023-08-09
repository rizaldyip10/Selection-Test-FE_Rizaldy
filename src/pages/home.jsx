import { Flex, Heading } from "@chakra-ui/react"
import { LogCard } from "../components/employee/logCard"
import { TodayLog } from "../components/employee/todayLog"


export const HomeContent = () => {
    return (
        <Flex direction="column" ml={{base: "15px", md: "120px", lg: "220px"}} 
        p={{base: "10px", md: "20px"}} w={{base: "90vw", md: "83vw"}} mb={{ base: "60px", md: "0px"}}>
            <Heading fontSize="26px">Home</Heading>
            <LogCard />
            <TodayLog />
        </Flex>
    )
}