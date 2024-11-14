import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SchoolImage from '../assets/ncs1.jpg';
import SchoolImage2 from '../assets/csnhs.jpg';
import SchoolImage3 from '../assets/NCF.jpg';
import { Spinner } from 'react-bootstrap';
import { useState, useEffect } from 'react';

function Education() {
    const [loading, setLoading] = useState(true);

    // Simulating an API call or async operation with a timeout
    useEffect(() => {
        setTimeout(() => {
            setLoading(false); // Stop loading after 2 seconds
        }, 2000);
    }, []);

    return (
        <>
            {loading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" variant="secondary" size="lg" />
                </div>
            ) : (
                <>
                    <h2>My Education</h2>
                    <p>
                        I have always been obsessed with computers since my early life, and I'm still fascinated by them.
                        This is the key reason why I'm interested in this course and why I am taking this BSIS course.
                    </p>
                    <h2>Educational Background</h2>
                    <p>
                        I graduated from Naga Central School 1 on March 27, 2014, and in high school, I graduated from
                        Camarines Sur National High School as a Computer System Servicing student on April 3, 2020.
                        I am currently a student at Naga College Foundation (NCF) and pursuing my BSIS course.
                        This program has provided me with a lot of knowledge and experience in the computer field.
                    </p>
                    <p>
                        I am excited to continue learning and growing in this field by exploring new technologies to stay ahead
                        in the ever-evolving tech industry.
                    </p>

                    <Row className="g-2">
                        <Col xs={12} md={6} lg={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={SchoolImage} />
                                <Card.Body>
                                    <Card.Title>Naga Central School 1</Card.Title>
                                    <Card.Text>
                                        This is where I graduated from elementary school.
                                    </Card.Text>
                                    <a href="https://www.google.com/search?q=Naga+Central+School+1" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary">Go to</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                        
                        <Col xs={12} md={6} lg={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={SchoolImage2} />
                                <Card.Body>
                                    <Card.Title>Camarines Sur National High School</Card.Title>
                                    <Card.Text>
                                        This is where I graduated from high school.
                                    </Card.Text>
                                    <a href="https://www.google.com/search?q=Camarines+Sur+National+High+School" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary">Go to</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col xs={12} md={6} lg={4}>
                            <Card style={{ width: '100%' }}>
                                <Card.Img variant="top" src={SchoolImage3} />
                                <Card.Body>
                                    <Card.Title>Naga College Foundation</Card.Title>
                                    <Card.Text>
                                        This is where I am currently studying for my BSIS course.
                                    </Card.Text>
                                    <a href="https://www.google.com/search?q=Naga+College+Foundation" target="_blank" rel="noopener noreferrer">
                                        <Button variant="primary">Go to</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </>
            )}
        </>
    );
}

export default Education;
