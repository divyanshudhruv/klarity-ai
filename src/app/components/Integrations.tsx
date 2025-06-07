"use client";
import {
  Text,
  Button,
  Column,
  Row,
  Flex,
  AutoScroll,
  Media,
} from "@/once-ui/components";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
const tiempos = localFont({
  src: "../../fonts/tiempos/TestTiemposText-Regular-BF66457a50cd521.otf",
  weight: "100",
  style: "normal",
});
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });

export default function Integrations() {
  return (
    <Flex
      center
      border="neutral-medium"
      borderStyle="dashed"
      fillWidth
      fitHeight
      radius="m"
      padding="m"
      style={{ maxWidth: "93vw" }}
      
    >
      <Column
        horizontal="center"
        vertical="center"
        fillWidth
        fitHeight
        radius="xl"
        style={{ backgroundColor: "#F0EEEC", textAlign: "center" }}
        wrap={true}
        paddingY="64"
        gap="32"
      >
        <Text
          variant="heading-default-l"
          className={lexend.className}
          onBackground="neutral-medium"
        >
          Integrate with 5+ apps and services
        </Text>
        <Flex center paddingX="32">
          {" "}
          <Text
            className={tiempos.className}
            variant="heading-default-xl"
            style={{ fontSize: "60px", color: "#171717", lineHeight: "1" }}
          >
            Connect your favorite apps:
          </Text>
        </Flex>

        {/* <Fade
              base="overlay"
              fill
              position="absolute"
              width={20}
              left="0"
              leftRadius="xl"
              to="right"
              zIndex={10}
            />
            <Fade
              base="overlay"
              fill
              position="absolute"
              width={20}
              right="0"
              rightRadius="xl"
              to="left"
              zIndex={10}
            /> */}
        <AutoScroll
          direction="row"
          marginTop="32"
          zIndex={9}
          pause={false}
          overflowX="hidden"
        >
          <Row center style={{ maxWidth: "100%" }}>
            <Flex
              width={5}
              height={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
              minWidth={5}
              minHeight={5}
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_OQYhq7/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>
            <Flex
              width={5}
              height={5}
              minWidth={5}
              minHeight={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_168hvn/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>
            <Flex
              width={5}
              height={5}
              minWidth={5}
              minHeight={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_mWnhY4/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            {/* <Flex
              width={5}
              minWidth={5}
              minHeight={5}
              height={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_OD5hL6/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "} */}
            <Flex
              width={5}
              height={5}
              minWidth={5}
              minHeight={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_X7Lhxr/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            <Flex
              width={5}
              height={5}
              minWidth={5}
              minHeight={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_13Gh2V/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            <Flex
              width={5}
              minWidth={5}
              minHeight={5}
              height={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_mvNh0K/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            <Flex
              width={5}
              minWidth={5}
              minHeight={5}
              height={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_168hnX/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            <Flex
              width={5}
              minWidth={5}
              minHeight={5}
              height={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_X8PhGQ/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            <Flex
              width={5}
              height={5}
              minWidth={5}
              minHeight={5}
              radius="l"
              style={{ backgroundColor: "#fff" }}
              center
              marginRight="32"
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_OVWhPX/logo/orig"
                width={2.5}
                height={2.5}
                unoptimized
              ></Media>
            </Flex>{" "}
            {/* <Flex
            minWidth={5}
            minHeight={5}
            width={5}
            height={5}
            radius="l"
            style={{ backgroundColor: "#fff" }}
            center
            marginRight="32"
          >
            <Media
              src="https://assets.pipedream.net/s.v0/app_OkrhR1/logo/orig"
              width={2.5}
              height={2.5}
              unoptimized
            ></Media>
          </Flex>{" "}
          <Flex
            width={5}
            height={5}
            minWidth={5}
            minHeight={5}
            radius="l"
            style={{ backgroundColor: "#fff" }}
            center
            marginRight="32"
          >
            <Media
              src="https://assets.pipedream.net/s.v0/app_XBxhAl/logo/orig"
              width={2.5}
              height={2.5}
              unoptimized
            ></Media>
          </Flex> */}
          </Row>
        </AutoScroll>
        <Row center gap="16" marginTop="32" wrap={true} paddingX="40" fillWidth>
          <Button size="l">
            <Text variant="label-default-xl">View all 10 integration</Text>
          </Button>
          <Button
            size="l"
            variant="secondary"
            style={{ backgroundColor: "#fafafa" }}
          >
            <Text variant="label-default-xl">Add more</Text>
          </Button>
        </Row>
      </Column>
    </Flex>
  );
}
