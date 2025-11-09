import DefaultLayout from './(default)/layout'
import Home, { metadata } from './(default)/page'

export { metadata }

export default function RootPage() {
  return (
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  )
}

