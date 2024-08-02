import { Box, Image, Text } from "@chakra-ui/react"
import styles from "./h.module.css"
import Header from "../../components/Header"
import myImage from "../../assets/myImage.jpg"
import SkillCard from "../../components/SkillCard"

export default function Home() {
  return (
    <>
      <Header />
        <Box className={styles.bodyContainer}>
          <Box className={styles.infoWrapper}>
              <Text className={styles.introText}>Olá, meu nome é</Text>
              <Text className={styles.myName}>Aurora Kruschewsky</Text>
              <Text className={styles.role}>Sou desenvolvedora FullStack na DBServer</Text>
          </Box>
          <Image src={myImage} className={styles.myImage}/>
          <Box className={styles.aboutWrapper}>
            <Text className={styles.aboutTitle}>Sobre mim</Text>
            <Text className={styles.aboutInfo}>Texto que me descreve :D</Text>
          </Box>
          <Box className={styles.skillWrapper}>
            <Text className={styles.skillTitle}>Habilidades:</Text>
            <SkillCard />
          </Box>
        </Box>
    </>
  )
}
