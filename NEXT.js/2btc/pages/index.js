import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div>
    <div class="nomics-ticker-widget" data-name="Bitcoin" data-base="BTC" data-quote="CZK"></div><script src="https://widget.nomics.com/embed.js"></script>
  </div>
  )
}
