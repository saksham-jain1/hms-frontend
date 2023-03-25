import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Hotel from "./Hotel";
import MyCard from "./MyCard";

const Home = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);
  const [result, setResult] = useState([]);
  return (
    <Box p="5">
      <Heading textAlign={"center"} mx="9" mb="5">
        Welcome to Namaste Stays
      </Heading>
      <Box my="12">
        <Heading w="100%" mb="5">
          Search Hotels
        </Heading>
        <InputGroup
          width={{ base: "90%", md: "45%" }}
          mx={{ base: "5%", md: "auto" }}
          boxShadow="md"
          borderRadius={"lg"}
        >
          <Input type="search" placeholder="Search Hotels by Name" />
          <InputRightElement width="4.5rem">
            <Button bg="blue.400">Search</Button>
          </InputRightElement>
        </InputGroup>
        <Button
          mt="2"
          size={"sm"}
          float="right"
          color={"#ba3b0a"}
          onClick={() => setAdvancedSearch(!advancedSearch)}
        >
          {advancedSearch ? "Close" : "Open"} Advance Search
        </Button>
        {advancedSearch && (
          <Flex
            mt="12"
            gap={"10px"}
            wrap={"wrap"}
            justifyContent={"space-evenly"}
          >
            <Box width={{ base: "90%", md: "45%" }}>
              <Text fontWeight={"bold"}>Select State:</Text>
              <Select placeholder="Select State">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>

            <Box width={{ base: "90%", md: "45%" }}>
              <Text fontWeight={"bold"}>Select City:</Text>
              <Select placeholder="Select City">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box width={{ base: "90%", md: "45%" }}>
              <Text fontWeight={"bold"}>Check-In Date</Text>
              <Input type="date"></Input>
            </Box>
            <Box width={{ base: "90%", md: "45%" }}>
              <Text fontWeight={"bold"}>Check-Out Date</Text>
              <Input type="date"></Input>
            </Box>
            <Flex mt="5" w="100%" justifyContent={"center"}>
              <Button bg="blue.400">Search</Button>
            </Flex>
          </Flex>
        )}
      </Box>
      {result.length !== 0 && (
        <Box>
          <Heading textAlign={'center'} size="md">
            {result.length} Result
          </Heading>
          <Box py='5' px='3' m='auto' width={{md:'70%'}}>
          <Hotel />
          </Box>
        </Box>
      )}
      <Heading size="md" w="100%">
        Most Visited
      </Heading>
      <Flex
        direction={"column"}
        wrap={"wrap"}
        h="350px"
        overflowX={"auto"}
        gap="20px"
        justifyContent={"center"}
        p="3"
      >
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </Flex>
      <Heading textAlign={"center"} size="xl" my="7" w="100%">
        Our Galery
      </Heading>
      <Flex
        direction={"column"}
        h="70vh"
        wrap="wrap"
        overflowX={"scroll"}
        overflowY={"hidden"}
        w={"100%"}
        gap={4}
      >
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x300/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x300/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/600x300/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'2xl'}
          src={"https://source.unsplash.com/300x300/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
        <Image
        borderRadius={'xl'}
          src={"https://source.unsplash.com/300x150/?hotel"}
          w={{ base: "60%", md: "35%", xl: "23%" }}
        />
      </Flex>
    </Box>
  );
};

export default Home;
