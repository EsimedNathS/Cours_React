import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

function PokeItem({pokemon}) {
  return (
    <div>
      {pokemon.isFind &&
        <Card sx={{ maxWidth: 345}}>
          <CardActionArea>
            <CardMedia
              component="img"
              // height="140"
              image={pokemon.image}
              alt={pokemon.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {pokemon.name}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                This pokemon is of the {pokemon.type} type !
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      }
    </div>
  )
}

export default PokeItem