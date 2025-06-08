"use client";
import {
    Text,
    Button,
    Column,
    Row,
    Flex,
    AutoScroll,
    Media,
    LetterFx,
} from "@/once-ui/components";
import { Lexend } from "next/font/google";
import localFont from "next/font/local";
const tiempos = localFont({
    src: "./../fonts/tiempos/TestTiemposText-Regular-BF66457a50cd521.otf",
    weight: "100",
    style: "normal",
});
const lexend = Lexend({ subsets: ["latin"], weight: ["300"] });

export default function Forbidden() {
    return (
        <Flex center fillWidth fillHeight radius="m" padding="m">
            <Column
                horizontal="center"
                vertical="center"
                fillWidth
                fitHeight
                radius="xl"
                maxWidth={40}
                wrap={true}
                paddingY="64"
                style={{ textAlign: "center" }}
                gap="16"
                overflowX="hidden"
            >
                <Text
                    className={tiempos.className}
                    variant="heading-default-xl"
                    style={{ fontSize: "50px", color: "#171717", lineHeight: "1" }}
                >
                    klarity-ai
                </Text>
                <Text
                    variant="heading-strong-l"
                    className={lexend.className}
                    style={{
                        fontSize: "70px",
                        color: "#171717",
                        lineHeight: "1",
                        letterSpacing: "-0.02em",
                    }}
                >
                    <LetterFx
                        speed="medium"
                        trigger="instant"
                        charset={[
                            "X",
                            "$",
                            "@",
                            "a",
                            "H",
                            "z",
                            "0",
                            "y",
                            "#",
                            "?",
                            "*",
                            "0",
                            "1",
                            "+",
                        ]}
                    >
                        Forbidden
                    </LetterFx>
                </Text>
                <Flex></Flex>
                <Text
                    variant="heading-default-l"
                    className={lexend.className}
                    onBackground="neutral-medium"
                >
                    You are not authorized to access this resource.
                </Text>
                <Row
                    center
                    fillWidth
                    style={{ scale: "1.13" }}
                    paddingY="16"
                    minWidth={10}
                >
                    <Flex minWidth={20} maxWidth={20} center fillWidth>
                        <Button
                            variant="primary"
                            style={{ width: "100%" }}
                            size="l"
                            onClick={() => window.history.back()}
                        >
                            <Text variant="label-default-xl">Back</Text>
                        </Button>{" "}
                    </Flex>
                </Row>
            </Column>
        </Flex>
    );
}
