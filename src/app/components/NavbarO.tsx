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
} from "@/once-ui/components";
import { MegaMenu } from "@/once-ui/modules";
import { Lexend, Poppins, DM_Sans } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["400", "700"] });

export default function NavbarO() {
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

      <UserMenu
        name="Divyanshu Dhruv"
        subline="Design Engineer"
        placement="right-end"
        loading ={false}
        
        avatarProps={{ src: "https://bl-prod-images.azureedge.net/v1.0/users/05de840f-46e8-4476-a18c-b90d09c1b3b9/0x96" }}
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
