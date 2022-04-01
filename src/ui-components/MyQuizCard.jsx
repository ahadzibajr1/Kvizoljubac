/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Image, Text } from "@aws-amplify/ui-react";
export default function MyQuizCard(props) {
  const { defaultImage, quiz, btnLabel, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="250px"
      height="280px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="15px"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(242,78,30,1)"
      {...rest}
      {...getOverrideProps(overrides, "MyQuizCard")}
    >
      <Image
        width="250px"
        height="153px"
        shrink="0"
        position="relative"
        borderRadius="15px 15px 0px 0px"
        padding="0px 0px 0px 0px"
        src={quiz?.image && quiz?.image != "null" ? quiz?.image : defaultImage}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="16px"
        direction="column"
        width="235px"
        height="129px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        borderRadius="20px"
        padding="10px 17px 20px 17px"
        backgroundColor="rgba(252,161,93,1)"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="201px"
          height="66px"
          shrink="0"
          position="relative"
          padding="8px 0px 0px 0px"
          {...getOverrideProps(overrides, "Main Text")}
        >
          <Text
            fontFamily="Ubuntu"
            fontSize="18px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={quiz?.title}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Ubuntu"
            fontSize="14px"
            fontWeight="500"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0px"
            height="20px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={quiz?.difficulty}
            {...getOverrideProps(overrides, "Difficulty")}
          ></Text>
        </Flex>
        <Button
          display="flex"
          gap="0"
          direction="row"
          width="205px"
          height="28px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          border="1px SOLID rgba(0,0,0,0)"
          borderRadius="4px"
          padding="7px 15px 7px 15px"
          backgroundColor="rgba(242,78,30,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children={btnLabel}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
