import { Box, Image } from "@chakra-ui/react"
import styles from "./f.module.css"
import footerLogo from "../../assets/footerLogo.png"

export default function Footer() {
  return (
    <Box className={styles.footerContainer}>
        <Image src={footerLogo} className={styles.footerLogo}/>
    </Box>
  )
}
