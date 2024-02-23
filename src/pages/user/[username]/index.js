import { useRouter } from 'next/router'
import React from 'react'

const DynamicUser = () => {
    const router = useRouter()
  return (
    <>
        <button onClick={ (e) => router.push({
            pathname: "/user/[username]/settings",
            query: {username: router.query.username}
        })}>settings</button>
    </>
  )
}

export default DynamicUser