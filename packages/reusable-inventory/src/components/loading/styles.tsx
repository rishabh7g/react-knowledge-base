import styled from 'styled-components';

export const StyledLoading = styled.div<{ bg: string; color: string }>`
  display: inline-block;
  height: 3rem;
  width: 3rem;
  border: 3px solid ${({ bg }) => bg};
  border-top-color: ${({ color }) => color};
  border-radius: 50%;
  animation: spin 2s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;
