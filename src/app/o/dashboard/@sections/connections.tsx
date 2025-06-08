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
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Connections() {
  return (
    <Column center fillWidth fillHeight gap="12" maxWidth={100}>
     Connections
    </Column>
  );
}
