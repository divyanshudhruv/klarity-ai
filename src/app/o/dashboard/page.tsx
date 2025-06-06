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
import NavbarO from "@/app/components/NavbarO";


export default function Home() {
  return (
    <>
      <ScrollToTop style={{ backgroundColor: "#FAF8F6" }} radius="xl">
        <IconButton variant="primary">
          <i className="ri-arrow-up-s-line"></i>
        </IconButton>
      </ScrollToTop>
      <Column horizontal="center" vertical="start" fitHeight fillWidth>
        <NavbarO />
      </Column>
    </>
  );
}
