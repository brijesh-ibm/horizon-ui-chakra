// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React, { useEffect, useState } from "react";
import Information from "views/admin/profile/components/Information";
import { OriginalSourceData } from "data/userSummary";
// Assets
export default function Summary(props) {
  const { ...rest } = props;
  const { selectedProduct } = props;
  const [currentSelection, setcurrentSelection] = useState(1);
  const [productName, setProductName] = useState("Smart Watch");
  const [summary, setsummary] = useState("Smart Watch");
  const [comment, setComment] = useState("Smart Watch");
  const [positiveSentiment, setpositiveSentiment] = useState("Positive");
  const [negetiveSentiment, setnegetiveSentiment] = useState("Positive");

  useEffect(async () => {
    if (currentSelection != selectedProduct) {
      if (selectedProduct == 1) {
        setProductName("Smart Watch");
        // setsummary(OriginalSourceData.data[0].Summary);
        // setComment(OriginalSourceData.data[0].user_comments);
        setpositiveSentiment(OriginalSourceData.data[0].Summary);
        // setpositiveSentiment(OriginalSourceData.data[1].Summary);
      } else if (selectedProduct == 2) {
        setProductName("Wireless Earbud");
        setpositiveSentiment(OriginalSourceData.data[1].Summary);
        // setpositiveSentiment(OriginalSourceData.data[3].Summary);
      } else if (selectedProduct == 3) {
        setProductName("Portable Speaker");
        setpositiveSentiment(OriginalSourceData.data[2].Summary);
        // setpositiveSentiment(OriginalSourceData.data[5].Summary);
      }

      setcurrentSelection(selectedProduct);
    }
  });

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "black.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset",
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="4xl"
        mt="10px"
        mb="4px"
        align={"left"}
      >
        Summary of the Product : {productName}
      </Text>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="2px"
        align={"left"}
      >
        : Sentiment Summary
      </Text>
      <Text
        align={"left"}
        color={textColorSecondary}
        fontSize="5xl"
        me="26px"
        mb="40px"
        marginLeft={0}
      >
        {"Product " + positiveSentiment}
        {/* As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all... */}
      </Text>

      {/* <SimpleGrid columns="2" gap="20px">
        <Information
          boxShadow={cardShadow}
          title="Action on Review"
          value="Here is the standard Action to be taken on Review by Customer"
        />
        <Information
          boxShadow={cardShadow}
          title="Action on Complain"
          value="Here is the standard Action to be taken on Complain by Customer"
        />
      </SimpleGrid> */}
    </Card>
  );
}
