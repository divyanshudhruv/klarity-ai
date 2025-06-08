"use client";
import {
  Text,
  Button,
  Column,
  Row,
  Flex,
  AutoScroll,
  Media,
  Scroller,
  Option,
  Input,
  IconButton,
  Icon,
  Select,
} from "@/once-ui/components";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
const tiempos = localFont({
  src: "../../../../fonts/tiempos/TestTiemposText-Regular-BF66457a50cd521.otf",
  weight: "100",
  style: "normal",
});
import { useEffect, useState } from "react";
import Actionables from "../@sections/actionables";
import Inbox from "../@sections/inbox";
import Alerts from "./../@sections/alerts";
import Insights from "../@sections/insights";
import Connections from "../@sections/connections";
import ActivityLog from "../@sections/activity-log";

const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
export default function ScrollerO() {
  const [selectedKey, setSelectedKey] = useState<string>("");
  type Section = {
    name: string;
    description: string;
    function: string | (() => void);
    href?: string; // Optional, used for navigation
  };

  const sections: Section[] = [
    {
      name: "My Actionables",
      description: "Manage tasks and notes effectively.",
      href: "#actionables",
      function: () => (window.location.hash = "actionables"),
    },
    {
      name: "Inbox Stream",
      description: "View all communications in one place.",
      href: "#inbox",
      function: () => (window.location.hash = "inbox"),
    },
    {
      name: "Urgent Alerts",
      description: "High-priority notifications and updates.",
      href: "#alerts",
      function: () => (window.location.hash = "alerts"),
    },
    {
      name: "Insight Library",
      description: "AI-generated summaries and insights.",
      href: "#insights",
      function: () => (window.location.hash = "insights"),
    },
    {
      name: "Connections",
      description: "Manage and integrate communication platforms.",
      href: "#connections",
      function: () => (window.location.hash = "connections"),
    },
    {
      name: "Activity Log",
      description: "Track items and actions with detailed records.",
      href: "#activity-log",
      function: () => (window.location.hash = "activity-log"),
    },
  ];
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <>
      <Column
        center
        // border="neutral-medium"
        // borderStyle="dashed"
        fillWidth
        fitHeight
        radius="m"
        paddingY="xs"
      >
        {" "}
        <Scroller
          fadeColor="transparent"
          overflowX="scroll"
          borderBottom="neutral-medium"
          borderStyle="solid"
          paddingX="l"
        >
          <Row horizontal="start" vertical="center" fitWidth>
            <Flex center fitWidth gap="16">
              {sections.map((section, index) => (
                <Option
                  key={index}
                  label={section.name}
                  description={section.description}
                  value={section.name.toLowerCase().replace(/\s+/g, "-")}
                  onClick={() => {
                    setSelectedKey(section.name);
                    if (typeof section.function === "string") {
                      window.location.href = section.function;
                    } else if (typeof section.function === "function") {
                      section.function();
                    }
                    setSearchValue(""); // Clear search value if needed
                  }}
                  selected={selectedKey === section.name}
                />
              ))}
            </Flex>
          </Row>
        </Scroller>
        <Flex fillWidth height={1}></Flex>
        <Row
          horizontal="start"
          vertical="center"
          fillWidth
          maxWidth={100}
          style={{ maxWidth: "1250px" }}
          paddingX="l"
          gap="16"
        >
          <Flex center style={{ minWidth: "60%", maxWidth: "60%" }}>
            {" "}
            <Input
              id="input-1"
              placeholder="Search cards"
              value={searchValue}
              onChange={handleChange}
              hasPrefix={<Icon name="search" size="xs" />}
              hasSuffix={
                searchValue.length > 0 ? (
                  <IconButton
                    variant="ghost"
                    icon="close"
                    size="s"
                    onClick={handleClear}
                    aria-label="Clear search"
                  />
                ) : null
              }
            />
          </Flex>
          <Flex center>
            <Select
              height="s"
              style={{ width: "200px" }}
              id="basic-select"
              label="Select as"
              options={[
                { label: "United States", value: "us" },
                { label: "Canada", value: "ca" },
                { label: "United Kingdom", value: "uk" },
                { label: "Australia", value: "au" },
              ]}
            />
          </Flex>
          <Flex
            fitWidth
            fitHeight
            border="neutral-medium"
            borderStyle="solid"
            gap="4"
            style={{ maxHeight: "46px", minHeight: "46px", padding: "4px" }}
            radius="m"
          >
            <Option
              key={"grid"}
              label={
                <Text onBackground="neutral-medium">
                  <i
                    className="ri-function-line"
                    style={{ fontSize: "17px" }}
                  ></i>
                </Text>
              }
              value="grid"
            />
            <Option
              key={"list"}
              label={
                <Text onBackground="neutral-strong">
                  <i className="ri-list-check" style={{ fontSize: "17px" }}></i>{" "}
                </Text>
              }
              value="list"
            />
          </Flex>
          <Flex center maxWidth={8} vertical="center" horizontal="center">
            {" "}
            <Button fillWidth style={{ minHeight: "46px", maxHeight: "46px" }}>
              <Text variant="label-default-m">
                Create new{" "}
                <i
                  className="ri-arrow-down-s-line"
                  style={{ fontSize: "16px" }}
                ></i>
              </Text>
            </Button>
          </Flex>
        </Row>
      </Column>
      <Column fillWidth fitHeight>
        {window.location.hash === "#actionables" ? <Actionables /> : null}
        {window.location.hash === "#inbox" ? <Inbox /> : null}
        {window.location.hash === "#alerts" ? <Alerts /> : null}
        {window.location.hash === "#insights" ? <Insights /> : null}
        {window.location.hash === "#connections" ? <Connections /> : null}
        {window.location.hash === "#activity-log" ? <ActivityLog /> : null}
      </Column>
    </>
  );
}
