import {
  WrapperSideBar,
  WrapperItemSidebar,
  ItemSidebar,
} from "../../styles/Sidebar"


const SideBar = ({ items }) => {
  return (
    <WrapperSideBar>
      {items.map(item => (
        <WrapperItemSidebar key={item}>
          <ItemSidebar>
            {item}
          </ItemSidebar>
        </WrapperItemSidebar>
      ))}
    </WrapperSideBar>
  )
}

export { SideBar }
