import React from 'react'
import Logo from '../logo.svg'

export default function Corpo() {
	return(
		<header>
			<h2>Cabeçalho</h2>
			<img src={Logo} width={150}/>
		</header>
	)
}