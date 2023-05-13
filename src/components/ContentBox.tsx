import React from 'react';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import CategoryToggle from './CategoryToggles';
import CategoryBox from './CategoryBox';
import CategoryGrid from './CategoryGrid';
import SelectedCategoryToggle from './SelectedCategoryToggle';
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
    const [categories, setCategories] = useState<Category[]>([]);  
    const [currentCategory, setCategory]:  [number, (value: number) => void] = useState<number>(0);
    console.log(currentCategory)

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

    let counter : number = 1; 

    // callback for toggles. 
    // 0: default
    function handleClick(categoryNumber: number) { 
        if (categoryNumber === currentCategory) {
            setCategory(0);
        } else {
            setCategory(categoryNumber);
        }
        console.log(currentCategory);
    }

    // Just render a box with a grid display
    // pass in just the category[currentCategory-1] to render
    // also render the toggles, with the currently pressed one with white color
    if (currentCategory !== 0) {
        const num : number = currentCategory-1;
        const categoryToUse : Category = categories[num]
        
        return (
            <Box sx={{ width: '100%', alignContent: 'center' }}>
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
                    overflowX: 'auto',
                    '&::-webkit-scrollbar': {
                    display: 'none',
                    },
            }}>
                {categories.map((category: Category) => (
                    counter === currentCategory ? 
                        <SelectedCategoryToggle onClick={handleClick} id={counter++} categoryName={category.title} />
                        :
                        <CategoryToggle onClick={handleClick} id={counter++} categoryName={category.title} />
                ))}
            </Box>
            <CategoryGrid category={categoryToUse} />
        </Box>
        )
    }
    
    return (
        <Box sx={{ alignContent: 'center' }}>
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
                <CategoryToggle onClick={handleClick} id={counter++} categoryName={category.title} />
                ))}
            </Box>
            {categories.map((category: Category) => (
                <CategoryBox category={category} />
            ))}
        </Box>
    )
}

export default ContentBox