import request from 'superagent'
import { CatImage } from './models/catsInterface'

export async function getCat(): Promise<CatImage> {
  const res = await request.get('/api/v1/cats')
  console.log(res.body)
  return res.body[0] as CatImage
}
