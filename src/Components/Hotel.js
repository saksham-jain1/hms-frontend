import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import React from "react";

const Hotel = () => {
  return (
    <Flex h='120px' borderRadius={"2xl"} shadow="dark-lg" my="7">
        <Image
          p="2"
          src="https://source.unsplash.com/300x300/?hotel"
          borderRadius={"2xl"}
        />
      <Flex flex="1" h='100%' wrap='wrap' dir={{base:'row',md:"column"}}>
        <Box flex={{md:"1" }} px="5" w={{base:"100%"}} pt="3">
          <Heading size="md">SunShine Hotels</Heading>
          <Text fontSize={"sm"}>Hyderabad, Chennai</Text>
          <Flex fontSize={"sm"} gap="0.5">
            <BsStarFill color="#F6E05E" />
            <BsStarFill color="#F6E05E" />
            <BsStarFill color="#F6E05E" />
            <BsStarHalf color="#F6E05E" />
          </Flex>
        </Box>
      <Flex px="3" justifyContent={'space-evenly'} w={{base:"100%",md:'max-content'}} direction={{md:"column"}}>
        <Text w={{base:'40%',md:'100%'}} textAlign={"center"} color="blue.500" fontSize="2xl">
          $450
        </Text>
        <Button
          bg="blue.500"
          color="white"
          _hover={{ color: "blue.500", bg: "gray.200" }}
          w={{base:'60%',md:'100%'}}
        >
          Book Now
        </Button>
      </Flex>
      </Flex>
    </Flex>
  );
};

export default Hotel;
