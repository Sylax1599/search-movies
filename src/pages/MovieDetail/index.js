import React, {useEffect} from 'react'
import { Container, CircularProgress, Typography } from '@material-ui/core'

import {useDispatch, useSelector} from 'react-redux'
import {searchMovieById} from '../../redux/actions/search'
import {movieResult as movieResultSelector, movieResults} from '../../redux/selectors'

export default ({match}) =>{
    const dispatch=useDispatch()
    // Esta funcion use selector, es el que está en selector, de ah´el mimo nombre, y se recibe el state

    const movieResult = useSelector(state=>movieResultSelector(state))
    
    
    useEffect(() =>{
        const movieId= match.params.id 
        //tenemos que validar si no es vacio, porque sino queda en un ciclo
        if(!movieResult || movieResult && movieResult.imdbID !== movieId)
        {
        //para ver lo que trae el match
        //console.log(match)
        
        dispatch(searchMovieById({movieId}))
        //esto se manda al reducer, el de los cases "SEARCH_MOVIE_BY_ID_START"...
        //el dispatch lo lanza
        }  
    }
    )
     
    //para que muestre el circulo de progreso mientras carga la info
    if(!movieResult){
        return <CircularProgress size={50} color="primary"/>
    }
    return (
        <Container>
            <Typography variant="h3">
                {movieResult.Title}
            </Typography>
            <img src={movieResult.Poster} alt={movieResult.Title} />
            <Typography>
                <strong>  Actores: </strong>
                {movieResult.Actors}
            </Typography>
            <Typography>
                <strong>  Director: </strong>
                {movieResult.Director}
            </Typography>
            <Typography>
                <strong>  Pais: </strong>
                {movieResult.Country}
            </Typography>
            <Typography>
                <strong>  Clasificacion: </strong>
                {movieResult.Rated}
            </Typography>
            <Typography>
                <strong>  Premios: </strong>
                {movieResult.Awards}
            </Typography>

            <Typography>
                <strong>  Sipnosis: </strong>
                {movieResult.Plot}
            </Typography>
        </Container>
    )
}