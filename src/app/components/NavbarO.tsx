"use client";
import {
  Text,
  Button,
  Row,
  Flex,
  UserMenu,
  Column,
  Icon,
  Kbd,
  Option,
  useToast,
} from "@/once-ui/components";
import { MegaMenu } from "@/once-ui/modules";
import { Lexend, Poppins, DM_Sans } from "next/font/google";
import supabase from "../lib/supabase";
import { unauthorized } from "next/navigation";
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
import { useEffect, useState } from "react";
import "./css/navbarO.css";
export default function NavbarO() {
  const { addToast } = useToast();
  const [user, setUser] = useState({
    name: "User",
    avatar_url: "",
    is_pro: false,
    is_admin: false,
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const session = await supabase.auth.getSession();
        const userId = session?.data?.session?.user?.id;

        if (!userId) {
          console.error("No user session found.");
          unauthorized();
          return;
        }

        const { data, error } = await supabase
          .from("user_info")
          .select("name, avatar_url, is_pro, is_admin")
          .eq("id", userId)
          .single();

        if (error) {
          console.error("Error fetching user info:", error);
          return;
        }

        setUser({
          name: data?.name || "User",
          avatar_url: data?.avatar_url || "",
          is_pro: data?.is_pro || false,
          is_admin: data?.is_admin ?? false,
        });
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchUser();
  }, []);

  const signOutFromSupabase = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      addToast({
        variant: "danger",
        message: "Failed to log out. Please try again.",
      });
    } else {
      window.location.href = "/";
      addToast({ variant: "success", message: "Logged out successfully!" });
    }
  };
  return (
    <Row
      zIndex={10}
      vertical="center"
      horizontal="space-between"
      height={5}
      fillWidth
      paddingX="56"
      borderBottom="neutral-medium"
      borderStyle="dashed"
      className="navbar-container"
      marginBottom="0"
    >
      <Flex onClick={() => (window.location.href = "/")} cursor="pointer">
        <Text
          variant="heading-strong-xl"
          style={{ fontSize: "32px" }}
          className={dmSans.className + " logo-k"}
        >
          k
        </Text>
        <Text
          variant="heading-strong-xl"
          style={{ fontSize: "32px" }}
          className={dmSans.className + " logo-container"}
        >
          klarity-ai
        </Text>{" "}
      </Flex>

      <UserMenu
        name={user.name}
        subline={`${user.is_pro ? "Pro user" : "Free user"}${
          user.is_admin ? " • admin" : ""
        }`}
        placement="right-end"
        loading={false}
        avatarProps={{
          src: user.avatar_url,
        }}
        dropdown={
          <Column gap="4" padding="4" minWidth={10}>
            <Button
              size="m"
              weight="default"
              variant="secondary"
              fillWidth
              style={{ borderRadius: "10px" }}
              horizontal="start"
            >
              <Text variant="label-default-s" onBackground="neutral-weak">
                {" "}
                <i className="ri-settings-line"></i>&nbsp;&nbsp;Settings
              </Text>
            </Button>
            <Button
              size="m"
              weight="default"
              variant="secondary"
              fillWidth
              style={{ borderRadius: "10px" }}
              horizontal="start"
            >
              <Text variant="label-default-s" onBackground="neutral-weak">
                {" "}
                <i className="ri-user-line"></i>&nbsp;&nbsp;Profile
              </Text>
            </Button>
            <Button
              size="m"
              weight="default"
              variant="secondary"
              fillWidth
              style={{ borderRadius: "10px" }}
              horizontal="start"
              onClick={() => {
                signOutFromSupabase();
              }}
            >
              <Text variant="label-default-s" onBackground="neutral-weak">
                {" "}
                <i className="ri-door-line"></i>&nbsp;&nbsp;Log out
              </Text>
            </Button>{" "}
          </Column>
        }
      />
    </Row>
  );
}
