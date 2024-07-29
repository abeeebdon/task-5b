import CustomDropdown from './components/CustomDropdown'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main>
      <div className="relative">
        <CustomDropdown />
        <Hero />
      </div>
    </main>
  )
}
