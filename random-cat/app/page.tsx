import {connection} from "next/server";
import {fetchImage} from "./fetch-image"


export default async function Home () {
  await connection();
  const image = await fetchImage();
  console.log("Home: 画像情報を取得", image);
  return <div>予定地</div>
}