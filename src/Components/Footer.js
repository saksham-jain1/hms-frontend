import { Box } from "@chakra-ui/react";
import React from "react";
import {
  IoCall,
  IoLogoFacebook,
  IoLogoGoogle,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      position={"absolute"}
      w="100%"
      top="100%"
      bg={"black"}
      display="flex"
      color={"white"}
      gap="20px"
      flexWrap={"wrap"}
      justifyContent="space-evenly"
      p="4"
    >
      <Link>About Namaste Stays</Link>
      <Link>Affiliated Hotels</Link>
      <a href="/">Travel Agent</a>
      <a href="https://www.olacabs.com/" rel="noreferrer" target="_blank">
        Car Rentals
      </a>
      <a href="https://www.irctc.co.in/" rel="noreferrer" target="_blank">
        Ticket Bookings
      </a>
      <a href="https://weather.com/" rel="noreferrer" target="_blank">
        Weather
      </a>
      <Link to='/contact'>Contact Us</Link>
      <Link to='/career'>Career</Link>
      <Box w="100%" display={"flex"} alignItems="center" flexDir={"column"}>
        <Box className="icons" display={"flex"} mb="2" gap="10px">
          <Link>
            <IoLogoInstagram size={36} />
          </Link>
          <Link>
            <IoLogoFacebook size={36} />
          </Link>
          <Link>
            <IoLogoWhatsapp size={36} />
          </Link>
          <Link>
            <IoCall size={36} />
          </Link>
          <Link>
            <IoLogoGoogle size={36} />
          </Link>
          <Link>
            <IoLogoTwitter size={36} />
          </Link>
        </Box>
        &#169; Copyright. All rights reserved
      </Box>
    </Box>
  );
};

export default Footer;
