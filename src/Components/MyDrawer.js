import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";
import { NavLink } from "react-router-dom";

const MyDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody display={"flex"} flexDir="column" gap={"10px"}>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/">
              Home
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="location">
              Location Map
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="why">
              Why Namaste Stays
            </NavLink>
          </Box>
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton as={Button}>
                <Box width="100%">
                  About Namaste Stays
                  <AccordionIcon />
                </Box>
              </AccordionButton>
              <AccordionPanel
                pb={4}
                display={"flex"}
                flexDir="column"
                gap="10px"
              >
                <Box as={Button} width="100%">
                  <NavLink onClick={onClose} to="/history">
                    History
                  </NavLink>
                </Box>
                <Box as={Button} width="100%">
                  <NavLink onClick={onClose} to="/finance">
                    Financial Results
                  </NavLink>
                </Box>
                <Box as={Button} width="100%">
                  <NavLink onClick={onClose} to="/management">
                    Management
                  </NavLink>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/career">
              Careers
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/contact">
              Contact Us
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/booking">
              Booking
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/cancel">
              Cancelation
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/check-in">
              Check-in
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/check-out">
              Check-out
            </NavLink>
          </Box>
          <Box as={Button} width="100%">
            <NavLink onClick={onClose} to="/mybookings">
              My Bookings
            </NavLink>
          </Box>
          <Button display={{ base: "flex", md: "none" }}>
            <NavLink onClick={onClose} to="/login">Login/Sign-Up</NavLink>
          </Button>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MyDrawer;
