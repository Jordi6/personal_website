import { Box, Container, SimpleGrid, Divider, Heading } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import { GridItem, WorkGridItem } from "../components/grid-item";
import Section from "../components/section";

import thumbArticle1 from "../public/images/article_1.png";

const Posts = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mt={5} mb={4}>
          Posts
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItem
            title="Silicon Praire News"
            thumbnail={thumbArticle1}
            href="https://siliconprairienews.com/2020/01/putting-the-work-in-meet-jordi-becerril-a-rising-star-in-tech/"
          ></GridItem>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Posts;
