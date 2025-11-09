import Logo from './logo'

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center h-16 md:h-20">
          <Logo />
        </div>
      </div>
    </header>
  )
}
