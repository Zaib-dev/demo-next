import React from 'react'
import { useRouter } from 'next/router'
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());


const SingleUser = () => {
  const router = useRouter()
  const id = router.query.id

  const {
    data: user,
    isLoading,
    isError: error,
  } = useSWR(
    `https://dummyjson.com/user/${id}`,
    fetcher,
    { revalidateOnFocus: false, revalidateOnReconnect: false }
  );
  if (error) {
    return <p>Failed to fetch</p>;
  }

  if (isLoading) {
    return <p>Loading comments...</p>;
  }
  console.log(user)

  return (
    <div>Hello: {user.firstName}</div>
  )
}

export default SingleUser