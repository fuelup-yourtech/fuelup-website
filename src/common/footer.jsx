import { Box, Img, Text } from "@chakra-ui/react";
import Link from "next/link";
import { GrMail } from "react-icons/gr";
import { CiInstagram, CiLinkedin, CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import SubmitRedirect from "./submit-redirect";

const Footer = () => {
  return (
    <footer className="bg-footer-background">
      <Box>
        <SubmitRedirect />
      </Box>
      <Box className="flex p-10 text-white font-sans justify-center lg:gap-10 md:gap-10">
        <Box className="flex flex-col lg:w-fit w-1/4">
          <Box className="flex items-center">
            <Img className="w-10" src="/images/logo/logo1.svg" />
            <Text className="pl-2 text-xl">Fuel up</Text>
          </Box>
          <Text className="text-md pt-4">
            We build websites that work as hard as you do.
          </Text>
        </Box>
        <Box className="flex flex-col lg:w-fit md:w-1/6">
          <Text className="text-xl">About Us</Text>
          <Text className="text-md pt-4">Service</Text>
          <Text className="text-md">Plans</Text>
        </Box>
        <Box className="flex flex-col lg:w-fit w-1/6">
          <Text className="text-xl">Terms & Conditions</Text>
          <Text className="text-md pt-4">Privacy Policy</Text>
        </Box>
        <Box className="flex flex-col lg:w-fit md:w-1/4">
          <Box className="flex items-center">
            <GrMail size={"1.5rem"}></GrMail>
            <Text className="pl-2 text-xl">Mail to us:-</Text>
          </Box>
          <Text className="text-md pt-4">fuelup.yourpresence@gmail.com</Text>
          <Box className="text-limeGreen pt-3 flex gap-x-5 justify-center ">
            <Link href="/">
              <CiLinkedin size={"1.5rem"} />
            </Link>
            <Link href="/">
              <CiTwitter size={"1.5rem"} />
            </Link>
            <Link href="/">
              <CiInstagram size={"1.5rem"} />
            </Link>
            <Link href="/">
              <FaWhatsapp size={"1.5rem"} />
            </Link>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
