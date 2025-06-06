"use client";
import {
  Text,
  Button,
  Column,
  Badge,
  Row,
  Flex,
  Media,
  Input,
  Icon,
} from "@/once-ui/components";
import { Lexend, Poppins, DM_Sans, Lora } from "next/font/google";
import localFont from "next/font/local";

const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  return (
    <Column vertical="center" horizontal="center" fillHeight fillWidth>
      <Column
        width={30}
        fitHeight
        border="neutral-medium"
        borderStyle="solid"
        radius="l"
        padding="l"
        gap="12"
        style={{scale:"0.8"}}
      >
        <Text
          variant="heading-strong-xl"
          style={{ fontSize: "29px" }}
          className={lexend.className}
        >
          Sign In
        </Text>
        <Text
          variant="body-default-xl"
          onBackground="neutral-medium"
          className={lexend.className}
        >
          Create a free Klarity account
        </Text>
        <Input
          id="input-1"
          placeholder="Enter your email"
          height="l"
          style={{
            marginTop: "16px",
            height: "52px !important",
          }}
          size={32}
        />
        <Button size="l" variant="primary" fillWidth>
          <Text variant="label-default-xl" className={lexend.className}>
            <i className="ri-mail-line"></i>&nbsp;&nbsp;Send me a magic link
          </Text>
        </Button>
        <Row fillWidth center>
          {" "}
          <Text
            variant="label-default-xl"
            className={lexend.className}
            onBackground="neutral-weak"
          >
            OR CONTINUE WITH
          </Text>
        </Row>
        <Button size="l" variant="secondary" fillWidth>
          <Row center>
            {" "}
            <Media
              src="https://companieslogo.com/img/orig/google-9646e5e7.png?t=1700059830"
              width={1.1}
              height={1.1}
              unoptimized
            ></Media>
            &nbsp;&nbsp;
            <Text variant="heading-default-s" className={lexend.className}>
              Google
            </Text>
          </Row>
        </Button>
      </Column>
    </Column>
  );
}
