"use client";
import {
  Text,
  Button,
  Column,
  Badge,
  Row,
  Flex,
  Media,
} from "@/once-ui/components";
import { Lexend, Poppins, DM_Sans, Lora } from "next/font/google";
import localFont from "next/font/local";
const tiempos = localFont({
  src: "../../fonts/tiempos/TestTiemposText-Regular-BF66457a50cd521.otf",
  weight: "100",
  style: "normal",
});
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  return (
    <Column
      vertical="start"
      horizontal="center"
      fillWidth
      fitHeight
      paddingX="56"
      paddingY="64"
      paddingBottom="32"
    >
      <Badge
        id="badge-1"
        effect={true}
        arrow={false}
        paddingX="12"
        paddingY="8"
        textVariant="label-default-xl"
        zIndex={9}
      >
        <Text className={dmSans.className} onBackground="neutral-medium">
          Over 200+ integrations | Explore more{" "}
          <i className="ri-arrow-right-s-line"></i>
        </Text>
      </Badge>
      <Flex height={1} fillWidth></Flex>
      <Column
        horizontal="center"
        vertical="start"
        fillWidth
        paddingY="12"
        maxWidth={60}
        gap="32"
      >
        <Text
          className={tiempos.className}
          onBackground="neutral-strong"
          style={{ fontSize: "70px", color: "#171717" }}
        >
          <center>Transform Digital Noise. Gain Actionable Klarity Now.</center>
        </Text>
        <Flex maxWidth={45} fillWidth>
          {" "}
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            className={lexend.className}
            style={{ fontWeight: "lighter", lineHeight: "1.5" }}
          >
            <center>
              Klarity-AI uses intelligent automation to parse your digital
              communications into clear, actionable insights, ensuring urgent
              work never slips through the cracks.
            </center>
          </Text>
        </Flex>
        <Button
          variant="primary"
          size="l"
          style={{ paddingInline: "50px", paddingBlock: "25px" }}
          className={poppins.className}
          onClick={() => (window.location.href = "/o/dashboard")}
        >
          <Text variant="label-default-xl">Start for free</Text>
        </Button>
        <Row gap="16" marginTop="12">
          <Media
            src="https://app.wordware.ai/producthunt-badge-featured.svg"
            width={13.95}
            height={3}
          ></Media>
          <Media
            src="https://app.wordware.ai/producthunt-badge-year.svg"
            width={12.8}
            height={2.8}
          ></Media>
        </Row>
        <Row gap="8" center>
          {" "}
          <Media
            src="https://app.wordware.ai/icons/ycombinator.svg"
            width={1.5}
            height={1.5}
            radius="s"
          ></Media>{" "}
          <Text variant="label-default-s" onBackground="neutral-weak">
            Backed by YC
          </Text>
        </Row>
      </Column>
    </Column>
  );
}
