"use client";
import {
  Text,
  Column,
  Row,
  Flex,
  Media,
  SegmentedControl,
  Scroller,
} from "@/once-ui/components";
import { Lexend, DM_Sans } from "next/font/google";
import './css/workflow.css'
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Workflow() {
  return (
    <Column center fillWidth fillHeight gap="12" maxWidth={100}>
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
        fitWidth
        fitHeight
        radius="m"
        padding="m"
        maxWidth={100}
      >
        <Row
          horizontal="center"
          gap="128"
          vertical="center"
          fitWidth
          className="workflow-row"
          fitHeight
          radius="xl"
          style={{ backgroundColor: "#F0EEEC" }}
          wrap={true}
          paddingY="32"
          paddingX="32"
        >
          <Column
            fillWidth
            fillHeight
            paddingY="20"
            width={30}
            horizontal="start"
            // background="accent-strong"
          >
            {" "}
            <Scroller
              direction="column"
              fillHeight
              fitWidth
              paddingBottom="0"
              // background="accent-strong"
              vertical="center"
            >
              {" "}
              <Column fitHeight paddingX="32" fitWidth>
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
                  Klarity-AI empowers teams to focus on what matters most by
                  turning digital chaos into actionable clarity. Streamline your
                  workflows and enhance productivity effortlessly.
                  <br />
                  <br />
                  • Automate task creation from emails and messages
                  <br />
                  • Integrate with your favorite tools and platforms
                  <br />
                  • Leverage AI to prioritize and organize tasks intelligently
                  <br />
                  <br />
                  Klarity-AI captures every crucial task. No important work
                  slips.
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
            fitWidth
            vertical="center"
            fitHeight
            horizontal="center"
            overflow="hidden" //background="accent-strong"
            background="neutral-strong"
            className="workflow-image-container"
          >
            <Media
              src="https://cdn.dribbble.com/userupload/43497398/file/original-ca1c8327bd8dcfb55bddfe9f8169f2e6.png?resize=1024x768&vertical=center"
              unoptimized
              fitHeight
              radius="xl"
              bottomLeftRadius="xl"
              fitWidth
              width={42}
              height={42}
            />
          </Flex>
        </Row>
      </Flex>
    </Column>
  );
}
