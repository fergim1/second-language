import {
  ///////////////////// CUSTOM STYLES COMPONENTS ////////////////////////////
  ContainerServices,
  GridContainer,
  GridItemLeftTop,
  WrapperInfo,
  TitleSection,
  Title,
  Text,

  GridItemRightBottom,
  WrapperListServices,
  WrapperItem,
  TextItem,

  // ButtomContactForm,

} from "../../styles/Services"

////////////////// CONTEXT ///////////////////////////////////////////
import { useContext } from "react"
import { AppContext } from "../../context"


////////////// ICONS ///////////////////////////////////////////////
import LocationCityIcon from '@mui/icons-material/LocationCity';
import AttractionsIcon from '@mui/icons-material/Attractions';
import MovieIcon from '@mui/icons-material/Movie';
import LocalCafeIcon from '@mui/icons-material/LocalCafe';
import PetsIcon from '@mui/icons-material/Pets';
import MuseumIcon from '@mui/icons-material/Museum';
import FlightIcon from '@mui/icons-material/Flight';

////////////// TEXT ///////////////////////////////////////////////
import { TEXT_SERVICES as textSection } from "../../constant"
import { getText } from "../../utils"

////////////////// MAIN COMPONENT /////////////////////////////////////////////
////////////////// MAIN COMPONENT /////////////////////////////////////////////
function Services () {
  const { language } = useContext(AppContext)
  const text = getText({ language, textSection })


  return (
    <ContainerServices id={language === 'en' ? 'Services' : 'Servicios'}>

      <GridContainer container spacing={2} >

        {/* ////////////////////////////////////  GRID LEFT TOP ////////////////////////////// */}
        <GridItemLeftTop item xs={12} sm={6} >
          <WrapperInfo>
            <TitleSection > {text.titleSection} </TitleSection>

            <Title> {text.title}</Title><br></br>
            <Text> {text.text} </Text>
          </WrapperInfo>
        </GridItemLeftTop>

        {/* ////////////////////////////////////  GRID RIGHT BOTTOM  ////////////////////////////// */}
        <GridItemRightBottom item xs={12} sm={6} >

          <WrapperListServices>
            <WrapperItem >
              <LocationCityIcon />
              <TextItem>
                {text.item1}
              </TextItem>
            </WrapperItem>

            <WrapperItem >
              <AttractionsIcon />
              <TextItem>
                {text.item2}
              </TextItem>
            </WrapperItem>

            <WrapperItem >
              <LocalCafeIcon />
              <TextItem>
                {text.item3}
              </TextItem>
            </WrapperItem>

            <WrapperItem >
              <MovieIcon />
              <TextItem>
                {text.item4}
              </TextItem>
            </WrapperItem>

            <WrapperItem >
              <PetsIcon />
              <TextItem>
                {text.item5}
              </TextItem>
            </WrapperItem>

            <WrapperItem >
              <MuseumIcon />
              <TextItem>
                {text.item6}
              </TextItem>
            </WrapperItem>

            <WrapperItem >
              <FlightIcon />
              <TextItem>
                {text.item7}
              </TextItem>
            </WrapperItem>


            {/* <ButtomContactForm
                type="submit"
                endIcon={!loading ? <ArrowOutwardIcon /> : ''}
                onClick={handleSubmit}
              >
                {
                  !loading
                    ? text.buttonText
                    : <SpinnerInButton size={'24px'} />
                }
              </ButtomContactForm> */}

          </WrapperListServices>


        </GridItemRightBottom>

      </GridContainer>


    </ContainerServices>
  )
}

export default Services