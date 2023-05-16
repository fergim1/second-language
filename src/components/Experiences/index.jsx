////////////////// CONTEXT ///////////////////////////////////////////
import { useContext, useState } from "react"
import { AppContext } from "../../context"

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ContainerExperiences,
  WrapperItem,
  TableResponsive,
  Title,
  TitleSection,
  WrapperInfo,
  TextItem,
} from "../../styles/Experiences"

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_EXPERIENCES as textSection, INFO_EXPERIENCES as infoExperiences } from "../../constant"
import { getText, getExperiences } from "../../utils"

////////////// MODAL ///////////////////////////////////////////////
import Modal from "../Modal"




////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Experiences () {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })
  const experiences = getExperiences({ language, infoExperiences })
  const [modalOpen, setModalOpen] = useState(false)
  const [itemInfo, setItemInfo] = useState([])

  const openModal = (el) => {
    setItemInfo(el)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setItemInfo([])
  }

  return (
    <ContainerExperiences id={language === 'en' ? 'Experiences' : 'Experiencias'}>
      <WrapperInfo >
        <TitleSection>{text.titleSection}</TitleSection>
        <Title> {text.title} </Title>
        <TableResponsive >
          {
            experiences.map((el) => {
              return (
                <WrapperItem
                  key={el.number}
                  src={el.image}
                  onClick={() => openModal(el)}
                >
                  <TextItem >{el.title}</TextItem>
                </WrapperItem>
              )
            })
          }

        </TableResponsive>
        {
          modalOpen
          &&
          <Modal
            closeModal={closeModal}
            itemInfo={itemInfo}
            language={language}
          />
        }
      </WrapperInfo>
    </ContainerExperiences>
  )
}

export default Experiences