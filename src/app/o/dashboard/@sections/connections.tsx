"use client";
import { Column, Flex, Media, Row, Text, useToast } from "@/once-ui/components";
import React, { useState } from "react";
import { Lexend, DM_Sans } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function Connections() {
  const { addToast } = useToast();
  const [connectionsData, setConnectionsData] = useState([
    {
      title: "Gmail",
      image_url: "https://www.svgrepo.com/download/381000/new-logo-gmail.svg",
      href: "",
      connection: false,
      id: "gmail",
    },
    {
      title: "Whatsapp",
      image_url: "https://assets.pipedream.net/s.v0/app_mWnhY4/logo/orig",
      href: "",
      connection: false,
      id: "whatsapp",
    },
    {
      title: "Telegram",
      image_url: "https://assets.pipedream.net/s.v0/app_OD5hL6/logo/orig",
      href: "",
      connection: false,
      id: "telegram",
    },
    {
      title: "Sheets",
      image_url: "https://assets.pipedream.net/s.v0/app_168hvn/logo/orig",
      href: "",
      connection: false,
      id: "sheets",
    },
    {
      title: "Airtable",
      image_url: "https://assets.pipedream.net/s.v0/app_XBxhAl/logo/orig",
      href: "",
      connection: false,
      id: "airtable",
    },
    {
      title: "Trello",
      image_url: "https://assets.pipedream.net/s.v0/app_168hnX/logo/orig",
      href: "",
      connection: false,
      id: "trello",
    },
    {
      title: "Github",
      image_url:
        "https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png",
      href: "",
      connection: false,
      id: "github",
    },
    {
      title: "Slack",
      image_url: "https://assets.pipedream.net/s.v0/app_OkrhR1/logo/orig",
      href: "",
      connection: false,
      id: "slack",
    },
    {
      title: "Notion",
      image_url: "https://assets.pipedream.net/s.v0/app_X7Lhxr/logo/orig",
      href: "",
      connection: false,
      id: "notion",
    },
    {
      title: "Calendar",
      image_url: "https://assets.pipedream.net/s.v0/app_13Gh2V/logo/orig",
      href: "",
      connection: false,
      id: "calendar",
    },
  ]);

  const toggleConnection = (id: string) => {
    setConnectionsData((prevData) =>
      prevData.map((connection) =>
        connection.id === id
          ? { ...connection, connection: !connection.connection }
          : connection
      )
    );
    addToast({
      variant: "success",
      message: `Connection for ${id} has been ${
        connectionsData.find((conn) => conn.id === id)?.connection
          ? "disconnected"
          : "connected"
      }`,
    });
  };

  return (
    <Flex
      center
      fillWidth
      width={100}
      fitHeight
      radius="m"
      style={{ maxWidth: "83vw" }}
    >
      <Column
        horizontal="start"
        vertical="start"
        fillWidth
        fitHeight
        radius="m"
        wrap={true}
        gap="16"
      >
        <Text
          style={{ fontSize: "45px" }}
          onBackground="neutral-strong"
          className={dmSans.className}
        >
          Connections
        </Text>
        <Row
          fillWidth
          wrap={true}
          fitHeight
          horizontal="start"
          vertical="center"
          gap="16"
        >
          {connectionsData.map((connection) => (
            <ConnectionsCard
              key={connection.id}
              title={connection.title}
              image_url={connection.image_url}
              href={connection.href}
              connection={connection.connection}
              id={connection.id}
              toggleConnection={toggleConnection}
            />
          ))}
        </Row>
      </Column>
    </Flex>
  );
}

const ConnectionsCard = ({
  title,
  image_url,
  href,
  connection,
  id,
  toggleConnection,
}: {
  title: string;
  image_url: string;
  href?: string;
  connection?: boolean;
  id: string;
  toggleConnection: (id: string) => void;
}) => {
  return (
    <Row
      fillWidth
      maxWidth={14}
      height={4}
      style={{
        backgroundColor: "#fff",
        transition: ".12 ease-in-out",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = "#f8f8f8";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "#fff";
      }}
      radius="m"
      vertical="center"
      horizontal="start"
      padding="8"
      paddingLeft="12"
      border="neutral-medium"
      borderStyle="solid"
      cursor="pointer"
      onClick={() => toggleConnection(id)}
      id={id}
    >
      <Flex
        width={2.5}
        height={2.5}
        border="neutral-medium"
        borderStyle="solid"
        radius="m"
        center
      >
        <Flex style={{ scale: "0.3" }}>
          <Media src={image_url} unoptimized width={5} height={5}></Media>
        </Flex>
      </Flex>
      <Column paddingLeft="8" horizontal="start">
        <Text
          onBackground="neutral-medium"
          variant="body-default-l"
          className={lexend.className}
        >
          {title}
        </Text>
        <Text
          onBackground={connection ? "success-weak" : "danger-medium"}
          variant="label-default-xs"
          className={lexend.className}
          style={{ fontSize: "11px", fontSmooth: "antialiased" }}
        >
          {connection ? "Connected" : "Not Connected"}
        </Text>
      </Column>
    </Row>
  );
};
