// import request from 'superagent'
// import { useQuery } from '@tanstack/react-query'
// import type { CatImage } from '../models/catsInterface'
import { useQuery } from '@tanstack/react-query'
import { getCat } from '../apiClient'

function Cats() {
  // Requesting API
  // const url = getCat()
  const query = useQuery({
    queryKey: ['cat'],
    queryFn: getCat,
    enabled: false,
  })

  async function handleClick() {
    query.refetch()
  }

  //Cat Display
  if (query.isLoading) {
    return <h2>LOADING...</h2>
  }
  if (query.isError) {
    return <h2>NO CATS FOR YOU</h2>
  }

  return (
    <div id="cats">
      <button onClick={handleClick}>i&#39;m sad :{'('} gimme cat :D </button>
      <br></br>
      {query.data && <img id="catImage" src={`${query.data.url}`} alt="" />}
    </div>
  )
}

export default Cats
