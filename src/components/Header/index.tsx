import { Box, Text } from "@chakra-ui/react"
import styles from "./h.module.css"

export default function Header() {
  return (
    <Box className={styles.headerBody}>
      <Box className={styles.topicWrapper}>
        <Text>Sobre</Text>
        <Text>Projetos</Text>
        <Text>Curriculo</Text>
      </Box>
    </Box>
  )
}
