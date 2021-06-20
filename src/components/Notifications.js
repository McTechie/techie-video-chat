import { useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { SocketContext } from '../contexts/SocketContext';

const Notifications = () => {
    const { answerCall, call, callAccepted } = useContext(SocketContext);

    return (
        <>
            {call.isReceivingCall && !callAccepted && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h4' color='secondary'>{call.name} is calling: &nbsp;</Typography>
                    <Button variant='contained' color='secondary' onClick={answerCall}>
                        Answer
                    </Button>
                </div>
            )}
        </>
    );
}
 
export default Notifications;