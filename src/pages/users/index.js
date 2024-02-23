import React from 'react'
import Link from 'next/link'
import useSWR from "swr";
import styles from '../../styles/Users.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json());



const Users = () => {

    const {
        data: users,
        isLoading,
        isError: error,
      } = useSWR(
        `https://dummyjson.com/users`,
        fetcher,
        { revalidateOnFocus: false, revalidateOnReconnect: false }
      );
      if (error) {
        return <p>Failed to fetch</p>;
      }
    
      if (isLoading) {
        return <p>Loading comments...</p>;
      }

  return (
    <div>
        {/* Userss2
        {
            users.users.map( (user) => {
                return (
                    <li className={styles.text} key={user.id}><Link href={`/users/${user.id}`}>{user.firstName}</Link></li>
                )
            })
        } */}
        AUTH
    </div>
    
  )
}

export default Users