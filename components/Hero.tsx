import {AiOutlineRadiusSetting, AiFillGithub} from 'react-icons/ai';

export default function Hero() {
  return(
    <section className="flex border-b justify-between
    border-black p-5">
      <div className='flex gap-x-4'>
        <span className='text-blue-600'>
          <AiOutlineRadiusSetting size={64} />
        </span>
        <div>
          <h1 className='text-4xl font-bold text-blue-600'>
            Border Radius Previewer
          </h1>
          <p className='text-lg font-semibold text-neutral-600'>
            Design. Adjust. Create. Simple like that.
          </p>
        </div>
      </div>
      <div className='opacity-50 hover:opacity-100 flex flex-col items-center self-center'>
        <p>Find more about me at:</p>
        <a href="https://github.com/mateuscgodoy">
          <AiFillGithub size={36} />
        </a>
      </div>
    </section>
  )
}