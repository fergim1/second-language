////////////////// CUSTOM STYLES COMPONENTS //////////////////////////////////////
import {
  WrapperSideBar,
  WrapperItemSidebar,
  ItemSidebar,
} from "../../styles/Sidebar"


////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
const SideBar = ({ items, handleOpenSideBar }) => {

  const handleScroll = (item) => {
    handleOpenSideBar()
    const section = document.getElementById(item)
    section.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  return (
    <WrapperSideBar id='Sidebar'>
      {items.map(item => (
        <WrapperItemSidebar
          key={item}
          onClick={() => handleScroll(item)}
        >
          <ItemSidebar>
            {item}
          </ItemSidebar>
        </WrapperItemSidebar>
      ))}
    </WrapperSideBar>
  )
}

export { SideBar }
