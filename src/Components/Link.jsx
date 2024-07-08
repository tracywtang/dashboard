import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function Link() {
    useEffect(
        ()=>{
            axios.get('http://localhost:3040/api/data').then(
                (item)=>{console.log(item)}
            ).catch(
                ()=>{console.log('error')}
            )
        },[]
    )

  return (
    <div>
      <h1>homepage</h1>
    </div>
  )
}