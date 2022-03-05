import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react"

interface UserBarProps {
  userName?: string,
  userImg?: string,
  userEmail?: string
}

export const UserBar = ({}: UserBarProps) => {
  return (
    <Flex
      mt={['12', '8', '6', '0']}
    >  
      <Box
        textAlign='right'
        flex='1'
        ml='12'
      >
       <Box
        mr='6'
       >
        <Text
            as='span'
            display='block'
            color='gray.400'
            fontWeight='bold'
          >
            João Alencar
          </Text>
          <Text
            as='span'
            color='gray.200'
          >
            joao.alencar099@gmail.com
          </Text>
       </Box>
      </Box>
      <Avatar src="https://github.com/eoBraad.png" size='md'/>
    </Flex>
  )
}