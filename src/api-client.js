const BASE_URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=dba9cba1a161e57531774c09e3edbc0d&format=json'

const getArtists = async () => {
  const response = await fetch(`${BASE_URL}`)
  const data = await response.json()
  return data
}
export default getArtists
