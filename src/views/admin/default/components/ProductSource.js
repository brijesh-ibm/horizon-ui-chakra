// Chakra imports
import { Box, Flex, Text, Select, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import PieChart from "components/charts/PieChart";
import PieChartFun from "components/charts/PieChartFun";
import {
  pieChartData,
  pieChartOptions,
  sourceChartData,
  sourceChartOptions,
} from "variables/charts";
import {
  getSourceChartData,
  getSourceChartOptions,
} from "../../../../data/sourceData";
import { VSeparator } from "components/separator/Separator";
import React, { useEffect, useState } from "react";
import { getReviewsCountGroupedBySource } from "data/originalSourceData";
import { getReviewsCountGroupedBySentiment } from "data/originalSourceData";
import { getReviewsCountGroupedBySourceAndSentiment } from "data/originalSourceData";

export default function Conversion(props) {
  const { ...rest } = props;
  const { selectedProduct } = props;
  const [data, setdata] = useState([10, 10, 10, 10, 10, 10]);
  const [option, setoption] = useState(getSourceChartOptions);
  const [currentSelection, setcurrentSelection] = useState(1);

  useEffect(async () => {
    if (currentSelection != selectedProduct) {
      const sampledata = await getSourceChartData(selectedProduct);
      setdata(sampledata);
      setcurrentSelection(selectedProduct);
      console.log("Conversion", data);
    }
    console.log("groupby: ",getReviewsCountGroupedBySource("smartwatch"));
    console.log("groupby sentiments : ",getReviewsCountGroupedBySentiment("smartwatch"));
    console.log("groupby source and sentiments : ",getReviewsCountGroupedBySourceAndSentiment("smartwatch"));
  });

  // Chakra Color Mode
  const totalReviewFacebook = 10;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const cardColor = useColorModeValue("white", "navy.700");
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset",
  );
  return (
    <Card p="20px" align="center" direction="column" w="100%" {...rest}>
      <Flex
        px={{ base: "0px", "2xl": "10px" }}
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        mb="8px"
      >
        <Text color={textColor} fontSize="xl" fontWeight="600" mt="4px">
          Source Total Review
        </Text>
        {/* <Select
          fontSize="sm"
          variant="subtle"
          defaultValue="monthly"
          width="unset"
          fontWeight="700"
        >
          <option value="daily">Daily</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </Select> */}
      </Flex>
      <PieChartFun h="80%" w="100%" data={data} option={option} />

      {/* <Card
        bg={cardColor}
        flexDirection="row"
        boxShadow={cardShadow}
        w="100%"
        p="15px"
        px="20px"
        mt="15px"
        mx="auto"
      >
        <Flex direction="column" py="5px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="brand.500" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Total of Social Media
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            {totalReviewFacebook + "%"}
          </Text>
        </Flex>
        <VSeparator mx={{ base: "60px", xl: "60px", "2xl": "60px" }} />
        <Flex direction="column" py="5px" me="10px">
          <Flex align="center">
            <Box h="8px" w="8px" bg="#6AD2FF" borderRadius="50%" me="4px" />
            <Text
              fontSize="xs"
              color="secondaryGray.600"
              fontWeight="700"
              mb="5px"
            >
              Total of Marketplace
            </Text>
          </Flex>
          <Text fontSize="lg" color={textColor} fontWeight="700">
            25%
          </Text>
        </Flex>
      </Card> */}
    </Card>
  );
}
