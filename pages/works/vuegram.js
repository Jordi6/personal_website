import { Heading, Container } from "@chakra-ui/react"
import { Title, WorkImage } from "../../components/work"
import Layout from "../../components/layouts/article"
import P from '../../components/paragraph'



const Vuegram = () => (
    <Layout title="Vuegram">
        <Container>
            <Title>
                <a href="http://vuegram.design/" target="_blank">
                Vuegram
                </a>
            </Title>
            <P>A full-stack web app is written in Vuejs and Firebase. This app is a portfolio
                project. The web app uses Vue 3, the latest version on the front-end. The backend
                is constructed using Firebase, Docker, and an Nginx server with custom SSL. 
            </P>
            <br />
            <a href="http://vuegram.design/" target="_blank">
                <WorkImage src="/images/works/vuegram_settings.png"></WorkImage>
            </a>
        </Container>
    </Layout>
)

export default Vuegram