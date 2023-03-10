import React, { useContext } from "react"
import { StyleSheet } from "react-native"
import BlogPostForm from "../components/BlogPostForm"
import { Context as BlogContext } from "../context/BlogContext"

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)

  const onCreateBlogPost = (title, content) => {
    addBlogPost(title, content, () => navigation.navigate("Index"))
  }

  return <BlogPostForm onSubmit={onCreateBlogPost} />
}

const styles = StyleSheet.create({})

export default CreateScreen
