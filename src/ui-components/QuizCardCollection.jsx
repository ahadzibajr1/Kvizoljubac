/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { Quiz } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import MyQuizCard from "./MyQuizCard";
import { Collection } from "@aws-amplify/ui-react";
export default function QuizCardCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: Quiz,
        }).items;
  return (
    <Collection
      type="grid"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={8}
      templateColumns="1fr 1fr 1fr 1fr"
      autoFlow="row"
      alignItems="top"
      justifyContent="left"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "QuizCardCollection")}
    >
      {(item, index) => (
        <MyQuizCard
          quiz={item}
          height="auto"
          width="auto"
          margin="5px 2px 5px 2px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></MyQuizCard>
      )}
    </Collection>
  );
}
