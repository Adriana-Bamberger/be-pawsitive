import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()
const API_KEY = process.env.CAT_API_KEY

router.get('/', async (req, res) => {
  try {
    const result = await request
      .get('https://api.thecatapi.com/v1/images/search')
      .query({ limit: 10, api_key: API_KEY })
    res.json(result.body)
  } catch (err) {
    if (err instanceof Error) {
      res.status(500).send((err as Error).message)
    } else {
      res.status(500).send('Something went wrong')
    }
  }
})

export default router
