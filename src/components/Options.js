import { useState, useContext } from 'react';
import { Button, TextField, Grid, Container, Typography, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { SocketContext } from '../contexts/SocketContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    gridContainer: {
        width: '100%',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    container: {
        width: '600px',
        margin: '35px auto',
        padding: 0,
        [theme.breakpoints.down('xs')]: {
            width: '80%',
        },
    },
    margin: {
        marginTop: 20,
    },
    hangUp :{
        marginTop: 20,
        color: '#fefefe',
        backgroundColor: '#F87171',
        '&:hover': {
            color: '#fefefe',
            backgroundColor: '#F87171',
        }
    },
    padding: {
        padding: 20,
    },
    paper: {
        padding: '10px 5px',
        background: 'rgba(49, 168, 247, 0.10)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(7.5px)',
        borderRadius: '10px',
        border: '1px solid rgba(255, 255, 255, 0.18)'
    },
}));

const Options = ({ children }) => {
    const { id, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
    const [idToCall, setIdToCall] = useState('');
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Paper elevation={10} className={classes.paper}>
                <form className={classes.root} noValidate autoComplete="off">
                    <Grid container className={classes.gridContainer}>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography color="secondary" variant="h6" gutterBottom>Account Info</Typography>
                            <TextField
                                variant="outlined"
                                color="secondary"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                gutterBottom />
                            <CopyToClipboard text={id} className={classes.margin}>
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    fullWidth
                                    startIcon={<Assignment fontSize="large" />}>
                                    Copy Your ID
                                </Button>
                            </CopyToClipboard>
                        </Grid>
                        <Grid item xs={12} md={6} className={classes.padding}>
                            <Typography color="secondary" variant="h6" gutterBottom>Make a call</Typography>
                            <TextField
                                variant="outlined"
                                color="secondary"
                                label="ID to call"
                                value={idToCall}
                                onChange={(e) => setIdToCall(e.target.value)}
                                fullWidth
                                gutterBottom />
                            {callAccepted && !callEnded ? (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<PhoneDisabled fontSize="large" />}
                                    fullWidth
                                    onClick={leaveCall}
                                    className={classes.hangUp}>
                                    Hang Up
                                </Button>
                            ) : (
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    startIcon={<Phone fontSize="large" />}
                                    fullWidth
                                    onClick={() => callUser(idToCall)}
                                    className={classes.margin}>
                                    Call
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </form>
                {children}
            </Paper>
        </Container>
    );
}

export default Options;