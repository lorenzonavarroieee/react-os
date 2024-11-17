import { User } from "@/app/types/user"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

interface CardProps {
    nombre: string;
    image: string;
    edad: number;
}

export const CardComponent = ({nombre, image, edad}: CardProps) => {
    return(
        <Card sx={{maxWidth: 345}}>
            <CardMedia sx={{height: 140}} image={image}/>
            <CardContent>
                <Typography gutterBottom variant="h4" component='div'>
                    {nombre}
                </Typography>
                <Typography variant="body2" sx={{color:'text.secondary'}}>
                    {edad}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Follow</Button>
            </CardActions>
        </Card>
    )
}