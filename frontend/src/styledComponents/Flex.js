import styled from 'styled-components';

const Flex = styled.div`
  position: ${({ position }) => position || 'static'};
  display: flex;
  justify-content: ${({ justify }) => justify || 'stretch'};
  align-items: ${({ align }) => align || 'stretch'};
  column-gap: ${({ columnGap }) => columnGap || '0'};
  flex: ${({ flex }) => flex || 'unset'};
  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export default Flex;
