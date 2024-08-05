import { Box, Flex, Image, Text } from "@chakra-ui/react"
import styles from "./h.module.css"
import Header from "../../components/Header"
import myImage from "../../assets/myImage.jpg"
import SkillCard from "../../components/SkillCard"
import Footer from "../../components/Footer"

export default function Home() {
  return (
    <>
      <Header />
        <Box className={styles.bodyContainer}>
          <Box className={styles.infoWrapper}>
              <Text className={styles.introText}>Olá, meu nome é</Text>
              <Flex className={styles.nameWrapper}>
                <Text className={styles.myName}>Aurora Kruschewsky</Text>
                <Text className={styles.myPronoums}>(Ela/Dela)</Text>
              </Flex>
              
              <Text className={styles.role}>Sou desenvolvedora FullStack na DBServer</Text>
          </Box>
          <Box display={"flex"}>
            <Image src={myImage} className={styles.myImage}/>
          </Box>
          <Box className={styles.aboutWrapper}>
            <Text className={styles.aboutTitle}>Sobre mim</Text>
            <Text className={styles.aboutInfo}>
              Tive meu primeiro contato com a programação em 2021 no 2° Ano do Ensino Médio com Técnico em Automação Industrial na ETEC. Desde então me encantei pela área.
            </Text>
            <Text  className={styles.aboutInfo}>
              Após fui em busca da minha vocação, durante o caminho fiz um Técnico em Redes de Computadores também na ETEC, o qual me deu uma boa base em infraestrutura e protocolos de comunicação. Tive também a oportunidade de ver outras linguagens de programação durante ele o que acabou me dando Certeza da área que eu queria seguir.
            </Text>
            <Text  className={styles.aboutInfo}>
              No ultimo semestre do curso eu comecei o que eu me encontro atualmente que é o Técnico em Desenvolvimento e Sistemas. Nele entrei de cabeça no mundo da programação, começando pelo básico HTML e JavaScript e vendo diversas outras linguagens e frameworks, como C#, Node e React.
            </Text>
            <Text className={styles.aboutInfo}>
              Atualmente estou na Unidade Ar e meu foco está em Java e o maravilhoso React.
            </Text>
          </Box>
          <Box className={styles.skillWrapper}>
            <Text className={styles.skillTitle}>Habilidades:</Text>
            <SkillCard />
          </Box>
        </Box>
        <Footer />
    </>
  )
}
