import CustomButton from "@/utils/custom-button";
import { Box, Input, Stack, Text } from "@chakra-ui/react";
import { IoSendSharp } from "react-icons/io5";

const SubmitRedirect = () => {
  return (
    <Stack className="items-center">
      <Text className="text-lg p-5 text-white">
        Schedule a 15 min call for a quick discussion about our services.
      </Text>
      <Box className="p-5">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          alignItems="center"
          justifyContent="space-around"
          sx={{
            border: "2px solid #FFFFFF",
            padding: "18px",
            borderRadius: "40px",
          }}
        >
          <Input
            style={{ borderRadius: "20px" }}
            required
            id="name"
            label="Name"
            variant="outlined"
            placeholder="Name"
            sx={{
              minHeight: "60px",
            }}
          />
          <Input
            required
            style={{ borderRadius: "20px" }}
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            placeholder="Email"
            sx={{
              minHeight: "60px",
            }}
          />
          <Input
            id="phoneInput"
            style={{ borderRadius: "20px" }}
            variant="outlined"
            // defaultCountry={"IN"}
            // limitMaxLength={true}
            // countryCallingCodeEditable={false}
            placeholder={"e.g. +91 98374-XXXXX"}
            sx={{
              minHeight: "60px",
            }}
          />
          <CustomButton className="bg-white rounded-full h-12 flex justify-center items-center hover:bg-limeGreen">
            <IoSendSharp style={{ color: "#07111F" }} />
          </CustomButton>
        </Stack>
      </Box>
    </Stack>
  );
};

export default SubmitRedirect;
