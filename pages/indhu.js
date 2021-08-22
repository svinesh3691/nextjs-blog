import Head from 'next/head';
import { useState } from 'react';

export default function Indhu() {

    const [name, setName] = useState('Vinesh');
    const [age, setAge] = useState(29);

    // setTimeout(()=>{
    //     // setName('Indhu');
    //     name = "Indhu";
    // }, 3000)

    setTimeout(()=>{
        setName('Indhuja');
        setAge('24');
    }, 6000)

    return (
        <div className="container">
            <Head>
                <title>
                    Indhu
                </title>
            </Head>
            <div>
                <h1>{name} - {age}</h1>
                <ul>
                    <li>Vinesh</li>
                    <li>Indhu</li>
                    <li>Prabhu</li>
                </ul>
            </div>
        </div>
    )
}
