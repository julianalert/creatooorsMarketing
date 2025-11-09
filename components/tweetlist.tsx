'use client'

import { useEffect } from 'react'

const tweets = [
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Just had the BEST ever day for Rise 🤯<br><br>- 3.5k downloads in 24 hours<br>- 164 started the $29.99 yearly plan free trial<br>- 9 directly purchased the $49.99 lifetime plan<br><br>All from 1 viral reels ⚡️ (shoutout to <a href="https://twitter.com/StrongerAstro?ref_src=twsrc%5Etfw">@StrongerAstro</a> for the reel format inspo) <a href="https://t.co/jZPbotWzwh">pic.twitter.com/jZPbotWzwh</a></p>&mdash; Desmond (@desmondhth) <a href="https://twitter.com/desmondhth/status/1824691664931393573?ref_src=twsrc%5Etfw">August 17, 2024</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">+$20,000 MRR from a single organic TikTok video for PhotoAI <a href="https://t.co/jU7wTwGqoZ">pic.twitter.com/jU7wTwGqoZ</a></p>&mdash; Guillaume (@iamgdsa) <a href="https://twitter.com/iamgdsa/status/1826317935134003348?ref_src=twsrc%5Etfw">August 21, 2024</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Actionable marketing item for anyone to do today:<br><br>- Install TikTok iOS app<br><br>- Search your industry hashtag<br><br>- Make a list of 30 people who post about it with 100K+ views<br><br>- Find their contacts<br><br>- Pay them $100-$300 to post a video about your app/site/thing <a href="https://t.co/5ZRH5JtjtC">https://t.co/5ZRH5JtjtC</a></p>&mdash; @levelsio (@levelsio) <a href="https://twitter.com/levelsio/status/1706275002469716184?ref_src=twsrc%5Etfw">September 25, 2023</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">consumer mobile apps are back and here&#39;s why:<br><br>scroll through tiktok shop and you&#39;ll notice something&#39;s changing. influencers who used to push supplement stacks and skincare are quietly switching to apps. makes perfect sense when you think about it.<br><br>selling physical products is…</p>&mdash; GREG ISENBERG (@gregisenberg) <a href="https://twitter.com/gregisenberg/status/1852719800813810112?ref_src=twsrc%5Etfw">November 2, 2024</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This guy promoted my app on TikTok (150k views).<br><br>In 24 hours, 5700 persons searched for it on Google.<br><br>TikTok is underrated. Creators have so much influence 🌟 <a href="https://t.co/PBFpnJpge3">pic.twitter.com/PBFpnJpge3</a></p>&mdash; Marc Lou (@marc_louvion) <a href="https://twitter.com/marc_louvion/status/1537968336960598018?ref_src=twsrc%5Etfw">June 18, 2022</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="lt" dir="ltr">from 400 MAU to 1,000 DAU with 1 tiktok video 🤯 <a href="https://t.co/KpVzRU4aL5">pic.twitter.com/KpVzRU4aL5</a></p>&mdash; Sharie (@shariexyz) <a href="https://twitter.com/shariexyz/status/1826816838208004189?ref_src=twsrc%5Etfw">August 23, 2024</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The real IMPACT of a single VIRAL TikTok or Reel, by the numbers:</p>&mdash; Guillaume (@iamgdsa) <a href="https://twitter.com/iamgdsa/status/1828803992018653507?ref_src=twsrc%5Etfw">August 28, 2024</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This video got me 35,000 downloads<br><br>Here&#39;s why it worked:<br><br>1. hooks viewers with a question <br>2. selling a dream lifestyle <br>3. product demo<br>4. trending audio <a href="https://t.co/77qb9rn60L">pic.twitter.com/77qb9rn60L</a></p>&mdash; Isabella (@isabellacomelli) <a href="https://twitter.com/isabellacomelli/status/1816518716194214336?ref_src=twsrc%5Etfw">July 25, 2024</a></blockquote>`,
  },
  {
    html: `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We grew Submagic from 0 to $1M ARR in 3 months.<br><br>Here&#39;s the 3 growth hacks we used at the launch 🚀 <br><br>1. Influencer Marketing<br><br>This is our best acquisition channel.<br><br>We collaborate with influencers on YouTube, Instagram, TikTok &amp; LinkedIn.<br><br>Leveraging communities of influencers… <a href="https://t.co/Wk63NJM1ew">pic.twitter.com/Wk63NJM1ew</a></p>&mdash; Elie (@elieln_) <a href="https://twitter.com/elieln_/status/1824925166012448973?ref_src=twsrc%5Etfw">August 17, 2024</a></blockquote>`,
  },
]

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void
      }
    }
  }
}

export default function Tweetlist() {
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    const scriptId = 'twitter-wjs'
    const existingScript = document.getElementById('twitter-wjs')
    if (!existingScript) {
      const script = document.createElement('script')
      script.id = scriptId
      script.async = true
      script.src = 'https://platform.twitter.com/widgets.js'
      script.charset = 'utf-8'
      script.onload = () => {
        window.twttr?.widgets?.load()
      }
      document.body.appendChild(script)
      return
    }
    window.twttr?.widgets?.load()
  }, [])

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10" aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-linear-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">Your fave founders already use creators to grow their startups</h2>
            <p className="text-lg text-slate-400">From indie hackers to unicorn founders, the smartest teams are scaling through creator partnerships, not ads.            </p>
          </div>
          {/* Grid */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {tweets.map((tweet, index) => (
              <div key={index} className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div
                  className="flex justify-center"
                  dangerouslySetInnerHTML={{ __html: tweet.html }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

