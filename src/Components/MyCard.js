import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const MyCard = () => {
  return (
    <Card w={"220px"} boxShadow="dark-lg" borderRadius="xl">
      <CardBody>
        <Image
          src="https://source.unsplash.com/220x150/?hotel"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
          boxShadow={"dark-lg"}
        />
        <Heading mt="4" size="md" textOverflow={"ellipsis"} w="200px">
          Sunrise Hotel
        </Heading>
        <Heading fontWeight={"light"} size="sm">
          Kolkatta, West Bengal
        </Heading>
        <Text fontWeight={"hairline"} mt="1">
          A Sample Text
        </Text>
        <Flex gap="20px" mt="4">
          <Text color="blue.500" fontSize="2xl">
            $450
          </Text>
          <Button
            bg="blue.500"
            color="white"
            _hover={{ color: "blue.500", bg: "gray.200" }}
          >
            Book Now
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default MyCard;
