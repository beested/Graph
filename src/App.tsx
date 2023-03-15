import * as React from 'react'
import { ChakraProvider, Flex, theme } from '@chakra-ui/react'

import Header from './Components/Header'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import UserList from './Components/Users'

export const App = () => {
  const [showDashboard, setShowDashboard] = React.useState(false)

  const handleDashboardClick = () => {
    setShowDashboard(true)
  }

  const [showUserList, setUserList] = React.useState(false)

  const handleUserlistClick = () => {
    setUserList(true)
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex>
        <Header />
      </Flex>

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar
          onDashboardClick={handleDashboardClick}
          onUserListClick={handleUserlistClick}
        />
        <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
          {showDashboard && <Dashboard />}
          {showUserList && <UserList />}
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}
