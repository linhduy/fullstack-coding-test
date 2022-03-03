import { Timestamp } from "firebase/firestore";

export default interface ArticleIF {
  title: string,
  imageUrl: string,
  imageAlt?: string,
  content?: string,
  createdAt?: Timestamp,
}