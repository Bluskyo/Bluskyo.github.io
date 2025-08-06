import Content from "./components/Content"
import Footer from "./components/Footer"
import LanguageSelect from "./components/LanguageSelect"
import Navbar from "./components/Navbar"
import { Toaster } from 'sonner'

function App() {
  return (
    <>
      <Toaster richColors={true}/>
      <Navbar />
      <LanguageSelect/>
      <Content />
      <Footer />
    </>
  )
}

export default App
