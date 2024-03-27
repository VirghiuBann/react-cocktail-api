import { useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'

const SinglePageError = () => {
  const error = useRouteError()
  console.log(error)
  return (
    <Wrapper>
      <div>
        <p>{error.message}</p>
      </div>
    </Wrapper>
  )
}

export default SinglePageError
