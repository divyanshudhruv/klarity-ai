"use client";
import {
  Text,
  Column,
  Row,
  Flex,
  Media,
  SegmentedControl,
  Scroller,
  Button,
} from "@/once-ui/components";
import { createBackendClient } from "@pipedream/sdk/server";

import { Lexend, DM_Sans } from "next/font/google";
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
import supabase from "@/app/lib/supabase";
export default function Inbox() {
  return (
    <Column center fillWidth fillHeight gap="12" maxWidth={100}>
      Inbox
    </Column>
  );
}
