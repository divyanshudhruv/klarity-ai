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
export default function Workflow() {
  return (
    <Column
      center
      fillWidth
      fitHeight
      gap="12"
      marginTop="64"
      marginBottom="64"
      maxWidth={100}
      style={{maxWidth: "80vw"}}
    >
      <Text
        variant="heading-default-l"
        className={lexend.className}
        onBackground="neutral-medium"
        style={{ lineHeight: "0.1" }}
      >
        Frequently asked questions
      </Text>{" "}
      <Text
        className={tiempos.className}
        variant="heading-default-xl"
        style={{
          fontSize: "60px",
          color: "#171717",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
        Curious about klarity-AI? <br />
        Let's clear things up.
      </Text>
      <Column fitWidth maxWidth={60} marginTop="32"       style={{maxWidth: "67vw"}}
>
        <Accordion
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                What does Klarity-AI do?
              </Text>
            </>
          }
          size="l"
        >
          <Text onBackground="neutral-weak">
            It converts digital messages, chats, and emails into clear,
            actionable to-dos and notes, identifying tasks, deadlines, and key
            information.
          </Text>
        </Accordion>
        <Accordion
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                How does Klarity-AI know what's urgent?
              </Text>
            </>
          }
          size="l"
        >
          <Text onBackground="neutral-weak">
            Advanced AI analyzes text for context, actions, and deadlines,
            assigning an urgency score. It also learns your personal preferences
            over time.
          </Text>
        </Accordion>
        <Accordion
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                Is my communication data private and secure?
              </Text>
            </>
          }
          size="l"
        >
          <Text onBackground="neutral-weak">
            Yes, data is stored securely in your private Firestore account. We
            only process the information you explicitly consent to share.
          </Text>
        </Accordion>
        <Accordion
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                How does it help avoid missed tasks?
              </Text>
            </>
          }
          size="l"
        >
          <Text onBackground="neutral-weak">
            By automatically parsing messages and sending proactive alerts for
            urgent items, Klarity-AI ensures nothing important slips through.
          </Text>
        </Accordion>
        <Accordion
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                Can it summarize long conversations?
              </Text>
            </>
          }
          size="l"
        >
          <Text onBackground="neutral-weak">
            Yes, Klarity-AI uses Generative AI to provide concise summaries of
            longer texts, giving you quick overviews.
          </Text>
        </Accordion>
        <Accordion
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                Does Klarity-AI integrate with other tools?
              </Text>
            </>
          }
          size="l"
        >
          <Text onBackground="neutral-weak">
            Yes, Klarity-AI integrates with popular productivity tools like
            Google Workspace, Slack, and Microsoft Teams to streamline your
            workflow.
          </Text>
        </Accordion>
        <Accordion
          size="l"
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                Can I customize how Klarity-AI works?
              </Text>
            </>
          }
        >
          <Text onBackground="neutral-weak">
            Absolutely! You can tailor its behavior by setting preferences for
            task categorization, urgency levels, and notification settings.
          </Text>
        </Accordion>
        <Accordion
          size="l"
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                Is Klarity-AI suitable for teams?
              </Text>
            </>
          }
        >
          <Text onBackground="neutral-weak">
            Yes, Klarity-AI offers collaborative features for teams, enabling
            shared task management and communication insights.
          </Text>
        </Accordion>
        <Accordion
          size="l"
          title={
            <>
              <Text
                variant="body-default-l"
                style={{ fontWeight: "600" }}
                className={lexend.className}
                onBackground="neutral-strong"
              >
                How do I get started with Klarity-AI?
              </Text>
            </>
          }
        >
          <Text onBackground="neutral-weak">
            Getting started is easy! Sign up on our website, connect your
            communication channels, and let Klarity-AI start organizing your
            tasks.
          </Text>
        </Accordion>
      </Column>
    </Column>
  );
}
