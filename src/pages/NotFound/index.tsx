import { Flex, Image, Text } from "@chakra-ui/react";
import styles from "./nf.module.css"
import notFoundImage from "../../assets/notFound.jpg";

export default function NotFound() {
  return (
    <Flex className={styles.bodyContainer}>
      <Text className={styles.nfText}>
        Infelizmente não encontramos essa página. Verifique a url e tente novamente.
      </Text>
      <Image src={notFoundImage}/>
    </Flex>
  )
}
