import React from "react";
import { Link } from "react-router-dom";

import LogoAnime from "../../images/Anime2.png";
import SecondLogo from "../../images/YourAnimeDatabase.png";
import Login from "../../images/login.png";

import { Wrapper, Content, LogoImg, SecondLogoImg, LoginImg } from "./Header.styles";
// Context
import { Context } from "../../context";

const Header = () => {
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={LogoAnime} alt="anime-logo" />
				</Link>
				<div className="leftImgs">
					<Link to="/login">
						<LoginImg src={Login} alt="login" id="loginImg" />
					</Link>
					<Link to="/browse-info">
						<SecondLogoImg src={SecondLogo} alt="anime-database" />
					</Link>
				</div>
			</Content>
		</Wrapper>
	)
};

export default Header;
