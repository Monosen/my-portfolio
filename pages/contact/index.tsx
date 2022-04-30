import { Field, Form, Formik, ErrorMessage } from 'formik'
import { object, string } from 'yup'

import { Layout } from '../../components/layouts/Layout'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
	const contactSchema = object({
		name: string().required(),
		lastname: string(),
		email: string().email().required(),
		asunto: string().required(),
		message: string().required(),
	})

	return (
		<Layout title='Contact'>
			<h1 className='mx-auto mt-8 mb-5 text-center capitalize text-7xl'>
				contact
			</h1>

			<Formik
				initialValues={{
					name: '',
					lastname: '',
					asunto: '',
					email: '',
					message: '',
				}}
				validationSchema={contactSchema}
				onSubmit={values => {
					console.log(values)
				}}
			>
				{({ handleSubmit }) => (
					<Form onSubmit={handleSubmit} className='flex flex-col'>
						<Field
							className='p-2 mb-2 border'
							name='name'
							placeholder='name'
							type='name'
						/>
						<ErrorMessage name='name' />
						<Field
							className='p-2 mb-2 border'
							name='lastname'
							placeholder='last name'
							type='lastname'
						/>
						<ErrorMessage name='lastname' />
						<Field
							className='p-2 mb-2 border'
							name='email'
							placeholder='email@email.com'
							type='email'
						/>
						<ErrorMessage name='email' />
						<Field
							className='p-2 mb-2 border'
							name='asunto'
							placeholder='asunto'
							type='asunto'
						/>
						<ErrorMessage name='asunto' />
						<Field
							className='p-2 mb-2 border'
							name='message'
							placeholder='message'
							type='textarea'
							as='textarea'
						/>
						<ErrorMessage name='message' />
						<button className='bg-blue-300 border' type='submit'>
							Submit
						</button>
					</Form>
				)}
			</Formik>

			<div className='my-10 text-6xl text-center capitalize'>
				<p>or</p>
			</div>

			<div className='flex text-4xl gap-x-10'>
				<AiFillGithub />
				<AiFillLinkedin />
				<SiGmail />
			</div>
		</Layout>
	)
}

export default Contact
