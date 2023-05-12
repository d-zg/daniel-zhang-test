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
    backgroundColor: `rgba(255, 255, 255, 1)`,
    borderRadius: `120px`,
    border: `1px solid rgba(255, 255, 255, 0.15)`,
    display: `flex`,
    position: `relative`,
    isolation: `isolate`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    alignItems: `flex-start`,
    padding: `12px 16px`,
    boxSizing: `border-box`,
    margin: `0px`,
  }));


function SelectedCategoryToggle(props: CategoryToggleProps): any {
  return (
    <CategoryToggle1 className={props.className}>
      <CategoryToggle2>
        <Typography onClick={()=> props.onClick(props.id as number)} 
            sx={{ fontSize: "12px", fontWeight: "bold", color: "primary.main" }}>
                {props.categoryName}
        </Typography>
      </CategoryToggle2>
    </CategoryToggle1>
  );
}

export default SelectedCategoryToggle;