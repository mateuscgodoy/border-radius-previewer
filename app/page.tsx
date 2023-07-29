import ContentContainer from "@/components/ContentContainer"
import Hero from "@/components/Hero"

export default function Home() {
  return (
   <main>
    <article className="w-4/5 mx-auto">
      <Hero />
      <ContentContainer />
    </article>
   </main>
  )
}
