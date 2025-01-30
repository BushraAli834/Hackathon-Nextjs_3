import { createClient } from "next-sanity";



const client = createClient({
  projectId: "avasnuuo",
  dataset: "production",
  useCdn: false, 
  apiVersion:'2023-10-10',
  token:'sksODsqAAeA7RyFnM47axHetnslG5eXyU8Z9z0cLKFcO6rRwn2Cx8F0bFUtRRiWBwew3URTefj8NxB5xycYgbimjKQkC43RRT33IPhDF6nInN072rLitrnhJhGe7E0YxrmGSzQyyQQz73pbhBIxPXZhx3skiOWAC8CCwdnD6a9gSx3qbfdPm'
  // token: process.env.SANITY_API_TOKEN, // Add the API token if needed for authenticated requests
})

export async function home({query, params}:{query:string, params?:any}){
  return(
    await client.fetch(query, params)
  )
}