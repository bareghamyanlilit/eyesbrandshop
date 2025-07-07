import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { HomePage } from './container'
import { GlobalStyles } from './styled'
import { MyFooter, MyHeader } from './component'
import { ProductPage } from './container/product'

export const MyProject=()=>{
	return (
		<Router>
			<GlobalStyles />
			<MyHeader />
			<Routes>
				<Route path='/' element={<HomePage />} />
				{/* <Route path='/about' element={<AboutPage />} /> */}
				<Route path='/product/:id' element={<ProductPage />} />
			</Routes>
			<MyFooter />
		</Router>
	)
}
