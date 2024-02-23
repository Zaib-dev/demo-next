import React from 'react'

const Users = (props) => {
    console.log("c")
  return (
    <>
        <div>Users (SSR)</div>
        {
            props.data.users.map(user => <li key={user.id}>{user.firstName}</li>)
        }
    </>   
  )
}
export const getServerSideProps = async() => {
    const data = await (await fetch(`https://dummyjson.com/users`)).json()
    console.log("s")
    return {
        props: {
            data
        }
    }
}

export default Users