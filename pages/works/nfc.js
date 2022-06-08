import { Title, WorkImage } from "../../components/work";
import { Container } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import P from "../../components/paragraph";

const NFC = () => (
  <Layout title="NFC">
    <Container>
      <Title>
        <a href="https://nfcsoccer.com/" target="_blank">
          NFC
        </a>
      </Title>
      <P>
      A website for a local soccer club with national achievement. The focus of this
          website was to provide club information at convenience online. The website is built using the
          WordPress framework. WordPress allows for a quick delivery time and easy website handover to the client.
      </P>
      <br />
      <a href="https://nfcsoccer.com/" target="_blank">
        <WorkImage src="/images/works/nfc_home.png"></WorkImage>
      </a>
    </Container>
  </Layout>
);

export default NFC;
