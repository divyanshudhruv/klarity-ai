"use client";
import {
  Text,
  Column,
  Row,
  Flex,
  Media,
  SegmentedControl,
  Scroller,
  Icon,
  Button,
  Fade,
  Input,
  IconButton,
  DateRangeInput,
  Select,
  Option,
} from "@/once-ui/components";
import { Lexend, DM_Sans } from "next/font/google";
import React from "react";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
import "./css/actionable.css";
const thirdFont = Lexend({
  variable: "--font-third",
  subsets: ["latin"],
  display: "swap",
});

import { useState } from "react";
const font = {
  tertiary: thirdFont,
};
export default function Actionables() {
  const cardData = [
    {
      avatar:
        "https://th.bing.com/th/id/ODLS.c1b94e26-52d8-4d85-8faf-a367583929ce?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
      title: "Someone commented on your post.",
      description:
        "A user has commented on your post, providing feedback or insights that may require your attention. This interaction could be crucial for engagement.",
      urgency: "Low",
      summary:
        "A coding meme has been posted on the platform, and a user has commented on it. The comment provides feedback or insights that may require your attention. This interaction could be crucial for engagement.",
      automation: "Trigger notification",
      showAutomation: true, // Show automation section
      showUrgency: true, // Show urgency section
      showSummary: true, // Show summary section
      // Show summary section
    },
    {
      avatar: "https://assets.pipedream.net/s.v0/app_mWnhY4/logo/orig",
      title: "Someone replied to your message",
      description:
        "Someone has responded to your earlier message on gaming, providing insights, feedback that may require your attention. This interaction could be crucial.",
      urgency: "Medium",
      summary:
        "According to the latest updates, he asked for more information about minecraft and its features. Gaming enthusiasts are always looking for the latest updates and features in their favorite games, and this interaction could provide valuable insights.",
      automation: "Send follow-up email",
      showAutomation: true, // Show automation section
      showUrgency: true, // Show urgency section
      showSummary: true, // Show summary section
    },
    {
      avatar: "https://assets.pipedream.net/s.v0/app_OD5hL6/logo/orig",
      title: "Transaction completed successfully.",
      description:
        "Your transaction has been processed by the system, and all necessary actions have been taken to ensure its success. This includes verification, confirmation.",
      urgency: "High",
      summary:
        "This summary provides detailed information about the context and background of the actionables discussed in this thread. It elaborates on the key points, highlights the main objectives, and provides a comprehensive overview of the situation to ensure clarity and understanding for all stakeholders involved.",
      automation: "Generate receipt",
      showAutomation: true, // Show automation section
      showUrgency: true, // Show urgency section
      showSummary: true, // Show summary section
    },
    {
      avatar:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      title: "Someone assigned you an issue.",
      description:
        " The issue is related to a project you are working on, and it requires your attention and action to resolve it.",
      urgency: "Critical",
      summary:
        "Issue #12345 has been assigned to you. It requires immediate attention and resolution. Please review the details and take necessary actions to address the issue promptly, ensuring that all relevant stakeholders are informed and involved in the resolution process.",
      automation: "Generate receipt",
      showAutomation: true, // Show automation section
      showUrgency: true, // Show urgency section
      showSummary: true, // Show summary section
    },
    {
      avatar: "https://assets.pipedream.net/s.v0/app_13Gh2V/logo/orig",
      title: "Someone booked a meeting with you.",
      description:
        "A meeting has been scheduled with you by a user on the platform. The meeting details include the date, time, and agenda, which require your attention and action to prepare for the meeting.",
      urgency: "High",
      summary:
        "User has booked a meeting with you on [Date] at [Time]. The agenda includes [Agenda Details]. Please prepare accordingly and ensure that all necessary materials are ready for discussion during the meeting.",
      automation: "Generate receipt",
      showAutomation: true, // Show automation section
      showUrgency: true, // Show urgency section
      showSummary: true, // Show summary section
    },
  ];

  return (
    <Column
      fillWidth
      paddingX="xl"
      fitHeight
      gap="16"
      marginBottom="20"
      className="actionables-section"
    >
      <SearchControl></SearchControl>
      <Row fitWidth fitHeight horizontal="start" wrap={true} gap="20">
        {cardData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Row>
      <Row horizontal="center" fillWidth fitHeight>
        <Button
          fillWidth
          size="l"
          variant="secondary"
          style={{
            backgroundColor: "#F9F7F5",
            borderColor: "#E0E0E0",
            // borderWidth: "1px",
          }}
        >
          <Text variant="label-default-m">Load more</Text>
        </Button>
      </Row>
    </Column>
  );
}

const SearchControl: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };
  return (
    <Column gap="16" fillWidth fitHeight>
      <Row
        center
        fillWidth
        style={{ minWidth: "100%" }}
        className="container-s"
      >
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
      </Row>

      <Row
        vertical="center"
        horizontal="start"
        gap="20"
        className="search-subgroup"
        fillWidth
      >
        <DateRangeInput
          id="basic-date-range-example"
          startLabel=""
          endLabel=""
          value={{
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
          }}
          style={{
            maxHeight: "36px",
            minHeight: "36px",
          }}
          Dstyle={{ width: "fit-content" }}
          onChange={() => {}}
          className="date-range-input"
        />
        <Flex center className="select-container">
          <Select
            height="s"
            style={{ width: "180px" }}
            id="basic-select"
            hasSuffix={
              <Text onBackground="neutral-medium">
                <i className="ri-arrow-down-s-line"></i>
              </Text>
            }
            label="Sort by activity"
            options={[
              { label: "Critical Urgency", value: "critical" },
              { label: "High Priority", value: "high_priority" },
              { label: "Actionable", value: "actionable" },
              { label: "Information Only", value: "info_only" },

              // Item Type
              { label: "Task", value: "task" },
              { label: "Note", value: "note" },

              // Status
              { label: "Pending", value: "pending" },
              { label: "Completed", value: "completed" },
              { label: "Reviewed", value: "reviewed" },

              // Source Platform (Conceptual)
              { label: "LinkedIn", value: "linkedin" },
              { label: "Gmail", value: "gmail" },
              { label: "WhatsApp", value: "whatsapp" },
              { label: "Discord", value: "discord" },
              { label: "Slack", value: "slack" },
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
          className="layout-container"
        >
          <Option
            key={"grid"}
            selected={true}
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
        <Flex
          center
          maxWidth={8}
          vertical="center"
          horizontal="center"
          className="create-new-button"
        >
          {" "}
          <Button fillWidth style={{ minHeight: "46px", maxHeight: "46px" }}>
            <Text variant="label-default-m">
              Create new{" "}
              <i
                className="ri-arrow-right-s-line"
                style={{ fontSize: "16px" }}
              ></i>
            </Text>
          </Button>
        </Flex>
        <Flex
          center
          vertical="center"
          horizontal="center"
          className="ai-assistant-button"
        >
          <Button fillWidth style={{ minHeight: "46px", maxHeight: "46px" }}>
            <Text variant="label-default-m">
              AI Assistant{" "}
              <i
                className="ri-arrow-down-s-line"
                style={{ fontSize: "16px" }}
              ></i>
            </Text>
          </Button>
        </Flex>
      </Row>
    </Column>
  );
};
type CardProps = {
  avatar: string;
  title: string;
  description: string;
  urgency: string;
  summary: string;
  automation: string;
  showAutomation?: boolean; // Optional prop to control automation visibility
  showSummary?: boolean; // Optional prop to control summary visibility
  showUrgency?: boolean; // Optional prop to control urgency visibility
};

const Card: React.FC<CardProps> = ({
  avatar,
  title,
  description,
  urgency,
  summary,
  automation,
  showAutomation = false, // Default to false if not provided
  showSummary = false, // Default to true if not provided
  showUrgency = false, // Default to true if not provided
}) => (
  <Column
    border="neutral-medium"
    borderStyle="solid"
    horizontal="center"
    gap="128"
    vertical="center"
    fitWidth
    className="workflow-row"
    fitHeight
    radius="xl"
    style={{ backgroundColor: "#F9F7F5", maxWidth: "73vw !important" }}
    wrap={true}
    paddingY="16"
    paddingX="16"
  >
    <Column
      fillWidth
      fillHeight
      paddingY="8"
      maxHeight={28.2}
      minHeight={28.2}
      paddingX="8"
      width={25}
      horizontal="start"
      zIndex={10}
      overflow="hidden"
      className="workflow-card"
    >
      <Column vertical="center" horizontal="start" gap="12" marginBottom="8">
        <Flex
          width={2.5}
          height={2.5}
          background="neutral-strong"
          radius="m"
          center
        >
          <Media src={avatar} unoptimized width={1.6} height={1.6}></Media>
        </Flex>
        <Text
          variant="label-strong-l"
          className={font.tertiary.className}
          marginBottom="8"
          onBackground="neutral-strong"
        >
          {title}
        </Text>
        <Text
          variant="label-default-xs"
          className={dmSans.className}
          onBackground="neutral-weak"
          style={{ fontSize: "14px", letterSpacing: "-0.5px !important" }}
        >
          {description}
        </Text>
      </Column>
      <Flex fillWidth height={1}></Flex>
      <Column
        fillWidth
        fitHeight
        style={{
          overflowY: "scroll",
          position: "absolute",
          top: "40%",
          maxHeight: "60%",
          minHeight: "60%",
        }}
        className="actionable-details"
      >
        <Column
          fillWidth
          fitHeight
          style={{
            backgroundColor: "#F0EEEC",
            maxHeight: "fit-content",
            overflowY: "scroll",
          }}
          border="neutral-strong"
          borderStyle="solid"
          borderWidth={1}
          radius="s"
          paddingX="12"
          paddingY="12"
          paddingBottom="0"
        >
          {showUrgency && (
            <Column gap="12" marginBottom="m">
              <Row>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  <i className="ri-info-card-line"></i>&nbsp;Urgency
                </Text>
              </Row>
              <Row
                fillWidth
                height={4}
                style={{ backgroundColor: "#fff" }}
                radius="m"
                vertical="center"
                horizontal="start"
                padding="8"
                paddingLeft="12"
              >
                <Flex
                  width={2}
                  height={2}
                  background="brand-weak"
                  border="neutral-medium"
                  borderStyle="solid"
                  radius="m"
                  center
                >
                  <Icon name="info" onBackground="warning-medium" size="s" />
                </Flex>
                <Column paddingLeft="8">
                  <Text
                    onBackground="neutral-strong"
                    variant="label-default-s"
                    className={lexend.className}
                  >
                    {urgency}
                  </Text>
                  <Text
                    onBackground="neutral-weak"
                    variant="label-default-s"
                    className={lexend.className}
                  >
                    Action
                  </Text>
                </Column>
              </Row>
            </Column>
          )}
          {showSummary && (
            <Column gap="12" marginBottom="m">
              <Row>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  <i className="ri-tree-line"></i>&nbsp;Summary
                </Text>
              </Row>
              <Column
                fillWidth
                fitHeight
                style={{ backgroundColor: "#fff" }}
                radius="m"
                vertical="start"
                horizontal="start"
                padding="12"
              >
                <Text
                  onBackground="neutral-medium"
                  variant="label-default-s"
                  className={dmSans.className}
                  style={{ lineHeight: "1.35" }}
                >
                  {summary}
                </Text>
              </Column>
            </Column>
          )}
          {showAutomation && (
            <Column gap="12" marginBottom="s">
              <Row>
                <Text variant="label-default-s" onBackground="neutral-medium">
                  <i className="ri-robot-3-line"></i>&nbsp;Automation
                </Text>
              </Row>
              <Row
                fillWidth
                height={4}
                style={{ backgroundColor: "#fff" }}
                radius="m"
                vertical="center"
                horizontal="start"
                padding="8"
                paddingLeft="12"
              >
                <Flex
                  width={2}
                  height={2}
                  border="neutral-medium"
                  borderStyle="solid"
                  radius="m"
                  center
                >
                  <Flex style={{ scale: "0.3" }}>
                    <Media
                      src="https://logos-world.net/wp-content/uploads/2020/11/Gmail-Logo.png"
                      unoptimized
                      width={5}
                      height={3}
                    ></Media>
                  </Flex>
                </Flex>
                <Column paddingLeft="8">
                  <Text
                    onBackground="neutral-strong"
                    variant="label-default-s"
                    className={lexend.className}
                  >
                    {automation}
                  </Text>
                  <Text
                    onBackground="neutral-weak"
                    variant="label-default-s"
                    className={lexend.className}
                  >
                    Action
                  </Text>
                </Column>
              </Row>
            </Column>
          )}
        </Column>
      </Column>
    </Column>
  </Column>
);
