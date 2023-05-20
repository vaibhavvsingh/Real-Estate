import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Router from 'next/router'
import Head from 'next/head'
import nProgress from 'nprogress'
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  nProgress.configure({showSpinner:false});

  Router.events.on('routeChangeStart',()=>{
    nProgress.start()
  })

  Router.events.on('routeChangeComplete',()=>{
    nProgress.done()
  })

  return (
    <>
      
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}
