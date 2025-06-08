"use client";
import {
  Text,
  Button,
  Column,
  Row,
  Flex,
  AutoScroll,
  Media,
  Spinner,
  useToast,
} from "@/once-ui/components";
import { Lexend } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
import supabase from "@/app/lib/supabase";
import { useEffect } from "react";

export default function Integrations() {
  const { addToast } = useToast();
  useEffect(() => {
    const updateUserInfo = async () => {
      const { data: user, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      const email = user?.user.email;
      const user_metadata = user?.user.user_metadata;
      const name = user_metadata?.name || user_metadata?.full_name || "";
      const { full_name, avatar_url } = user_metadata || {};

      if (email) {
        const { error: updateError } = await supabase.from("user_info").upsert(
          {
            id: user.user.id,
            email,
            name,
            avatar_url,
            username: full_name?.toLowerCase().replace(/\s+/g, "") || "",
          },
          { onConflict: "email" }
        );
        addToast({
          variant: "success",
          message: "User info updated successfully!",
        });
        window.location.href = "/o/dashboard";
        if (updateError) {
          console.error("Error updating user info:", updateError);
        }
      }
    };

    updateUserInfo();
  }, []);
  return (
    <Flex fillWidth fillHeight center>
      <Flex
        center
        border="neutral-medium"
        borderStyle="dashed"
        fitWidth
        fitHeight
        radius="m"
        padding="m"
      >
        <Column
          horizontal="center"
          vertical="center"
          fitWidth
          paddingX="104"
          fitHeight
          radius="xl"
          style={{ backgroundColor: "#F0EEEC", textAlign: "center" }}
          wrap={true}
          paddingY="64"
          gap="32"
          overflowX="hidden"
        >
          <Row center fillWidth fitHeight>
            {" "}
            <Spinner size="l" /> &nbsp;
            <Text
              variant="heading-default-l"
              className={lexend.className}
              onBackground="neutral-medium"
            >
              Callback successful! You are now authenticated.
            </Text>
          </Row>

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
        </Column>
      </Flex>
    </Flex>
  );
}
