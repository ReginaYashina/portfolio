import styled from 'styled-components'

type FlexWrapperPropsType = {
  justify?: string
  align?: string
  wrap?: string
  direction?: string
  basis?: string
  gap?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${(props) => props.justify || undefined};
  align-items: ${(props) => props.align || undefined};
  flex-wrap: ${(props) => props.wrap || undefined};
  flex-direction: ${(props) => props.direction || undefined};
  flex-basis: ${(props) => props.basis || undefined};
  gap: ${(props) => props.gap || undefined};
`
