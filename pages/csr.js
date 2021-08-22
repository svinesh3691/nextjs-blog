import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const [users, setUsers] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        const res = await fetch(`https://reqres.in/api/users?page=1`)
        const data = await res.json();
        setUsers(data.data);
    }


    return (
        <div className="container">
            <Head>
                <title>CSR</title>
            </Head>
            {users ? users.map((a, i) => {
                return <div  key={i}> {a.first_name}  </div>
            }) : null}
        </div>
    )
}
