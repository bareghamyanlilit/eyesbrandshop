import { Header, HeaderLogo, LeftHeader, MenuItems, MenueLink, RightHeader, ShopName } from './styled'
import logo from '../../assets/img/logo.png'
// import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { IoMenuSharp } from 'react-icons/io5'
// import { MenuLang } from '../menuLang'
import { HeaderResponsive } from '../header-responsive'

export const MyHeader=()=>{
	// const {t} = useTranslation()
	const loc =useLocation();
	const [openMenu,setOpenMenu]=useState(false)
	const arr = [
		{ name: 'Գլխավոր', path: '/', active: loc.pathname === '/' ? true : false },
		// { name: 'Կապ', path: '/contact', active: loc.pathname === '/contact' ? true : false  },
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
						{/* <IconDiv onClick={() => setOpenMenu(e => !e)}>
							<IoMenuSharp />
						</IconDiv> */}
					</MenuItems>
				</RightHeader>
			</Header>
			{/* <HeaderResponsive
				$active={openMenu}
				items={items}
				setOpenMenu={setOpenMenu}
			/> */}
		</>
	)
}