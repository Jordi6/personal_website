import { Container } from "@chakra-ui/react";
import { Title, WorkImage } from "../../components/work";
import Layout from "../../components/layouts/article";
import P from "../../components/paragraph";

const Lawn = () => (
  <Layout title="Enriquez Lawn Service">
    <Container>
      <Title>
        <a href="https://enriquezlawnservice.com/" target="_blank">
          Enriquez Lawn Service
        </a>
      </Title>
      <P>
        A website to showcase the services of the midwest landscaping company.
        With a focus on building an online presence with a digital logo revamp.
        Worked with Enriquez Lawn Service to create a site that includes: a rich
        portfolio, information about the business, and services they offer their
        customers.
      </P>
      <br />
      <a href="https://enriquezlawnservice.com/" target="_blank">
        <WorkImage src="/images/works/lawn_projects.png"></WorkImage>
      </a>
    </Container>
  </Layout>
);

export default Lawn;
