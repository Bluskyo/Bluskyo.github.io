import Content from "./components/Content"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster richColors={true}/>
      <Navbar />
      <Content />
      <Footer />
    </>
  )
}

export default App
