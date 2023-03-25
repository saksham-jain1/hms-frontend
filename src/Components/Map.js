import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useState } from "react";
import Hotel from "./Hotel";

import ReactDatamaps from "react-india-states-map";

const Map = () => {
  const STATES = {
    Maharashtra: {
      value: 50,
      content: {
        txt: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam quae laboriosam sed magni aliquam dolore sequi libero harum, hic nihil. Omnis eos deserunt molestiae harum, cum nemo et temporibus?",
      },
    },
  };
  const [activeState, setactiveState] = useState({
    data: STATES.Maharashtra,
    name: "India",
  });

  const stateOnClick = (data, name) => {
    setactiveState({ data, name });
  };

  return (
    <Flex wrap={'wrap'}>
      <Box h={{base:"50vh",md:"80vh"}} pos={"relative"} w={{ base: "100%", md: "50%" }}>
        <ReactDatamaps
          mapLayout={{
            noDataColor: "#D36418",
            borderColor: "#000",
            hoverBorderColor: "pink",
            hoverColor: "#ba3b0a",
          }}
          hoverComponent={({ value }) => {
            return <button>{value.name}</button>;
          }}
          onClick={stateOnClick}
          activeState={activeState}
        />
      </Box>
      {activeState.name && activeState.name!=="India" ? <Box w={{ base: "100%", md: "50%" }}>
        <Heading textAlign={"center"} my="7" size="lg">
          List of Namaste Stays Group of Hotels in {activeState.name}
        </Heading>
        <Box>
          <Box p='5' m='5' px='3'>
          <Hotel />
          <Hotel />
          <Hotel />
          </Box>
        </Box>
      </Box>: <Box w={{ base: "100%", md: "50%" }}><Heading textAlign={'center'} p="7" color='red.400' >Please Select State in the Map</Heading></Box>}
    </Flex>
  );
};

export default Map;
