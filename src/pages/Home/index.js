import React,{useState} from 'react'
import {Container, Typography, Card, Grid, TextField, Button} from '@material-ui/core'

//esto es de material.UI, solo llamo el js de los estilos
import styles from './style'

//aca llamamos a los iconos
import {MovieIcon} from '../../icons'

export default ({history}) => {
	
	
	const [searchText, setSearchText]=useState('');
	const handleSearchTextChange= event =>{
		setSearchText(event.target.value)
	}
	// esto es de material.UI, la funcion  styles, es como si llamara a los estilos que se crearon allá en el style.js
	const classes= styles()
	// la variable classes, es la que le puse a cada una de las etiquetas 
	const handleCleanTextClick=event=>{
		setSearchText('')
	}

	const handleSearchTextClick=event=>{
		history.push(`/results?movieName=${searchText}`)
	}

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container className={classes.titleGridContainer}>
					<Grid>
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon}/>
					</Grid>
				</Grid>
				<TextField
				value={searchText}
				placeholder="Buscar..."
				className={classes.textFieldSearch}
				onChange={handleSearchTextChange}
				/>
				
				<Grid className={classes.buttonContainer}>
					<Button variant="contained" size="medium" onClick={handleCleanTextClick}>
						Limpiar
					</Button>
					<Button className={classes.searchButton} variant="contained" color="primary" size="medium" onClick={handleSearchTextClick}>
						Buscar
					</Button>
				</Grid>
			</Card>
		</Container>
	)
}