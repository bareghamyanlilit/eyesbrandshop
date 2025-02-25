// import { useTranslation } from 'react-i18next'
// import { ProductsArr } from '../../constant/items'
// import { Counter, Product, Products } from './styled'
// import { useState } from 'react'
// import { Link } from 'react-router-dom'

// export const ProductsPart = ({setBasketCount}) => {
// 	const { t } = useTranslation()
	// const [quantities, setQuantities] = useState(
	// 	Array(ProductsArr.length).fill(0) // Initialize quantities to 0
	// )

	// const updateQuantity = (index, change) => {
	// 	setQuantities(prev => {
	// 		const newQuantities = [...prev]
	// 		newQuantities[index] = Math.max(
	// 			0,
	// 			Math.min(newQuantities[index] + change, 10)
	// 		) 
	// 		return newQuantities
	// 	})
	// }
// 	const addToBasket = (i) => {
// 		const basket = JSON.parse(localStorage.getItem("basket"))
// 		let result = basket.some(e => e.src === ProductsArr[i].src)
// 		if(result) return
// 		basket.push(ProductsArr[i])
// 		localStorage.setItem("basket" , JSON.stringify(basket))
// 		setBasketCount(basket.length)
// 	}
// 	return (
// 		<>
			// <Products >
			// 	{ProductsArr.map((e, i) => (
			// 		<Product key={e + i}>
			// 			<Link style={{width:"100%"}} to={`/product/${e.id}`} state={e}>
			// 				<img src={e.src} gender={e.gender} />
			// 			</Link>
			// 			<div className='txt'>
			// 				<p>
			// 					{e.name && e.name.split('').length > 20 ? e.name.substring(0,18) + ' ...' : e.name }
			// 				</p>
			// 				<p>
			// 					{t('Price')}: {e.price}
			// 				</p>
			// 				<div className='info'>
			// 					<Counter>
			// 						<button onClick={() => updateQuantity(i, -1)}>-</button>
			// 						<h1>{quantities[i]}</h1>
			// 						<button onClick={() => updateQuantity(i, 1)}>+</button>
			// 					</Counter>
			// 					<button className='like' onClick={() => addToBasket(i)}>
			// 						❤️
			// 					</button>
			// 				</div>
			// 			</div>
			// 		</Product>
			// 	))}
			// </Products>
// 		</>
// 	)
// }

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

