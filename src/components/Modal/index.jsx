import { createPortal } from "react-dom";
import {
  ContainerModal,
  WrapperImage,
  WrapperInfo,
  WrapperText,
  Title,
  Description,
  WrapperButton,
  ButtonCloseModal


} from "../../styles/Modal";

function Modal (props) {
  const { image, image2, title, description } = props.itemInfo

  return createPortal(
    <ContainerModal onClick={props.closeModal}>
      <WrapperInfo>
        <WrapperImage srcsmall={image} srcbig={image2}></WrapperImage>
        <WrapperText>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </WrapperText>
        <WrapperButton >
          <ButtonCloseModal
            onClick={props.closeModal}
          >
            {props.language === 'en' ? 'Close' : 'Cerrar'}
          </ButtonCloseModal>
        </WrapperButton>
      </WrapperInfo>
    </ContainerModal>,
    document.getElementById('modal')
  );
}

export default Modal