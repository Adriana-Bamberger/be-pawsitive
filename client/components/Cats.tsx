// import request from 'superagent'
// import { useQuery } from '@tanstack/react-query'
// import type { CatImage } from '../models/catsInterface'
import { Link } from 'react-router-dom'
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
    <>
      <div className="button">
        <button onClick={handleClick}>i&#39;m sad :{'('} gimme cat :D </button>
      </div>
      <div className="container">
        <br></br>
        {query.data && (
          <img className="catImage" src={`${query.data.url}`} alt="" />
        )}
      </div>
      <div className="footer">
        <Link to="/moarcats">
          <button>are you still sad :3 </button>
        </Link>
      </div>
    </>
  )
}

export default Cats
