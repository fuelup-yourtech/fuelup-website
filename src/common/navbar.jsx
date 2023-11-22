import CustomButton from "@/utils/custom-button";
import { Box, Img, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <div className="bg-navBlack h-20 flex justify-between text-center items-center">
      <Box className="flex gap-4 ml-10 items-center">
        <Img className="w-15" src="/images/logo/logo1.svg" />
        <Text className="text-white text-xl font-sans">Fuel Up</Text>
      </Box>
      <Box className="flex justify-end gap-10 mr-10 items-center text-white">
        <Text>ABOUT US</Text>
        <Text>SERVICES</Text>
        <CustomButton
          className="bg-limeGreen rounded text-black hover:bg-white font-bold"
          text="Request a Quote"
          textSize="sm"
        />
      </Box>
    </div>
  );
};

export default Navbar;
