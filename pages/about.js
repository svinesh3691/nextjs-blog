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
          This is about page
        </h1>
      </div>

      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        &nbsp;
        &nbsp;

        <Link href="/about">
          <a>About</a>
        </Link>
      </div>

    </div>
  )
}
