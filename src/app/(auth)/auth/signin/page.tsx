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
  Spinner,
  useToast,
  SmartLink,
} from "@/once-ui/components";
import { Lexend, Poppins, DM_Sans, Lora } from "next/font/google";
import localFont from "next/font/local";
import { useState } from "react";

const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

import supabase from "@/app/lib/supabase";
import { set } from "date-fns";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { addToast } = useToast();

  async function signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin + `/auth/callback`, // optional
        queryParams: {
          prompt: "select_account", // force account picker
        },
      },
    });
  }

  async function signInWithEmail(email: string) {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: window.location.origin + `/auth/callback`, // optional
      },
    });
  }

  function handleGoogleSignIn() {
    setGoogleLoading(true);
    setTimeout(() => {
      setGoogleLoading(false);
      signInWithGoogle();
      addToast({
        message: "Redirecting to Google...",
        variant: "success",
      });
    }, 2000);
  }

  function handleEmailSignIn() {
    setEmailLoading(true);
    setTimeout(() => {
      setEmailLoading(false);
      signInWithEmail(email);
      addToast({
        message: `Magic link sent to your email.`,
        variant: "success",
      });
    }, 2000);
  }

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
        style={{ scale: "0.95" }}
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
          Create a free <SmartLink href={"/"}><u>Klarity</u></SmartLink> account
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          size="l"
          variant="primary"
          fillWidth
          style={{ marginTop: "-4px" }}
          onClick={() => handleEmailSignIn()}
          disabled={
            !email ||
            emailLoading ||
            googleLoading ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          }
        >
          <Row
            center
            fillWidth
            fillHeight
            horizontal="center"
            vertical="center"
          >
            {emailLoading ? (
              <Text variant="label-default-xl" className={lexend.className}>
                <Row
                  center
                  fillWidth
                  fillHeight
                  horizontal="center"
                  vertical="center"
                >
                  <Spinner size="s" />
                  &nbsp;&nbsp;Send me a magic link
                </Row>
              </Text>
            ) : (
              <Text variant="label-default-xl" className={lexend.className}>
                <i className="ri-mail-line"></i>&nbsp;&nbsp;Send me a magic link
              </Text>
            )}{" "}
          </Row>
        </Button>
        <Flex></Flex>
        <Row fillWidth center>
          {" "}
          <Text
            variant="label-default-xl"
            className={lexend.className}
            onBackground="neutral-weak"
          >
            OR CONTINUE WITH
          </Text>
        </Row>{" "}
        <Flex></Flex>
        <Button
          size="l"
          variant="secondary"
          fillWidth
          onClick={handleGoogleSignIn}
        >
          <Row
            center
            fillWidth
            fillHeight
            horizontal="center"
            vertical="center"
          >
            {googleLoading ? (
              <Text variant="heading-default-s" className={lexend.className}>
                <Row
                  center
                  fillWidth
                  fillHeight
                  horizontal="center"
                  vertical="center"
                >
                  {" "}
                  <Spinner size="s" />
                  &nbsp;&nbsp;Google
                </Row>
              </Text>
            ) : (
              <>
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
              </>
            )}
          </Row>
        </Button>
      </Column>
    </Column>
  );
}
