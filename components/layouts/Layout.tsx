import Head from "next/head"
import { type } from "os";
import { FC } from "react"
import { Navbar } from '../ui';

interface LayoutProps  {
    children: React.ReactNode,
    title?: string,
}

const origin = ( typeof window === 'undefined' ) ? '' : window.location.origin;

export const Layout:FC<LayoutProps> = ( { children, title } ) => {


  

  return (
    <>
        <Head>
            <title>{ title ? title : '' }</title>
            <meta name="autor" content="Ruth Castro" />
            <meta name="description" content="Informacion del pokemon xxx" />
            <meta name="keywords" content="XXX, pokemon, pokedex" />

            <meta property="og:title" content={`Informacion sobre el pokemon ${title}`} />
            <meta property="og:description" content={`Esta es la pagina de: ${title}`} />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>

        <Navbar />
        <main style={{
            padding: '0, 20px'
        }}>
            { children }
        </main>
    </>
  )
}
