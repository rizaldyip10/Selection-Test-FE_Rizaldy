import { Flex, Heading, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { MonthlySalary } from "../components/employee/monthlySalary"
import { useEffect, useState } from "react"
import Axios from "axios"
import { YearlySalary } from "../components/employee/yearlySalary"
import { Navigate } from "react-router-dom"


export const SalaryPage = () => {
    const [salary, setSalary] = useState()
    const token = localStorage.getItem("token")

    const getSalary = async () => {
        try {
            const response = await Axios.get("http://localhost:9000/api/salary", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setSalary(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getSalary()
    },[])
    return token ? (
        <Flex direction="column" ml={{base: "15px", md: "120px", lg: "220px"}}
        p={{base: "10px", md: "20px"}} w={{base: "90vw", md: "83vw"}} mb={{ base: "60px", md: "0px"}}>
            <Heading fontSize="26px">My Salary Recap</Heading>
            <Tabs mt="30px">
                <TabList>
                    <Tab>Monthly Salary</Tab>
                    <Tab>Yearly Salary</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <MonthlySalary data={salary} />
                    </TabPanel>
                    <TabPanel>
                        <YearlySalary />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    ) : (<Navigate to="/login" />)
}