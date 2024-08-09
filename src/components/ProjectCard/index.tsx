import { Box, Button, Image, Text } from "@chakra-ui/react"
import styles from "./pc.module.css"
import { getProjectImage, getProjectTitle, getProjectTag, getProjectDescription, getProjectLink} from "../../utils/projectInfo"

export default function ProjectCard() {
    const images = getProjectImage()
    const titles = getProjectTitle()
    const tags = getProjectTag();
    const descriptions = getProjectDescription();
    const links = getProjectLink();

    const handleFormat = (index: number) => {
        const tagLength: number = tags[index].length
        let formattedTags: string = ""
        for (let i = 0; i < tagLength-1; i++) {
            formattedTags = formattedTags + tags[index][i]+", "
        }

        formattedTags = formattedTags + tags[index][tagLength-1]
        return formattedTags
    }

    const handleLink = (link: string) => {
        console.log("LINK: "+link)
        window.open(link)
    }

    return (
        <>
            {images.map((pImg, index) => (
                <Box className={styles.cardBody}>
                    <Image className={styles.cardImg} key={"pImg"+index} src={pImg}/>
                    <Box className={styles.textBox}>
                        <Box>
                            <Text className={styles.cardTitle}>{titles[index]}</Text>
                            <Text className={styles.cardTags}>{handleFormat(index)}</Text>
                        </Box>
                        <Text className={styles.cardDesc}>{descriptions[index]}</Text>
                        <Box className={styles.buttonContainer}>
                            <Button className={styles.btn} onClick={() => {handleLink(links[index][0])}}>Acessar</Button>
                        </Box>
                    </Box>
                </Box>
            ))}
        </>
    )
}
