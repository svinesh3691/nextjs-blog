import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <div>
        <h1 className="title">
          Welcome to Next.js!
        </h1>
      </div>

      <div>
        <Link href="/home">
          <a>Home Static</a>
        </Link>
        &nbsp;
        &nbsp;

        <Link href="/about">
          <a>About</a>
        </Link>
        &nbsp;
        &nbsp;

        <Link href="/productdetail/1">
          <a>Product one</a>
        </Link>

        &nbsp;
        &nbsp;

        <Link href="/productdetail/2">
          <a>Product two</a>
        </Link>
      </div>

    </div>
  )
}
