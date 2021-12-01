import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// API
import API from "../../API";
// Images
import LogoAnime from "../../images/Anime2.png";
import SecondLogo from "../../images/YourAnimeDatabase.png";
import Login from "../../images/login.png";
import Logout from "../../images/logout.png";
//Styles
import { Wrapper, Content, LogoImg, SecondLogoImg, LoginImg } from "./Header.styles";
// Context
import { Context } from "../../context";

const Header = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	const navigate = useNavigate();

	const handleLogOut = async () => {
		try {
			setError(false);
			setLoading(true);

			await API.logout();

			localStorage.removeItem('userId');
			localStorage.removeItem('userToken');

			setLoading(false);
			navigate('/');
		} catch (error) {
			setError(true);
		}
		
	}
	
	console.log({Authorization: localStorage.userToken});
	
	return (
		<Wrapper>
			<Content>
				<Link to="/">
					<LogoImg src={LogoAnime} alt="anime-logo" />
				</Link>
				<div className="leftImgs">
					{!localStorage.userToken && (
						<Link to="/login">
						<LoginImg src={Login} alt="login" id="loginImg" />
						</Link>
					)}
					{localStorage.userToken && (
						<LoginImg src={Logout} alt="ª" id="loginImg" clickable onClick={handleLogOut} />
					)}
					<Link to="/browse-info">
						<SecondLogoImg src={SecondLogo} alt="anime-database" />
					</Link>
				</div>
			</Content>
		</Wrapper>
	)
};

export default Header;
