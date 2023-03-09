import { FormProvider, useForm } from 'react-hook-form'
import { Outlet } from 'react-router-dom'

export function SignUp() {
  const methods = useForm()

  return (
    <FormProvider {...methods}>
      <Outlet />
    </FormProvider>
  )
}
