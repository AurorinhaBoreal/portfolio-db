import { Image, Text, Flex } from "@chakra-ui/react"
import styles from "./h.module.css"
import githubImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"

export default function Header() {
  const LINKEDIN = () => window.open("https://www.linkedin.com/in/aurora-kruschewsky")
  const GITHUB = () => window.open("https://github.com/AurorinhaBoreal")
  const DB = () => window.open("https://db.tec.br/")

  return (
    <Flex className={styles.headerBody}>
      <Flex className={styles.logo_textWrapper}>
        <Flex className={styles.logoContainer}>
          <Image src="/Logo-DB.png" onClick={DB} _hover={{ cursor: "pointer"}}/>
        </Flex>
        <Text>Sobre</Text>
        <Text>Projetos</Text>
        <Text>Curriculo</Text>
      </Flex>
      <Flex className={styles.iconsWrapper}>
        <Image className={styles.icons} src={githubImg} onClick={GITHUB} _hover={{ cursor: "pointer"}}/>
        <Image className={styles.icons} src={linkedinImg} onClick={LINKEDIN} _hover={{ cursor: "pointer"}}/>
      </Flex>
    </Flex>
  )
}
