import { MainDiv } from './styled'
import video from '../../assets/video/home.mp4'
// import img from '../../assets/img/products/brand.jpg'
export const Home = () => {
    return (
			<>
				<MainDiv>
					<h1>EY</h1>
					<div className='image'>
						<video autoPlay muted loop>
							<source src={video} type='video/mp4' />
							Your browser does not support the video tag.
						</video>
						{/* <img src={img} alt="" /> */}
					</div>
					<h1>ES</h1>
				</MainDiv>
			</>
		)
}