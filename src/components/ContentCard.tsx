import React from 'react';
import { CardMedia, Card, Typography } from '@mui/material'
import { ContentCardProps } from './types';
const ContentCard : any = (props: ContentCardProps) => {
    return(
        <Card sx={{ flexShrink: 0, mr: "10px", elevation: "0", border: 'none', width: "20%", maxHeight: "400px", bgcolor: "primary.main" }}>
            <CardMedia component="img" height="319px" sx={{ width: '100%' }} image={props.img} />
            
            <Typography variant="h5" sx={{ color: "secondary.main", fontWeight: 'bold', fontSize: 18, mt: 1 }}>
                {props.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "secondary.main", fontSize: 16, mb: 2 }}>
                {'x ' + props.host}
            </Typography>
        </Card>
    )
}

export default ContentCard