import React from 'react';
import { styled } from '@mui/material/styles';
import { CategoryToggleProps } from './types';
import { Typography } from '@mui/material';

const CategoryToggle1: any = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: 'auto',
  width: 'fit-content',

});

const CategoryToggle2: any = styled('div')(({ theme }: any) => ({
  backgroundColor: `rgba(13, 13, 13, 1)`,
  border: `1px solid rgba(255, 255, 255, 0.15)`,
  boxSizing: `border-box`,
  borderRadius: `120px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `12px 16px`,
  margin: `0px`,
}));


function CategoryToggle(props: CategoryToggleProps): any {
  return (
    <CategoryToggle1 className={props.className}>
      <CategoryToggle2 sx={{
        '@media (max-width: 600px)': {
          fontSize: '1.5rem', // font size for mobile
          padding: '12px 16px', // padding for mobile
        },
      }}>
        <Typography onClick={()=> props.onClick(props.id as number)} 
            sx={{ 
              fontSize: "14px", 
              fontWeight: "bold", 
              whiteSpace: 'nowrap',
              color: "secondary.main",
              '@media (max-width: 600px)': {
                fontSize: '18px', // font size for mobile
                padding: '12px 16px', // padding for mobile
              },
               }}>
                {props.categoryName}
        </Typography>
      </CategoryToggle2>
    </CategoryToggle1>
  );
}

export default CategoryToggle;