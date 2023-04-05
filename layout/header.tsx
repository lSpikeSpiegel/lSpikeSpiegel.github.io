import { FunctionComponent } from 'react'
import { Card } from 'antd'
import Link from 'next/link'

export interface Option {
  title: string
  path: string
  isActive?: boolean
  icon?: FunctionComponent
}

export default function Header(props: { options: Option[] }) {
  return (
    <>
      <Card
        className="w-full bg-primaryDark rounded-0"
        bordered={false}
        hoverable={true}
        bodyStyle={{ padding: 0, height: '100%' }}
      >
        <div className="h-90 flex justify-around ">
          <div className="center text-20 font-semibold select-none">
            <img className="w-190 h-50" src="/images/logo.png" alt="" />
          </div>
          <div className="flex gap-90 items-center">
            {props.options.map((i) => (
              <Link href={i.path}>
                <div
                  key={i.title}
                  className={
                    i.isActive
                      ? 'center text-18 text-white select-none h-40 p-20 border-b-2 border-primary'
                      : 'center text-18 text-white select-none h-40 p-20'
                  }
                >
                  {i.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Card>
    </>
  )
}
