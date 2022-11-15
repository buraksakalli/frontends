import { Text } from "rebass";
import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ClickableText = styled(Text)`
  :hover {
    cursor: pointer;
  }
  color: ${({ theme }) => theme.primary1};
`;
export const MaxButton = styled.button<{ width: string }>`
  padding: 0.8rem 1.6rem;
  background-color: ${({ theme }) => theme.primary5};
  border: 1px solid ${({ theme }) => theme.primary5};
  border-radius: 0.8rem;
  font-size: 1.6rem;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    padding: 0.4rem 0.8rem;
  `};
  font-weight: 500;
  cursor: pointer;
  margin: 0.4rem;
  overflow: hidden;
  color: ${({ theme }) => theme.primary1};
  :hover {
    border: 1px solid ${({ theme }) => theme.primary1};
  }
  :focus {
    border: 1px solid ${({ theme }) => theme.primary1};
    outline: none;
  }
`;

export const Dots = styled.span`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: ".";
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: ".";
    }
    33% {
      content: "..";
    }
    66% {
      content: "...";
    }
  }
`;
