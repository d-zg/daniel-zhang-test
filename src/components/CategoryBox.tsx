import React from 'react';
import { Box, Typography } from '@mui/material'
import ContentCard from './ContentCard';

const CategoryBox = ({ category }: any) => {
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
            display: "flex",
            flexDirection: 'row',
            alignItems: "left",
            // width: "100%",
            overflowX: "auto",
            scrollBehavior: "smooth",
                "&::-webkit-scrollbar": {
            display: "none",
            gap: '10px',
        },
          }}
        >
          {category.items.map((item: any) => (
            <ContentCard title={item.title} host={item.host} img={item.img} />
          ))}
        </Box>
      </Box>
    );
};
  
export default CategoryBox;