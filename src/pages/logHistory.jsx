import { Flex, Heading } from "@chakra-ui/react"
import Axios from "axios"
import { useEffect, useState } from "react"
import { LogTable } from "../components/employee/logTable"
import { Navigate } from "react-router-dom"


export const LogHistory = () => {
    const [data, setData] = useState()
    const token = localStorage.getItem("token")

    const logHistory = async () => {
        try {
            const response = await Axios.get("http://localhost:9000/api/attendance/loghistory", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setData(response.data.result)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        logHistory()
    }, [])
    return token ? (
        <Flex direction="column" ml={{base: "15px", md: "120px", lg: "220px"}} 
        p={{base: "10px", md: "20px"}} w={{base: "90vw", md: "83vw"}} mb={{ base: "60px", md: "0px"}}>
            <Heading fontSize="26px">My Attendances Log</Heading>
            <Flex alignItems="center" justifyContent="space-between" mt="30px">
                
            </Flex>
            <Flex direction="column">
                <LogTable data={data}/>
            </Flex>
        </Flex>
    ) : (<Navigate to="/login" />)
}