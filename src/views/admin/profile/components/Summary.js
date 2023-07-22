// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function Summary(props) {
  const { ...rest } = props;
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
        Summary of the Product : XYZ
      </Text>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="2px"
        align={"left"}
      >
        :Positive Sentiment Summary
      </Text>
      <Text
        align={"left"}
        color={textColorSecondary}
        fontSize="2xl"
        me="26px"
        mb="40px"
        marginLeft={0}
      >
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </Text>
      <Text
        color={textColorPrimary}
        fontWeight="bold"
        fontSize="2xl"
        mt="10px"
        mb="2px"
        align={"left"}
      >
        : Negetive Sentiment Summary
      </Text>
      <Text
        align={"left"}
        color={textColorSecondary}
        fontSize="2xl"
        me="26px"
        mb="40px"
        marginLeft={0}
      >
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
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
