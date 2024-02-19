import { createClient } from "@/prismicio";
import { components } from "@/slices";
import {SliceZone} from "@prismicio/react";


const queryHomepage = () => {
  const client = createClient()
  return client.getSingle('home')
}

export async function generateMetadata() {

  return {
    title: 'EIE - Engineering Intelligent Environments',
    description:
        'Farming solutions start-up that aims to revolutionize the way farmers work.',
  }
}

export default async function Home() {
  const page = await queryHomepage()
  console.log(page.data.slices[4])
  return (
      <main className="home">
        <SliceZone slices={page.data.slices} components={components}/>
      </main>
  )}