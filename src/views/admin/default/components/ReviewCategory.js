import React, { useEffect, useState } from "react";

// Chakra imports
import { Box, Flex, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import BarChartFun from "components/charts/BarChartFun";

// Custom components
import Card from "components/card/Card.js";
import {
  barChartDataDailyTraffic,
  barChartOptionsDailyTraffic,
} from "variables/charts";
import {
  categorySentimentChartDataConsumption,
  categorySentimentChartOptionsConsumption,
} from "variables/charts";
import {
  getCategorySentimentChartDataConsumption,
  getCategorySentimentChartOptionsConsumption,
} from "../../../../data/categorySentiment";
// Assets
import { RiArrowUpSFill } from "react-icons/ri";

export default function ReviewCategory(props) {
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
  const [option, setoption] = useState(
    getCategorySentimentChartOptionsConsumption,
  );
  const [currentSelection, setcurrentSelection] = useState(1);

  useEffect(async () => {
    if (currentSelection != selectedProduct) {
      const sampledata = await getCategorySentimentChartDataConsumption(
        selectedProduct,
      );
      setdata(sampledata);
      setcurrentSelection(selectedProduct);
      console.log("Conversion", data);
    }
  });
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card align="center" direction="column" w="100%" {...rest}>
      <Flex justify="space-between" align="start" px="10px" pt="5px">
        <Flex flexDirection="column" align="start" me="20px">
          <Flex w="100%">
            <Text me="auto" color={textColor} fontSize="2xl" fontWeight="500">
              Product Feature Sentiment Analysis
            </Text>
          </Flex>
          <Flex align="end">
            {/* <Text
              color={textColor}
              fontSize="34px"
              fontWeight="700"
              lineHeight="100%"
            >
              2.579
            </Text>
            <Text
              ms="6px"
              color="secondaryGray.600"
              fontSize="sm"
              fontWeight="500"
            >
              Visitors
            </Text> */}
          </Flex>
        </Flex>
        <Flex align="center">
          <Icon as={RiArrowUpSFill} color="green.500" />
          {/* <Text color="green.500" fontSize="sm" fontWeight="700">
            +2.45%
          </Text> */}
        </Flex>
      </Flex>
      <Box h="400px" mt="auto">
        <BarChartFun data={data} option={option} />
      </Box>
    </Card>
  );
}
