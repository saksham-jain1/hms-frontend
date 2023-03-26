import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const Login = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Heading fontSize={"4xl"} fontFamily="Work sans" textAlign={"center"}>
          Namaste Stays
        </Heading>
      </Box>
      <Box p={4} w="100%" borderRadius="lg" borderWidth="1px">
        <Tabs colorScheme={'red'} variant="soft-rounded">
          <TabList mb={"1em"}>
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <VStack spacing={"5px"}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input id="email1" placeholder="Enter Your Email" />
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="password1"
                      type={"password"}
                      placeholder="Enter Your Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm"></Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Button
                  colorScheme="blue"
                  width="100%"
                  style={{ marginTop: 15 }}
                >
                  Login
                </Button>
                <Button variant="solid" colorScheme="red" width="100%">
                  Guest User Credentials
                </Button>
              </VStack>
            </TabPanel>
            <TabPanel>
              <VStack spacing={"5px"}>
                <FormControl>
                  <FormLabel>Name</FormLabel>
                  <Input id="name" placeholder="Enter Your Name" />
                  <FormLabel>Email</FormLabel>
                  <Input id="email" placeholder="Enter Your Email" />
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="password"
                      type={"password"}
                      placeholder="Enter Your Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm"></Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormLabel>Confirm Password</FormLabel>
                  <InputGroup>
                    <Input
                      id="confirmPassword"
                      type={"password"}
                      placeholder="Enter Your Password"
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm"></Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>

                <Button
                  colorScheme="blue"
                  width="100%"
                  style={{ marginTop: 15 }}
                >
                  Sign Up
                </Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Login;
