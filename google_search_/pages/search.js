import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import { useRouter } from 'next/router'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Searchresults from '../components/SearchResults'

export default function Search({results}) {
    const router = useRouter();
    console.log(results);
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Results</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Searchresults results={results} />
        </div>
    )
}

export async function getServerSideProps(context) {
    const startIndex = context.query.start || "0";

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then(res => res.json());

    return {
        props: {
            results: data,
        }
    }
}