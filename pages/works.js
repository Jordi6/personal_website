import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";
import Layout from "../components/layouts/article";

import thumbLawn from "../public/images/works/lawn_3.png";
import thumbVuegram from "../public/images/works/vuegram_3.png";
import thumbNFC from "../public/images/works/nfc_3.png";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mt={5} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="lawn"
              title="Enriquez Lawn Service"
              thumbnail={thumbLawn}
            >
              A website created for a midwest lawn care service company.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
            id="vuegram" 
            title="vuegram" 
            thumbnail={thumbVuegram}
            >
              A social media full-stack web-app.
            </WorkGridItem>
          </Section>
          <Section delay={0.1}>
            <WorkGridItem 
            id="nfc" 
            title="NFC Soccer" 
            thumbnail={thumbNFC}
            >
              A Nebraska local soccer club website.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
