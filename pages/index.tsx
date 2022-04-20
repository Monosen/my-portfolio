import type { NextPage } from 'next'
import Image from 'next/image'

import { Hero } from '../components/home'
import { Layout } from '../components/layouts/Layout'
import { LayoutProject } from '../components/layouts/LayoutProject'

import GithubApp from '../public/img/github-app-screenshot.png'

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<Hero />
			<LayoutProject>
				<div className='bbg-[#F7F8FB] min-h-screen'>
					<div className='flex justify-between'>
						<Image
							className='w-8/12'
							src={GithubApp}
							alt='trivia'
							width={960}
							height={540}
						/>
						<div className='w-3/12'>
							<h3 className='pb-10 text-5xl capitalize'>github app</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
								odit, iure nesciunt quaerat explicabo in praesentium quo
								doloremque! Voluptatibus animi veritatis officiis optio, atque
								doloremque incidunt esse commodi alias voluptas? Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Facere optio nemo
								fuga, rem quidem accusantium aperiam eaque alias repudiandae
								iste expedita illo ad enim, ipsum unde corrupti. Labore, ab
								provident!
							</p>
						</div>
					</div>
				</div>
			</LayoutProject>
		</Layout>
	)
}

export default Home
