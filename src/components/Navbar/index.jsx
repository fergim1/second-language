
////////////////// TEXT /////////////////////////////////////////////
import { textNavbar } from '../../constant'

////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
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
  IconMenu
} from '../../styles/Navbar'

import { SelectLanguage } from './SelectLanguage'

////////////////// IMAGES ///////////////////////////////////////////////
import image from '../../assets/logo.png'


////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Navbar () {
  const { language,
    // setLanguage
  } = useContext(AppContext)

  const items = useGetText(textNavbar, language)

  console.log(items)
  return (
    <WrapperNavbar>
      <WrapperMenu>
        <IconMenu />
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
  )
}

export default Navbar