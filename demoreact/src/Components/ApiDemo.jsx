import React from 'react'
import useFetch from './useFetch'

const ApiDemo = () => {

    const [apiData] = useFetch("https://jsonplaceholder.typicode.com/comments")

    console.log(apiData);


  return (
    <div>ApiDemo</div>
  )
}

export default ApiDemo