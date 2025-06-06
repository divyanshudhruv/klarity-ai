import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
  ScrollToTop,
  IconButton,
} from "@/once-ui/components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Integrations from "./components/Integrations";
import Workflow from "./components/Workflow";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./style.css"

export default function Home() {
  return (
    <>
      <ScrollToTop style={{ backgroundColor: "#FAF8F6" }} radius="xl">
        <IconButton variant="primary">
          <i className="ri-arrow-up-s-line"></i>
        </IconButton>
      </ScrollToTop>
      <Column horizontal="center" vertical="start" fitHeight fillWidth>
        <Navbar />
        <Column center paddingX="32">
          <Hero />
          <Workflow />
          <FAQ />
          <Integrations />{" "}
        </Column>
        <Footer />
      </Column>
    </>
  );
}
