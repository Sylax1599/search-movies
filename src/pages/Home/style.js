import {makeStyles} from '@material-ui/core'

//esto es como si fuera un array, con las propiedades de estilos para la vaina que tienen
// las etiquetas en el index
const centeredStryleOb={
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

export default makeStyles({
    container:{
        height: '100vh',
        //los 3 puntos sirven para llamar todas las propiedades de esa variable(const)
        ...centeredStryleOb,
        flexDirection: 'column'
    },
    cardContainer:{
        ...centeredStryleOb,
        flexDirection: 'column',
        width: 400,
        height: 200,
        padding: '2rem'
    },
    title: {
        fontSize: '4rem'
    },
    titleGridContainer:{
        ...centeredStryleOb
    },
    textFieldSearch:{
        width: '90%',
        marginBottom: '1rem'
    },
    searchButton:{
        marginLeft: '2rem'
    },
    buttonContainer:{
        marginTop: '.5rem'
    },
    movieIcon:{
        fontSize: '4rem'
    },
    container_peli:{
        marginBottom: '4rem'
    }

})