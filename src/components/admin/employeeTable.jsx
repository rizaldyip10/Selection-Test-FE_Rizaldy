import { Avatar, Badge, Box, Button, Flex, Input, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import Axios from "axios"
import { useEffect, useState } from "react"
import { BiTrash } from "react-icons/bi"
import formatIDR from "../../helpers/formatIDR"

export const EmployeeTable = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const token = localStorage.getItem("token");
  
    const getData = async (page, search) => {
      try {
        const response = await Axios.get(
          `http://localhost:9000/api/user/?page=${page}&limit=10&search=${search}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setData(response.data.result);
        setTotalPages(response.data.totalPage);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getData(currentPage, searchQuery);
    }, [currentPage, searchQuery]);
  
    const handleSearchChange = (e) => {
      setSearchQuery(e.target.value);
      setCurrentPage(1);
    };
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  
    return (
      <>
        <Box mb="20px">
          <Input
            placeholder="Search employee..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </Box>
        <TableContainer>
          <Table size={{ base: "sm", lg: "md" }}>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Status</Th>
                <Th>Join Date</Th>
                <Th>Position</Th>
                <Th>Salary</Th>
                <Th>Phone</Th>
                <Th>Birthday</Th>
                <Th>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.map((item) => {
                return (
                  <Tr key={item.id}>
                    <Td>
                      <Flex alignItems="center">
                        <Avatar size="sm" />
                        <Box ml="10px">
                          <Flex>
                            <Text fontWeight="bold" fontSize="14px">{`${item?.firstName} ${item?.lastName}`}</Text>
                            {item.gender === "Male" ? (
                              <Badge colorScheme="green" borderRadius="5px" ml="10px">
                                Male
                              </Badge>
                            ) : (
                              <Badge colorScheme="red" borderRadius="5px" ml="10px">
                                Female
                              </Badge>
                            )}
                          </Flex>
                          <Text fontSize="14px">{item?.email}</Text>
                        </Box>
                      </Flex>
                    </Td>
                    <Td>
                      {item.isSuspended ? (
                        <Text color="red" fontWeight="bold">
                          Suspended
                        </Text>
                      ) : (
                        <Text color="green" fontWeight="bold">
                          Active
                        </Text>
                      )}
                    </Td>
                    <Td>
                      {new Date(`${item.createdAt}`).toLocaleDateString("en-ID", {
                        year: "2-digit",
                        month: "short",
                        day: "2-digit",
                      })}
                    </Td>
                    <Td>{item.Position.position}</Td>
                    <Td>{formatIDR(item.Position.salary * 20)}</Td>
                    <Td>{item.phone}</Td>
                    <Td>
                      {new Date(`${item.birthdate}`).toLocaleDateString("en-ID", {
                        year: "2-digit",
                        month: "short",
                        day: "2-digit",
                      })}
                    </Td>
                    <Td>
                      <Button>
                        <BiTrash />
                      </Button>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justify="center" mt="20px">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              variant={currentPage === index + 1 ? "solid" : "outline"}
              colorScheme="teal"
              size="sm"
              mx="1"
            >
              {index + 1}
            </Button>
          ))}
        </Flex>
      </>
    );
  };