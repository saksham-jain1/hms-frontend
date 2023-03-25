import { Box, IconButton, Image, Slide } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("left");

  const handlePrevClick = () => {
    setSlideDirection('right');
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  const handleNextClick = () => {
    setSlideDirection('left');
    setCurrentImageIndex(
      currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
    );
  };

  return (
    <Box
      bg="gray.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      w="100%"
      h="100%"
    >
      <IconButton
        aria-label="Next"
        icon={<FaChevronLeft />}
        onClick={handlePrevClick}
        size="lg"
        fontSize={'2rem'}
        bg="blackAlpha.200"
        _hover={{ bg: "blackAlpha.400", color: "white" }}
        _active={{ bg: "blackAlpha.600" }}
        zIndex="4"
        h={{base:"40vh",md:"50vh"}}
        w='10%'
        backdropBlur={'3xl'}
      />
      <Box position={'relative'} h="60%" w="80%">
        <Slide id='slide' direction={slideDirection} in={true} key={currentImageIndex}>
          <Image
            h={{base:"40vh",md:"50vh"}}
            w="100%"
            m="auto"
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex}`}
            borderRadius="lg"
            boxShadow="lg"
          />
        </Slide>
      </Box>
      <IconButton
        aria-label="Next"
        icon={<FaChevronRight />}
        onClick={handleNextClick}
        size="lg"
        fontSize={'2rem'}
        bg="blackAlpha.200"
        _hover={{ bg: "blackAlpha.400", color: "white" }}
        _active={{ bg: "blackAlpha.600" }}
        zIndex="4"
        h={{base:"40vh",md:"50vh"}}
        w='10%'
      />
    </Box>
  );
};

export default ImageCarousel;
