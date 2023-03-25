import { Box, Button, useDisclosure } from "@chakra-ui/react";
import { IoArrowBack } from "react-icons/io5";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Booking from "./Components/Booking";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import Finance from "./Components/Finance";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import History from "./Components/History";
import Home from "./Components/Home";
import Management from "./Components/Management";
import Map from "./Components/Map";
import MyDrawer from "./Components/MyDrawer";
import Why from "./Components/Why";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // #ba3b0a
  return (
    <BrowserRouter>
      <Box position={"relative"} minH="100vh">
        <Header onOpen={onOpen} />
        <MyDrawer isOpen={isOpen} onClose={onClose} />
        <Button
          m="3"
          bg={"blue.500"}
          fontSize="xl"
          position={"absolute"}
          zIndex="3"
          onClick={() => {
            window.history.back();
          }}
        >
          <IoArrowBack />
        </Button>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="why" element={<Why />} />
            <Route path="history" element={<History />} />
            <Route path="location" element={<Map />} />
            <Route path="management" element={<Management />} />
            <Route path="finance" element={<Finance />} />
            <Route path="career" element={<Career />} />
            <Route path="contact" element={<Contact />} />
            <Route path="booking/:id?" element={<Booking />} />
          </Route>
        </Routes>

        <Footer />
      </Box>
    </BrowserRouter>
  );
}

export default App;
