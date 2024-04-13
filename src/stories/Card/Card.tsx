import React from 'react';
import styled, { css } from 'styled-components';
import { CardProps } from './Card.types';

const CardWrapper = styled.div<{ $hoverEffect?: boolean; $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#fff'};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  ${({ $hoverEffect }) =>
    $hoverEffect &&
    css`
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
    `}
`;

const CardImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 150px;  // Fixed width
  height: auto;  // Maintain aspect ratio
`;

const CardContent = styled.div<{ $alignText: 'left' | 'center' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: ${({ $alignText }) => $alignText};
  padding: 20px;
`;

function Card({ title, content, imageUrl, alignText = 'left', hoverEffect = false, backgroundColor }: CardProps) {
  return (
    <CardWrapper $hoverEffect={hoverEffect} $backgroundColor={backgroundColor}>
      {imageUrl && <CardImage src={imageUrl} alt="Card image" />}
      <CardContent $alignText={alignText}>
        <h2>{title}</h2>
        <p>{content}</p>
      </CardContent>
    </CardWrapper>
  );
}

export default Card;
