import Link from 'next/link'

export const Navbar = () => {
	return (
		<nav className='flex justify-between px-20 py-7'>
			<div>
				<p>Monosen</p>
			</div>
			<ul className='flex gap-x-8'>
				<li>
					<Link href={'/'}>Home</Link>
				</li>
				<li>
					<Link href={'/about'}>About</Link>
				</li>
				<li>
					<Link href={'/'}>Projects</Link>
				</li>
				<li>
					<Link href={'/contact'}>Contact</Link>
				</li>
			</ul>
			<div>
				<Link href={'/login'}>
					<a className='p-4 text-white bg-blue-500 rounded-xl'>Login</a>
				</Link>
			</div>
		</nav>
	)
}
