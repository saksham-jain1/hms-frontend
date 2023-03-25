import { Box, Button, Flex, Heading, Input, Select, Text } from "@chakra-ui/react";
import React from "react";

const Cancellation = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mt="5">
        Cancel Booking
      </Heading>
      <Box p="12" pb='0' width={{ base: "90%", md: "45%" }}>
        <Text mb="3" fontWeight={"bold"}>
          Booking Number:
        </Text>
        <Input type="text" placeholder="Enter Booking Number" />
        <Button my="7" colorScheme={"blue"}>
          Get Details
        </Button>
      </Box>
      <Box>
      <Heading size='lg' m="5">
        Booking Details
      </Heading>
      <Flex
          mt="12"
          gap={"10px"}
          wrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          <Box width="300px">
            <Text fontWeight={"bold"}>Name:</Text>
            <Input type="text" value="Name" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Surname:</Text>
            <Input type="text" value="Surname" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Address:</Text>
            <Input type="text" value="Address" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Phone No.:</Text>
            <Input type="tel" value="9889988940" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Email:</Text>
            <Input type="email" value="abc@gmail.com" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Number of Rooms:</Text>
            <Input type="number" value="2" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Aadhar No.:</Text>
            <Input type="text" value="123456789012" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Check-In Date:</Text>
            <Input type="date" value="2022-02-22" disabled />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Check-Out Date:</Text>
            <Input type="date" value="2022-02-22" disabled />
          </Box>
          <Box width={{ base: "90%", md: "45%" }}>
            <Text fontWeight={"bold"}>Select State:</Text>
            <Select value="option1" disabled>
              <option value="option1">Option 1</option>
            </Select>
          </Box>
          <Box width={{ base: "90%", md: "45%" }}>
            <Text color={'green.400'} fontWeight={"bold"}>Deposite amount:&emsp;&emsp;&emsp;&emsp;$450</Text>
            <Text mb='2' color={'red.500'} fontWeight={"bold"}>Cancellation charges: &emsp;&emsp;$150</Text>
            <hr />
            <hr />
            <hr />
            <Text mt='2' color={'blue.500'} fontWeight={"bold"}>Refund Amount:&emsp;&emsp;&emsp;&nbsp;&emsp; $300</Text>
          </Box>
          <Flex
            mt="5"
            w="100%"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Button mb='5' bg="red.600" w="300px">
              Cancel Booking
            </Button>
          </Flex>
        </Flex>
        <Text>**Refund will be processed in your account within 24 hours</Text>
      </Box>
    </Box>
  );
};

export default Cancellation;
