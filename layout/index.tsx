import Header, { Option } from './header'
import Footer from './footer'
interface Props {
  headOptions: Option[]
  children: JSX.Element
}

export default function Layout(props: Props) {
  return (
    <>
      <div className="w-screen h-screen flex flex-col overflow-x-hidden overflow-y-scroll">
        <Header options={props.headOptions}></Header>
        {props.children}
        <Footer></Footer>
      </div>
    </>
  )
}
