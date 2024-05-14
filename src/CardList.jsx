import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'
import DrawBtn from './DrawBtn'
import ShuffleBtn from './ShuffleBtn'
import './CardList.css'
import {v4 as uuidv4} from 'uuid'

const CardList = () => {
  const [cards, setCards] = useState([])
  const [deck, setDeck] = useState()
  const [shuffle, setShuffle] = useState(true)
  useEffect(() => {
    async function loadDeck(){
      const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      setDeck(res.data.deck_id)
    }
    loadDeck()
  }, [])
  useEffect(() => {
    setShuffle(false)
  }, [deck])
  async function shuffleHandler() {
    const res = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    setDeck(res.data.deck_id)
    setCards([])
  }
  async function drawHandler() {
    const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/`)
    if(res.data.cards.length){
      let card = res.data.cards[0]['image']
      setCards(drawPile => [...drawPile, card])
    } else{
      alert("Error: no cards remaining!")
    }
  }
  
  return(
    <>
      <DrawBtn handler={drawHandler}/>
      <ShuffleBtn disable={shuffle} handler={shuffleHandler}/>
      <div className='draw-pile'>
        {cards.map((card) => <Card key={uuidv4()} img={card}/>)}
      </div>
    </>
  )

}

export default CardList