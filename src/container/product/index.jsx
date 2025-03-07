import { useLocation, useNavigate } from 'react-router-dom'
import { Images, Img, MainDiv, Product, SizeItem, Sizes, TxtItem } from './styled'
import { IoChevronBackCircle } from 'react-icons/io5'
import { useState } from 'react'

export const ProductPage=()=>{
	const location = useLocation()
    const nav = useNavigate()
	const [index, setIndex] = useState('main')
	// console.log(location?.state?.firmaImg)
	const loc = location?.state
	console.log(nav());
	const prev=()=>{
		nav('/')
	}
	
	// console.log(location?.state);
	return (
		<>
			<MainDiv>
				<Product>
					<IoChevronBackCircle className='prev' onClick={prev} />

					<Img src={index == 'main' ? loc?.src : loc?.info?.imgArr[index]} />
					<div className='info'>
						<div className='name'>
							<div className='first'>
								<h2>Գինը ։ {loc?.price} դրամ</h2>
								<div className='firma'>
									<img src={loc?.firmaImg} />
									<span>{loc?.firma}</span>
								</div>
							</div>
							<p>{loc?.name}</p>
						</div>
						<hr />
						<div className='size'>
							<p>Չափսեր</p>
							<Sizes>
								{loc?.info?.sizeArr?.map((e, i) => (
									<SizeItem key={e + i}>{e}</SizeItem>
								))}
							</Sizes>
						</div>

						<Images>
							{loc?.info?.imgArr.map((e, i) => (
								<img key={i} src={e} onClick={() => setIndex(i)} />
							))}
						</Images>
						{/* <TxtInfo>
								<p>
								<span>Gender.............</span>
								{loc?.info?.gender}
								</p>
							</TxtInfo> */}

						<TxtItem>
						</TxtItem>
{/* 
						<Button onClick={addCard} state={loc}>
							Add Card
						</Button> */}
						<p className="txt">
							Ատեղ կարա ինչ որ բան լինի գրած,շատ կարճ չէ նորմալի մեջ,որ սիրուն լինի,նու չգիտեմ սիրուն ա սենց որ տակը տեքստա լինում,էս տեքստի չափերը երեևի լավ են ,շատ երկար դժվար ,կավ ա լավ ա տեսնենք տեսնենք,գնում ա,անիմաստ բաներ գրեմ որ երկար երևա տեսքը տեսնենքքքք․․․
						</p>
					</div>
				</Product>
			</MainDiv>
		</>
	)
}


// import { useEffect, useState } from 'react'
// import {productApi} from '../../api/servicesApi'
// export const ProductPage = () => {
	// 	const [product, setProduct] = useState([])
	// 	useEffect(() => {
		// 		getData()
		// 	}, [])
		// 	const getData = async () => {
// 		const response = await productApi.getProduct()
// 		setProduct(response.data)
// 	}
// 	const addToBasket = async id => {
// 		const token = localStorage.getItem('token')
// 		if (!token) {
// 			alert('You must be logged in')
// 			return
// 		}
// 		console.log(token, id)
// 		const response = await productApi.addToBasket(token, id)
// 		console.log(response.data)
// 	}
// 	return (
// 		<>
// 			{product.length > 0 &&
// 				product.map(e => {
// 					return (
// 						<div key={e._id}>
// 							{e.brand}
// 							<button onClick={() => addToBasket(e._id)}>add to basket</button>
// 						</div>
// 					)
// 				})}
// 		</>
// 	)
// }

