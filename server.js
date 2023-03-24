const express = require('express')
const app = express()
const PORT = 8000

const Characters = {
  luffy: {
    age: 19,
    occupation: 'Pirate',
    bounty: 1.5e9,
    devil_fruit: 'Gomu Gomu no Mi',
    haki: ['Observation', 'Armament'],
    crew: 'Straw Hat Pirates',
    position: 'Captain',
  },
  zoro: {
    age: 21,
    occupation: 'Swordsman',
    bounty: 320e6,
    devil_fruit: null,
    haki: ['Armament'],
    crew: 'Straw Hat Pirates',
    position: 'Swordsman',
  },
  doflamingo: {
    age: 41,
    occupation: 'Shichibukai',
    bounty: 1.47e9,
    devil_fruit: 'Ito Ito no Mi',
    haki: ['Observation', 'Armament'],
  },
  ace: {
    age: 20,
    occupation: 'Pirate',
    bounty: 550e6,
    devil_fruit: 'Mera Mera no Mi',
    haki: null,
  },
  sabo: {
    age: 22,
    occupation: 'Revolutionary',
    bounty: 602e6,
    devil_fruit: 'Mera Mera no Mi',
    haki: ['Observation', 'Armament'],
  },
}
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.get('/api/:characterName', (req, res) => {
  const charactersName = req.params.characterName.toLowerCase()
  return Characters[charactersName]
    ? res.json(Characters[charactersName])
    : res.json({ message: 'uknown' })
})

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING  ON ${PORT}`)
})
