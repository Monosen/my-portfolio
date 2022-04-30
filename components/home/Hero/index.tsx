import { AiOutlineArrowDown } from 'react-icons/ai'

export const Hero = () => {
	return (
		<>
			<header className='min-h-[91.8vh] w-full relative'>
				<div className='flex flex-col items-center justify-center min-h-[91.8vh] capitalize gap-y-4 text-8xl relative'>
					<span className='absolute w-40 h-40 bg-pink-200 opacity-25 -z-10 left-14 top-20 rounded-xl'></span>
					<span className='absolute w-40 h-40 bg-blue-200 opacity-25 -z-10 left-96 top-52 rounded-xl'></span>
					<span className='absolute w-40 bg-purple-200 opacity-25 h-52 -z-10 left-60 bottom-48 rounded-xl'></span>
					<span className='absolute w-40 bg-purple-200 opacity-25 h-52 -z-10 left-60 bottom-48 rounded-xl'></span>
					<span className='absolute w-40 h-40 bg-pink-200 opacity-25 -z-10 left-2/4 top-40 rounded-xl'></span>

					<p>Hello.</p>
					<p>I am Edinson.</p>
					<p>a Developer.</p>
				</div>
				<div className='absolute bottom-10 left-[45%]'>
					<AiOutlineArrowDown className='inline-block mr-3 text-2xl ' />
					<p className='inline-block capitalize'>scross down</p>
				</div>
			</header>
		</>
	)
}
