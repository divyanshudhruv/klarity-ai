// IMPORTANT: Replace with your own domain address - it's used for SEO in meta tags and schema
const baseURL = "https://klarity-ai.vercel.app";

// Import and set font for each variant
import { Geist } from "next/font/google";
import { Geist_Mono } from "next/font/google";

const primaryFont = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  display: "swap",
});

const font = {
  primary: primaryFont,
  secondary: primaryFont,
  tertiary: primaryFont,
  code: monoFont,
};

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light - not needed when using ThemeProvider
  neutral: "gray", // sand | gray | slate
  brand: "yellow", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "indigo", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "contrast", // color | contrast | inverse
  solidStyle: "flat", // flat | plastic
  border: "conservative", // rounded | playful | conservative
  surface: "filled", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "100", // 90 | 95 | 100 | 105 | 110
};

const effects = {
  mask: {
    cursor: false,
    x: 50,
    y: 0,
    radius: 100,
  },
  gradient: {
    display: false,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: "brand-background-strong",
    colorEnd: "static-transparent",
    opacity: 50,
  },
  dots: {
    display: true,
    size: "2",
    color: "brand-on-background-weak",
    opacity: 40,
  },
  lines: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    thickness: 1,
    angle: 45,
    size: "8",
  },
  grid: {
    display: false,
    color: "neutral-alpha-weak",
    opacity: 100,
    width: "2",
    height: "2",
  },
};
// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Klarity-AI: Transform Digital Chaos into Actionable Insights",
    keywords:
      "Klarity-AI, AI, automation, digital clarity, task management, notes, productivity, message parsing, email to-do, chat to-do",
    description:
      "Klarity-AI transforms your digital messages, chats, and emails into clear, actionable tasks and notes. Leverage intelligent AI automation to ensure urgent work never slips through the cracks.",
    image: "/og/home.jpg", // Assuming an appropriate image path for Klarity-AI
    canonical: "https://klarity-ai.vercel.app", // Placeholder for Klarity-AI's domain
    robots: "index,follow",
    alternates: [{ href: "https://klarity-ai.dev", hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};
// default schema data
const schema = {
  logo: "",
  type: "Website",
  name: "Klarity-AI",
  description: meta.home.description,
  email: "divyanshudhruv@proton.me",
};

// social links
const social = {
  twitter: "https://www.twitter.com/_onceui",
  linkedin: "https://www.linkedin.com/company/once-ui/",
  discord: "https://discord.com/invite/5EyAQ4eNdS",
};

export { baseURL, font, style, meta, schema,social, effects };
