import styled from "styled-components";
import { globalColor } from '../../assets/colors'

export const MainDiv = styled.div`
	padding-top: 60px;
	background-color: #fff;
`

export const Product = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100%;
	/* height: calc(100vh - 60px); */
	.info {
		padding: 10px;
	}
	.prev {
		cursor: pointer;
		position: absolute;
		font-size: 40px;
		color: ${globalColor.txtColor};
		top: 2%;
		left: 2%;
	}
	.name {
		width: 100%;
		/* background: #ff0000; */
		margin: 15px 0px;
		text-align: end;
		.first {
			display: flex;
			justify-content: space-between;
			h2 {
				width: max-content;
				font-size: 16px;
				color: ${globalColor.txtColor};
				text-shadow: 1px 1px 1px #fff;
			}
		}
		.firma {
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 10px;
			color: ${globalColor.txtColor};
			img {
				width: 30px;
				height: 30px;
				object-fit: contain;
			}
			span {
				font-family: cursive;
				font-size: calc(12px + 0.5vw);
			}
		}
		p {
			/* color: ${globalColor.txtColor}; */
			font-size: calc(14px + 1vw);
			color: #283958;
		}
	}
	.size {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin: 15px 0px;
		p {
			font-size: 16px;
			color: ${globalColor.txtColor};
		}
	}
	.txt {
		font-size: 14px;
		color: ${globalColor.txtColor};
		margin: 10px 0;
	}
`
export const Img = styled.img`
	width: 100%;
	height: 360px;
	object-fit: cover;
`


export const TxtItem = styled.div`
	h3{
		color: ${globalColor.pink};
		font-size: 32px;
		margin: 10px 0;
	}
`
export const Images = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 90vw;
	/* overflow: scroll; */
	gap: 1px;
	margin: 15px 0px;
	img {
		width: 65px;
		height: 100px;
		border-radius: 5px;
	}
`

export const TxtInfo = styled.div`
	display: grid;
	gap: 15px;
	font-size: 24px;
`
export const Sizes = styled.div`
	width: 100%;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	
`
export const SizeItem = styled.span`
	padding: 5px 10px;
	border: 1px solid ${globalColor.txtColor};
	border-radius: 5px;
	cursor: pointer;
	color: ${globalColor.txtColor};
`

// export const Button = styled.button`
// 	margin-top: 20px;
// 	padding: 15px 20px;
// 	font-size: 14px;
// 	font-weight: bold;
// 	color: ${globalColor.txtColor};
// 	background: ${globalColor.pink};
// 	border: none;
// 	border-radius: 5px;
// 	cursor: pointer;
// 	transition: background 0.3s;

// 	&:hover {
// 		background: #015a83;
// 	}
// `