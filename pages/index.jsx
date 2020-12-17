import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Card from '../components/cards/card'
import HoveredCard from '../components/cards/hoveredCard'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Jumpstart App</title>
      </Head>
      <main className={styles.grid}>
        <Card/>
        <HoveredCard/>
      </main>
    </div>
  )
}
