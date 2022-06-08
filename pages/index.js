import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  useColorModeValue,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import Body from "../components/body";
import { BioSection, BioYear } from "../components/bio";
import { IoLogoTwitter, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";

const Page = () => {
  return (
    <Layout>
      <Container mt={5}>
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          align="center"
          bg={useColorModeValue("rgb(185,185,181,0.5)", "whiteAlpha.200")}
        >
          Hello, I'm a full-stack developer based in the midwest!
        </Box>

        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title" size="lg">
              Jordi Becerril Enriquez
            </Heading>
            <p>Digital Craftsman (Developer / Programmer / Engineer)</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/desk-image.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Jordi is a full-stack developer based in Omaha with a passion for
            developing software. With drive and preference towards working on
            the web, and tracking down imaginative approaches to tackling issues
            with innovation. As well as creating well-designed and functional
            products and services for the web.
          </Paragraph>

          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
                rightIcon={<ChevronRightIcon />}
                bg={useColorModeValue("#7290A6", "#224263")}
                _hover={{
                  bg: useColorModeValue(
                    "rgb(185,185,181,0.5)",
                    "whiteAlpha.200"
                  ),
                }}
              >
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <Body>
              <BioYear>1997</BioYear>
              Born in Omaha Ne.
            </Body>
          </BioSection>
          <BioSection>
            <Body>
              <BioYear>2016</BioYear>
              Graduate from Omaha South High School.
            </Body>
          </BioSection>
          <BioSection>
            <Body>
              <BioYear>2016</BioYear>
              Graduate from AIM Code School in the Omaha Metropolitan area.
            </Body>
          </BioSection>
          <BioSection>
            <Body>
              <BioYear>2017</BioYear>
              Worked at appsky. A software development start-up
            </Body>
          </BioSection>
          <BioSection>
            <Body>
              <BioYear>2019</BioYear>
              Taught full-stack web development at AIM Code School
            </Body>
          </BioSection>
          <BioSection>
            <Body>
              <BioYear>2019 to present</BioYear>
              Work at Mutual Of Omaha, a Fortune 300 company. Also work as a
              freelancer
            </Body>
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Passions
          </Heading>
          <Paragraph>
            hanging out with my famliy and friends, reading, programming, and
            futbol
          </Paragraph>
        </Section>

        <Section delay={0.5}>
          <Heading as="h3" variant="section-title">
            Let's connect
          </Heading>
          <List>
            <ListItem>
              <Link href="https://twitter.com/jordi_becerril" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<IoLogoTwitter />}
                >
                  twitter
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.instagram.com/jordibecerril1/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<IoLogoInstagram />}
                >
                  Instagram
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/jordi6" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<IoLogoGithub />}
                >
                  GitHub
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
};

export default Page;
