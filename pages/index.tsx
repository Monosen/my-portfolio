import type { NextPage } from 'next'
import Image from 'next/image'

import { Hero } from '../components/home'
import { Layout } from '../components/layouts/Layout'
import { LayoutProject } from '../components/layouts/LayoutProject'

import GithubApp from '../assets/images/github-app-screenshot.png'

import { AiFillGithub } from 'react-icons/ai'
import { GoLinkExternal } from 'react-icons/go'

const Home: NextPage = () => {
	return (
		<Layout title='Home'>
			<Hero />
			<LayoutProject>
				<div className='bbg-[#F7F8FB] min-h-screen pt-20'>
					<div className='flex flex-col justify-between xl:flex-row'>
						<div className='hidden transition duration-500 ease-in delay-300 md:block hover:-translate-y-8'>
							<Image
								className='rounded-sm'
								src={GithubApp}
								alt='trivia'
								width={960}
								height={540}
							/>
						</div>
						<div className='p-4 border-4 xl:w-6/12 xl:ml-5 2xl:w-4/12'>
							<h3 className='pb-5 text-5xl capitalize'>github app</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore
								odit, iure nesciunt quaerat explicabo in praesentium quo
								doloremque! Voluptatibus animi veritatis officiis optio, atque
								doloremque incidunt esse commodi alias voluptas? Lorem ipsum
								dolor sit amet consectetur adipisicing elit. Facere optio nemo
							</p>
							<div className='flex my-3 font-bold capitalize gap-x-5'>
								<p>react</p>
								<p>github api</p>
								<p>tailwind</p>
							</div>

							<div className='flex gap-x-4'>
								<AiFillGithub className='text-3xl' />
								<GoLinkExternal className='text-3xl' />
							</div>
						</div>
					</div>
				</div>
			</LayoutProject>
		</Layout>
	)
}

export default Home
