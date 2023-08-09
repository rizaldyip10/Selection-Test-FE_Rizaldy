import { Flex, Heading } from "@chakra-ui/react"
import { EmployeeTable } from "../components/admin/employeeTable"
import { AddUser } from "../components/admin/addUser"


export const EmployeePage = () => {
    return (
        <Flex direction="column" ml={{base: "15px", md: "120px", lg: "220px"}}
        px={{base: "5px", md: "15px"}} py={{base: "10px", md: "20px"}} w={{base: "90vw", md: "83vw"}} mb={{ base: "60px", md: "0px"}}>
            <Heading fontSize="26px">Employee</Heading>
            <Flex alignItems="center" justifyContent="space-between" mt="30px">
                <Flex ml="2px" alignItems="center">
                    <Heading fontSize={{ base: '18px', lg: '22px'}}>All Employee</Heading>
                </Flex>
                <Flex>
                    <AddUser />
                </Flex>
            </Flex>
            <Flex bgColor="red.100" direction="column" mt="20px">
                <EmployeeTable />
            </Flex>
        </Flex>
    )
}