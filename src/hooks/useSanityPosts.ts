import { useEffect, useState } from 'react'
import { client, SanityPost } from '../lib/sanity'

export function useSanityPosts() {
  const [posts, setPosts] = useState<SanityPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          image,
          excerpt,
          content,
          publishedAt
        }`
        
        const data = await client.fetch(query)
        setPosts(data)
        setError(null)
      } catch (err) {
        console.error('Erro ao buscar posts:', err)
        setError('Erro ao carregar posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

export function useSanityPost(slug: string) {
  const [post, setPost] = useState<SanityPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true)
        const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          title,
          slug,
          image,
          excerpt,
          content,
          publishedAt
        }`
        
        const data = await client.fetch(query, { slug })
        setPost(data)
        setError(null)
      } catch (err) {
        console.error('Erro ao buscar post:', err)
        setError('Erro ao carregar post')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPost()
    }
  }, [slug])

  return { post, loading, error }
}
