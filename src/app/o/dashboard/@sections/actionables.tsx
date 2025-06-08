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
} from "@/once-ui/components";
import { Lexend, DM_Sans } from "next/font/google";
import React from "react";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Actionables() {
  const cardData = [
    {
      avatar:
        "https://th.bing.com/th/id/ODLS.c1b94e26-52d8-4d85-8faf-a367583929ce?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2",
      title: "Hassaan commented on your post.",
      description: "This is a brief comment related to your post.",
      urgency: "Low",
      summary:
        "This summary provides detailed information about the context and background of the actionables discussed in this thread. It elaborates on the key points, highlights the main objectives, and provides a comprehensive overview of the situation to ensure clarity and understanding for all stakeholders involved.",
      automation: "Trigger notification",
    },
    {
      avatar: "https://assets.pipedream.net/s.v0/app_mWnhY4/logo/orig",
      title: "Atharv replied to your message.",
      description: "A quick response to your earlier message.",
      urgency: "Medium",
      summary:
        "This summary provides detailed information about the context and background of the actionables discussed in this thread. It elaborates on the key points, highlights the main objectives, and provides a comprehensive overview of the situation to ensure clarity and understanding for all stakeholders involved.",
      automation: "Send follow-up email",
    },
    {
      avatar: "https://assets.pipedream.net/s.v0/app_OD5hL6/logo/orig",
      title: "Transaction completed successfully.",
      description: "Your transaction has been processed.",
      urgency: "High",
      summary:
        "This summary provides detailed information about the context and background of the actionables discussed in this thread. It elaborates on the key points, highlights the main objectives, and provides a comprehensive overview of the situation to ensure clarity and understanding for all stakeholders involved.",
      automation: "Generate receipt",
    },
  ];
  return (
    <Row fitWidth fitHeight center wrap={true} gap="20">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}

      
    </Row>
  );
}

type CardProps = {
  avatar: string;
  title: string;
  description: string;
  urgency: string;
  summary: string;
  automation: string;
};

const Card: React.FC<CardProps> = ({
  avatar,
  title,
  description,
  urgency,
  summary,
  automation,
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
    style={{ backgroundColor: "#F9F7F5" }}
    wrap={true}
    paddingY="16"
    paddingX="16"
  >
    <Column
      fillWidth
      fillHeight
      paddingY="8"
      maxHeight={30}
      paddingX="8"
      width={26}
      horizontal="start"
      zIndex={10}
      overflow="hidden"
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
          className={dmSans.className}
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
        }}
      >
        <Scroller direction="column" fitHeight fillWidth>
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
            <Column gap="12" marginBottom="m">
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
          </Column>
        </Scroller>
      </Column>
    </Column>
  </Column>
);
