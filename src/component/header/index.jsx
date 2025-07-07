import { Header, HeaderLogo, LeftHeader, ShopName } from './styled'
import logo from '../../assets/img/logo.png'
export const MyHeader=()=>{

	return (
		<>
			<Header>
				<LeftHeader>
					<HeaderLogo src={logo} />
					<ShopName>Eyes</ShopName>
				</LeftHeader>
			</Header>
		</>
	)
}