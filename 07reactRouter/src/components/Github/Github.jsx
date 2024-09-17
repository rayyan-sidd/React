import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/rayyan-sidd')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data)
  //   } )
  // }, [])
  const data = useLoaderData()

  return (
    <>
    <div className='flex content-center m-4 bg-gray-400 text-white p-4 text-3xl'> 
      <img className='rounded-full ' src={data.avatar_url} alt="GitPFP" />
      <div>
      Username: {data.login}
      </div>
      <div>
      Followers: {data.followers}
      </div>
    </div>
    
    </>
  )
}

export default Github

export const githubInfoLoader = async() => {
  const response = await fetch('https://api.github.com/users/rayyan-sidd')
  return response.json()
}