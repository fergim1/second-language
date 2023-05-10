
////////////////// TEXT /////////////////////////////////////////////
import { TEXT_NAVBAR } from '../../constant'

////////////////// CONTEXT ///////////////////////////////////////////
import { useContext, useState } from "react"
import { AppContext } from "../../context"

////////////////// HOOK /////////////////////////////////////////////
import { useGetText } from '../../hooks'

////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  ItemNav,
  WrapperMenu,
  WrapperItems,
  WrapperLogo,
  WrapperNavbar,
  WrapperLanguage,
  Logo,
  IconMenu,
  IconClose
} from '../../styles/Navbar'

////////////////// COMPONENTS ///////////////////////////////////////////////
import { SelectLanguage } from './SelectLanguage'
import { SideBar } from '../SideBar'

////////////////// IMAGES ///////////////////////////////////////////////
import image from '../../assets/logo.png'


////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Navbar ({ scrollToTop }) {
  const [openSideBar, setOpenSideBar] = useState(false)
  const { language } = useContext(AppContext)

  const items = useGetText(TEXT_NAVBAR, language)

  const handleOpenSideBar = () => setOpenSideBar(!openSideBar)

  const handleScroll = (item) => {
    const section = document.getElementById(item)
    section.scrollIntoView({ behavior: "smooth", block: "start" })
  }


  return (
    <>
      <WrapperNavbar>

        <WrapperMenu
          onClick={handleOpenSideBar}
        >
          {openSideBar === false ? <IconMenu /> : <IconClose />}
        </WrapperMenu>

        <WrapperLogo>
          <Logo src={image} alt='logo-second-language-mode-on' onClick={scrollToTop} />
        </WrapperLogo>

        <WrapperItems>
          {items.map(item => (
            <ItemNav
              key={item}
              onClick={() => handleScroll(item)}
            >
              {item}
            </ItemNav>
          ))}
        </WrapperItems>

        <WrapperLanguage>
          <SelectLanguage />
        </WrapperLanguage>

      </WrapperNavbar>

      {
        openSideBar
        &&
        <SideBar items={items} handleOpenSideBar={handleOpenSideBar} />
      }
    </>
  )
}

export default Navbar