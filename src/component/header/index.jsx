import { Header, HeaderLogo, LeftHeader, MenuItems, MenueLink, RightHeader, ShopName } from './styled'
import logo from '../../assets/img/logo.png'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const MyHeader=()=>{
	const loc =useLocation();
	const arr = [
		{ name: 'Գլխավոր', path: '/', active: loc.pathname === '/' ? true : false },
		{ name: 'Մեր մասին', path: '/about', active: loc.pathname === '/about' ? true : false  },
	]
	const [items, setItems] = useState(arr)
	useEffect(() => {
		setItems(arr)
	}, [loc])

	return (
		<>
			<Header>
				<LeftHeader>
					<HeaderLogo src={logo} />
					<ShopName>Eyes</ShopName>
				</LeftHeader>

				<RightHeader>
					<MenuItems>
						{items.map(
							(e, i) =>
								e.show !== false && (
									<MenueLink
										$active={e.active}
										to={e.path}
										key={e.path}
										onClick={() => changeActive(i)}
									>
										{e.name}
									</MenueLink>
								)
						)}
					</MenuItems>
				</RightHeader>
			</Header>
		</>
	)
}