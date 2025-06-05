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
} from "@/once-ui/components";
import { MegaMenu } from "@/once-ui/modules";
import { Lexend, Poppins, DM_Sans } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"], weight: ["400", "700"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function Navbar() {
  return (
    <Row
      vertical="center"
      horizontal="space-between"
      height={6}
      fillWidth
      paddingX="56"
      borderBottom="neutral-medium"
      borderStyle="dashed"
    >
      <Flex>
        <Text
          variant="heading-strong-xl"
          style={{ fontSize: "32px" }}
          className={dmSans.className}
        >
          {" "}
          klarity-ai
        </Text>
      </Flex>
      <Flex center>
        <MegaMenu
          menuGroups={[
            {
              id: "products",
              label: "Products",
              suffixIcon: "chevronDown",
              sections: [
                {
                  title: "Featured",
                  links: [
                    {
                      label: "Analytics",
                      href: "/analytics",
                      icon: "HiOutlineDocumentChartBar",
                      description: "Get insights into your data",
                    },
                    {
                      label: "Security",
                      href: "/security",
                      icon: "HiOutlineShieldCheck",
                      description: "Protect your assets",
                    },
                  ],
                },
                {
                  title: "Tools",
                  links: [
                    {
                      label: "Dashboard",
                      href: "/dashboard",
                      icon: "HiOutlineSquares2X2",
                      description: "Monitor your metrics",
                    },
                    {
                      label: "Settings",
                      href: "/settings",
                      icon: "HiCog8Tooth",
                      description: "Configure your preferences",
                    },
                  ],
                },
              ],
            },
            {
              id: "solutions",
              label: "Solutions",
              suffixIcon: "chevronDown",
              sections: [
                {
                  title: "By industry",
                  links: [
                    {
                      label: "Enterprise",
                      href: "/enterprise",
                      icon: "cube",
                      description: "Solutions for large organizations",
                    },
                    {
                      label: "Startups",
                      href: "/startups",
                      icon: "rocket",
                      description: "Perfect for growing companies",
                    },
                  ],
                },
                {
                  title: "By team",
                  links: [
                    {
                      label: "Developers",
                      href: "/developers",
                      icon: "code",
                      description: "Tools and APIs",
                    },
                    {
                      label: "Design teams",
                      href: "/design",
                      icon: "sparkle",
                      description: "Creative solutions",
                    },
                  ],
                },
              ],
            },
            {
              id: "resources",
              label: "Resources",
              suffixIcon: "chevronDown",
              sections: [
                {
                  title: "Documentation",
                  links: [
                    {
                      label: "Guides",
                      href: "/guides",
                      icon: "book",
                      description: "Learn how to use our platform",
                    },
                    {
                      label: "API reference",
                      href: "/api",
                      icon: "code",
                      description: "Technical documentation",
                    },
                  ],
                },
                {
                  title: "Support",
                  links: [
                    {
                      label: "Help center",
                      href: "/help",
                      icon: "infoCircle",
                      description: "Get your questions answered",
                    },
                    {
                      label: "Community",
                      href: "/community",
                      icon: "people",
                      description: "Connect with other users",
                    },
                  ],
                },
              ],
            },
            {
              id: "company",
              label: "Company",
              suffixIcon: "chevronDown",
              sections: [
                {
                  title: "About",
                  links: [
                    {
                      label: "Our story",
                      href: "/about",
                      icon: "book",
                      description: "Learn about our journey",
                    },
                    {
                      label: "Careers",
                      href: "/careers",
                      icon: "rocket",
                      description: "Join our team",
                    },
                  ],
                },
                {
                  title: "Connect",
                  links: [
                    {
                      label: "Blog",
                      href: "/blog",
                      icon: "document",
                      description: "Latest updates and news",
                    },
                    {
                      label: "Contact",
                      href: "/contact",
                      icon: "email",
                      description: "Get in touch with us",
                    },
                  ],
                },
              ],
            },
          ]}
        />
        <Flex width={1} fillHeight></Flex>
        <Button
          variant="tertiary"
          className={poppins.className}
          style={{ marginLeft: "16px" }}
        >
          <Text variant="label-default-xl">SignIn</Text>
        </Button>
        <Button
          variant="primary"
          className={poppins.className}
          style={{ marginLeft: "16px" }}
        >
          <Text variant="label-default-xl">Start for free</Text>
        </Button>
      </Flex>
    </Row>
  );
}
