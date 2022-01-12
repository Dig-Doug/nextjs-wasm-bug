import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import * as wasm from '../generated/hello_world_bundler_wasm_bindgen.js';

export default function Home() {
  return (
    <div className={styles.container}>
	  <pre>wasm.double(4) = {wasm.double(4)} </pre>
    </div>
  )
}
