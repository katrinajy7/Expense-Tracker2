import * as yup from 'yup';

const validationSchema = yup.object().shape({
    category: yup.mixed().required('category is required'),
    sum: yup.number().required('sum is required'),
    comment: yup.string().min(3, 'Too short').max(48, 'Too long'),
})

export default validationSchema;