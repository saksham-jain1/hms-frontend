import {
  Box,
  Button,
  IconButton,
  Img,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";
import {
  IoChevronDownOutline,
  IoLanguageSharp,
  IoLogInOutline,
  IoMenu,
} from "react-icons/io5";
import { NavLink } from "react-router-dom";
import logo from "../resources/logo.png";

const Header = ({ onOpen }) => {
  return (
    <Box
      zIndex="banner"
      position={"sticky"}
      top="0px"
      p="10px 20px"
      h={{ base: "10vh", md: "12vh" }}
      size={"2xl"}
      shadow="dark-lg"
      bg={"black"}
    >
      <Img
        src={logo}
        h={{ base: "50px", md: "70px", lg: "70px" }}
        width={{ base: "110px", md: "160px", lg: "160px" }}
        bg="gray.800"
        p="3px"
        borderRadius="xl"
        shadow="dark-lg"
        display={"inline"}
      />
      <IconButton
        size={{ base: "md", md: "lg" }}
        float={"right"}
        icon={<IoMenu />}
        onClick={onOpen}
      />
      <Button
        display={{ base: "none", md: "flex" }}
        mr={{ base: "2", md: "4" }}
        size={{ base: "md", md: "lg" }}
        float={"right"}
      >
        <NavLink to="/login">Login/Sign-Up</NavLink>
        <IoLogInOutline size={"30"} />
      </Button>
      <Menu closeOnSelect={false}>
        <MenuButton
          size={{ base: "md", md: "lg" }}
          mx={{ base: "2", md: "4" }}
          float={"right"}
          as={Button}
          rightIcon={<IoChevronDownOutline />}
        >
          <IoLanguageSharp />
        </MenuButton>
        <MenuList fontSize={"md"} itemType="radio">
          <MenuOptionGroup
            defaultValue="eng"
            title="Select Language"
            type="radio"
          >
            <MenuItemOption color={"#ba3b0a"} value="eng">
              English
            </MenuItemOption>
            <MenuItemOption value="Hindi">Hindi</MenuItemOption>
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </Box>
  );
};

export default Header;
