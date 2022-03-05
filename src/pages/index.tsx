import { Box, Button, Flex, Icon, Input } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useState } from 'react'
import { AiOutlineAppstoreAdd } from 'react-icons/ai' 
import { TaskList } from '../components/TaskList'
import { UserBar } from '../components/UserBar'


interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

const Home: NextPage = () => {

  const [task, setTask] = useState<Task[]>([])
  const [inputVal, setInputVal] = useState('')

  function handleSetTask () {
    if (!inputVal) {
      return
    }

    const newTask = {
      id: task.length + 1,
      title: inputVal,
      isComplete: false
    }

    setTask(prevState => [...prevState, newTask])
    setInputVal('')
  }

  function handleComplete (id?: number) {
    const newTaskList = task.map(tasks => tasks.id === id ? {
      ...tasks,
      isComplete: !tasks.isComplete
    }: tasks)

    setTask(newTaskList)
  }

  function handleRemoveTask (id?: number) {
    const tasksFiltered = task.filter(tasks => tasks.id !== id)
    setTask(tasksFiltered)
  }

  return (
    <Flex
      as='main'
      direction='column'
      h='100vh'
      w='100%'
      maxWidth={1320}
      mx='auto'
      align='center'
      justify='flex-start'
      py='8'
    >
      <Box>
        <Flex
          w='100%'
          direction={['column', 'column', 'column', 'row']}
        >
          <Flex
            as='label'
            w='100%'
          
            pl='6'
            ml='6'
            maxWidth={400}
            alignSelf='center'
            color='gray.200'
            position='relative'
            bg='gray.800'
            borderRadius='full'
          >
            <Input 
              variant='unstyled'
              placeholder='Add new task'
              mr='4'
              _placeholder={{
                color: 'gray.400'
              }}
              onChange={(e) => setInputVal(e.target.value)}
              value={inputVal}
            />
            <Button
              bg='pink.500'
              borderRightRadius='full'
              _hover={{
                bg: 'pink.600'
              }}
              onClick={handleSetTask}
            >
              <Icon as={AiOutlineAppstoreAdd} color='white' fontSize='20'/>
            </Button>
          </Flex>

          <UserBar />
        </Flex>
      </Box>

      <TaskList task={task} completeTask={handleComplete} removeTask={handleRemoveTask}/>
    </Flex>
  )
}

export default Home
