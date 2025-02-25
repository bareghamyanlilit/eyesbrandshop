import styled from 'styled-components'
import { globalColor } from '../../assets/colors'
export const MainDiv = styled.div`
	/* padding-top: 100px; */
`
export const FilterDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
	align-items: center;
	padding: 20px 0;
	/* background: #f1f1f1; */
	.filtertesak,
	.filter {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		align-items: center;
		gap: 2px;
		min-height: 60px;
		/* padding: 20px 0; */
	}

	button {
		cursor: pointer;
		height: max-content;
		padding: 15px 40px;
		font-size: 20px;
		border-radius: 50px;
		border: none;
		background: ${globalColor.pink};
		color: ${globalColor.txtColor};
	}
	@media (max-width: 998px) {
		button {
			padding: 10px 30px;
		}
	}
	@media (max-width: 480px) {
		min-height: 60px;

		button {
			padding: 8px 10px;
			font-size: 14px;
			border-radius: 40px;
		}
	}
	.search {
		font-size: 14px;
		padding: 10px;
		border-radius: 5px;
		width: 140px;
		background: ${globalColor.headerColor};
		border: none;
		border-bottom: 1px solid ${globalColor.txtColor};
		color: ${globalColor.txtColor};
	}
	.filterPrice {
		/* background: ${globalColor.black}; */
		width: max-content;
		display: flex;
		padding: 10px;
		gap: 5px;
		border-radius: 5px;
		input {
			width: 60px;
			font-size: 14px;
			background: ${globalColor.pink};
			padding: 10px 5px;
			border: none;
			border-bottom: 1px solid ${globalColor.black};
			color: ${globalColor.txtColor};
		}
	}
`

export const Products = styled.div`
	padding: 0 20px;
	width: 100%;
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	gap: 20px;

	@media (max-width: 768px) {
		gap: 10px;
		padding: 0 10px;
	}

	@media (max-width: 480px) {
		gap: 5px;
		padding: 0 5px;
	}
`

export const Product = styled.div`
	position: relative;
	overflow: hidden;
	width: 350px;
	height: 450px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: start;
	gap: 20px;
	color: ${globalColor.pink};
	/* box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); */
	.txt {
		position: absolute;
		backdrop-filter: blur(10px);
		bottom: -75px;
		width: 100%;
		padding: 40px 15px;
		transition: 1s;
		p {
			font-family: cursive;
			color: ${globalColor.pink};
			text-shadow: 0px 2px 2px #000;
			padding: 10px 0;
			font-size: 20px;
		}
	}
	img {
		transition: 1s;
		width: 100%;
		height: 450px;
		object-fit: cover;
	}
	&:hover img {
		scale: 1.5;
		/* display: grid; */
	}
	&:hover .txt {
		bottom: 0px;
		/* display: grid; */
	}
	@media (max-width: 1200px) {
		width: 400px;
	}
	@media (max-width: 992px) {
		width: 350px;
	}
	@media (max-width: 768px) {
		width: 45%;
		height: 310px;
		.txt {
			bottom: -42px;
			padding: 10px 15px;
			p {
				font-size: 16px;
			}
		}
		img {
			height: 310px;
		}
	}

	@media (max-width: 480px) {
		width: 49%;
		height: 250px;

		.txt {
			padding: 10px 5px;
			bottom: -30px;
			p {
				font-size: 14px;
				padding: 5px 0;
			}
			h1 {
				font-size: 14px;
			}
		}
		img {
			height: 215px;
		}
	}
`



