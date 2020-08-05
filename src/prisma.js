import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from './resolvers/index'

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: 'thisismysupersecrettext',
    fragmentReplacements
})

export { prisma as default }

// prisma.query prisma.mutation prisma.subscription prisma.exists

// prisma.exists.Comment({
//     id: "",
//     author:{
//         id:""
//     }
// }).then((exists) => {
//     console.log(exists)
// })

// const createPostForUser = async (authorId, data) => {
//     const userExists = await prisma.exists.User({
//         id: authorId
//     })

//     if(!userExists) {
//         throw new Error("User not found")
//     }

//     const post = await prisma.mutation.createPost({
//         data: {
//             ...data,
//             author: {
//                 connect: {
//                     id: authorId
//                 }
//             }
//         }
//     }, '{ author { id name email posts { id title published }} }')
//     return post.author
// }

// createPostForUser('ckd4yg3xc00160867snn3au1f', {
//     title: 'Great books to read',
//     body: 'The War of Art',
//     published: true
// }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error)
// })

// const updatePostForUser = async (postId, data) => {
//     const postExists = await prisma.exists.Post({
//         id:postId
//     })

//     if(!postExists) {
//         throw new Error("Post not found")
//     }

//     const post = await prisma.mutation.updatePost({
//         where: {
//             id: postId
//         },
//         data
//     }, '{ author { id name email posts { id title published } } }')
//     return post.author
// }

// updatePostForUser("ckd4yyiqy00250867c5op0qw7", { published: false }).then((user) => {
//     console.log(JSON.stringify(user, undefined, 2))
// }).catch((error) => {
//     console.log(error)
// })
