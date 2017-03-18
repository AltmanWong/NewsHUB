import React from 'react';
import {Grid, Row, Col, Image, Button} from 'react-bootstrap';

export default class newscard extends React.Component{
	render(){
		return (
			<p>
				<Grid>
					<div id = 'newscard'>
					  	<Row>
					  		<Col md = {4} id = 'img'> 
					  			<Image src = {this.props.imglink} responsive />
					  		</Col>
					  		<Col md = {8} id = 'text'>
						  		<div id = 'title'>
						  			<a target = '_blank' href = {this.props.link}>
						  				<h1>{this.props.title}</h1>
						  			</a>
						  		</div>
						  		<div id = 'author'> {this.props.author} \\ {this.props.source} \\ {this.props.publishedAt}</div>
						  		<div id = 'contents'> {this.props.contents} </div>
						  		<p />
						  		<div id = 'socialnetwork'> 
						  		    <Button bsStyle="primary" 
						  		    	bsSize="xsmall"
						  		    	className="fb-xfbml-parse-ignore" 
							  			target="_blank" 
							  			href={"https://www.facebook.com/sharer/sharer.php?u=" + this.props.link}>						  		    	
							  			Share on Facebook
							  		</Button>					  			
						  		</div><p />
						  	</Col>
						</Row>
					</div>
				</Grid>
			</p>
		)
	}

}