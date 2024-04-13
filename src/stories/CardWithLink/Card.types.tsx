
export interface CardProps {
  title: string;
  content: string;
  link: string;
  imageUrl?: string; 
  alignText?: 'left' | 'center' | 'right'; 
  hoverEffect?: boolean; 
  backgroundColor?: string; 
}