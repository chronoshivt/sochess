import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@material-ui/core';

export default function PopUp(props) {
    
    const { title, children, openPopup, setOpenPopup } = props;

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Title goes here</div>
            </DialogTitle>
            <DialogContent>
                <div>content</div>
            </DialogContent>
        </Dialog>
    )
}