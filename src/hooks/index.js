export const useGetText = (text, language) => {
  if (language === 'en') return text.en
  if (language === 'es') return text.es
}