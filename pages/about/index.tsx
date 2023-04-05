import Head from 'next/head'
import Layout from '@/layout'
import { BuildingOne, User, Bookmark } from '@icon-park/react'
import { useState } from 'react'
import Desc from './components/desc'
import Managers from './components/managers'
import Culture from './components/culture'

export default function About() {
  const headOptions = [
    { title: '首页', path: '/' },
    { title: '关于我们', path: '/about', isActive: true },
    { title: '解决方案', path: '/solution' },
  ]

  const tabList = [
    { icon: BuildingOne, title: '公 司 介 绍', comp: Desc },
    { icon: User, title: '高 管 简 介', comp: Managers },
    { icon: Bookmark, title: '企 业 文 化', comp: Culture },
  ]

  const [step, setStep] = useState(0)

  return (
    <>
      <Head>
        <title>Lils Space</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout headOptions={headOptions}>
        <div className="bg-primaryWhite center flex-col">
          <div className="mt-150 border-3 border-primary p-100 center flex-col text-44 text-thirdDark gap-70">
            <p>全球领先的商用服务机器人研发生产运营商</p>
            <p>LET THE FUTURE WALK TO YOU</p>
          </div>
          <div className="mt-150">
            <div className="border-b-1 border-thirdGary w-screen center gap-200">
              {tabList.map((i, idx) => (
                <div
                  key={i.title}
                  onClick={() => setStep(idx)}
                  className={
                    idx === step
                      ? 'w-222 h-133 bg-primary rounded-t-16 center flex-col text-20 text-white'
                      : 'w-222 h-133  rounded-t-16 center flex-col text-20 text-black cursor-pointer'
                  }
                >
                  <i.icon size={30} />
                  <div className="mt-25">{i.title}</div>
                </div>
              ))}
            </div>
            <div className="center py-150">{tabList[step].comp()}</div>
          </div>
        </div>
      </Layout>
    </>
  )
}
