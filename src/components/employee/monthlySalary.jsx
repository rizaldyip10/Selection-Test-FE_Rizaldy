import { Card, Flex, Heading, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import formatIDR from "../../helpers/formatIDR"


export const MonthlySalary = ({ data }) => {
    return (
        <Flex direction="column">
            <TableContainer mt="20px">
                <Table>
                    <Thead>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Salary</Th>
                            <Th>Overtime</Th>
                            <Th>Deduction</Th>
                            <Th>Total Salary</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.result.map(item => (
                            <Tr key={item.id}>
                                <Td>
                                    {new Date(new Date(`${item.clockIn}`) - (7 * 3600 * 1000)).toLocaleDateString("en-EN", {
                                        year: "2-digit",
                                        month: "short",
                                        day: "2-digit"
                                        })
                                    }
                                </Td>
                                <Td>{formatIDR(item.User.Position.salary)}</Td>
                                <Td>{formatIDR(item.salaryOT)}</Td>
                                <Td color="red">{formatIDR(item.deduction)}</Td>
                                <Td>{formatIDR(item.User.Position.salary + item.salaryOT - item.deduction)}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Flex>
            </Flex>
        </Flex>
    )
}