import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const MyBookings = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mt="5">
        My Bookings
      </Heading>
      <Heading m="5" fontSize={"md"}>
        Previous Bookings
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Booking Id</Th>
              <Th>Hotel Name</Th>
              <Th>Rooms</Th>
              <Th>Duration(in Days)</Th>
              <Th>Bill Amt.</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Xyz</Td>
              <Td>123</Td>
              <Td>Abc</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>$450</Td>
            </Tr>
            <Tr>
              <Td>Xyz</Td>
              <Td>123</Td>
              <Td>Abc</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>$450</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Heading m="5" fontSize={"md"}>
        Future Bookings
      </Heading>
      <TableContainer>
        <Table variant="striped" colorScheme="red">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Booking Id</Th>
              <Th>Hotel Name</Th>
              <Th>Rooms</Th>
              <Th>Duration(in Days)</Th>
              <Th>Bill Amt.</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Xyz</Td>
              <Td>123</Td>
              <Td>Abc</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>$450</Td>
            </Tr>
            <Tr>
              <Td>Xyz</Td>
              <Td>123</Td>
              <Td>Abc</Td>
              <Td>1</Td>
              <Td>1</Td>
              <Td>$450</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MyBookings;
