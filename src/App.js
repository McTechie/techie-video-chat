import { Typography, AppBar } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import VideoPlayer from './components/VideoPlayer';
import Options from './components/Options';
import Notifications from './components/Notifications';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: {
      main: blue[500]
    },
    accent: {
      main: '#F87171'
    }
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
});

theme.spacing(2);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position='static' color='secondary'>
        <Typography variant='h2' align='center'>Techie Video Chat</Typography>
        <Typography variant='p' align='center' gutterBottom>created by McTechie ~</Typography>
      </AppBar>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </ThemeProvider>
  );
}

export default App;
