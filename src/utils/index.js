
export const getText = ({ language, textSection }) => {
  if (language === 'en') return textSection.en
  if (language === 'es') return textSection.es
}


export const getExperiences = ({ language, infoExperiences }) => {
  if (language === 'en') return infoExperiences.en
  if (language === 'es') return infoExperiences.es
}