import React from 'react'
import { TChartMain, Label, EachBar, BarChartTitle, BarChartContainer } from './styled'
import { chartData } from './fixture'

const Chart = ({ children, width, height }) => (
  <svg
    viewBox={`0 0 ${width} ${height}`}
    width={width}
    height={height}
  >
    {children}
  </svg>
)

const Bar = ({ x, y, width, height }) => (
  <rect
    x={x}
    y={y}
    width={width}
    height={height}
    fill={'#0ac'}
  />
)

const BarChart = ({ data }) => {
  // Width of each bar
  const itemWidth = 650
  const barWidth = 100

  // Distance between each bar
  const itemMargin = 10

  const dataLength = data.length

  // Normalize data, we'll reduce all sizes to 25% of their original value
  const massagedData = data.map((datum) =>
    ({ ...datum, repos: datum.repos * 0.25 })
  )

  // const mostRepos = massagedData.reduce((acc, cur) => {
  //   const { repos } = cur
  //   return repos > acc ? repos : acc
  // })
  const chartHeight = 200

  return (
    <BarChartContainer>
      <Chart
        width={itemWidth}
        height={chartHeight}
      >
        {massagedData.map((datum, index) => {
          const itemHeight = datum.repos

          return (
            <Bar
              key={datum.name}
              x={index * (barWidth + itemMargin)}
              y={chartHeight - itemHeight}
              width={barWidth}
              height={itemHeight}
            />
          )
        })}
      </Chart>
    </BarChartContainer>
  )
}

const BarName = ({ data }) => {
  const displayName = (eachItem) => {
    return <Label>{eachItem.name}</Label>
  }
  return (
    <EachBar>
      {data.map(displayName)}
    </EachBar>
  )
}

const TChart = () => (
  <TChartMain>
    <BarChartTitle>{'Growth in the Past Years'}</BarChartTitle>
    <BarChart data={chartData} />
    <BarName data={chartData} />
  </TChartMain>
)

export { TChart }
export default { TChart }
