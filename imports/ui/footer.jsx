import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';


export default class footer extends React.Component{
	render(){
		return(
			<div id = 'footer'>
			<Grid>
				<div id = 'footer-contents'>
				<hr />
				<Row>
					<Col md = {4}>
						Copyright NewsHUB. 2017
					</Col>
					<Col md = {8}>
						<div id = 'footer-right'>
						Powered by <a href = 'https://newsapi.org/' target='_blank'>NewsAPI</a>
						</div>
					</Col>
				</Row>
				</div>
			</Grid>
			</div>
		);
	}
}