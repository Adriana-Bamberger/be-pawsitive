// import request from 'superagent'
// import { useQuery } from '@tanstack/react-query'
// import type { CatImage } from '../models/catsInterface'
import { useQuery } from '@tanstack/react-query'
import { getMoarCats } from '../apiClient'
import { Link } from 'react-router-dom'

function MoarCats() {
  // Requesting API
  // const url = getCat
  const query = useQuery({
    queryKey: ['moarcats'],
    queryFn: getMoarCats,
    // enabled: false,
  })

  async function handleClick() {
    query.refetch()
  }
  console.log(query)
  //Cat Display
  if (query.isLoading) {
    return <h2>LOADING...</h2>
  }
  if (query.isError) {
    return <h2>NO CATS FOR YOU</h2>
  }
  if (query.data)
    return (
      <>
        <div className="button">
          <button onClick={handleClick}>still sad :{'('} gimme cats :D </button>
        </div>
        <div className="container">
          {query.data.map((el) => {
            return (
              <div key={el.id}>
                <img className="catImage" src={`${el.url}`} alt="" />
              </div>
            )
          })}
        </div>
        <div className="footer">
          <Link to="/">
            <button>back to singular cats :3 </button>
          </Link>
        </div>
      </>
    )
}

export default MoarCats
