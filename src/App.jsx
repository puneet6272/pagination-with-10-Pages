import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import './App.css'
import BasicExample from './BasicExample';
import axios from 'axios';
import Posts from './Posts';
import Pagination from './pagination';

function App() {
  const [posts, setPosts] = useState([])

  const [loading, setLoading] = useState(false)

  const [currentPage, setCurrentPage] = useState(1)

  let postPerPage = 10


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')

      setLoading(false)
      setPosts(res.data)
    }
    fetchPosts()

  }, [])


  const indexOfLastPost = currentPage * postPerPage
  const indexOfFirstPost = indexOfLastPost - postPerPage
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost)


  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>

      <header>
        <BasicExample />
      </header>


      <main className='container mt-2'>
        <h1 className='text-primary mb-2'> My blog
        </h1>
        <Posts post={currentPost} loading={loading} />


        <footer>
          <Pagination postperPage={postPerPage} totalPost={posts.length} paginate={paginate} />
        </footer>
      </main>

    </>
  )
}

export default App
