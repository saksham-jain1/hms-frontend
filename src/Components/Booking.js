import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BsStarFill, BsStarHalf, BsTv, BsWifi } from "react-icons/bs";
import {
  TbAirConditioning,
  TbBatteryAutomotive,
  TbMicrowave,
} from "react-icons/tb";
import { IoBarbellOutline, IoLocation } from "react-icons/io5";
import { BiCctv } from "react-icons/bi";
import { useParams } from "react-router-dom";
import ImageCarousel from "./ImageCarousel";

const Booking = () => {
  const { id } = useParams();
  const { isOpen: isLocOpen , onOpen: onLocOpen, onClose: onLocClose } = useDisclosure()
  const { isOpen: isFpOpen , onOpen: onFpOpen, onClose: onFpClose } = useDisclosure()
  const images = [
    "https://source.unsplash.com/1080x600/?hotel",
    "https://source.unsplash.com/1080x600/?random",
    "https://source.unsplash.com/1080x600/?cafe",
    "https://source.unsplash.com/1080x600/?hotelroom",
  ];
  return (
    <Box>
      <ImageCarousel images={images} />
      <Box p="5">
        <Heading size="2xl">Sunrise Hotel</Heading>
        <Text
          display={"flex"}
          my="2"
          alignItems={"center"}
          fontSize={"1rem"}
          fontWeight="hairline"
          gap="1"
          textDecoration={"underline"}
          onClick={onLocOpen}
          cursor={"pointer"}
        >
          <IoLocation size="24" />
          111, 111, Omprakash Nagar, Road No 3, Hatia, Basargad, Ranchi
        </Text>
        <Modal onClose={onLocClose} size={"lg"} isOpen={isLocOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Location</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <iframe
                title="map"
                width="100%"
                height="500px"
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD51yIazsL8G3wLfo-HOnem8F7F7NoFySo&q=22°40'58 75°51'26"
              ></iframe>
            </ModalBody>
          </ModalContent>
        </Modal>
        <Text
          display={"flex"}
          mx="4"
          alignItems={"center"}
          fontSize={"md"}
          fontWeight="hairline"
          gap="1"
        >
          <BsStarFill color="#F6E05E" />
          <BsStarFill color="#F6E05E" />
          <BsStarFill color="#F6E05E" />
          <BsStarFill color="#F6E05E" />
          <BsStarHalf color="#F6E05E" />
        </Text>
        <Heading size="xl" mt="5">
          Description
        </Heading>
        <Text my="2" fontSize={"1.1rem"} fontWeight="hairline">
          Affordable hotels at prime location.
        </Text>
        <Heading size="xl" mt="5">
          Amenities
        </Heading>
        <Text display={"flex"} my="2" gap="5" flexWrap={"wrap"}>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={BsWifi} />
            <TagLabel>Free Wifi</TagLabel>
          </Tag>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={BsTv} />
            <TagLabel>Television</TagLabel>
          </Tag>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={TbAirConditioning} />
            <TagLabel>AC</TagLabel>
          </Tag>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={TbBatteryAutomotive} />
            <TagLabel>Power Backup</TagLabel>
          </Tag>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={BiCctv} />
            <TagLabel>CCTV</TagLabel>
          </Tag>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={TbMicrowave} />
            <TagLabel>Kitchen</TagLabel>
          </Tag>
          <Tag size={"lg"} variant="subtle" bg="blackAlpha.300">
            <TagLeftIcon w="24px" h="24px" as={IoBarbellOutline} />
            <TagLabel>Gym</TagLabel>
          </Tag>
        </Text>
        <Heading textAlign={"center"} size="xl" mt="5">
          Book Room's
        </Heading>
        <Flex
          mt="12"
          gap={"10px"}
          wrap={"wrap"}
          justifyContent={"space-evenly"}
        >
          <Box width="300px">
            <Text fontWeight={"bold"}>Name:</Text>
            <Input type="text" placeholder="Name" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Surname:</Text>
            <Input type="text" placeholder="Surname" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Address:</Text>
            <Input type="text" placeholder="Address" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Phone No.:</Text>
            <Input type="tel" placeholder="9889988940" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Email:</Text>
            <Input type="email" placeholder="abc@gmail.com" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Number of Rooms:</Text>
            <Input type="number" placeholder="2" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Aadhar No.:</Text>
            <Input type="text" placeholder="123456789012" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Check-In Date:</Text>
            <Input type="date" />
          </Box>
          <Box width="300px">
            <Text fontWeight={"bold"}>Check-Out Date:</Text>
            <Input type="date" />
          </Box>
          <Box width={{ base: "90%", md: "45%" }}>
            <Text fontWeight={"bold"}>Select State:</Text>
            <Select placeholder="Select Room Type">
              <option placeholder="option1">Option 1</option>
            </Select>
          </Box>
          <Flex
            mt="5"
            w="100%"
            alignItems={"center"}
            justifyContent={"space-evenly"}
          >
            <Button bg="yellow.500" w="150px">
              Clear
            </Button>
            <Button bg="blue.400" w="150px">
              Book Room
            </Button>
          </Flex>
        </Flex>
        <Button mt="7" onClick={onFpOpen}>Click here to see room floor plan</Button>
        <Modal onClose={onFpClose} size={"full"} isOpen={isFpOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Floor Plan</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image
                w="100%"
                maxH='90vh'
                src="https://fpg.roomsketcher.com/image/topic/6/image/Hotel-Room-3D-Layout.jpg"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default Booking;
