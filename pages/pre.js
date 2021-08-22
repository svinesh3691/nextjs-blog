import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({users}) {

    return (
        <div className="container">
            <Head>
                <title>PRE</title>
            </Head>
            {users.map((a,i ) => {
                return <div key={i}> {a.first_name}  </div>
            })}
        </div>
    )
}


export async function getStaticProps(context) {
    const res = await fetch(`https://reqres.in/api/users?page=1`)
    const data = await res.json();
    console.log(data);
    return {
      props: { users : data.data }, // will be passed to the page component as props
    }
  }
  
