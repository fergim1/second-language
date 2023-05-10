
export const getText = ({ language, textSection }) => {
  if (language === 'en') return textSection.en
  if (language === 'es') return textSection.es
}