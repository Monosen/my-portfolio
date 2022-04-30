import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
	const router = useRouter()
	console.log(router)

	return (
		<nav className='flex justify-between px-20 py-7'>
			<div>
				<p>Monosen</p>
			</div>
			<ul className='flex gap-x-8'>
				<li>
					<Link href={'/'}>
						<a className={`${router.pathname === '/' && 'bg-purple-400'}`}>
							Home
						</a>
					</Link>
				</li>
				<li>
					<Link href={'/about'}>
						<a className={`${router.pathname === '/about' && 'bg-purple-400'}`}>
							About
						</a>
					</Link>
				</li>
				<li>
					<Link href={'/'}>
						<a
							className={`${
								router.pathname === '/projects' && 'bg-purple-400'
							}`}
						>
							Projects
						</a>
					</Link>
				</li>
				<li>
					<Link href={'/contact'}>
						<a
							className={`${router.pathname === '/contact' && 'bg-purple-400'}`}
						>
							Contact
						</a>
					</Link>
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
