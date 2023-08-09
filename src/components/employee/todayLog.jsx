import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Axios from "axios"
import { useEffect, useState } from "react"


export const TodayLog = () => {
    const [log, setLog] = useState()
    const token = localStorage.getItem("token")
    console.log(log);

    const getLog = async () => {
        try {
            const response = await Axios.get("http://localhost:9000/api/attendance/todaylog", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setLog(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    const clockInLog = new Date(log?.clockIn)
    const clockInTime = new Date(clockInLog.getTime() - (7 * 3600 * 1000))

    const clockOutLog = new Date(log?.clockOut)
    const clockOutTime = new Date(clockOutLog.getTime() - (7 * 3600 * 1000))

    const clockInOTLog = new Date(log?.clockInOT)
    const clockInOTTime = new Date(clockInOTLog.getTime() - (7 * 3600 * 1000))

    const clockOutOTLog = new Date(log?.clockOutOT)
    const clockOutOTTime = new Date(clockOutOTLog.getTime() - (7 * 3600 * 1000))

    useEffect(() => {
        getLog()
    },[])
    return (
        <Flex direction="column" mt="20px"
        alignItems="center">
            <Flex direction="column" p="20px" border="1px solid #011930"
            w={{ base: "280px", md: "350px", lg: "400px"}}>
                <Heading fontSize={{ base: "20px", md: "22px"}}>
                    Today's Attendance Log
                </Heading>
                    {log?.clockIn ? 
                    <Flex alignItems="center" justifyContent="space-between">
                        <Box mt="10px">
                            <Text fontWeight="bold" fontSize="16px">{new Date(`${clockInTime}`).toLocaleTimeString('en-US', {
                                timeZone: 'Asia/Jakarta',
                                hour: "2-digit",
                                minute: "2-digit"
                                })}</Text>
                            <Text fontSize="14px">{new Date(`${clockInTime}`).toLocaleDateString('en-US', {
                                day: "2-digit",
                                month: "short"
                                })}</Text>
                        </Box>
                        <Text color="green" fontWeight="bold">Clock In</Text>
                    </Flex> : 
                    <Box mt="10px" fontWeight="bold">You haven't clocked in</Box>}

                
                {log?.clockOut ? <Flex alignItems="center" justifyContent="space-between">
                    <Box mt="10px">
                        <Text fontWeight="bold" fontSize="16px">{new Date(`${clockOutTime}`).toLocaleTimeString('en-US', {
                                hour: "2-digit",
                                minute: "2-digit"
                                })}</Text>
                        <Text fontSize="14px">{new Date(`${clockOutTime}`).toLocaleDateString('en-US', {
                                day: "2-digit",
                                month: "short"
                                })}</Text>
                    </Box>
                    <Text color="red" fontWeight="bold">Clock Out</Text>
                </Flex> : 
                <Box mt="10px" fontWeight="bold">You haven't clocked out</Box>
                }
                {log?.clockInOT ? 
                    <Flex alignItems="center" justifyContent="space-between">
                        <Box mt="10px">
                            <Text fontWeight="bold" fontSize="16px">{new Date(`${clockInOTTime}`).toLocaleTimeString('en-US', {
                                timeZone: 'Asia/Jakarta',
                                hour: "2-digit",
                                minute: "2-digit"
                                })}</Text>
                            <Text fontSize="14px">{new Date(`${clockInOTTime}`).toLocaleDateString('en-US', {
                                day: "2-digit",
                                month: "short"
                                })}</Text>
                        </Box>
                        <Text color="green" fontWeight="bold">Clock In OT</Text>
                    </Flex> : 
                    <Box mt="10px" fontWeight="bold">You are not taking OT</Box>}
                    {log?.clockOutOT ? <Flex alignItems="center" justifyContent="space-between">
                    <Box mt="10px">
                        <Text fontWeight="bold" fontSize="16px">{new Date(`${clockOutOTTime}`).toLocaleTimeString('en-US', {
                                hour: "2-digit",
                                minute: "2-digit"
                                })}</Text>
                        <Text fontSize="14px">{new Date(`${clockOutOTTime}`).toLocaleDateString('en-US', {
                                day: "2-digit",
                                month: "short"
                                })}</Text>
                    </Box>
                    <Text color="red" fontWeight="bold">Clock Out OT</Text>
                </Flex> : 
                <Box mt="10px" fontWeight="bold">You are not taking OT</Box>
                }
            </Flex>
        </Flex>
    )
}