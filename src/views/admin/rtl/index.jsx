/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
} from "@chakra-ui/react";
// Assets
import Usa from "assets/img/dashboards/usa.png";
// Custom components
import MiniCalendar from "components/calendar/MiniCalendar";
import MiniStatistics from "components/card/MiniStatistics";
import MiniStatisticsNEW from "components/card/MiniStatisticsNew";

import IconBox from "components/icons/IconBox";
import React, { useState, useCallback } from "react";
import {
  MdAddTask,
  MdAttachMoney,
  MdBarChart,
  MdFileCopy,
  MdWatch,
  MdHeadphones,
  MdSpeaker,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import ComplexTable from "views/admin/default/components/ComplexTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import ReviewCategory from "views/admin/default/components/ReviewCategory";

import PieCard from "views/admin/default/components/PieCard";
import ProductSource from "views/admin/default/components/ProductSource";

import Review from "views/admin/default/components/Review";

import Tasks from "views/admin/default/components/Tasks";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import ProdcutRating from "views/admin/default/components/ProdcutRating";

import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import tableDataComplex from "views/admin/default/variables/tableDataComplex.json";
import Summary from "views/admin/profile/components/Summary";
import {
  getSources,
  getReviewsCountGroupedBySource,
  getReviewsCountGroupedBySentiment,
  getReviewsCount,
} from "data/originalSourceData";
export default function UserReports() {
  const [isSmartWatchClick, setisSmartWatchClick] = useState("#bde0ff");
  const [isEarbudClick, setisEarbudClick] = useState("transperent");
  const [isSpeakerClick, setisSpeakerClick] = useState("transperent");
  const [selectedProduct, setselectedProduct] = useState(1);
  const bgHover = useColorModeValue(
    { bg: "secondaryGray.400" },
    { bg: "whiteAlpha.50" },
  );

  // Chakra Color Mode
  const handleMouseEnter = useCallback(async (param) => {
    const d = getReviewsCountGroupedBySentiment("smartwatch");
    // getSources("smartwatch");
    // const d = getReviewsCountGroupedBySource("smartwatch");
    console.log("getReviewsCountGroupedBySentiment", JSON.stringify(d));
    setselectedProduct(param);
    if (param == 1) {
      setisSmartWatchClick("#bde0ff");
      setisEarbudClick("transperent");
      setisSpeakerClick("transperent");
    } else if (param == 2) {
      setisSmartWatchClick("transperent");
      setisEarbudClick("#bde0ff");
      setisSpeakerClick("transperent");
    } else if (param == 3) {
      setisSmartWatchClick("transperent");
      setisEarbudClick("transperent");
      setisSpeakerClick("#bde0ff");
    }
  });

  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, "2xl": 3 }}
        gap="20px"
        mb="20px"
      >
        {/* <Flex
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"50%"}
        ></Flex> */}

        <MiniStatisticsNEW
          handleMouseEnter={handleMouseEnter}
          id={3}
          backgroundColor={isSpeakerClick}
          startContent={
            <IconBox
              w="200px"
              h="200px"
              bg={boxBg}
              icon={
                <Icon w="100px" h="100px" as={MdSpeaker} color={brandColor} />
              }
            />
          }
          name="Portable Speaker"
          value={getReviewsCount("Portable Speaker")}
        />

        <MiniStatisticsNEW
          handleMouseEnter={handleMouseEnter}
          id={2}
          backgroundColor={isEarbudClick}
          startContent={
            <IconBox
              w="200px"
              h="200px"
              bg={boxBg}
              icon={
                <Icon w="70px" h="70px" as={MdHeadphones} color={brandColor} />
              }
            />
          }
          name="Wireless Earbud"
          value={getReviewsCount("Wireless Earbudz")}
        />
        <MiniStatisticsNEW
          handleMouseEnter={handleMouseEnter}
          id={1}
          backgroundColor={isSmartWatchClick}
          startContent={
            <IconBox
              w="200px"
              h="200px"
              bg={boxBg}
              icon={<Icon w="70px" h="70px" as={MdWatch} color={brandColor} />}
            />
          }
          name="Smart Watch"
          value={getReviewsCount("smartwatch")}
        />
        {/* <Flex
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"50%"}
        ></Flex> */}
        {/* <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdAttachMoney} color={brandColor} />
              }
            />
          }
          name="Spend this month"
          value="$642.39"
        />
        <MiniStatistics growth="+23%" name="Sales" value="$574.34" />
        <MiniStatistics
          endContent={
            <Flex me="-16px" mt="10px">
              <FormLabel htmlFor="balance">
                <Avatar src={Usa} />
              </FormLabel>
              <Select
                id="balance"
                variant="mini"
                mt="5px"
                me="0px"
                defaultValue="usd"
              >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="gba">GBA</option>
              </Select>
            </Flex>
          }
          name="Your balance"
          value="$1,000"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg="linear-gradient(90deg, #4481EB 0%, #04BEFE 100%)"
              icon={<Icon w="28px" h="28px" as={MdAddTask} color="white" />}
            />
          }
          name="New Tasks"
          value="154"
        />
        <MiniStatistics
          startContent={
            <IconBox
              w="56px"
              h="56px"
              bg={boxBg}
              icon={
                <Icon w="32px" h="32px" as={MdFileCopy} color={brandColor} />
              }
            />
          }
          name="Total Projects"
          value="2935"
        /> */}
      </SimpleGrid>

      <SimpleGrid columns={{ base: 1, md: 3, xl: 3 }} gap="20px" mb="20px">
        <ProdcutRating selectedProduct={selectedProduct} />
        <Review selectedProduct={selectedProduct} />

        <ProductSource selectedProduct={selectedProduct} />
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        {/* <CheckTable columnsData={columnsDataCheck} tableData={tableDataCheck} /> */}

        <Summary height="500" selectedProduct={selectedProduct}></Summary>
        <ReviewCategory selectedProduct={selectedProduct} height="500" />
        {/* <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px">
          <Review />

          <ProductSource />
        </SimpleGrid> */}
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap="20px" mb="20px">
        {/* <ComplexTable
          columnsData={columnsDataComplex}
          tableData={tableDataComplex}
        />
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Tasks />
          <MiniCalendar h="100%" minW="100%" selectRange={false} />
        </SimpleGrid> */}
      </SimpleGrid>
    </Box>
  );
}
