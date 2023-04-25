
////////////////// TEXT /////////////////////////////////////////////
import { textNavbar } from '../../constant'

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
function Navbar () {
  const [openSideBar, setOpenSideBar] = useState(false)
  const { language } = useContext(AppContext)

  const items = useGetText(textNavbar, language)

  const handleOpenSideBar = () => {
    setOpenSideBar((prevState) => !prevState)
  }

  console.log(openSideBar)

  return (
    <>
      <WrapperNavbar>

        <WrapperMenu
          onClick={handleOpenSideBar}
        >
          {openSideBar === false ? <IconMenu /> : <IconClose />}

        </WrapperMenu>

        <WrapperLogo>
          <Logo src={image} alt='logo-second-language-mode-on' />
        </WrapperLogo>

        <WrapperItems>
          {items.map(item => (
            <ItemNav key={item}>
              {item}
            </ItemNav>
          ))}
        </WrapperItems>

        <WrapperLanguage>
          <SelectLanguage />
        </WrapperLanguage>

      </WrapperNavbar>

      {openSideBar
        &&
        <SideBar items={items} />
      }
    </>
  )
}

export default Navbar