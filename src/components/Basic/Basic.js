import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Basic = () => {
    return (
        <div className='border border-3 border-primary m-4 p-4'>
            <h3>Css with installed bootstrap</h3>
            <>
                <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </>

            <h5 className='mt-5'>Spinner</h5><br />
            <Spinner animation="border" role="status" className='me-4'>
                <span className="visually-hidden ">Loading...</span>
            </Spinner>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    );
};

export default Basic;