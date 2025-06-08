"use client";
import {
  Text,
  Button,
  Row,
  Flex,
  ToggleButton,
  Column,
  NavIcon,
  Accordion,
} from "@/once-ui/components";
import { MegaMenu } from "@/once-ui/modules";
import { Lexend, Poppins, DM_Sans } from "next/font/google";
import { useState } from "react";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });
import "./css/navbar.css";
export default function Navbar() {
  const menuGroups = [
    {
      id: "product",
      label: "Product",
      suffixIcon: "ChevronDown", // Lucide React icon name
      sections: [
        {
          title: "Core Features",
          links: [
            {
              label: "Intelligent Parsing",
              href: "/features/parsing",
              icon: "MessageSquareText", // Lucide icon for communication/text
              description:
                "Transform messages, chats, and emails into structured data.",
            },
            {
              label: "Actionable To-Dos",
              href: "/features/todos",
              icon: "ListTodo", // Lucide icon for to-do list
              description: "Automatically generate tasks and notes from text.",
            },
            {
              label: "Urgency Alerts",
              href: "/features/alerts",
              icon: "BellRing", // Lucide icon for alerts/notifications
              description:
                "Never miss critical work with proactive notifications.",
            },
          ],
        },
        {
          title: "AI Capabilities",
          links: [
            {
              label: "Smart Summaries",
              href: "/features/summarize",
              icon: "Lightbulb", // Lucide icon for insights/ideas
              description: "Get concise overviews of long conversations.",
            },
            {
              label: "Detailed Elaboration",
              href: "/features/elaborate",
              icon: "UserCheck", // Lucide icon for detail/validation
              description: "Expand on any task or note for more context.",
            },
            {
              label: "Draft Follow-ups",
              href: "/features/followup",
              icon: "Mail", // Lucide icon for email/messaging
              description:
                "Generate personalized communication drafts instantly.",
            },
          ],
        },
      ],
    },
    {
      id: "solutions",
      label: "Solutions",
      suffixIcon: "ChevronDown",
      sections: [
        {
          title: "By Use Case",
          links: [
            {
              label: "Project Management",
              href: "/solutions/project-management",
              icon: "ClipboardList", // Lucide icon for project management
              description: "Streamline team communication and task delegation.",
            },
            {
              label: "Customer Communication",
              href: "/solutions/customer-comms",
              icon: "Megaphone", // Lucide icon for announcements/communication
              description: "Ensure no customer query goes unaddressed.",
            },
            {
              label: "Personal Productivity",
              href: "/solutions/personal-productivity",
              icon: "Zap", // Lucide icon for efficiency/speed
              description: "Master your digital inbox and daily tasks.",
            },
          ],
        },
        {
          title: "For Teams",
          links: [
            {
              label: "Small Businesses",
              href: "/solutions/small-business",
              icon: "Briefcase", // Lucide icon for business
              description:
                "Automate communication workflows for growing teams.",
            },
            {
              label: "Remote Teams",
              href: "/solutions/remote-teams",
              icon: "Globe", // Lucide icon for global/remote
              description: "Stay aligned and efficient across distances.",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      suffixIcon: "ChevronDown",
      sections: [
        {
          title: "Learn & Grow",
          links: [
            {
              label: "Blog",
              href: "/blog",
              icon: "FileText", // Lucide icon for documents/text
              description: "Latest insights and product updates.",
            },
            {
              label: "Guides",
              href: "/guides",
              icon: "Book", // Lucide icon for learning/guides
              description: "Step-by-step tutorials to get started.",
            },
            {
              label: "API Reference",
              href: "/api",
              icon: "Code", // Lucide icon for code/API
              description: "Integrate Klarity-AI with your existing tools.",
            },
          ],
        },
        {
          title: "Support",
          links: [
            {
              label: "Help Center",
              href: "/help",
              icon: "Info", // Lucide icon for information/help
              description: "Find answers to your questions.",
            },
            {
              label: "Community",
              href: "/community",
              icon: "Users", // Lucide icon for community/users
              description: "Connect with other Klarity-AI users.",
            },
          ],
        },
      ],
    },
    {
      id: "company",
      label: "Company",
      suffixIcon: "ChevronDown",
      sections: [
        {
          title: "About Us",
          links: [
            {
              label: "Our Story",
              href: "/about",
              icon: "Feather", // Lucide icon for story/creation
              description: "Learn about Klarity-AI's mission and journey.",
            },
            {
              label: "Careers",
              href: "/careers",
              icon: "Rocket", // Lucide icon for growth/careers
              description: "Join our innovative team.",
            },
          ],
        },
        {
          title: "Connect",
          links: [
            {
              label: "Contact",
              href: "/contact",
              icon: "Mail", // Lucide icon for contact
              description: "Get in touch with us.",
            },
            {
              label: "Press",
              href: "/press",
              icon: "Megaphone", // Lucide icon for announcements/press
              description: "Klarity-AI in the news.",
            },
          ],
        },
      ],
    },
  ];
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      <Row
        zIndex={10}
        vertical="center"
        horizontal="space-between"
        height={5}
        fillWidth
        paddingX="56"
        borderBottom="neutral-medium"
        borderStyle="dashed"
      >
        <Flex onClick={() => (window.location.href = "/")} cursor="pointer">
          <Text
            variant="heading-strong-xl"
            style={{ fontSize: "32px" }}
            className={dmSans.className}
          >
            {" "}
            klarity-ai
          </Text>
        </Flex>
        <Flex center className="mega-menu">
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
            onClick={() => (window.location.href = "/auth/signin")}
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
        <Flex
          paddingX="8"
          paddingY="8"
          radius="l"
          horizontal="space-between"
          vertical="center"
          fitWidth
          className="nav-icon"
          style={{ scale: "1.2" }}
        >
          <NavIcon
            isActive={isActive}
            onClick={handleClick}
            aria-label="Toggle navigation menu"
            aria-expanded={isActive}
            aria-controls="demo-nav"
          />
        </Flex>
      </Row>
      {isActive && (
        <Column
          id="demo-nav"
          padding="16"
          background="surface"
          border="surface"
          radius="l"
          marginTop="8"
          fillWidth
          gap="8"
        >
          {menuGroups.map((group) => (
            <Accordion
              key={group.id}
              title={
                <>
                  <Text variant="label-default-m">{group.label}</Text>
                </>
              }
              size="m"
            >
              {group.sections.map((section) => (
                <Column key={section.title} gap="8">
                  <Flex></Flex>
                  <Text variant="label-default-m">{section.title}</Text>
                  <Flex></Flex>
                  {section.links.map((link) => (
                    <ToggleButton
                      key={link.label}
                      fillWidth
                      horizontal="start"
                      size="l"
                      onClick={() => (window.location.href = link.href)}
                    >
                      <Text
                        variant="label-default-s"
                        onBackground="neutral-medium"
                      >
                        {link.label}
                      </Text>
                    </ToggleButton>
                  ))}
                </Column>
              ))}
            </Accordion>
          ))}
          <Button
          fillWidth
            variant="primary"
            size="l"
            className={poppins.className}
            onClick={() => (window.location.href = "/auth/signin")}
          >
            <Text variant="label-default-xl">SignIn</Text>
          </Button>
        </Column>
      )}
    </>
  );
}
