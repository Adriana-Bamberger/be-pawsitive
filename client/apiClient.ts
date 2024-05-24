import request from 'superagent'
import { ImageData, CatImage } from './models/catsInterface'

export async function getCat(): Promise<CatImage> {
  const res = await request.get('/api/v1/cats')
  return res.body[0] as CatImage
}
export async function getMoarCats(): Promise<ImageData[]> {
  console.log('hello')
  const res = await request.get('/api/v1/multipleCats')
  console.log(res.body)
  return res.body as ImageData[]
}
