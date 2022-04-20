import { FC, ReactNode } from 'react'

interface Props {
	children?: ReactNode
}

export const LayoutProject: FC<Props> = ({ children }) => {
	return <div className=''>{children}</div>
}
