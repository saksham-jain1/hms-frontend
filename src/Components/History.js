import { Box, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import history1 from '../resources/history1.jpg'
import history2 from '../resources/history2.png'

const History = () => {
  return (
    <Box>
    <Heading textAlign={'center'} my='5'>History of Namaste Stays</Heading>
      <Text fontSize={'lg'} p='7' textAlign={"justify"}>
        Namaste Stays is a hotel management chain that has become a well-known
        name in the hospitality industry. The company was founded in 2016 by a
        team of entrepreneurs with the goal of providing travelers with
        high-quality accommodations at affordable prices. 
        <br /><br />
        <Image display={'inline-block'} borderRadius='3xl' boxShadow='dark-lg' float='right' m={'5'} ml='7' maxH='400px' src={history1}></Image>
        Namaste Stays began its operations in India, where the hospitality industry was undergoing a
        significant transformation. The company's founders saw an opportunity to
        leverage technology to streamline the hotel booking process and offer
        guests a more seamless experience. They aimed to create a hotel
        management chain that would cater to the needs of both leisure and
        business travelers. The company started with a few properties in major
        Indian cities, and its growth was initially slow. However, as more and
        more travelers became aware of the Namaste Stays brand, the company
        began to expand rapidly. By 2018, the company had expanded to over 100
        cities in India, and it had also started operations in several other
        countries, including Nepal, Sri Lanka, and Malaysia. One of the reasons
        for Namaste Stays' success was its use of technology to streamline the
        hotel booking process. The company's mobile app and website allowed
        travelers to search for and book accommodations quickly and easily. The
        app also provided guests with information about the hotel's amenities,
        location, and nearby attractions, making it easier for them to plan
        their trip. 
        <br /><br />
        Another factor in Namaste Stays' success was its focus on
        providing high-quality accommodations at affordable prices. The company
        worked closely with hotel owners to ensure that its properties met the
        company's high standards for cleanliness, safety, and comfort. By
        working with hotel owners, Namaste Stays was able to keep its costs low,
        which allowed it to offer lower rates to guests. Over time, Namaste
        Stays continued to expand its operations, opening properties in new
        cities and countries. The company also began to offer additional
        services, such as transportation and sightseeing tours, to make it
        easier for guests to plan their trips. 
        By 2021, Namaste Stays had become
        one of the largest hotel management chains in Asia, with properties in
        over 500 cities and towns across the continent. <br /><br />
        In summary, Namaste
        Stays is a hotel management chain that was founded in 2016 with the goal
        of providing travelers with high-quality accommodations at affordable
        prices. The company leveraged technology to streamline the hotel booking
        process and focused on working closely with hotel owners to maintain its
        high standards. Over time, Namaste Stays expanded its operations to
        become one of the largest hotel management chains in Asia, and it
        continues to grow and innovate in the hospitality industry.
      </Text>
        <Image w={'100%'} maxH='400px' src={history2}></Image>
    </Box>
  );
};

export default History;
