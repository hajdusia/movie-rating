import React, {useState} from 'react';
import {Button, Modal, Alert, Card} from 'react-bootstrap'
import {FaBolt, FaSmile} from 'react-icons/fa';
import {dateFormat} from '../shared/dateFormat'

const RatingForm = ({id, rateMovie}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = (event) => {
        event.preventDefault();
        rateMovie(id, event.target.rating.value);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Rate
            </Button>

            <Modal show={show} onHide={handleClose}>
                <form onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>New rate</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>Select your rate: </label>
                        <select className="max-width" name="rating">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                            <option>9</option>
                            <option>10</option>
                        </select>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Submit
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
};

const Movies = ({items, errMess, rateMovie}) => {

    if (errMess) {
        return (
            <div className="container">
                <div className="row">
                    <Alert variant="danger" className="default">
                        <Alert.Heading>Failed to fetch data</Alert.Heading>
                        <p>Please check README.md</p>
                    </Alert>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container">
                <div className="row">
                    <h1 className="default">Movies rating</h1>

                    {items.map((item) => {
                        return (
                            <Card className="default" key={item.id}>
                                {item.genre === 'HORROR' ? <FaBolt size={32}/> : <FaSmile size={32}/>}
                                <Card.Body>
                                    <Card.Title> {item.title}</Card.Title>
                                    <Card.Text>
                                        Production date: {dateFormat(item.productionDate)}
                                    </Card.Text>
                                    <Card.Text>
                                        Average
                                        rate: {item.averageRate === 0 ? 'No ratings' : Math.round(item.averageRate * 100) / 100}
                                    </Card.Text>
                                    <RatingForm id={item.id} rateMovie={rateMovie}/>
                                </Card.Body>
                            </Card>

                        );
                    })}
                </div>
            </div>
        );
    }
};

export default Movies;