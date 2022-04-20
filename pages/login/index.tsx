import { Formik, Form, Field, ErrorMessage } from 'formik'
import { object, string } from 'yup'
import { Layout } from '../../components/layouts/Layout/index'

const Login = () => {
	return (
		<Layout title='Login'>
			<h1 className='mx-auto text-7xl'>Login</h1>
			<Formik
				initialValues={{ username: '', password: '' }}
				validationSchema={object({
					username: string().required(),
					password: string().required(),
				})}
				onSubmit={values => {
					console.log(values)
				}}
			>
				{({ handleSubmit }) => (
					<Form onSubmit={handleSubmit} className='flex flex-col'>
						<Field
							className='p-2 mb-3 border'
							name='username'
							placeholder='username'
							type='username'
						/>
						<ErrorMessage name='username' />
						<Field
							className='p-2 mb-2 border'
							name='password'
							placeholder='password'
							type='password'
						/>
						<ErrorMessage name='password' />
						<button className='bg-blue-500 border' type='submit'>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</Layout>
	)
}

export default Login
