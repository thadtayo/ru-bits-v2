import React from 'react'
import unnati from '../images/headshots/unnati.png'

function Team() {
    // I'm gonna bite the bullet and hardcode this. We only recruit once a year anyway :shrug:

    return (
        <div className="container-fluid box-shadow mt-5 pb-2" id="team">
            <div className="container text-center">
                <h2 className="section-header">Meet The Team</h2>
                <br />
                <button className="btn btn-info btn-minimize mx-auto">Minimize</button>
                <section className="my-5 team-section">
                    <h3 className="d-flex justify-content-start">Leaders</h3>
                    <div className="row">

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src={unnati} className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Unnati Agrawal</h5>
                            <p className="text-uppercase blue-text"><strong>President</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/aishwarya.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Aishwarya Kanagala</h5>
                            <p className="text-uppercase blue-text"><strong>Vice President</strong></p>

                        </div>

                    </div>

                    <div className="row">

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Shaurya.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Shaurya Pathak</h5>
                            <p className="text-uppercase blue-text"><strong>Secretary</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Shan.jpg" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Shankhadip Chakraborty</h5>
                            <p className="text-uppercase blue-text"><strong>Treasurer</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Madhav.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Madhav Arora</h5>
                            <p className="text-uppercase blue-text"><strong>Editor in Chief</strong></p>

                        </div>

                    </div>

                    <h3 className="d-flex justify-content-start">Directors</h3>
                    <div className="row">

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Bhakti.jpg" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Bhakti Patel</h5>
                            <p className="text-uppercase blue-text"><strong>Director of Technology</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Renesh.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Renesh Bhamidipati</h5>
                            <p className="text-uppercase blue-text"><strong>Director of Events</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/sriven.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Sriven Sikhinam</h5>
                            <p className="text-uppercase blue-text"><strong>Director of Corporate Relations</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Avig.jpg" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Avig Pointi</h5>
                            <p className="text-uppercase blue-text"><strong>Director of Marketing</strong></p>

                        </div>

                    </div>


                    <h3 className="d-flex justify-content-start">Technology Team</h3>
                    <div className="row">

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Josh.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Joshua Schupak</h5>
                            <p className="text-uppercase blue-text"><strong>Tech Development Chair</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/thad.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Thad Tayo</h5>
                            <p className="text-uppercase blue-text"><strong>Webmaster</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Meldon.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Meldon Mendonca</h5>
                            <p className="text-uppercase blue-text"><strong>Tech Team Member</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Harsh Kumar</h5>
                            <p className="text-uppercase blue-text"><strong>Tech Team Member</strong></p>

                        </div>






                    </div>

                    <h3 className="d-flex justify-content-start">Events</h3>
                    <div className="row">

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Rashi.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Rashi Shah</h5>
                            <p className="text-uppercase blue-text"><strong>Events Chair</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Ameer.JPG" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Ameer Ali</h5>
                            <p className="text-uppercase blue-text"><strong>Professional Development Chair</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Eric.PNG" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Eric Pepic</h5>
                            <p className="text-uppercase blue-text"><strong>Member Engagement Lead</strong></p>

                        </div>




                    </div>

                    <h3 className="d-flex justify-content-start">Corporate Relations</h3>
                    <div className="row">

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Joseph.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Joseph Cobo</h5>
                            <p className="text-uppercase blue-text"><strong>Corporate Relations Chair</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Nandita.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Nandita Shyam</h5>
                            <p className="text-uppercase blue-text"><strong>Professional Affairs Chair</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Jonathan.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Jonathan Miller</h5>
                            <p className="text-uppercase blue-text"><strong>Corporate Relations Team Member</strong></p>

                        </div>



                    </div>

                    <h3 className="d-flex justify-content-start">Marketing</h3>
                    <div className="row">


                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/juliana.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Juliana Urbis</h5>
                            <p className="text-uppercase blue-text"><strong>Design & Graphics Chair</strong></p>

                        </div>

                        <div className="col-lg mb-5">
                            <div className="mx-auto">
                                <img src="headshots/Navya.png" className="rounded-circle"
                                    alt="Sample avatar" />
                            </div>
                            <h5 className="font-weight-bold mt-4 mb-3">Navya Nadig</h5>
                            <p className="text-uppercase blue-text"><strong>Social Media Chair</strong></p>

                        </div>




                    </div>





                </section>
            </div>
        </div>
    )
}

export default Team


