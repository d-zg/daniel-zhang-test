import React from 'react';
import { styled } from '@mui/material/styles';
import { CategoryToggleProps } from './types';
import useCategoryToggle from './useCategoryToggle';
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
  const { fns } = useCategoryToggle(props);

  return (
    <CategoryToggle1 className={props.className}>
      <CategoryToggle2>
        <Typography sx={{ fontSize: "12px", fontWeight: "bold", color: "secondary.main" }}>{props.categoryName}</Typography>
      </CategoryToggle2>
    </CategoryToggle1>
  );
}

export default CategoryToggle;