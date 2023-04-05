import Head from 'next/head'
import Layout from '@/layout'
import { Card } from 'antd'

export default function Solution() {
  const headOptions = [
    { title: '首页', path: '/' },
    { title: '关于我们', path: '/about' },
    { title: '解决方案', path: '/solution', isActive: true },
  ]

  const imgList = [
    '/images/AIoT_solution.png',
    '/images/bot_solution.png',
    '/images/manufacturing_center.png',
    '/images/manufacturing_line.png',
  ]

  return (
    <>
      <Head>
        <title>Lil's Space</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout headOptions={headOptions}>
        <div className="bg-primaryWhite center flex-col">
          <div className="relative center">
            <img src="/images/factory.png" alt="" />
            <div className="absolute -bottom-50">
              <Card className="shadow-lg">
                <div className="text-30 text-primary font-semibold px-150">
                  全自主服务机器人技术及系统方案提供商
                </div>
              </Card>
            </div>
          </div>
          <div className="p-150 gap-200 center flex-wrap">
            {imgList.map((i) => (
              <img style={{ width: '62.2rem' }} src={i} alt="" />
            ))}
          </div>
        </div>
      </Layout>
    </>
  )
}
