import { styled } from 'styleh-components'

export const TChartMain = styled.div.attrs({
  className: 'TChart',
})`
  padding: 1rem;
`

export const Label = styled.label`
  padding: rem(0) rem(0) rem(0) rem(15);
  width: rem(113);
  word-break: break-word;
  display: inline-block;
`

export const EachBar = styled.div`
  width: rem(680);
  margin: 0 auto;
`

export const BarChartTitle = styled.div`
  text-align: center;
  padding: 1rem;
  font-size: rem(28);
  font-weight: bold;
  color: #D0F8FF;
  text-shadow: 0 0 5px #046779, 0 0 10px #068fa9, 0 0 20px #00d7ff, 0 0 30px #A5F1FF, 0 0 40px #2acdea;
`

export const BarChartContainer = styled.div`
  width: rem(650);
  display: flex;
  margin: 0 auto;
`
