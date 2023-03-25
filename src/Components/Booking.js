import {
  Box,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
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
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          onClick={onOpen}
          cursor={"pointer"}
        >
          <IoLocation size="24" />
          111, 111, Omprakash Nagar, Road No 3, Hatia, Basargad, Ranchi
        </Text>
        <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
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
        <Heading textAlign={'center'} size="xl" mt="5">
          Book Room's
        </Heading>
        
      </Box>
    </Box>
  );
};

export default Booking;
