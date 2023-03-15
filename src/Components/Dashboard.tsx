import { Box, Flex, SimpleGrid, Text, theme } from '@chakra-ui/react'
import Sidebar from './Sidebar'

import Chart from 'react-apexcharts'

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    enabled: false
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.1
    }
  }
}

const series = [{ name: 'series1', data: [31, 120, 10, 28, 51, 18, 109] }]

export default function Dashboard() {
  return (
    <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
      <SimpleGrid
        flex="1"
        gap="4"
        minChildWidth="320px"
        alignItems="flex-start"
      >
        <Box p="8" bg="gray.700" borderRadius="8">
          <Text fontSize="lg" mb="4">
            Pedidos Emitidos
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
        <Box p="8" bg="gray.700" borderRadius="8">
          <Text fontSize="lg" mb="4">
            Produtos Vendidos
          </Text>
          <Chart options={options} series={series} type="area" height={160} />
        </Box>
      </SimpleGrid>
    </Flex>
  )
}
