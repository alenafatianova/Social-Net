import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { FilterType } from '../../../redux/users-reducer';
  
type usersSearchFormPropsType = {
    onFilterChanged: (filter: FilterType) => void
}
type formPropsType = {
    term: string,
    friend: 'null' | 'true' | 'false'
}
const searchValidate = (values: any) => {
    const errors = {};
    return errors;
}

export const UserSearchForm: React.FC<usersSearchFormPropsType> = (props) => {
  
    const formSubmitHandler = (values: formPropsType, {setSubmitting}: { setSubmitting: (isSubmitting: boolean) => void }) => {
        const filter: FilterType = {
            term: values.term,
            friend: values.friend === 'null' ? null : values.friend === 'true' ? true : false
        }
        props.onFilterChanged(filter)
        setSubmitting(false)
    }
    return (
        <div>
        <Formik
            initialValues={{ term: '' , friend: 'null'}}
            validate={searchValidate}
            onSubmit={formSubmitHandler}
        >
       {({ isSubmitting }) => (
         <Form>
           <Field type="text" name="term" />
            <Field name='friend' as='select' placeholder='Choose user'>
                <option value='null'>All users</option>
                <option value='true'>Followed users</option>
                <option value='false'>Unfollowed users</option>
            </Field>
           <button type="submit" disabled={isSubmitting}>
             Submit
           </button>
         </Form>
       )}
     </Formik>
        </div>
    )
}
