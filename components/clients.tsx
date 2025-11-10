import Particles from './particles'

const clips = [
  {
    src: 'https://framerusercontent.com/assets/Ka4uvsySyV6xRfbADFjOfY05oI.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 01',
  },
  {
    src: 'https://framerusercontent.com/assets/q78mA0acOsIJNj3DlCAkTki1Q.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 02',
  },
  {
    src: 'https://framerusercontent.com/assets/Y34ioXJM4NAksBwI5LTrXKLDQo.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 03',
  },
  {
    src: 'https://framerusercontent.com/assets/I79BMu612Ql6U6ZEnxtGiJb2quA.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 04',
  },
  {
    src: 'https://framerusercontent.com/assets/Vw9JARyCwKwQJrN4yfKL0ERYOwQ.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 05',
  },
  {
    src: 'https://framerusercontent.com/assets/dA5EbUbTb93Di1jHGQgvFX80b8.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 06',
  },
  {
    src: 'https://framerusercontent.com/assets/qVZpsvNejRc1NHMIbM19uhHiks.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 07',
  },
  {
    src: 'https://framerusercontent.com/assets/jRjv2iSDeWi3cvyLlAOqoT0jk.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 08',
  },
  {
    src: 'https://framerusercontent.com/assets/RJU8e0NgjqGcEZV5Z4PuTQjkS8.mp4',
    poster: 'https://framerusercontent.com/images/5ILRvlYXf72kHSVHqpa3snGzjU.jpg',
    alt: 'Creator 09',
  },
]

export default function Clients() {
  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            <div className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_video]:max-w-none [&_li]:mx-8">
                {clips.map((clip, index) => (
                  <li key={index}>
                    <video
                      className="h-60 w-40 rounded-3xl object-cover border border-slate-700/60 shadow-lg shadow-purple-500/10"
                      src={clip.src}
                      poster={clip.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={clip.alt}
                    />
                  </li>
                ))}
              </ul>
              <ul
                className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_video]:max-w-none [&_li]:mx-8"
                aria-hidden="true"
              >
                {clips.map((clip, index) => (
                  <li key={index}>
                    <video
                      className="h-60 w-40 rounded-3xl object-cover border border-slate-700/60 shadow-lg shadow-purple-500/10"
                      src={clip.src}
                      poster={clip.poster}
                      autoPlay
                      loop
                      muted
                      playsInline
                      aria-label={clip.alt}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

