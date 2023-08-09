import { Card, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import formatIDR from "../../helpers/formatIDR";
import { useEffect, useState } from "react";
import Axios from "axios";

export const YearlySalary = () => {
    const [data, setData] = useState([]);
    const token = localStorage.getItem("token");

    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getYearlySalary = async () => {
        try {
            const response = await Axios.get("http://localhost:9000/api/salary/yearly", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setData(response.data.monthlyRecap);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getYearlySalary();
    }, []);

    const currentMonthIndex = new Date().getMonth();

    return (
        <Flex direction="column">
            <TableContainer mt="20px">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Month</Th>
                            <Th>Total Deduction</Th>
                            <Th>Total Overtime</Th>
                            <Th>Total Salary</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.slice(0, currentMonthIndex + 1).map((item, index) => (
                            <Tr key={index}>
                                <Td>{month[index]}</Td>
                                <Td>{formatIDR(item.totalDeduction)}</Td>
                                <Td>{formatIDR(item.totalSalaryOT)}</Td>
                                <Td>{formatIDR(item.totalSalary)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </Flex>
    );
};
