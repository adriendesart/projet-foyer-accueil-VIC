import React, { Component } from 'react';
import photo from '../../img/maison.jpg';
import './index.scss';

class DetailLogement extends Component {
	render() {
		return (
			<div className="container">
			
				<div className="row">
					<div className="col-md-12">
						<h3>Gallerie</h3>
					</div>
				</div>

				<div className="row gallerie">

					<div className="col-md-9 gdeImg">
						<img src={photo} className="resizeGdeImg" alt="Photo d'une maison" />
					</div>
					<div className="col-md-3 pttesImgs">
						<div className="row imgRight">
							<div className="col-md-12">
								<img src={photo} className=" img-fluid" alt="Photo d'une maison" />
							</div>
						</div>
						<div className="row imgRight">
							<div className="col-md-12">
								<img src={photo} className="ptteImg img-fluid" alt="Photo d'une maison" />
							</div>
						</div>
						<div className="row imgRight">
							<div className="col-md-12">
								<img src={photo} className="ptteImg img-fluid" alt="Photo d'une maison" />
							</div>
						</div>
					</div>
				</div>

				<div className="row description">
					<div className="col-md-9">
						<h3>Description</h3>
						<p>
							Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget
							sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem
							sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor.
							Sed iaculis posuere diam ut cursus.{' '}
							<em>
								Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet,
								metus nunc consequat lectus, id bibendum diam velit et dui.
							</em>{' '}
							Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.{' '}
							<small>
								Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices
								massa, et feugiat ipsum consequat eu.
							</small>
						</p>
						<div id="card-98455">
							<div className="card">
								<div className="card-header">
									<a
										className="card-link collapsed"
										data-toggle="collapse"
										data-parent="#card-98455"
										href="#card-element-963488"
									>
										Collapsible Group Item #1
									</a>
								</div>
								<div id="card-element-963488" className="collapse">
									<div className="card-body">Anim pariatur cliche...</div>
								</div>
							</div>
							<div className="card">
								<div className="card-header">
									<a
										className="card-link collapsed"
										data-toggle="collapse"
										data-parent="#card-98455"
										href="#card-element-372055"
									>
										Collapsible Group Item #2
									</a>
								</div>
								<div id="card-element-372055" className="collapse">
									<div className="card-body">Anim pariatur cliche...</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-3">
						<h3>Coordonnées</h3>
						<p>
							Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget
							sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem
							sapien, sed vestibulum velit. Nam purus nibh, lacinia non
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default DetailLogement;
