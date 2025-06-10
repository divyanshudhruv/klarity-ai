"use client";
import {
  Button,
  Column,
  Flex,
  Icon,
  IconButton,
  Input,
  Media,
  Row,
  Text,
  useToast,
} from "@/once-ui/components";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Lexend, DM_Sans } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
export default function Connections() {
  const { addToast } = useToast();
  const [connectionsData, setConnectionsData] = useState([
    {
      title: "Gmail",
      logo: "https://www.svgrepo.com/download/381000/new-logo-gmail.svg",
      href: "",
      description: "Connect your Gmail account",
      connection: false,
      id: "gmail",
    },
    {
      title: "Whatsapp",
      logo: "https://assets.pipedream.net/s.v0/app_mWnhY4/logo/orig",
      href: "",
      description: "Connect your Whatsapp account",
      connection: false,
      id: "whatsapp",
    },
    {
      title: "Sheets",
      logo: "https://assets.pipedream.net/s.v0/app_168hvn/logo/orig",
      href: "",
      description: "Connect your Sheets account",
      connection: false,
      id: "sheets",
    },
    {
      title: "Airtable",
      logo: "https://assets.pipedream.net/s.v0/app_XBxhAl/logo/orig",
      href: "",
      description: "Connect your Airtable account",
      connection: false,
      id: "airtable",
    },
    {
      title: "Calendar",
      logo: "https://assets.pipedream.net/s.v0/app_13Gh2V/logo/orig",
      href: "",
      description: "Connect your Calendar account",
      connection: false,
      id: "calendar",
    },
    {
      title: "Telegram",
      logo: "https://assets.pipedream.net/s.v0/app_OD5hL6/logo/orig",
      href: "",
      description: "Connect your Telegram account",
      connection: false,
      id: "telegram",
    },
    {
      title: "Slack",
      logo: "https://assets.pipedream.net/s.v0/app_OkrhR1/logo/orig",
      href: "",
      description: "Connect your Slack account",
      connection: false,
      id: "slack",
    },
    {
      title: "Github",
      logo: "https://logoeps.com/wp-content/uploads/2014/05/37318-github-logo-icon-vector-icon-vector-eps.png",
      href: "",
      description: "Connect your Github account",
      connection: false,
      id: "github",
    },

    {
      title: "Trello",
      logo: "https://assets.pipedream.net/s.v0/app_168hnX/logo/orig",
      href: "",
      description: "Connect your Trello account",
      connection: false,
      id: "trello",
    },

    {
      title: "Notion",
      logo: "https://assets.pipedream.net/s.v0/app_X7Lhxr/logo/orig",
      href: "",
      description: "Connect your Notion account",
      connection: false,
      id: "notion",
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
    <Column
      center
      fillWidth
      width={100}
      fitHeight
      radius="m"
      style={{ maxWidth: "82vw" }}
      paddingX="16"
      gap="16"
    >
      <SearchBar></SearchBar>
      <Row fillWidth fitHeight horizontal="start" wrap={true} gap="16">
        {connectionsData.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </Row>
    </Column>
  );
}

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <Flex fillWidth fitHeight center>
      <Row center fillWidth style={{ minWidth: "100%" }}>
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
    </Flex>
  );
}
type CardProps = {
  logo: string;
  title: string;
  description: string;
  href: string;
};

const Card: React.FC<CardProps> = ({ logo, title, description, href = "" }) => (
  <Column
    border="neutral-medium"
    borderStyle="solid"
    horizontal="center"
    gap="128"
    vertical="space-between"
    fitWidth
    fitHeight
    radius="xl"
    wrap={true}
    paddingY="16"
    paddingX="16"
  >
    <Column
      fillWidth
      fitHeight
      paddingY="8"
      paddingX="8"
      maxWidth={18}
      width={18}
      horizontal="start"
      zIndex={10}
    >
      <Column
        vertical="center"
        horizontal="start"
        gap="12"
        marginBottom="8"
        fitHeight
      >
        <Flex
          width={2.5}
          height={2.5}
          background="neutral-medium"
          radius="m"
          center
          border="neutral-strong"
          borderStyle="dashed"
        >
          <Media src={logo} unoptimized width={1.6} height={1.6}></Media>
        </Flex>
        <Column>
          <Text
            variant="label-strong-l"
            className={lexend.className}
            marginBottom="8"
            onBackground="neutral-strong"
          >
            {title}
          </Text>
          <Text
            variant="label-default-xs"
            className={dmSans.className}
            onBackground="neutral-weak"
            style={{ fontSize: "15px", letterSpacing: "-0.5px !important" }}
          >
            {description}
          </Text>
        </Column>
      </Column>
      <Flex fillWidth height={1}></Flex>
    </Column>
    <Flex fillWidth fitHeight>
      <Button variant="primary" fillWidth size="l">
        <Text variant="label-default-s">Connect now</Text>
      </Button>
    </Flex>
  </Column>
);

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