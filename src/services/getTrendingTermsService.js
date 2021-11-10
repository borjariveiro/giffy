import { API_KEY, API_URL } from './settings'

const fromApiResponseToGifs = apiResponse => {
  const { data = [] } = apiResponse
  return data
}

export default function getTrendingTerms({ limit = 25, keyword = 'morty' } = {}) {
  const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`
  return fetch(apiURL)
    .then(response => response.json())
    .then(fromApiResponseToGifs)
}
