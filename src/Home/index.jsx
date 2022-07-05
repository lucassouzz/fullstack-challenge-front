import { useState } from 'react'
import { HeartIcon } from '@heroicons/react/outline'

const MAX_TWEET_SIZE = 250

function TweetFrom(){

  const [text, setText] = useState('')

  function changeText(e) {
    setText(e.target.value)
  }

  return (
    <div className='border-b border-silver p-4 space-y-6'>
      <div className='flex space-x-5'>
        <img src="/src/avatar.png" className='w-7'/>
        <h1 className='font-bold text-xl'>Página Inicial</h1>
      </div>

      <form className='pl-12 text-lg flex flex-col'>
        <textarea 
          type='text' 
          name='text'
          value={text}
          placeholder='O que está acontecendo?'
          className='bg-transparent outline-none disabled:opacity-50'
          onChange={changeText}
        />
        <div className='flex justify-end items-center space-x-3'>
          <span className='text-sm'>
            <span>{text.length}</span> / <span className='text-birdBlue'>{MAX_TWEET_SIZE}</span>
          </span>
          <button 
          className='bg-birdBlue px-5 py-2 rounded-full disabled:opacity-50'
          disabled={text.length > MAX_TWEET_SIZE}
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  )
}

function Tweet(props) {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver">
        <div >
          <img src={props.avatar}/>
        </div>
        <div className='space-y-1'>
            <span className="font-bold text-sm">{props.name}</span>{' '}
            <span className="text-sm text-silver">@{props.username}</span>

            <p>
              {props.children}
            </p>
            <div className='flex space-x-1 text-silver text-sm items-center'>
            <HeartIcon className='w-6 stroke-1'/>
            <span>77k</span>
            </div>
        </div>
    </div>
  )
}
export function Home() {
  return (
    <>
      <TweetFrom />
      <div>
        <Tweet name="Elon Musk" username="elonmusk" avatar="/src/avatar.png">
          Let's make Twitter maximun fun!
        </Tweet>
        <Tweet name="Lucas de Souza" username="lucassouzz" avatar="/src/avatar.png">
          Let's make Twitter brabao!
        </Tweet>
      </div>
    </>
  )
}