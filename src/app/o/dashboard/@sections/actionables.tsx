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
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Actionables() {
  return (
    <>
      <Column
        border="neutral-strong"
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
          // background="accent-strong"
        >
          <Column
            vertical="center"
            horizontal="start"
            gap="12"
            marginBottom="8"
          >
            <Flex
              width={2.5}
              height={2.5}
              background="neutral-strong"
              radius="m"
              center
            >
              <Media
                src="https://th.bing.com/th/id/ODLS.c1b94e26-52d8-4d85-8faf-a367583929ce?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2"
                unoptimized
                width={1.6}
                height={1.6}
              ></Media>
            </Flex>
            <Text
              variant="label-strong-l"
              className={dmSans.className}
              marginBottom="8"
              onBackground="neutral-strong"
            >
              Hassaan Arshad replied to your comment.
            </Text>
            <Text
              variant="label-default-xs"
              className={dmSans.className}
              onBackground="neutral-weak"
              style={{ fontSize: "14px", letterSpacing: "-0.5px !important" }}
            >
              Divyanshu Dhruv Thanks buddy for the update. I will look into it
              and get back to you soon. Also please let me know if you need
              anything from my side. I am always here to help you out. If you
              have any questions or concerns, feel free to reach out to me.
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
            <Scroller
              direction="column"
              fitHeight
              fillWidth
              // background="accent-strong"
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
                <Column gap="12" marginBottom="m">
                  <Row>
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                      <Icon
                        name="info"
                        onBackground="warning-medium"
                        size="s"
                      />
                    </Flex>
                    <Column paddingLeft="8">
                      <Text
                        onBackground="neutral-strong"
                        variant="label-default-s"
                        className={lexend.className}
                      >
                        Information Only
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
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                      This is a summary of the actionables that are being
                      discussed in this thread. It provides a brief overview of
                      the key points and decisions made. It is intended to
                      provide a quick reference for those who may not have time
                      to read the entire thread. The summary should be concise
                      and to the point, highlighting the most important aspects
                      of the discussion. It should also include any action ite
                      This is a summary of the actionables that are being
                      discussed in this thread. It provides a brief overview of
                      the key points and decisions made. It is intended to
                      provide a quick reference for those who may not have time
                      to read the entire thread. The summary should be concise
                      and to the point, highlighting the most important aspects
                      of the discussion. It should also include any action
                      itemsms or
                    </Text>
                  </Column>
                </Column>{" "}
                <Column gap="12" marginBottom="m">
                  <Row>
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                        Send high priority mail
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
              </Column>{" "}
              {/* <Row
                vertical="center"
                horizontal="start"
                marginTop="8"
                marginBottom="8"
                fillWidth
                fitHeight
                paddingX="8"
                gap="8"
              >
                <Button variant="secondary" fillWidth size="m">
                  <Text variant="label-default-s">
                    <Text onBackground="neutral-medium">
                      {" "}
                      <i
                        className="ri-delete-bin-2-line"
                        style={{ fontSize: "17px" }}
                      ></i>
                    </Text>
                  </Text>
                </Button>
 <Button variant="primary" size="m">
                  <Text variant="label-default-s">Telegram</Text>
                </Button> 
              </Row> */}
            </Scroller>
          </Column>
        </Column>
      </Column>
      <Column
        border="neutral-strong"
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
          // background="accent-strong"
        >
          <Column
            vertical="center"
            horizontal="start"
            gap="12"
            marginBottom="8"
          >
            <Flex
              width={2.5}
              height={2.5}
              background="neutral-strong"
              radius="m"
              center
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_mWnhY4/logo/orig"
                unoptimized
                width={1.6}
                height={1.6}
              ></Media>
            </Flex>
            <Text
              variant="label-strong-l"
              className={dmSans.className}
              marginBottom="8"
              onBackground="neutral-strong"
            >
              Atharv replied to you.
            </Text>
            <Text
              variant="label-default-xs"
              className={dmSans.className}
              onBackground="neutral-weak"
              style={{ fontSize: "14px", letterSpacing: "-0.5px !important" }}
            >
              Break down complex topics into smaller, manageable sections and
              tackle them one at a time. Use visual aids like diagrams or charts
              to reinforce your understanding. Remember to take regular breaks
              to keep your mind fresh and avoid burnout.
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
            <Scroller
              direction="column"
              fitHeight
              fillWidth
              // background="accent-strong"
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
                <Column gap="12" marginBottom="m">
                  <Row>
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                      <Icon
                        name="info"
                        onBackground="warning-medium"
                        size="s"
                      />
                    </Flex>
                    <Column paddingLeft="8">
                      <Text
                        onBackground="neutral-strong"
                        variant="label-default-s"
                        className={lexend.className}
                      >
                        Medium
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
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                      Magnetism is a fundamental topic in physics that deals
                      with the forces exerted by magnets and magnetic fields. In
                      Class 12, you will study concepts such as magnetic field
                      lines, Earth's magnetism, magnetic properties of
                      materials, and electromagnetic induction. Focus on
                      understanding the behavior of magnetic fields around
                      current-carrying conductors and solenoids. Practice
                      numerical problems related to magnetic force, torque, and
                      magnetic flux to strengthen your grasp of the subject. Use
                      diagrams and visual aids to better understand the
                      concepts, and refer to NCERT textbooks for detailed
                      explanations.
                    </Text>
                  </Column>
                </Column>{" "}
                <Column gap="12" marginBottom="m">
                  <Row>
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                        Send high priority mail
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
              </Column>{" "}
              {/* <Row
                vertical="center"
                horizontal="start"
                marginTop="8"
                marginBottom="8"
                fillWidth
                fitHeight
                paddingX="8"
                gap="8"
              >
                <Button variant="secondary" fillWidth size="m">
                  <Text variant="label-default-s">
                    <Text onBackground="neutral-medium">
                      {" "}
                      <i
                        className="ri-delete-bin-2-line"
                        style={{ fontSize: "17px" }}
                      ></i>
                    </Text>
                  </Text>
                </Button>
 <Button variant="primary" size="m">
                  <Text variant="label-default-s">Telegram</Text>
                </Button> 
              </Row> */}
            </Scroller>
          </Column>
        </Column>
      </Column>
      <Column
        border="neutral-strong"
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
          // background="accent-strong"
        >
          <Column
            vertical="center"
            horizontal="start"
            gap="12"
            marginBottom="8"
          >
            <Flex
              width={2.5}
              height={2.5}
              background="neutral-strong"
              radius="m"
              center
            >
              <Media
                src="https://assets.pipedream.net/s.v0/app_OD5hL6/logo/orig"
                unoptimized
                width={1.6}
                height={1.6}
              ></Media>
            </Flex>
            <Text
              variant="label-strong-l"
              className={dmSans.className}
              marginBottom="8"
              onBackground="neutral-strong"
            >
              Successfully sent memecoin to you.
            </Text>
            <Text
              variant="label-default-xs"
              className={dmSans.className}
              onBackground="neutral-weak"
              style={{ fontSize: "14px", letterSpacing: "-0.5px !important" }}
            >
              Congratulations! You have successfully sent 1000 memecoins to your
              wallet. Your transaction has been processed and the funds are now
              available for use. You can check your wallet balance to confirm
              the transaction. Feel free to reach out to our support.
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
            <Scroller
              direction="column"
              fitHeight
              fillWidth
              // background="accent-strong"
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
                <Column gap="12" marginBottom="m">
                  <Row>
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                      <Icon
                        name="info"
                        onBackground="warning-medium"
                        size="s"
                      />
                    </Flex>
                    <Column paddingLeft="8">
                      <Text
                        onBackground="neutral-strong"
                        variant="label-default-s"
                        className={lexend.className}
                      >
                        Critical
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
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                      This is a summary of the actionables that are being
                      discussed in this thread. It provides a brief overview of
                      the key points and decisions made. It is intended to
                      provide a quick reference for those who may not have time
                      to read the entire thread. The summary should be concise
                      and to the point, highlighting the most important aspects
                      of the discussion. It should also include any action items
                      or next steps that need to be taken.
                    </Text>
                  </Column>
                </Column>{" "}
                <Column gap="12" marginBottom="m">
                  <Row>
                    <Text
                      variant="label-default-s"
                      onBackground="neutral-medium"
                    >
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
                        Send high priority mail
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
              </Column>{" "}
              {/* <Row
                vertical="center"
                horizontal="start"
                marginTop="8"
                marginBottom="8"
                fillWidth
                fitHeight
                paddingX="8"
                gap="8"
              >
                <Button variant="secondary" fillWidth size="m">
                  <Text variant="label-default-s">
                    <Text onBackground="neutral-medium">
                      {" "}
                      <i
                        className="ri-delete-bin-2-line"
                        style={{ fontSize: "17px" }}
                      ></i>
                    </Text>
                  </Text>
                </Button>
 <Button variant="primary" size="m">
                  <Text variant="label-default-s">Telegram</Text>
                </Button> 
              </Row> */}
            </Scroller>
          </Column>
        </Column>
      </Column>

      <Row center fillWidth fitHeight marginTop="2" marginBottom="20" maxWidth={20}>
        <Button
          size="l"
          fillWidth
          variant="secondary"
          style={{ backgroundColor: "#F9F5F4" }}
        >
          <Text variant="label-default-m">Load more</Text>
        </Button>
      </Row>
    </>
  );
}
