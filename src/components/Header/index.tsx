import { Image, Text, Flex } from "@chakra-ui/react"
import styles from "./h.module.css"
import cv from "../../assets/Aurora_Curriculo.pdf"
import dbHeader from "../../assets/header-DB.png"
import githubImg from "../../assets/github.svg"
import linkedinImg from "../../assets/linkedin.svg"
import { Link } from "react-router-dom"

export default function Header() {
  const LINKEDIN = () => window.open("https://www.linkedin.com/in/aurora-kruschewsky")
  const GITHUB = () => window.open("https://github.com/AurorinhaBoreal")
  const DB = () => window.open("https://db.tec.br/")
  const CV = () => window.open(cv)

  return (
    <Flex className={styles.headerBody}>
      <Flex className={styles.logo_textWrapper}>
        <Flex className={styles.logoContainer}>
          <Image className={styles.headerLogo} src={dbHeader} onClick={DB} _hover={{ cursor: "pointer"}}/>
        </Flex>
        <Link to={"/"}>
          <Text className={styles.hText}>Sobre</Text>
        </Link>
        <Text className={styles.hText} onClick={CV} _hover={{ cursor: "pointer"}}>Curriculo</Text>
        <Link className={styles.hText} to={"/projetos"}>
          <Text>Projetos</Text>
        </Link>
      </Flex>
      <Flex className={styles.iconsWrapper}>
        <Image className={styles.icons} src={githubImg} onClick={GITHUB} _hover={{ cursor: "pointer"}}/>
        <Image className={styles.icons} src={linkedinImg} onClick={LINKEDIN} _hover={{ cursor: "pointer"}}/>
      </Flex>
    </Flex>
  )
}
