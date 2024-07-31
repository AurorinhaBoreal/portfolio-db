import { Box } from "@chakra-ui/react"
import styles from "./p.module.css"
import Header from "../../components/Header"

export default function Projects() {
  return (
    <>
      <Header />
      <Box className={styles.projectsContainer}>
        Projects
      </Box>
    </>
  )
}
