import '@/styles/globals.css'
import '@/styles/common.scss'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority="high">
        <Head>
          <script src="/utils/setRem.js"></script>
        </Head>
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  )
}
