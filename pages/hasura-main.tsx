import { VFC } from 'react'
import Link from 'next/link'
import { useQuery } from '@apollo/client'
import { Layout } from '../components/Layout'
import { GET_USERS } from '../queries/queries'
import { GetUsersQuery } from '../types/generated/graphql'

const FetchMain: VFC = () => {
  const { data, error } = useQuery<GetUsersQuery>(GET_USERS, {
    // fetchPolicy: 'network-only', //毎回更新。通信が終わるまで画面に何も出ない
    fetchPolicy: 'cache-and-network', //最初cacheを表示。通信をして新規があれば追加で表示
    // fetchPolicy: 'cache-first', // 最初だけ通信。新規でデータが作成されてたとしても読み込めない(default)
    // fetchPolicy: 'no-cache', //そもそもcacheが作られない
  })

  if (error)
    return (
      <Layout title="Hasura fetchPolicy">
        <p>Error: {error.message}</p>
      </Layout>
    )

  return (
    <Layout title="Hasura fetchPolicy">
      <p className="mb-6 font-bold">Hasura main page</p>
      {data?.users.map((user) => {
        return (
          <p className="my-1" key={user.id}>
            {user.name}
          </p>
        )
      })}
      <Link href="/hasura-sub">
        <a className="mt-6">Next</a>
      </Link>
    </Layout>
  )
}

export default FetchMain
