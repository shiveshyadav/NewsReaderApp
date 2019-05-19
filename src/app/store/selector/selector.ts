import { has } from 'lodash'

export const mapNewsFromServer = (payload) => {
  const allNews = payload ? payload.map((news) => {
    const source = has(news, 'source.name') ? news.source.name : 'No Source'
    const author = has(news, 'author') ? news.author : 'No author'
    const title = news.title
    const description = news.description
    const urlToImage = news.urlToImage
    const publishedAt = news.publishedAt
    const content = news.content
    const url= news.url
    return {
      source,
      author,
      title,
      description,
      urlToImage,
      publishedAt,
      content,
      url
    }
  }) : []
  return allNews
  }

  export const mapNewsFromServer1 = (payload) => {
    return payload;

  }