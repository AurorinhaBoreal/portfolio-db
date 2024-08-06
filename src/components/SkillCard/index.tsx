import { Flex, ListItem, UnorderedList, Image } from "@chakra-ui/react"
import styles from "./sc.module.css"
import {getSkillLevel, getSkillName } from "../../utils/skillInfo"
import fillSkill from "../../assets/filledSkill.svg"
import emptySkill from "../../assets/emptySkill.svg"

export default function SkillCard() {
  const skillNames = getSkillName()
  const skillLevels = getSkillLevel()

  const handleLevel = (full: number) => {
    const skill = []
    const empty = 5 - full
    
    for (let i = 1; i <= full; i++) {
      skill.push(<Image className={styles.skillDot} key={"filled"+i} src={fillSkill} height={"20px"} width={"20px"}/>)
    }

    for (let i = 1; i <= empty; i++) {
      skill.push(<Image className={styles.skillDot} key={"empty"+i} src={emptySkill} height={"20px"} width={"20px"}/>)
    }
    
    return skill
  }  

  return (
    <>
      {skillNames.map((skill, index) => (
          <UnorderedList className={styles.cardWrapper}>
            <Flex>
              <ListItem className={styles.skillText}>{skill}</ListItem>
            </Flex>
            <Flex className={styles.dotWrapper}>
              {handleLevel(skillLevels[index])}
            </Flex>
          </UnorderedList>
      ))}
    </>
  )
}
