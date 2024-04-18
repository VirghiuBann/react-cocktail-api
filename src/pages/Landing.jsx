import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const loader = async () => {
  const searchTerm = ''
  const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`)

  return {
    drinks: resp.data.drinks,
    searchTerm,
  }
}

const Landing = () => {
  const { drinks, searchTerm } = useLoaderData()
  return (
    <>
      <SearchForm />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
