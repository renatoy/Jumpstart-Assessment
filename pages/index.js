import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Logo from '../components/logo/Logo'
import Button from '../components/button/Button'
import Menu from '../components/menu/Menu'


export default function Home() {

  return (
    <div className={styles.container}>

      <Head>
        <title>Jumpstart App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* This is the row: */}
      <main className={styles.grid}>

        <article className={styles.article}>

          <h2 className={styles.title}>Default State</h2>
          <div className={styles.card}>

            <div className={styles.logo}><Logo /></div>

            <h3 className={styles.subtitle}>Corporate Bylaws</h3>
            <p className={styles.text}>An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors</p>

            <div className={styles.cardButton}>
              <Button />
            </div>


          </div>
          <div className={styles.rectangle}></div>
        </article>

        <article className={styles.article}>

          <h2 className={styles.title}>Hover State</h2>
          <div className={styles.card}>

            <div className={styles.menu}>
              <Menu />
            </div>

            {/* <div ref={ref}><MoreIcon /></div>
            {hovered && <div> <Menu /> </div>} */}

            <div className={styles.logo}><Logo /></div>


            <h3 className={styles.subtitle}>Corporate Bylaws</h3>
            <p className={styles.text}>An internal document that details the operating rules for the corporation and are typically adopted at the organizational meeting of the board of directors</p>

            <div className={styles.cardButton}>
              <Button />
            </div>


          </div>
          <div className={styles.rectangle}></div>
        </article>

      </main>

    </div>
  )
}
