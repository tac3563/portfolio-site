import PageHeader from './components/PageHeader.tsx'
import Navbar from './components/Navbar.tsx'
import ProjectGrid from './components/ProjectGrid.tsx'
import './App.css'
import './styles/styles.scss'

function App() {

  return (
    <>
        <Navbar/>
        <PageHeader/>
        <ProjectGrid/>
    </>
  )
}

export default App
