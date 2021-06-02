import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { CreateUser } from '../components/CreateUser'

import React from 'react'

const HooksMemo: VFC = () => {
  return (
    <Layout title="Hooks memo">
      <CreateUser />
    </Layout>
  )
}

export default HooksMemo
