import React from 'react'

//components
import CreateTask from '../../components/CreateTask'
import Tasks from '../../components/tasks'

const Dashboard = () => {
  return (
    <div>
        <Tasks />
        <CreateTask />
    </div>
    )
}

export default Dashboard