import React from 'react'
import { useRouter } from 'next/router'

const Settings = () => {
    const router = useRouter()
    const username = router.query.username
  return (
    <div>This is {username} </div>
  )
}

export default Settings