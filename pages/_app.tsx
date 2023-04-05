import '@/styles/globals.css'
import '@/styles/common.scss'
import { ConfigProvider } from 'antd'
import { StyleProvider } from '@ant-design/cssinjs'
import type { AppProps } from 'next/app'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider>
      <StyleProvider hashPriority="high">
        <Component {...pageProps} />
      </StyleProvider>
    </ConfigProvider>
  )
}
