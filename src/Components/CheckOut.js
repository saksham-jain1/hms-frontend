import { Box, Button, Flex, Heading, Input, Select, Text } from '@chakra-ui/react'
import React from 'react'

const CheckOut = () => {
  return (
    <Box>
      <Heading textAlign={"center"} mt="5">
        Check Out
      </Heading>
      <Box p='12' pb='9' width={{ base: "90%", md: "45%" }}>
        <Text mb='3' fontWeight={"bold"}>Booking Number:</Text>
        <Input type="text" placeholder="Enter Booking Number" />
      </Box>
      <Button mx='12' colorScheme={'blue'} >Checked Out</Button>
      <Box>
      <Heading size='lg' m="5">
        Booking Details
      </Heading>
      <Flex
          mt="10"
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
          <Box mb='6' width={{ base: "90%", md: "45%" }}>
            <Text fontWeight={"bold"}>Select State:</Text>
            <Select value="option1" disabled>
              <option value="option1">Option 1</option>
            </Select>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default CheckOut