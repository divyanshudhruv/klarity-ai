"use client";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  Row,
  Flex,
  SmartLink,
  Tag,
  AutoScroll,
  Fade,
  Media,
  SegmentedControl,
  Scroller,
} from "@/once-ui/components";
import { MegaMenu } from "@/once-ui/modules";
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
const lora = Lora({ subsets: ["latin"], weight: ["400", "700"] });

export default function Hero() {
  return (
    <Column
      vertical="start"
      horizontal="center"
      fitHeight
      fillWidth
      paddingX="56"
      paddingY="64"
    >
      <Badge
        id="badge-1"
        effect={true}
        arrow={false}
        paddingX="12"
        paddingY="8"
        textVariant="label-default-xl"
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
        <Flex maxWidth={45}>
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
        >
          <Text variant="label-default-xl">Start for free</Text>
        </Button>
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
      <Column
        center
        fillWidth
        fillHeight
        gap="12"
        marginTop="32"
        maxWidth={100}
      >
        {" "}
        <Flex maxWidth={30} fillWidth height={6} maxHeight={6} center>
          {" "}
          <SegmentedControl
            buttons={[
              { value: "a", label: "For work" },
              { value: "b", label: "In Life" },
              { value: "c", label: "For Research" },
            ]}
            defaultSelected="a"
            onToggle={(value) => console.log(value)}
          />
        </Flex>
        <Flex
          center
          border="neutral-medium"
          borderStyle="dashed"
          fillWidth
          fillHeight
          radius="m"
          padding="m"
        >
          <Row
            horizontal="center"
            vertical="center"
            fillWidth
            fillHeight
            radius="xl"
            style={{ backgroundColor: "#F0EEEC" }}
            wrap={true}
          >
            <Column fillWidth fillHeight width={30}>
              {" "}
              <Scroller direction="column" fillHeight paddingBottom="0">
                {" "}
                <Column
                  fitHeight
                  paddingLeft="64"
                  paddingTop="64"
                  paddingRight="2"
                >
                  <Text
                    variant="heading-default-l"
                    className={lexend.className}
                    marginBottom="8"
                  >
                    Describe Once, Automate Forever
                  </Text>
                  <Text
                    variant="label-default-xs"
                    className={dmSans.className}
                    onBackground="neutral-weak"
                    style={{ fontSize: "15px" }}
                  >
                    Klarity-AI transforms messages, chats, and emails into
                    precise, actionable to-dos. Your digital communications,
                    instantly clarified.
                    <br />
                    <br />
                    • Convert emails and messages into to-do lists and notes
                    <br />
                    • Connect 5+ apps and data sources
                    <br />
                    • Let AI make smart decisions based on your rules
                    <br />
                    <br />
                    From lead qualification to customer support, describe what
                    you need and watch as Wordware handles the rest.
                  </Text>
                  <Flex fillWidth height={2}></Flex>
                  <Column gap="12">
                    <Row>
                      <Text
                        variant="label-default-xl"
                        onBackground="neutral-medium"
                      >
                        <i className="ri-open-source-line"></i>&nbsp;Trigger
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
                        <Text onBackground="neutral-medium">
                          <i className="ri-mail-line"></i>
                        </Text>
                      </Flex>
                      <Column paddingLeft="8">
                        <Text
                          onBackground="neutral-strong"
                          variant="label-default-s"
                          className={lexend.className}
                        >
                          New message (instant)
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
                  <Flex fillWidth height={2}></Flex>
                  <Column gap="12">
                    <Row>
                      <Text
                        variant="label-default-xl"
                        onBackground="neutral-medium"
                      >
                        <i className="ri-magic-line"></i>&nbsp;Automate
                      </Text>
                    </Row>
                    <Column>
                      <Row
                        fillWidth
                        height={4}
                        style={{ backgroundColor: "#fff" }}
                        topRadius="m"
                        vertical="center"
                        horizontal="start"
                        padding="8"
                        paddingLeft="12"
                      >
                        <Flex
                          width={2}
                          height={2}
                          background="accent-medium"
                          radius="m"
                          center
                        >
                          <Text onBackground="accent-medium">
                            <i className="ri-robot-line"></i>
                          </Text>
                        </Flex>
                        <Column paddingLeft="8">
                          <Text
                            onBackground="neutral-strong"
                            variant="label-default-s"
                            className={lexend.className}
                          >
                            NLP processing
                          </Text>
                          <Text
                            onBackground="neutral-weak"
                            variant="label-default-s"
                            className={lexend.className}
                          >
                            LLMs
                          </Text>
                        </Column>
                      </Row>
                      <Row
                        fillWidth
                        height={4}
                        style={{ backgroundColor: "#fff" }}
                        vertical="center"
                        horizontal="start"
                        padding="8"
                        paddingLeft="12"
                      >
                        <Flex
                          width={2}
                          height={2}
                          background="brand-medium"
                          radius="m"
                          center
                        >
                          <Text onBackground="brand-medium">
                            <i className="ri-pencil-line"></i>
                          </Text>
                        </Flex>
                        <Column paddingLeft="8">
                          <Text
                            onBackground="neutral-strong"
                            variant="label-default-s"
                            className={lexend.className}
                          >
                            To-do creation
                          </Text>
                          <Text
                            onBackground="neutral-weak"
                            variant="label-default-s"
                            className={lexend.className}
                          >
                            Task Management
                          </Text>
                        </Column>
                      </Row>{" "}
                      <Row
                        fillWidth
                        height={4}
                        style={{ backgroundColor: "#fff" }}
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
                          <Flex
                            width={2}
                            height={2}
                            background="accent-medium"
                            radius="m"
                            center
                          >
                            <Text onBackground="accent-medium">
                              <i className="ri-supabase-line"></i>
                            </Text>
                          </Flex>
                        </Flex>
                        <Column paddingLeft="8">
                          <Text
                            onBackground="neutral-strong"
                            variant="label-default-s"
                            className={lexend.className}
                          >
                            Save to cloud storage
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
                      <Row
                        fillWidth
                        height={4}
                        style={{ backgroundColor: "#fff" }}
                        vertical="center"
                        horizontal="start"
                        padding="8"
                        paddingLeft="12"
                        bottomRadius="m"
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
                            Send high priority emails
                          </Text>
                          <Text
                            onBackground="neutral-weak"
                            variant="label-default-s"
                            className={lexend.className}
                          >
                            Automation
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Scroller>
            </Column>

            <Flex
              maxWidth={63}
              width={63}
              vertical="center"
              height={48}
              paddingLeft="64"
              horizontal="end"
              overflow="hidden"
            >
              <Media
                src="https://cdn.dribbble.com/userupload/43497398/file/original-ca1c8327bd8dcfb55bddfe9f8169f2e6.png?resize=1024x768&vertical=center"
                unoptimized
                fillHeight
                topLeftRadius="xl"
                bottomLeftRadius="xl"
                fillWidth
                width={70}
                height={45}
              />
            </Flex>
          </Row>
        </Flex>
      </Column>
    </Column>
  );
}
