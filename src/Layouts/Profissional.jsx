import { RequireAuth } from '../Components/RequireAuth'

export function Profissional() {
  return (
    <RequireAuth>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi maiores
        quibusdam officia qui veniam inventore, consequatur numquam error
        provident omnis enim velit fugiat iste odio praesentium distinctio totam
        amet quod.
      </p>
    </RequireAuth>
  )
}
