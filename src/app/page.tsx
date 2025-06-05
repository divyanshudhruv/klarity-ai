import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Logo,
  Line,
  LetterFx,
} from "@/once-ui/components";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <Column horizontal="center" vertical="start">
      <Navbar />{" "}
      <Hero/>
    </Column>
  );
}
