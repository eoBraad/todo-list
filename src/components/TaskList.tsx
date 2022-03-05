import { UnorderedList, Text, ListItem, Flex, Button, Icon } from "@chakra-ui/react"
import { BsFillTrash2Fill } from "react-icons/bs"
import { MdTaskAlt } from "react-icons/md"

interface Task {
  id?: number,
  title?: string,
  isComplete?: boolean
}

interface TaskListProps {
  task?: Task[],
  completeTask: (id?: number) => void
  removeTask: (id?: number) => void
}

export const TaskList = ({task, completeTask, removeTask}: TaskListProps) => {
  return (
    <UnorderedList
        mt='12'
        minW='500px'
        fontWeight='bold'
        h='100%'
        pr='4'
        listStyleType='none'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='flex-start'
      >
        <Text 
          textAlign='center'
          mb='4'
          color='gray.400'
        >Tasks</Text>
       
       {task && task.map((tasks) => (
          <ListItem
          bg='gray.800'
          pl='6'
          borderRadius='full'
          w='100%'
          display='flex'
          alignItems='center'
          maxWidth={['300px', '300px', '400px', '500px']}
          key={tasks.id}
          mt='4'
        >
          <Text
            color={tasks.isComplete ? 'green.200' : 'white'}
            as='span'
            textDecoration={tasks.isComplete ? 'line-through' : 'none'}
          >{tasks.title}</Text>
          <Flex
            flex='1'
            justifyContent='flex-end'
          >
            <Button 
              bg='green.500'
              borderRadius='0'
              _hover={{
                bg: 'green.600'
              }}
              onClick={()=> completeTask(tasks.id)}
            >
              <Icon as={MdTaskAlt} fontSize='20' />
            </Button>
            <Button 
              bg='red.500'
              borderRightRadius='full'
              _hover={{
                bg: 'red.600'
              }}
              onClick={() => removeTask(tasks.id)}
            >
              <Icon as={BsFillTrash2Fill} fontSize='20' />
            </Button>
          </Flex>
        </ListItem>
       ))}
      </UnorderedList>
  )
}