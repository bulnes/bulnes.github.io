import type { NextPage } from 'next'
import { Header } from '../components/Header'
import { Content } from '../components/Content'
import { Sidebar } from '../components/Sidebar'
import { Article } from '../components/Article'

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Content>
        <Sidebar />
        <Article />
      </Content>
    </>
  )
}

export default Home
