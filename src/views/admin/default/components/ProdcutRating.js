// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import BarChartFun from "components/charts/BarChartFun";
import React, { useEffect, useState } from "react";
import {
  barChartDataConsumption,
  barChartOptionsConsumption,
} from "variables/charts";

import {
  allChartDataConsumption,
  allChartOptionsConsumption,
} from "variables/charts";
import { MdBarChart } from "react-icons/md";
import {
  getAllChartDataConsumption,
  getAllChartOptionsConsumption,
} from "../../../../data/sourceSentiment";

export default function WeeklyRevenue(props) {
  const { ...rest } = props;
  const { selectedProduct } = props;
  const [data, setdata] = useState([
    {
      name: "Positive",
      data: [400, 370, 330, 390, 320, 370, 330, 390],
    },
    {
      name: "Negetive",
      data: [400, 370, 330, 390, 320, 370, 330, 390],
    },
  ]);
  const [option, setoption] = useState(getAllChartOptionsConsumption);
  const [currentSelection, setcurrentSelection] = useState(1);

  useEffect(async () => {
    if (currentSelection != selectedProduct) {
      const sampledata = await getAllChartDataConsumption(selectedProduct);
      setdata(sampledata);
      setcurrentSelection(selectedProduct);
      console.log("Conversion", data);
    }
  });

  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const iconColor = useColorModeValue("brand.500", "white");
  const bgButton = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" },
  );
  const bgFocus = useColorModeValue(
    { bg: "secondaryGray.300" },
    { bg: "whiteAlpha.100" },
  );
  return (
    <Card align="center" direction="column" w="100%" {...rest}>
      <Flex align="lef" w="100%" px="15px" py="10px">
        <Text
          align={"left"}
          me="auto"
          color={textColor}
          fontSize="2xl"
          fontWeight="700"
          lineHeight="100%"
        >
          Source Wise Sentiment Summary
        </Text>
        {/* <Button
          align="center"
          justifyContent="center"
          bg={bgButton}
          _hover={bgHover}
          _focus={bgFocus}
          _active={bgFocus}
          w="37px"
          h="37px"
          lineHeight="100%"
          borderRadius="10px"
          {...rest}
        >
          <Icon as={MdBarChart} color={iconColor} w="24px" h="24px" />
        </Button> */}
      </Flex>

      <Box h="240px" mt="auto">
        <BarChartFun data={data} option={option} />
      </Box>
    </Card>
  );
}
