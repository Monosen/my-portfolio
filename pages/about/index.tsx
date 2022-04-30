import { Layout } from '../../components/layouts/Layout'

import avatar from '../../assets/images/about/avatar.png'
import Image from 'next/image'

const About = () => {
	return (
		<Layout title='About'>
			<div className='flex items-center justify-center w-full min-h-screen'>
				<Image className='rounded-full' src={avatar}></Image>
			</div>
			<div className='capitalize'>
				<h3 className='mb-5 text-4xl'>
					Yo soy edinson un desarrollador Full-Stack apasionado por la
					Programacion.
				</h3>
				<p className='mb-4'>
					Soy una persona con un alto nivel de compromiso, apasionada por el
					desarrollo de software y con alta responsabilidad, proactiva que
					Disfruta trabajando en equipo. Con la voluntad de aprender siempre
					nuevas cosas e implementar nuevas soluciones para un desarrollo Mas
					eficiente.
				</p>
				<p className='mb-4'>
					Me gusta desarrollar software que siga las buenas practicas, que Sea
					escalable, sostenible y de fácil entendimiento.
				</p>
				<p className='mb-4'>
					Me gusta hacer deporte, resolver ejercicios de programación, aprender
					nuevas cosas.
				</p>
			</div>

			<div className='capitalize'>
				<h3 className='mb-3 text-4xl'>experiencia</h3>
				<div className='w-full h-20 mb-4 bg-black rounded-lg'></div>
				<div className='w-full h-20 mb-4 bg-black rounded-lg'></div>
				<div className='w-full h-20 mb-4 bg-black rounded-lg'></div>
			</div>

			<div className='capitalize'>
				<h3 className='text-4xl'>una breve historia</h3>
				<div className='w-full h-20 mb-4 bg-black rounded-lg'></div>
				<div className='w-full h-20 mb-4 bg-black rounded-lg'></div>
				<div className='w-full h-20 mb-4 bg-black rounded-lg'></div>
			</div>

			<div className='capitalize'>
				<h3 className='text-4xl'>conocimiento</h3>
			</div>
		</Layout>
	)
}

export default About
