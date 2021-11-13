import React from "react";
import { Link } from "react-router-dom";

import LogoAnime from "../../images/Anime2.png";
import SecondLogo from "../../images/YourAnimeDatabase.png";

import { Wrapper, Content, LogoImg, SecondLogoImg } from "./Header.styles";
// Context
import { Context } from "../../context";

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={LogoAnime} alt="anime-logo" />
				</Link>
				<SecondLogoImg src={SecondLogo} alt="anime-database" />
			</Content>
		</Wrapper>
	)
};

export default Header;
