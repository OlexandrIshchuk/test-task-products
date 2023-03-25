import React from 'react';
import logo from '../../logo.svg';
import './home.styles.scss';

const Home = () => {
	return (
		<>
			<div className="d-flex justify-content-center">
				<img src={logo} className="App-logo" alt=""></img>
			</div>

			<h3 className="my-4 text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et condimentum augue.
			</h3>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et condimentum augue. Nulla nisl mi,
				consequat at est id, hendrerit porttitor nisl. Suspendisse ut risus magna. Quisque at pharetra nulla, id
				vulputate augue. Curabitur finibus est nec ipsum scelerisque cursus. Orci varius natoque penatibus et
				magnis dis parturient montes, nascetur ridiculus mus. Fusce quis erat commodo, tempor leo in, tempor
				est. Pellentesque aliquam mauris quis sem bibendum eleifend. Maecenas a tempor lacus. Aenean fringilla
				diam a tellus euismod, et venenatis urna malesuada. Maecenas suscipit arcu euismod tristique luctus.
				Curabitur vel ornare turpis. Nunc id ullamcorper lorem.
			</p>
			<p>
				Nunc elit turpis, lacinia quis rhoncus a, accumsan ut massa. Sed quis ante a turpis fringilla dictum sit
				amet sit amet ex. Nullam at nulla metus. Donec aliquam tincidunt massa ac fringilla. Proin vestibulum
				finibus tortor id gravida. Sed luctus nunc enim, eu tempor mi ornare eget. Aenean fringilla vulputate
				lorem.
			</p>
			<p>
				Integer viverra laoreet libero. Morbi sollicitudin lectus at blandit porta. Duis venenatis, ex et
				hendrerit tincidunt, turpis diam elementum arcu, vitae venenatis libero purus in velit. Donec
				ullamcorper est non massa cursus laoreet. Donec ornare dolor ut dui ultrices, eget convallis est
				pellentesque. Praesent feugiat lorem dui, in aliquet risus maximus id. Nullam commodo mi at condimentum
				auctor. Curabitur lobortis orci venenatis nunc varius, ac feugiat sem aliquet. In scelerisque sed risus
				at blandit. Cras ut nisi varius, eleifend urna a, pretium magna.
			</p>
		</>
	);
};

export default Home;
