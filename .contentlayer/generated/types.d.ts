// NOTE This file is auto-generated by Contentlayer

import type { Markdown, MDX, ImageFieldData, IsoDateTimeString } from 'contentlayer/core'
import * as Local from 'contentlayer/source-files'

export { isType } from 'contentlayer/client'

export type { Markdown, MDX, ImageFieldData, IsoDateTimeString }

/** Document types */
export type Post = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Post'
  /** the title of the post  */
  title: string
  /** the description of the post  */
  excerpt: string
  /** the date of the post  */
  date: IsoDateTimeString
  /** the  featured image of the post  */
  image: string
  /** the  author image of the post  */
  author: string
  /** the  categories image of the post  */
  categories: Category[]
  /** MDX file body */
  body: MDX
  url: string
}

export type Project = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Project'
  /** The title of the project */
  title?: string | undefined
  /** The location of the project */
  location?: string | undefined
  /** The date of the project */
  date?: IsoDateTimeString | undefined
  /** The image of the project */
  image?: string | undefined
  /** The client of the project */
  client?: string | undefined
  /** The role of the project */
  role?: string | undefined
  /** The year of the project */
  year?: string | undefined
  /** MDX file body */
  body: MDX
  url: string
}  

/** Nested types */
export type Category = {
  /** File path relative to `contentDirPath` */
  _id: string
  _raw: Local.RawDocumentData
  type: 'Category'
  /** The title of the category */
  title: string

}  

/** Helper types */

export type AllTypes = DocumentTypes | NestedTypes
export type AllTypeNames = DocumentTypeNames | NestedTypeNames

export type DocumentTypes = Post | Project
export type DocumentTypeNames = 'Post' | 'Project'

export type NestedTypes = Category
export type NestedTypeNames = 'Category'

export type DataExports = {
  allDocuments: DocumentTypes[]
  allPosts: Post[]
  allProjects: Project[]
}


export interface ContentlayerGenTypes {
  documentTypes: DocumentTypes
  documentTypeMap: DocumentTypeMap
  documentTypeNames: DocumentTypeNames
  nestedTypes: NestedTypes
  nestedTypeMap: NestedTypeMap
  nestedTypeNames: NestedTypeNames
  allTypeNames: AllTypeNames
  dataExports: DataExports
}

declare global {
  interface ContentlayerGen extends ContentlayerGenTypes {}
}

export type DocumentTypeMap = {
  Post: Post
  Project: Project
}

export type NestedTypeMap = {
  Category: Category
}

 