import { FC, ReactNode } from 'react'
import Head from 'next/head'
import { Navbar } from '../../custom'

interface Props {
	title?: string
	children?: ReactNode
}

export const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>{title || 'Create Next App'}</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Navbar />

			<main className='w-9/12 mx-auto'>{children}</main>
		</>
	)
}