import React from 'react'
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const Services = () => {
    return (
        <div>
            <section id="service">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="fs-5 text-center mb-0">Our Services</h3>
                            <h1 className="display-6 text-center mb-4">Our <b>Awesome </b>Services</h1>
                            <hr className="w-25 mx-auto" />
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-4">
                            
                                <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="/images/1.jpg" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                        When Nidhi Yadav realised that her interests lay in fashion she immediately quit her job at Deloitte and enrolled for a fashion course. How she went on to build a Rs 137 crore turnove
Read More
                                        </Card.Text>
                                        <Button variant="danger">Read More</Button>
                                    </Card.Body>
                                </Card>
                            
                        </div>
                        <div className="col-md-4">
                        <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="/images/a.jpg" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                        Karan Chopra quit a Rs 6 lakh per annum job at TCS in Mumbai and moved back to his hometown, where he first sold LED lights making a measly Rs 60,000 in one year. Today, he owns a Rs 14 crore turnover solar solutions company
                                        </Card.Text>
                                        <Button variant="danger">Read More</Button>
                                    </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-4">
                        <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="/images/5.jpg" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                        Faizal Ahamed started Suxus with seven sewing machines and three tailors in Madurai in 2006. He has now built Suxus into a Rs 50 crore turnover brand. Read this entrepreneur’s success story
                                        </Card.Text>
                                        <Button variant="danger">Read More</Button>
                                    </Card.Body>
                                </Card>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-4">
                        <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="/images/d.jpg" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                        Hitesh Rathi, an engineering graduate, quit his well-paying job as he smelt an opportunity in selling camel milk in the National Capital Region. Starting with Rs 2 lakh, he achieved a turnover of Rs 4.5 crore in just three years
                                        </Card.Text>
                                        <Button variant="danger">Read More</Button>
                                    </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-4">
                        <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="/images/e.jpg" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                        Starting his venture as a college student, Karthik Manikandan has come a long way from organising tours for his batch mates and neighbouring institutions, to building a Rs 90 crore turnover tours and travels company
                                        </Card.Text>
                                        <Button variant="danger">Read More</Button>
                                    </Card.Body>
                                </Card>
                        </div>
                        <div className="col-md-4">
                        <Card style={{ width: '20rem' }}>
                                    <Card.Img variant="top" src="/images/c.jpg" />
                                    <Card.Body>
                                        {/* <Card.Title>Card Title</Card.Title> */}
                                        <Card.Text>
                                        Now women can do it like men – stand and pee. When his wife complained of dirty public toilets, Deep Bajaj got the idea of making a device to help women to go while standing. Now it’s a Rs 2.5 crore business for him
                                        </Card.Text>
                                        <Button variant="danger">Read More</Button>
                                    </Card.Body>
                                </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Services;