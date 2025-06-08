"use client";
import {
  Text,
  Column,
  Row,
  Flex,
  Media,
  SegmentedControl,
  Scroller,
  Accordion,
  AccordionGroup,
  Button,
  Line,
  IconButton,
  SmartLink,
} from "@/once-ui/components";
import { Lexend, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
const tiempos = localFont({
  src: "../../fonts/tiempos/TestTiemposText-Regular-BF66457a50cd521.otf",
  weight: "100",
  style: "normal",
});
import "./css/footer.css";
export default function Footer() {
  return (
    <Column
      center
      fillWidth
      fitHeight
      gap="12"
      marginTop="64"
      paddingY="64"
      style={{ backgroundColor: "#1D1D1D" }}
    >
      <Text
        className={tiempos.className}
        variant="heading-default-xl"
        style={{
          fontSize: "54px",
          lineHeight: "1.2",
          textAlign: "center",
          color: "#FAF8F6",
        }}
      >
        Boost your <br />
        productivity today
      </Text>
      <Flex fillWidth height={1}></Flex>
      <Button
        size="m"
        variant="secondary"
        style={{ backgroundColor: "#FAF8F6" }}
      >
        <Text variant="label-default-xl">Start automating today</Text>
      </Button>
      <Text
        className={`footer-text ` + tiempos.className}
        variant="heading-default-xl"
        style={{
          fontSize: "180px",
          lineHeight: "1.2",
          marginTop: "-24px",
          textAlign: "center",
          color: "#363636",
        }}
      >
        klarity-ai
      </Text>
      <Row
        vertical="center"
        horizontal="start"
        fillWidth
        maxWidth={50}
        gap="12"
        className="footer-links"
      >
        <SmartLink
          href="https://github.com/divyanshudhruv/klarity-ai"
          target="_blank"
        >
          <Text
            style={{ color: "#ddd" }}
            className={lexend.className}
            variant="label-default-s"
          >
            <u>Start automating</u>
          </Text>
        </SmartLink>
        <SmartLink
          href="https://github.com/divyanshudhruv/klarity-ai"
          target="_blank"
        >
          <Text
            style={{ color: "#A6A6A6" }}
            className={lexend.className}
            variant="label-default-s"
          >
            Github
          </Text>
        </SmartLink>
        <SmartLink
          href="https://github.com/divyanshudhruv/klarity-ai"
          target="_blank"
        >
          <Text
            style={{ color: "#A6A6A6" }}
            className={lexend.className}
            variant="label-default-s"
          >
            Special thanks
          </Text>
        </SmartLink>
      </Row>
      <Flex
        style={{ backgroundColor: "#363636", color: "#363636", height: "2px" }}
        maxWidth={50}
        marginTop="16"
        marginBottom="16"
      ></Flex>

      <Row
        vertical="center"
        horizontal="space-between"
        fitWidth
        minWidth={50}
        maxWidth={50}
        wrap={true}
        className="footer-bottom-text"
      >
        <Row>
          <Text variant="label-default-s" onBackground="neutral-weak">
            © 2025 klarity-ai. All rights reserved. &nbsp;&nbsp;
            <SmartLink href="/privacy-policy" style={{ color: "#757575" }}>
              <u>Privacy Policy</u>
            </SmartLink>
            &nbsp;&nbsp;
            <SmartLink href="/t-and-c" style={{ color: "#757575" }}>
              <u>Terms and Conditions</u>
            </SmartLink>
          </Text>
        </Row>
        <Row>
          <IconButton variant="ghost">
            <i
              className="ri-linkedin-fill"
              style={{ scale: "1.2", color: "#A6A6A6" }}
            ></i>
          </IconButton>
          <IconButton variant="ghost">
            <i
              className="ri-github-fill"
              style={{ scale: "1.2", color: "#A6A6A6" }}
            ></i>
          </IconButton>
          <IconButton variant="ghost">
            <i
              className="ri-book-line"
              style={{ scale: "1.1", color: "#A6A6A6" }}
            ></i>
          </IconButton>
        </Row>
      </Row>
    </Column>
  );
}
