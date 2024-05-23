import request from 'superagent'
import { useQuery } from '@tanstack/react-query'

function Cats() {
  // Requesting API
  const { data, isPending, isError } = useQuery({
    queryKey: ['cats'],
    queryFn: async () => {
      const res = await request.get('/api/v1/cats')
      return res.body
    },
  })

  // Loading Bar
  if (isPending) {
    return <p>Loading...</p>
  }

  // Error
  if (isError) {
    return <p>ERROR!</p>
  }

  //Cat Display
  return <></>
}

export default Cats
