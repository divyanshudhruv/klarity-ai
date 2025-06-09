"use client";
import {
  Text,
  Button,
  Column,
  Row,
  Flex,
  AutoScroll,
  Media,
  Scroller,
  Option,
  Input,
  IconButton,
  Icon,
  Select,
  DateRangeInput,
} from "@/once-ui/components";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
import "./css/scrollO.css";
const tiempos = localFont({
  src: "../../../../fonts/tiempos/TestTiemposText-Regular-BF66457a50cd521.otf",
  weight: "100",
  style: "normal",
});
import { useEffect, useState } from "react";
import Actionables from "../@sections/actionables";
import Inbox from "../@sections/inbox";
import Alerts from "./../@sections/alerts";
import Insights from "../@sections/insights";
import Connections from "../@sections/connections";
import ActivityLog from "../@sections/activity-log";
import supabase from "@/app/lib/supabase";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
export default function ScrollerO() {
  const [selectedKey, setSelectedKey] = useState<string>("");
  type Section = {
    name: string;
    description: string;
    function: string | (() => void);
    href?: string; // Optional, used for navigation
  };

  const sections: Section[] = [
    {
      name: "My Actionables",
      description: "Manage tasks and notes effectively.",
      href: "#actionables",
      function: () => {
        window.location.hash = "#actionables";
      },
    },
    {
      name: "Inbox Stream",
      description: "View all communications in one place.",
      href: "#inbox",
      function: () => {
        window.location.hash = "#inbox";
      },
    },
    {
      name: "Urgent Alerts",
      description: "High-priority notifications and updates.",
      href: "#alerts",
      function: () => {
        window.location.hash = "#alerts";
      },
    },
    {
      name: "Insight Library",
      description: "AI-generated summaries and insights.",
      href: "#insights",
      function: () => {
        window.location.hash = "#insights";
      },
    },
    {
      name: "Connections",
      description: "Manage and integrate communication platforms.",
      href: "#connections",
      function: () => {
        window.location.hash = "#connections";
      },
    },
    {
      name: "Activity Log",
      description: "Track items and actions with detailed records.",
      href: "#activity-log",
      function: () => {
        window.location.hash = "#activity-log";
      },
    },
  ];
  const [searchValue, setSearchValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  useEffect(() => {
    const fetchAdminStatus = async () => {
      try {
        const { data: userData, error: userError } =
          await supabase.auth.getUser();
        const user = userData?.user;
        if (user) {
          const { data, error } = await supabase
            .from("user_info")
            .select("is_admin")
            .eq("id", user.id)
            .single();

          if (error) {
            console.error("Error fetching admin status:", error);
          } else {
            setIsAdmin(data?.is_admin || false);
          }
        }
      } catch (err) {
        console.error("Unexpected error:", err);
      }
    };

    fetchAdminStatus();
  }, []);

  return (
    <>
      <Column
        center
        fillWidth
        fitHeight
        radius="m"
        paddingY="xs"
        marginBottom="20"
      >
        <Scroller
          fadeColor="transparent"
          overflowX="scroll"
          borderBottom="neutral-medium"
          borderStyle="solid"
          paddingX="l"
          // height={4}
          fitHeight
        >
          <Row
            horizontal="start"
            vertical="center"
            fitWidth
            fitHeight
            paddingBottom="0"
            paddingTop="0"
          >
            <Flex center fitWidth gap="16">
              {sections.map((section, index) => (
                <Option
                  key={index}
                  label={section.name}
                  description={section.description}
                  value={section.name.toLowerCase().replace(/\s+/g, "-")}
                  onClick={() => {
                    setSelectedKey(section.name);
                    if (typeof section.function === "string") {
                      window.location.href = section.function;
                    } else if (typeof section.function === "function") {
                      section.function();
                    }
                    setSearchValue(""); // Clear search value if needed
                  }}
                  selected={selectedKey === section.name}
                />
              ))}
            </Flex>
          </Row>
        </Scroller>
      </Column>
      <Row
        fillWidth
        center
        // background="accent-strong"
      >
        {selectedKey === "My Actionables" ? (
          isAdmin ? (
            <Actionables />
          ) : (
            <Text variant="body-default-m">Page accessed only by admin</Text>
          )
        ) : null}
        {selectedKey === "Inbox Stream" ? <Inbox /> : null}
        {selectedKey === "Urgent Alerts" ? <Alerts /> : null}
        {selectedKey === "Insight Library" ? <Insights /> : null}
        {selectedKey === "Connections" ? <Connections /> : null}
        {selectedKey === "Activity Log" ? <ActivityLog /> : null}
      </Row>
    </>
  );
}
