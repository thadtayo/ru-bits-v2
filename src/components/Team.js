import React from 'react';
import SlideToggle from 'react-slide-toggle';
import TeamModal from './TeamModal';
import data from './data';
import unnati from '../images/headshots/unnati.png';
import aishwarya from '../images/headshots/aishwarya.png';
import shaurya from '../images/headshots/shaurya.png';
import shankhadip from '../images/headshots/Shan.jpg';
import madhav from '../images/headshots/madhav.png';
import bhakti from '../images/headshots/Bhakti.jpg';
import renesh from '../images/headshots/renesh.png';
import sriven from '../images/headshots/sriven.png';
import avig from '../images/headshots/Avig.jpg';
import josh from '../images/headshots/josh.png';
import thad from '../images/headshots/thad.png';
import deep from '../images/headshots/deep.jpg'
import meldon from '../images/headshots/meldon.png';
import hemani from '../images/headshots/hemani.jpeg'
import rashi from '../images/headshots/rashi.png';
import jay from '../images/headshots/jay.png'
import ameer from '../images/headshots/Ameer.JPG';
import eric from '../images/headshots/eric.png';
import nandita from '../images/headshots/nandita.png';
import nanditaV from '../images/headshots/nanditaV.jpg';
import navya from '../images/headshots/navya.png';
import tulsi from '../images/headshots/tulsi.jpg'
import adrienne from '../images/headshots/adrienne.jpg'
import kennan from '../images/headshots/kennan.jpg'
import eesha from '../images/headshots/eesha.jpeg'
import neha from '../images/headshots/neha.jpeg';
import sukhbir from '../images/headshots/sukhbir.png';
import nimai from '../images/headshots/nimai.jpg';
import eanne from '../images/headshots/eanne.jpeg';
import raymond from '../images/headshots/raymond.jpeg';
import nikhita from '../images/headshots/nikhita.jpeg';
import mansi from '../images/headshots/mansi.JPG';
import nicole from '../images/headshots/nicole.jpeg';
import michelle from '../images/headshots/michelle.jpg';
import thomas from '../images/headshots/thomas.jpeg';
import amani from '../images/headshots/amani.jpeg';
import juliana from '../images/headshots/juliana.png';

