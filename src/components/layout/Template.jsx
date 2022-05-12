import Footer from "./Footer"
import Header from "./Header"

const Template = ({children}) => {
  return (
    <>
        <Header/>
        <main className="todo__container py-3 px-5">{children}</main>
        <Footer />
    </>
  )
}

export default Template