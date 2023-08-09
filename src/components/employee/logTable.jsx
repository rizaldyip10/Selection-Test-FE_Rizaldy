import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

export const LogTable = ({ data }) => {
    return (
        <>
            <TableContainer>
                <Table w="1000px" size={{ base: "sm", md: "md", lg: "lg" }}>
                    <Thead>
                        <Tr>
                            <Th>Date</Th>
                            <Th>Clock In</Th>
                            <Th>Clock Out</Th>
                            <Th>Overtime</Th>
                            <Th>Notes</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data?.map(item => {
                            const clockIn = new Date(new Date(item.clockIn) - (7 * 3600 * 1000))
                            const clockOut = new Date(new Date(item.clockOut) - (7 * 3600 * 1000))
                            const clockInOT = new Date(new Date(item.clockInOT) - (7 * 3600 * 1000))
                            const clockOutOT = new Date(new Date(item.clockOutOT) - (7 * 3600 * 1000))

                            const overtimeHours = Math.floor((clockOutOT - clockInOT) / (60 * 60 * 1000))

                            return (
                                <Tr key={item.id}>
                                    <Td>
                                        {clockIn.toLocaleDateString("en-EN", {
                                            year: "2-digit",
                                            month: "short",
                                            day: "2-digit"
                                        })}
                                    </Td>
                                    <Td>{item.clockIn ? clockIn.toLocaleTimeString("en-EN", { hour: "2-digit", minute: "2-digit" }) : "-"}</Td>
                                    <Td>{item.clockOut ? clockOut.toLocaleTimeString("en-EN", { hour: "2-digit", minute: "2-digit" }) : "-"}</Td>
                                    <Td>{item.clockInOT && item.clockOutOT ? `${overtimeHours} h` : "-"}</Td>
                                    <Td>{item.note ? item.note : "-"}</Td>
                                </Tr>
                            );
                        })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
};
