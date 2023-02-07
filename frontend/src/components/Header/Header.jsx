import React from 'react';

import Container from '../../styledComponents/Container';
import Title from '../Title/Title';

import StyledHeader from './Header.styled';

function Header() {
	return (
		<>
			<Container>
				<StyledHeader>
					<Title>Articles App</Title>
				</StyledHeader>
			</Container>
			<hr />
		</>
	);
}

export default Header;
