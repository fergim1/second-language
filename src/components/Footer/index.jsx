///////////////////// CUSTOM COMPONENTS STYLES ///////////////////////////////////
import {
  ContainerFooter,
  LinkInstagram,
  WrapperContent,
  WrapperSocialNetworks,
  WrapperAllItems,
  WrapperThreeItems,
  LinkItem,
  Item,
  WrapperCopyright,
  TextCopyright,
} from "../../styles/footer"

////////////// CONTEXT /////////////////////////////////////////////
import { AppContext } from '../../context';
import { useContext } from "react";

////////////// ICONS ///////////////////////////////////////////////
import InstagramIcon from '@mui/icons-material/Instagram';

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_NAVBAR as textSection } from "../../constant"
import { getText } from "../../utils";




////////////// MAIN COMPONENT - Footer ///////////////////////////////////////////
////////////// MAIN COMPONENT - Footer ///////////////////////////////////////////
const Footer = () => {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })

  const firstThreeItems = text.slice(0, 3)
  const lastTwoItems = text.slice(3, 5)

  const handleScroll = (item) => {
    const section = document.getElementById(item)
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <ContainerFooter id='Footer'>
      <WrapperContent >

        <WrapperSocialNetworks >
          <LinkInstagram href='https://www.instagram.com/secondlanguage.modeon' target="_blank" rel="noreferrer" aria-label="Instagram">
            <InstagramIcon />
          </LinkInstagram>
        </WrapperSocialNetworks>

        <WrapperAllItems>
          <WrapperThreeItems >
            {firstThreeItems.map((item) => (
              <LinkItem key={item} onClick={() => handleScroll(item)} >
                <Item>{item}</Item>
              </LinkItem>
            ))}
          </WrapperThreeItems>
          <WrapperThreeItems  >
            {lastTwoItems.map((item) => (
              <LinkItem key={item} onClick={() => handleScroll(item)}>
                <Item>{item}</Item>
              </LinkItem>
            ))}
          </WrapperThreeItems>
        </WrapperAllItems>

        <WrapperCopyright>
          <TextCopyright>© {new Date().getFullYear()} {language === 'en' ? "All rights reserved." : "Todos los derechos reservados."}</TextCopyright>
        </WrapperCopyright>

      </WrapperContent>

    </ContainerFooter>
  )
}

export { Footer }