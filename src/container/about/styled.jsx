import styled from 'styled-components'

export const MainDiv = styled.div`
	padding: 60px 0;
	/* min-height: 100vh; */
	background: #fff;
	justify-items: center;
	display: grid;
	gap: 20px;
	/* justify-self: center; */
	.descr {
		/* text-align: justify; */
		font-size: calc(12px + 1vw);
		margin: 20px 0;
		@media (max-width: 480px) {
			margin: 0 0 20px;
		}
	}
	.box {
		width: 90%;
		margin: 0 auto;
		p {
			font-size: calc(12px + 1vw);
		}
	}
`
export const About = styled.div`
	text-align: center;
	width: 80%;
	margin: 0 auto;
	h1 {
		@media (max-width: 480px) {
			margin: 20px;
		}
	}
	.descr {
		@media (max-width: 480px) {
			margin: 20px 0;
		}
	}
	.img{
		width: 100%;
		height: 50vh;
		@media (max-width: 480px) {
			height: 50vh;
		}
		img{
			width: 100%;
			height: 100%;
			object-fit: contain;
		}
	}
`
export const Title = styled.h1`
	text-align: center;
	font-size: calc(14px + 0.8vw);
	margin: 20px;
	@media (max-width: 480px) {
		margin: 20px 0 0;
	}
`
export const Img = styled.img`
	width: 100%;
	height: 90vh;
	object-fit: cover;
	@media (max-width: 480px) {
		height: 30vh;
	}
`
export const SmallTitle = styled.h2`
	text-align: center;
	font-size: calc(14px + 0.8vw);
	margin: 20px;
	@media (max-width: 480px) {
		margin: 20px 0 0;
	}
`
export const Box = styled.div`
	padding: 40px 0;
	width: 90%;
	display: flex;
	justify-content: space-between;
	.descr {
		width: 50%;
		align-content: center;
		text-align: center;
		@media (max-width: 480px) {
			width: 100%;
		}
	}
	@media (max-width: 480px) {
		flex-direction: column;
		padding: 0;
	}
`
export const Left = styled.div`
	width: 40%;
	height: 70vh;
	@media (max-width: 480px) {
		height: 40vh;
		width: 100%;
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`
