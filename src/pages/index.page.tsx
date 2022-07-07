import * as React from "react"
import type { NextPage } from "next"

const fetcher = (...args: any) => fetch(...args).then((res) => res.json())

const Home: NextPage = () => {
  const [message, setMessage] = React.useState("")

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.target as HTMLFormElement)
    try {
      const res = await fetcher("/api/hello", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
      })
      setMessage(res?.message)
    } catch (error) {
      console.error("Erreur au fetch")
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>
          Name
          <input name="username" />
        </label>
        <button type="submit">OK</button>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default Home
