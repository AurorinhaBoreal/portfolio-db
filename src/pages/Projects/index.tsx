import { Box, Flex, Text } from "@chakra-ui/react"
import styles from "./p.module.css"
import Header from "../../components/Header"
import ProjectCard from "../../components/ProjectCard"
import Footer from "../../components/Footer"

export default function Projects() {
  return (
    <>
      <Header />
      <Box className={styles.projectsContainer}>
        <Text className={styles.title1}>Meus</Text>
        <Text className={styles.title2}>Projetos</Text>
        <Flex className={styles.cardWrapper}>
          <ProjectCard />
        </Flex>
      </Box>
      <Footer />
    </>
  )
}
