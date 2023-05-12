import React from 'react';
import { useState, useEffect } from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';
import CategoryToggle from './CategoryToggles';
import ContentCard from './ContentCard';
import CategoryBox from './CategoryBox';
interface Category {
    id: string;
    title: string;
    items: Array<Item>;
}

interface Item {
    id: string;
    title: string;
    host: string;
    img: string;
}

interface ApiResponse {
    categories: Array<Category>;
}

const ContentBox : any = () => {
    const [loading, setLoading] = useState<boolean>(true);
    const [categories, setCategories] = useState<Array<Category>>([]);  
    const [currentCategory, setCategory] = useState<number>(0);

    useEffect(() => {
        fetch('https://www.marcoexperiences.com/api/experiences/explore_test')
            .then(response => response.json())
            .then((data: ApiResponse) => {
                setLoading(false);
                setCategories(data.categories);
            })
    }, []);

    if (loading) {
        return (
            <Box sx={{ alignContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    }
    console.log(categories)

    if (currentCategory) {

    }
    return (
        <Box sx={{ alignContent: 'center' }}>
            {/* <Typography sx = {{ color: 'secondary.main' }}>Done</Typography> */}
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'left',
                    
                    '& > *': {
                        marginRight: 1,
                    },
                    bgcolor: 'primary.main',
                    pt: '60px',
                    pb: '60px',
            }}>
                    {categories.map((category: Category) => (
                    <CategoryToggle key={category.id} categoryName={category.title} />
                    ))}
            </Box>
            {categories.map((category: Category) => (
                    <CategoryBox category={category} />
            ))}
        </Box>
    )
}

export default ContentBox