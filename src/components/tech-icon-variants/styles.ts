import styled, { css } from 'styled-components';
import { motion, Reorder } from 'framer-motion';

export const Container = styled(Reorder.Item)`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: ${theme.spacings.small};
    user-select: none;

    &:last-child {
      margin-bottom: 0;
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    width: 100%;
    grid: 'drag logo menu menu' 2rem ' drag logo show-more edit' 2rem / 2rem 4rem 1fr 4rem;

    justify-content: start;
    column-gap: ${theme.spacings.medium};
    padding: ${theme.spacings.small};
    border-radius: ${theme.border.radius};
    border-width: ${theme.border.width};
    border-color: ${theme.colors.border};
    border-style: solid;
    height: 6.4rem;
  `}
`;

export const Drag = styled.div`
  ${({ theme }) => css`
    grid-area: drag;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    color: ${theme.colors.text};
    cursor: grab;

    * {
      cursor: grab;
    }

    &:hover {
      color: ${theme.colors.primary};
    }

    &:active {
      cursor: grabbing;

      * {
        cursor: grabbing;
      }
    }
  `}
`;

export const Logo = styled.img`
  display: block;
  grid-area: logo;
  align-self: center;
  width: 100%;
`;

export const Wrapper = styled.div`
  grid-area: menu;
  width: 100%;
  display: flex;
`;

export const Name = styled.strong`
  text-transform: capitalize;
  margin-right: auto;
`;

export const DeleteButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    display: grid;
    place-items: center;

    & * {
      cursor: pointer;
    }

    &:hover {
      color: ${theme.colors.error};
    }
  `}
`;

export const EditButton = styled.button`
  ${({ theme }) => css`
    grid-area: edit;
    align-self: end;
    justify-self: end;
    display: grid;
    place-items: center;

    cursor: pointer;

    & * {
      cursor: pointer;
    }

    &:hover {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Grow = styled(motion.div)`
  overflow: hidden;
`;
