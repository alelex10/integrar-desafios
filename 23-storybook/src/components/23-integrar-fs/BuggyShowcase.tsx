import { Button, Typography, Box, TextField, Paper } from '@mui/material'

export const BuggyShowcase = () => {
  return (
    <Paper
      elevation={10}
      sx={{
        width: { xs: '200vw', sm: '120%', md: 900 }, // Bug: tamaños fijos y excesivos, no responsivo
        minWidth: 600, // Bug: mínimo muy grande para móviles
        maxWidth: 'none', // Bug: sin límite
        overflowX: 'scroll', // Bug: scroll innecesario
        background: 'linear-gradient(90deg, #ff0000 0%, #00ff00 100%)', // Bug: colores chillones
        padding: { xs: 0.5, sm: 2, md: 8 }, // Bug: padding inconsistente
        margin: 'auto',
        borderRadius: '0px', // Bug: sin bordes redondeados
        boxShadow: '0 0 30px 10px #000', // Bug: sombra excesiva
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: '#fff',
          fontWeight: 'bold',
          letterSpacing: { xs: 2, sm: 10, md: 30 }, // Bug: cambia mucho según tamaño
          textShadow: '2px 2px 10px #000',
          marginBottom: { xs: 1, sm: 4 },
          textAlign: { xs: 'center', sm: 'left', md: 'right' }, // Bug: alineación inconsistente
          fontSize: { xs: 40, sm: 60, md: 80 }, // Bug: fuente gigante en desktop
        }}
      >
        ¡Componente Buggy!
      </Typography>
      <Box sx={{
        display: { xs: 'block', sm: 'flex' }, // Bug: cambia de block a flex sin sentido
        flexDirection: { xs: 'column', sm: 'row' },
        gap: { xs: 0, sm: 1 },
        mb: 2,
        alignItems: { xs: 'stretch', sm: 'center' },
        width: { xs: '100vw', sm: 'auto' }, // Bug: se sale en mobile
      }}>
        <Button
          variant="contained"
          color="secondary"
          sx={{
            fontSize: { xs: 18, sm: 30, md: 60 }, // Bug: tamaño de fuente explota en desktop
            padding: { xs: '2px 5vw', sm: '2px 40px', md: '20px 100px' }, // Bug: padding desproporcionado
            border: '3px dashed #ff0', // Bug: borde llamativo
            borderRadius: { xs: 0, sm: '50%' }, // Bug: cambia de cuadrado a círculo
            background: 'linear-gradient(45deg, #ff0, #f0f)', // Bug: gradiente poco usable
            color: '#000',
            boxShadow: '0 0 20px 5px #f0f',
            width: { xs: '100vw', sm: 'auto' }, // Bug: botón ocupa todo el ancho en mobile
          }}
        >
          ¡Haz clic!
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{
            fontSize: { xs: 8, sm: 10, md: 40 }, // Bug: fuente minúscula en mobile, gigante en desktop
            padding: { xs: '10px 1vw', sm: '20px 2px', md: '40px 10px' }, // Bug: padding absurdo
            border: { xs: '2px solid #0ff', sm: '5px solid #0ff', md: '10px solid #0ff' }, // Bug: borde crece mucho
            borderRadius: 0, // Bug: sin bordes redondeados
            color: '#0ff',
            width: { xs: '100vw', sm: 'auto' }, // Bug: botón ocupa todo el ancho en mobile
          }}
        >
          O no...
        </Button>
      </Box>
      <TextField
        label="Nombre"
        variant="filled"
        sx={{
          width: { xs: '150vw', sm: '80%', md: 600 }, // Bug: input se sale en mobile
          background: '#fff8', // Bug: fondo semitransparente
          input: {
            color: '#f00', // Bug: texto rojo
            fontWeight: 'bold',
            fontSize: { xs: 18, sm: 24, md: 40 }, // Bug: fuente muy grande en desktop
            textAlign: 'center',
          },
          label: {
            color: '#0f0', // Bug: label verde
            fontSize: { xs: 14, sm: 20, md: 30 },
          },
          mb: 2,
        }}
        helperText={<span style={{ color: '#f0f', fontWeight: 'bold' }}>¡Esto no debería verse así!</span>}
      />
      <Typography
        variant="body1"
        sx={{
          color: '#000',
          background: '#ff0', // Bug: fondo amarillo
          padding: { xs: 0.5, sm: 1, md: 4 }, // Bug: padding inconsistente
          border: { xs: 'none', sm: '2px dotted #f00', md: '8px double #f00' }, // Bug: borde cambia mucho
          fontStyle: 'italic',
          fontSize: { xs: 12, sm: 22, md: 50 }, // Bug: fuente muy pequeña o muy grande
          width: { xs: '200vw', sm: 'auto' }, // Bug: texto se sale en mobile
        }}
      >
        Este componente tiene muchos bugs visuales y de responsive intencionales. ¿Puedes encontrarlos todos?
      </Typography>
    </Paper>
  )
}

export default BuggyShowcase