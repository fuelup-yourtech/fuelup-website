import React from "react";
import { Box, Text, styled } from "@chakra-ui/react";
import { FiCode } from "react-icons/fi";
import { GiWireframeGlobe } from "react-icons/gi";
import { HiSignal } from "react-icons/hi2";
import { TbChecklist } from "react-icons/tb";

const useStyles = styled((theme) => ({}));
const Models = ({ data }) => {
  const Icon = ({ color }) => {
    if (data.id == 1) {
      return <TbChecklist color={color} />;
    } else if (data.id == 2) {
      return <GiWireframeGlobe color={color} />;
    } else if (data.id == 3) {
      return <FiCode color={color} />;
    } else if (data.id == 4) {
      return <HiSignal color={color} />;
    }
  };
  return (
    <div>
      {data && (
        <Box>
          <Box className="pt-3 pl-5">
            <Box className="bg-153240 flex items-center justify-center w-10 h-10 rounded-full">
              <Icon color="#c4f0ab" />
            </Box>
          </Box>
          <Box className="flex justify-center items-center pt-5 p-10">
            <Box className="flex flex-col">
              <Box className="flex">
                <Text className="text-limeGreen pr-3 text-5xl font-bold">
                  {data.id}
                </Text>
                <Text className="text-lg font-500">{data.stepname}</Text>
              </Box>
              <Box>
                <Text className="text-md pt-4">{data.process}</Text>
              </Box>
              <Box className="pt-4">
                <img src={data.image} alt="My Image" />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Models;
