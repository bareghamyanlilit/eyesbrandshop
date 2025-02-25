import { Link } from 'react-router-dom'
import { MainDiv } from './styled'

export const HeaderResponsive = ({ $active, items, setOpenMenu }) => {

	return (
		<MainDiv $active={$active}>
			{items.map(e => {
				return (
					<Link to={e.path} key={e.path} onClick={()=>{setOpenMenu(false)}}>
						{e.name}
					</Link>
				)
			})}
		</MainDiv>
	)
}