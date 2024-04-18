import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
      return resp.data.drinks
    },
  }
}

export const loader = async ({ request }) => {
  const url = new URL(request.url)
  const searchTerm = url.searchParams.get('search') || ''
  // const resp = await axios.get(`${cocktailSearchUrl}${searchTerm}`)

  return {
    // drinks: resp.data.drinks,
    searchTerm,
  }
}

const Landing = () => {
  const { searchTerm } = useLoaderData()
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm))
  // const { drinks, searchTerm } = useLoaderData()
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  )
}

export default Landing
