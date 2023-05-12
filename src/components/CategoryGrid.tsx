import React from 'react';
import { Box, Typography } from '@mui/material'
import ContentCard from './ContentCard';

const CategoryGrid = ({ category }: any) => {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "left",
          padding: "1rem",
          borderRadius: "0.5rem",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          mb: "20px",
        }}
      >
        <Typography variant="h4" sx={{ color: "secondary.main", fontSize: "24px", fontWeight: "bold", marginBottom: "1rem" }}>
          {category.title}
        </Typography>
        <Box
  sx={{
    alignItems: "left",
    width: "100%",
    gap: '0px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    // padding: '0px 20px', // add padding on left and right sides
    '& > *': {
        width: 'calc(25% - 10px)', // subtract margin from 25% to fit 4 items in a row
        margin: '0 10px 16px 0', // add margin to right and bottom of each item
        '&:nth-child(4n)': {
            marginRight: 0, // remove right margin from the fourth item in each row
        }
    }
  }}
        >
          {category.items.map((item: any) => (
            <ContentCard title={item.title} host={item.host} img={item.img} />
          ))}
        </Box>
      </Box>
    );
};
  
export default CategoryGrid;