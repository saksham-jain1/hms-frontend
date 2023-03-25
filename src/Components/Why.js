import { Box, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import accomodation from '../resources/accomodation.jpg'
import customer from '../resources/customer.jpg'
import affordable from '../resources/affordable.jpg'
import amenities from '../resources/amenities.jpg'
import map from '../resources/map.jpg'
import consistency from '../resources/consistency.jpg'

const Why = () => {
  return (
    <Box position={"relative"} overflowX='hidden'>
      <Box
        my={"5"}
        display={"flex"}
        flexWrap="wrap"
        flexDir={{ base: "column-reverse", md: "row-reverse" }}
        width="100%"
        p="3"
      >
        <Box
          position={"relative"}
          width={{ base: "100%", md: "50%" }}
          h="300px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img
            className="transitionLeft"
            src={accomodation}
            h="100%"
            shadow={"dark-lg"}
            borderRadius="3xl"
          ></Img>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          p="4"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          className="transitionRight"
          position={"relative"}
          alignItems={"center"}
        >
          <Heading color="#ba3b0a" textAlign={"center"} size="lg">
            High-quality accommodations
          </Heading>
          <Text textAlign={"justify"} fontWeight="light">
            Namaste Stays is known for providing guests with high-quality
            accommodations that are clean, comfortable, and well-maintained.
          </Text>
        </Box>
      </Box>
      <Box
        mb="5"
        p="3"
        display={"flex"}
        flexWrap="wrap"
        flexDir={{ base: "column", md: "row-reverse" }}
        width="100%"
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          p="4"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
          className="transitionLeft"
          position={"relative"}
        >
          <Heading color="#ba3b0a" textAlign={"center"} size="lg">
            Customer service
          </Heading>
          <Text textAlign={"justify"} fontWeight="light">
            Namaste Stays places a strong emphasis on customer service and works
            hard to ensure that all guests have a positive experience. They have
            well-trained staff who are available to assist guests with any needs
            or concerns they may have.
          </Text>
        </Box>
        <Box
          position={"relative"}
          width={{ base: "100%", md: "50%" }}
          h="300px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img
            className="transitionRight"
            src={customer}
            h="100%"
            shadow={"dark-lg"}
            borderRadius="3xl"
          ></Img>
        </Box>
      </Box>
      <Box
        mb={"5"}
        display={"flex"}
        flexWrap="wrap"
        flexDir={{ base: "column-reverse", md: "row-reverse" }}
        width="100%"
        p="3"
      >
        <Box
          position={"relative"}
          width={{ base: "100%", md: "50%" }}
          h="300px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img
            className="transitionLeft"
            src={amenities}
            h="100%"
            shadow={"dark-lg"}
            borderRadius="3xl"
          ></Img>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          p="4"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
          className="transitionRight"
          position={"relative"}
        >
          <Heading color="#ba3b0a" textAlign={"center"} size="lg">
            Range of amenities
          </Heading>
          <Text textAlign={"justify"} fontWeight="light">
            Namaste Stays offers a range of amenities to enhance the guest
            experience, such as complimentary breakfast, free Wi-Fi, and fitness
            centers.
          </Text>
        </Box>
      </Box>
      <Box
        mb="5"
        p="3"
        display={"flex"}
        flexWrap="wrap"
        flexDir={{ base: "column", md: "row-reverse" }}
        width="100%"
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          p="4"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
          className="transitionLeft"
          position={"relative"}
        >
          <Heading color="#ba3b0a" textAlign={"center"} size="lg">
            Consistency
          </Heading>
          <Text textAlign={"justify"} fontWeight="light">
            Namaste Stays operates a chain of hotels, which means that guests
            can expect a consistent level of service and amenities across all
            properties.
          </Text>
        </Box>
        <Box
          position={"relative"}
          width={{ base: "100%", md: "50%" }}
          h="300px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img
            className="transitionRight"
            src={consistency}
            h="100%"
            shadow={"dark-lg"}
            borderRadius="3xl"
          ></Img>
        </Box>
      </Box>
      <Box
        mb={"5"}
        display={"flex"}
        flexWrap="wrap"
        flexDir={{ base: "column-reverse", md: "row-reverse" }}
        width="100%"
        p="3"
      >
        <Box
          position={"relative"}
          width={{ base: "100%", md: "50%" }}
          h="300px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img
            className="transitionLeft"
            src={affordable}
            h="100%"
            shadow={"dark-lg"}
            borderRadius="3xl"
          ></Img>
        </Box>
        <Box
          width={{ base: "100%", md: "50%" }}
          p="4"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
          className="transitionRight"
          position={"relative"}
        >
          <Heading color="#ba3b0a" textAlign={"center"} size="lg">
            Affordable pricing
          </Heading>
          <Text textAlign={"justify"} fontWeight="light">
            Despite offering high-quality accommodations and amenities, Namaste
            Stays strives to keep its pricing affordable, making it an
            attractive option for budget-conscious travelers.
          </Text>
        </Box>
      </Box>
      <Box
        mb="5"
        p="3"
        display={"flex"}
        flexWrap="wrap"
        flexDir={{ base: "column", md: "row-reverse" }}
        width="100%"
      >
        <Box
          width={{ base: "100%", md: "50%" }}
          p="4"
          display={"flex"}
          flexDir="column"
          justifyContent="center"
          alignItems={"center"}
          className="transitionLeft"
          position={"relative"}
        >
          <Heading color="#ba3b0a" textAlign={"center"} size="lg">
            Locations
          </Heading>
          <Text textAlign={"justify"} fontWeight="light">
            Namaste Stays has hotels in a variety of locations, including major
            cities, tourist destinations, and business hubs, making it easy for
            guests to find accommodations that suit their needs.
          </Text>
        </Box>
        <Box
          position={"relative"}
          width={{ base: "100%", md: "50%" }}
          h="300px"
          display={"flex"}
          justifyContent="center"
          alignItems={"center"}
        >
          <Img
            className="transitionRight"
            src={map}
            h="100%"
            shadow={"dark-lg"}
            borderRadius="3xl"
          ></Img>
        </Box>
      </Box>
    </Box>
  );
};

export default Why;
