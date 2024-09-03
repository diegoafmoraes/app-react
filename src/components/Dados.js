import React from 'react'

export default function Dados(props) {
	return(
		<section>
			<p>Canal: {props.canal}</p>
			<p>Youtube: <a href={'http://www.'+props.youtube} target='_blank'>{props.youtube}</a></p>
			<p>Curso: {props.curso}</p>
		</section>		
	)
}