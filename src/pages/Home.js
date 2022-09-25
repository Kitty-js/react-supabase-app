import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { client } from '../API/client'
import TaskForm from '../components/TaskForm';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!client.auth.user()) {
      navigate('/login');
    }
  }, [navigate])
  
  return (
    <div className='p-7 text-2x1 font-semibold flex-1 h-screen'>
      <TaskForm/>
    </div>
  )
}

export default Home