function Team() {
	// I'm gonna bite the bullet and hardcode this. We only recruit once a year anyway :shrug:

	return (
		<div className="container-fluid box-shadow mt-5 pb-2" id="team">
			<div className="container text-center">
				<h2 className="section-header">Meet The Team</h2>
				<br />
				<h3 className="text-muted">
					Click on the headshots to learn more about them!
				</h3>
				<SlideToggle
					duration={800}
					render={({ toggle, setCollapsibleElement }) => (
						<>
							<button
								className="btn btn-info btn-minimize mx-auto"
								onClick={toggle}
							>
								Toggle
							</button>
							<section
								className="my-5 team-section"
								ref={setCollapsibleElement}
							>
								<h3 className="d-flex justify-content-start">
									Leaders
								</h3>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={unnati}
												alt={'Unnati Agrawal'}
												blurb={data['unnati']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Unnati Agrawal
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Co-President</strong>
										</p>
									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={aishwarya}
												alt={'Aishwarya Kanagala'}
												blurb={data['aishwarya']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Aishwarya Kanagala
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Co-President</strong>
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={bhakti}
												alt={'Bhakti Patel'}
												blurb={data['bhakti']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Bhakti Patel
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Vice President & Director of Technology</strong>
										</p>
									</div>


									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={shaurya}
												alt={'Shaurya Pathak'}
												blurb={data['shaurya']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Shaurya Pathak
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Secretary</strong>
										</p>
									</div>
								</div>


								<h3 className="d-flex justify-content-start">
									Community Engagement
								</h3>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={shankhadip}
												alt={'Shankhadip Chakraborty'}
												blurb={data['shankhadip']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Shankhadip Chakraborty
										</h5>
										<p className="text-uppercase blue-text">
											<strong>
												Treasurer & Director of Community Engagement
											</strong>
										</p>
									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={neha}
												alt={'Neha Karnam'}
												blurb={data['neha']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Neha Karnam
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Community Team Member</strong>
										</p>
									</div>
								</div>

								<h3 className="d-flex justify-content-start">Technology Team</h3>
								<div className="row">

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={josh} alt={'Joshua Schupak'} blurb={data['josh']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Joshua Schupak</h5>
										<p className="text-uppercase blue-text"><strong>Tech Development Chair</strong></p>

									</div>



									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={adrienne} alt={'Adrienne Yu'} blurb={data['adrienne']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Adrienne Yu</h5>
										<p className="text-uppercase blue-text"><strong>Tech Team Member</strong></p>

									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={jay} alt={'Jay Patel'} blurb={data['jay']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Jay Patel</h5>
										<p className="text-uppercase blue-text"><strong>Tech Team Member</strong></p>

									</div>
								</div>



								<h3 className="d-flex justify-content-start">Website Development Team</h3>
								<div className="row">

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={thad} alt={'Thad Joshua Tayo'} blurb={data['thad']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Thad Joshua Tayo</h5>
										<p className="text-uppercase blue-text"><strong>Webmaster</strong></p>

									</div>


									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={hemani} alt={'Hemani Patel'} blurb={data['hemani']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Hemani Patel</h5>
										<p className="text-uppercase blue-text"><strong>Web Dev Team Member</strong></p>

									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={deep} alt={'Deep Parekh'} blurb={data['deep']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Deep Parekh</h5>
										<p className="text-uppercase blue-text"><strong>Web Dev Team Member</strong></p>

									</div>
								</div>



								<h3 className="d-flex justify-content-start">Events</h3>
								<div className="row">

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={renesh} alt={'Renesh Bhamidipati'} blurb={data['renesh']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Renesh Bhamidipati</h5>
										<p className="text-uppercase blue-text"><strong>Director of Events</strong></p>

									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={rashi} alt={'Rashi Shah'} blurb={data['rashi']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Rashi Shah</h5>
										<p className="text-uppercase blue-text"><strong>Events Chair</strong></p>

									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={ameer} alt={'Ameer Ali'} blurb={data['ameer']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Ameer Ali</h5>
										<p className="text-uppercase blue-text"><strong>Professional Development Chair</strong></p>

									</div>


								</div>


								<div className="row">

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={eesha} alt={'Eesha Mukkamala'} blurb={data['eesha']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Eesha Mukkamala</h5>
										<p className="text-uppercase blue-text"><strong>Professional Development Chair</strong></p>

									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={tulsi} alt={'Tulsi Chandan'} blurb={data['tulsi']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Tulsi Chandan</h5>
										<p className="text-uppercase blue-text"><strong>Mentorship Chair</strong></p>

									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal src={kennan} alt={'Kennan Guan'} blurb={data['kennan']} />
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">Kennan Guan</h5>
										<p className="text-uppercase blue-text"><strong>Member Engagement Lead</strong></p>

									</div>



								</div>



								<h3 className="d-flex justify-content-start">
									Corporate Relations
								</h3>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={sriven}
												alt={'Sriven Sikhinam'}
												blurb={data['sriven']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Sriven Sikhinam
										</h5>
										<p className="text-uppercase blue-text">
											<strong>
												Director of Corporate Relations
											</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={meldon}
												alt={'Meldon Mendonca'}
												blurb={data['meldon']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Meldon Mendonca
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Careers Chair</strong>
										</p>
									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={nandita}
												alt={'Nandita Shyam'}
												blurb={data['nandita']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Nandita Shyam
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Professional Affairs Chair</strong>
										</p>
									</div>
								</div>

								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={sukhbir}
												alt={'Sukhbir Ghotra'}
												blurb={data['sukhbir']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Sukhbir Ghotra
										</h5>
										<p className="text-uppercase blue-text">
											<strong>
												Corporate Relations Team Member
											</strong>
										</p>
									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={nanditaV}
												alt={'Nandita Vasantha'}
												blurb={data['nanditaV']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Nandita Vasantha
										</h5>
										<p className="text-uppercase blue-text">
											<strong>
												Corporate Relations Team Member
											</strong>
										</p>
									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={nimai}
												alt={'Nimai Sanikop'}
												blurb={data['nimai']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Nimai Sanikop
										</h5>
										<p className="text-uppercase blue-text">
											<strong>
												Corporate Relations Team Member
											</strong>
										</p>
									</div>
								</div>

								<h3 className="d-flex justify-content-start">
									Marketing
								</h3>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={avig}
												alt={'Avig Pointi'}
												blurb={data['avig']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Avig Pointi
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Director of Marketing</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={navya}
												alt={'Navya Nadig'}
												blurb={data['navya']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Navya Nadig
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Social Media Chair</strong>
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={raymond}
												alt={'Raymond Yang'}
												blurb={data['raymond']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Raymond Yang
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Marketing Ambassador</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={nikhita}
												alt={'Nikhita Kashi'}
												blurb={data['nikhita']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Nikhita Kashi
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Marketing Ambassador</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={mansi}
												alt={'Mansi Patel'}
												blurb={data['mansi']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Mansi Patel
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Marketing Ambassador</strong>
										</p>
									</div>
								</div>

								<h3 className="d-flex justify-content-start">Design</h3>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={juliana}
												alt={'Juliana Urbis'}
												blurb={data['juliana']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Juliana Urbis
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Director of Design</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={eanne}
												alt={'Eanne Chiang'}
												blurb={data['eanne']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Eanne Chiang
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Design Team Member</strong>
										</p>
									</div>

									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={neha}
												alt={'Neha Karnam'}
												blurb={data['neha']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Neha Karnam
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Design Team Member</strong>
										</p>
									</div>
								</div>
								<h3 className="d-flex justify-content-start">
									Newsletter
								</h3>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={madhav}
												alt={'Madhav Arora'}
												blurb={data['madhav']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Madhav Arora
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Editor in Chief</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={nicole}
												alt={'Nicole Stavrakis'}
												blurb={data['nicole']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Nicole Stavrakis
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Newsletter Writer</strong>
										</p>
									</div>
								</div>
								<div className="row">
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={amani}
												alt={'Amani Syed'}
												blurb={data['amani']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Amani Syed
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Newsletter Writer</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={thomas}
												alt={'Thomas Edralin'}
												blurb={data['thomas']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Thomas Edralin
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Newsletter Writer</strong>
										</p>
									</div>
									<div className="col-lg mb-5">
										<div className="mx-auto">
											<TeamModal
												src={michelle}
												alt={'Michelle Sy'}
												blurb={data['michelle']}
											/>
										</div>
										<h5 className="font-weight-bold mt-4 mb-3">
											Michelle Sy
										</h5>
										<p className="text-uppercase blue-text">
											<strong>Newsletter Writer</strong>
										</p>
									</div>
								</div>
							</section>
						</>
					)}
				/>
			</div>
		</div>
	);
}

export default Team;