import { useState } from 'react'
import {  FilterDiv, MainDiv, Product, Products } from './styled'
import {ProductsArr} from '../../constant/items'
import { Link } from 'react-router-dom'
export const ProductsPart = () => {
	const [filtered, setFiltered] = useState([])
	

	const handleChangeFilter=(e)=>{
		console.log(ProductsArr[0]);
		const newArr = ProductsArr.filter(el =>
			el.info.gender.toLowerCase().includes(e.target.textContent.toLowerCase())
		)
		setFiltered(newArr)
		console.log(ProductsArr);
	}
	const handleChangeSearchFilter=(e)=>{
		if (e.target.value.toLowerCase() === 'all') {
			setFiltered(ProductsArr)
			return
		}
		console.log(e.target.value);
		const newArr = ProductsArr.filter(el =>
			el.name.toLowerCase().includes(e.target.value.toLowerCase())
		)
		setFiltered(newArr)
	}
	const handleChangeFilterMin=(e)=>{
		console.log(e.target.value);
		const newArr = ProductsArr.filter(el => el.price >= e.target.value)
		setFiltered(newArr)
	}
	const handleChangeFilterMax=(e)=>{
		console.log(e.target.value);
		const newArr = ProductsArr.filter(el => el.price <= e.target.value)
		setFiltered(newArr)
	}


	return (
		<>
			<MainDiv>
				<FilterDiv>
					<div className='filtertesak'>
						<button onClick={handleChangeFilter}>Բոլորը</button>
						<button onClick={handleChangeFilter}>Տղայի</button>
						<button onClick={handleChangeFilter}>Աղջկա</button>
						<button onClick={handleChangeFilter}>Երեխայի</button>
					</div>
					<div className='filter'>
						<input
							className='search'
							placeholder='search...'
							onChange={handleChangeSearchFilter}
						/>
						<div className='filterPrice'>
							<input
								type='number'
								placeholder='min...'
								onChange={handleChangeFilterMin}
							/>
							<input
								type='number'
								placeholder='max...'
								onChange={handleChangeFilterMax}
							/>
						</div>
					</div>
				</FilterDiv>
				<Products>
					{filtered.length > 0
						? filtered.map((e, i) => {
								return (
									<Product key={e.id}>
										<Link
											style={{ width: '100%' }}
											to={`/product/${e.id}`}
											state={e}
										>
											<img src={e.src} gender={e.gender} />
										</Link>

										<div className='txt'>
											<p>
												{e.name && e.name.split('').length > 20
													? e.name.substring(0, 18) + ' ...'
													: e.name}
											</p>
											<p>
												{'Price'}: {e.price}
											</p>
										</div>
									</Product>
								)
						  })
						: ProductsArr.map((e, i) => {
								return (
									<Product key={e.id}>
										<Link
											style={{ width: '100%' }}
											to={`/product/${e.id}`}
											state={e}
										>
											<img src={e.src} gender={e.gender} />
										</Link>

										<div className='txt'>
											<p>
												{e.name && e.name.split('').length > 20
													? e.name.substring(0, 18) + ' ...'
													: e.name}
											</p>
											<p>
												{'Price'}: {e.price}
											</p>
										</div>
									</Product>
								)
						  })}
				</Products>
			</MainDiv>
		</>
	)
}

