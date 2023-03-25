import { Box, Button, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react";
import React from "react";

const Career = () => {
  return (
    <Box textAlign={"justify"} px="5" pb="5">
      <Heading my="5" mx='5' textAlign={"center"}>
        Welcome to the Careers Page!
      </Heading>
      <Text fontWeight={'bold'} mb="4">
        We are always looking for talented and passionate individuals to join
        our team. At our hotel chain, we are committed to providing exceptional
        service to our guests, and that starts with having a dedicated and
        talented workforce. We offer a range of career opportunities across our
        properties, from front desk agents to executive management positions.
      </Text>

      <Heading mb="2">Why Work With Us?</Heading>
      <Text mb="5">
        {" "}
        We are committed to providing a positive and inclusive workplace culture
        where everyone is valued and respected. Our team members enjoy a range
        of benefits, including health insurance, retirement plans, and
        opportunities for career development and growth. We believe in investing
        in our team members through ongoing training and development programs.
        Our hotels are located in some of the most exciting destinations around
        the world, providing opportunities for travel and new experiences.
      </Text>

      <Heading mb="2">Current Job Openings</Heading>
      <OrderedList fs="xl" spacing="3">
        <ListItem>
          <Heading>Front Desk Agent</Heading>
          <Text fontSize="md">
            One responsible for greeting guests, checking them in and out, and
            providing exceptional customer service.
          </Text>
          <Button mt='2' bg={'blue.400'}>Apply Now</Button>
        </ListItem>
        <ListItem>
          <Heading>Housekeeper</Heading>
          <Text fontSize="md">
            One responsible for cleaning guest rooms and common areas to our
            high standards of cleanliness.
            </Text>
          <Button mt='2' bg={'blue.400'}>Apply Now</Button>
        </ListItem>
        <ListItem>
          <Heading>Chef</Heading>
          <Text fontSize="md">
            One responsible for overseeing our culinary operations and creating
            delicious and memorable dining experiences for our guests.
            </Text>
          <Button mt='2' bg={'blue.400'}>Apply Now</Button>
        </ListItem>
        <ListItem>
          <Heading>Marketing Manager</Heading>
          <Text fontSize="md">
            One responsible for developing and executing marketing campaigns to
            promote our hotels and drive revenue.
            </Text>
          <Button mt='2' bg={'blue.400'}>Apply Now</Button>
        </ListItem>
      </OrderedList>
    </Box>
  );
};

export default Career;
