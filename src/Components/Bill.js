import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

const Bill = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mt="7">
        Your Bill
      </Heading>
      <TableContainer>
        <Table size="sm">
          <Thead borderBottom={"3px solid black"}>
            <Tr>
              <Td>Booking Ref. No. :</Td>
              <Td>123xyz</Td>
              <Td>Date:</Td>
              <Td>12-7-23</Td>
            </Tr>
            <Tr>
              <Td>Customer Name :</Td>
              <Td colSpan={3}>Xyz</Td>
            </Tr>
            <Tr>
              <Td>Address :</Td>
              <Td colSpan={3}>Xyz,new street new york</Td>
            </Tr>
            <Tr>
              <Td>E-mail</Td>
              <Td colSpan={3}>xyz@gmail.com</Td>
            </Tr>
            <Tr>
              <Td>Mobile No. :</Td>
              <Td colSpan={3}>1234567890</Td>
            </Tr>
            <Tr>
              <Td>Check-in Date:</Td>
              <Td>1-7-23</Td>
              <Td>Check-in Date:</Td>
              <Td>12-7-23</Td>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Room Rent @ 100.00</Td>
              <Td colSpan={"2"}> $ 300.00</Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Food & Beverage</Td>
              <Td colSpan={"2"}>$100.00</Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Car Rental</Td>
              <Td colSpan={"2"}>$150.00</Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Laundary</Td>
              <Td colSpan={"2"}>$20.00</Td>
            </Tr>
            <Tr>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Sub Total</Td>
              <Td colSpan={"2"}>$570.00</Td>
            </Tr>
            <Tr>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Tax @14%</Td>
              <Td colSpan={"2"}>$80.00</Td>
            </Tr>
            <Tr>
              <Td></Td>
            </Tr>
            <Tr>
              <Td colSpan={"2"}>Total</Td>
              <Td colSpan={"2"}>$650.00</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
      <Flex
            mt="7"
            w="100%"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Button bg="yellow.500" w="150px">
              E-mail
            </Button>
            <Button bg="blue.400" w="150px">
              Print
            </Button>
          </Flex>
    </Box>
  );
};

export default Bill;
