import React from 'react'
import S from '@sanity/desk-tool/structure-builder'
import { createDocsList, createSingleton } from './structure/helpers'
import blogStructure from './structure/blog.structure'

import EmojiIcon from './custom/components/icons/EmojiIcon'
import Some from './custom/components/previews/some/Some'

const EyeIcon = () => <EmojiIcon small>👀</EmojiIcon>
const EditIcon = () => <EmojiIcon small>📝</EmojiIcon>
const SomeIcon = () => <EmojiIcon>🤳</EmojiIcon>

const hiddenDocTypes = listItem =>
  ![
    'companyInfo',
    'siteSettings',
    'article',
    'frontpage',
    'menu',
    'companyInfo',
    'globalContent',
    'page',
    'designTokens',
    'category',
    'tag',
    'some'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('SoMe')
        .icon(SomeIcon)
        .schemaType('some')
        .child(
          S.documentTypeList('some')
            .title('SoMe')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('some')
                .views([
                  S.view.form().icon(EditIcon),
                  S.view
                    .component(Some)
                    .icon(EyeIcon)
                    .title('SoMe Preview')
                ])
            )
        ),
      createDocsList('menu', { title: 'Navigation' }),
      createDocsList('frontpage'),
      createDocsList('page'),
      blogStructure,
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure
      ...S.documentTypeListItems().filter(hiddenDocTypes),
      S.divider(),
      createDocsList('designTokens', {
        withPreviews: true
      }),
      S.listItem()
        .title('Global')
        .icon(() => <EmojiIcon>🌍</EmojiIcon>)
        .child(
          S.list()
            .title('Global')
            .items([
              createSingleton('companyInfo', {
                withPreviews: false,
                icon: () => <EmojiIcon>🏢</EmojiIcon>
              }),
              createSingleton('globalContent', {
                withPreviews: false,
                icon: () => <EmojiIcon>🌍</EmojiIcon>
              })
            ])
        ),
      S.listItem()
        .title('Settings')
        .icon(() => <EmojiIcon>⚙️</EmojiIcon>)
        .child(
          S.list()
            .title('Settings')
            .items([
              createSingleton('siteSettings', {
                withPreviews: false,
                icon: () => <EmojiIcon>⚙️</EmojiIcon>
              })
            ])
        )
    ])
