import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Management = () => {
  return (
    <Box p="5" textAlign={"justify"}>
      <Heading textAlign={"center"} mb="7">
        Board of Directors
      </Heading>
      <Flex justifyContent={"space-evenly"} gap='30px' flexWrap="wrap">
        <Card maxW="sm" border={"2px"} borderRadius="3xl" boxShadow={"dark-lg"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="John Smith"
                  src=""
                  color='white'
                  size={"2xl"}
                  boxShadow='dark-lg'
                  border={'2px'}
                />

                <Box>
                  <Heading size="sm">John Smith</Heading>
                  <Text>Chairman of the Board</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text fontStyle={'italic'}>
            "Our goal is to
      create a hotel experience that exceeds expectations and provides
      exceptional value to our guests." ~ John Smith
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"3xl"}
          />
        </Card>
        <Card maxW="sm" border={"2px"} borderRadius="3xl" boxShadow={"dark-lg"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Sarah Lee"
                  src=""
                  color='white'
                  size={"2xl"}
                  boxShadow='dark-lg'
                  border={'2px'}
                />

                <Box>
                  <Heading size="sm">Sarah Lee</Heading>
                  <Text>CEO</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text fontStyle={'italic'}>
            "We
      believe that every guest should feel like a VIP, and we strive to provide
      personalized service that makes each stay memorable." ~ Sarah Lee
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"3xl"}
          />
        </Card>
        <Card maxW="sm" border={"2px"} borderRadius="3xl" boxShadow={"dark-lg"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Michael Chen"
                  src=""
                  color='white'
                  size={"2xl"}
                  boxShadow='dark-lg'
                  border={'2px'}
                />

                <Box>
                  <Heading size="sm">Michael Chen</Heading>
                  <Text>CFO</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text fontStyle={'italic'}>
            "At
      the heart of our business is a commitment to financial discipline and
      responsible growth. We want to ensure that our hotels are sustainable for
      the long term." ~ Michael Chen
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"3xl"}
          />
        </Card>
        <Card maxW="sm" border={"2px"} borderRadius="3xl" boxShadow={"dark-lg"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Laura Rodriguez"
                  src=""
                  color='white'
                  size={"2xl"}
                  boxShadow='dark-lg'
                  border={'2px'}
                />

                <Box>
                  <Heading size="sm">Laura Rodriguez</Heading>
                  <Text>COO</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text fontStyle={'italic'}>
            "We are passionate about hospitality
      and committed to creating a culture that empowers our team members to
      provide the best service possible." ~ Laura Rodriguez
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"3xl"}
          />
        </Card>
        <Card maxW="sm" border={"2px"} borderRadius="3xl" boxShadow={"dark-lg"}>
          <CardHeader>
            <Flex spacing="4">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                  name="Robert Johnson"
                  src=""
                  color='white'
                  size={"2xl"}
                  boxShadow='dark-lg'
                  border={'2px'}
                />

                <Box>
                  <Heading size="sm">Robert Johnson</Heading>
                  <Text>Independent Director</Text>
                </Box>
              </Flex>
            </Flex>
          </CardHeader>
          <CardBody>
            <Text fontStyle={'italic'}>
            "Our focus on
      branding and marketing allows us to effectively differentiate ourselves in
      a crowded market and create a strong brand identity that resonates with
      guests." ~ Robert Johnson,
            </Text>
          </CardBody>
          <Image
            objectFit="cover"
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Chakra UI"
            borderRadius={"3xl"}
          />
        </Card>
      </Flex>
    </Box>
  );
};

export default Management;
