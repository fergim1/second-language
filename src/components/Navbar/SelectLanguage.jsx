import { MenuItem, FormControl, Select, Box } from "@mui/material"
import { useContext } from "react"
import EnglishFlag from "../../assets/flags/EnglishFlag"
import SpanishFlag from "../../assets/flags/SpanishFlag"
import { AppContext } from "../../context"




const SelectLanguage = () => {
  const { language, setLanguage } = useContext(AppContext)

  const handleLanguage = (e) => {
    setLanguage(e.target.value)
  }

  return (
    <Box ml='12px'>
      <FormControl variant="standard" >
        <Select
          labelId="language"
          id="select"
          label={` aaaaaaaaaaaaaaaaaa ${<EnglishFlag />}`}
          value={language}
          displayEmpty
          onChange={handleLanguage}
        >
          <MenuItem value='en'> <EnglishFlag /> </MenuItem>
          <MenuItem value='es'> <SpanishFlag /> </MenuItem>

        </Select>
      </FormControl>
    </Box>
  )
}

export { SelectLanguage }