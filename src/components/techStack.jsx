import { IoIosArrowRoundDown } from "react-icons/io";
import techStackData, { technologies } from '../data/techStackData';

export function TechBubble({ tech, size = 62, hideName = false }) {
  return (
    <div
      style={{
        cursor: 'pointer'
      }}    
      className="flex flex-col gap-[6px] items-center select-none group w-min"
    >
      <a
        href={tech.link}
        title={tech.title}
        target='_blank'
        style={{
          width: size + 'px',
          height: size + 'px',
          padding: parseInt(size / 4.5) + 'px'
        }}
        aria-label={`This Link takes you to Official ${tech.title} website.`}
        className="bg-social-hover/5 border border-social-hover/10 rounded-2xl shadow-2xl self-center"
      >
        <img
          width={256}
          height={256}
          src={tech.src}
          alt={tech.title}
          loading='lazy'
          style={{ width: '100%', height: '100%', objectFit: 'contain', borderRadius: tech?.radius || 0 }}
        />
      </a>
      {(!hideName) &&
        <span
          style={{
            fontSize: (15 * (size / 62)) + 'px',
            lineHeight: (18 * (size / 62)) + 'px'
          }}
          className='text-center opacity-0 transition-[opacity] duration-300 group-hover:opacity-100'
        >
          {tech.title}
        </span>
      }
    </div>
  )
}

export default function TechStack() {
  return (
    <div
      className="flex flex-col gap-8"
    >
      <div
        className="flex flex-row flex-wrap justify-between items-center border-t-4 border-font-color gap-[6px]"
      >
        <span
          className="text-[42px] sm:text-[54px] font-medium"
        >
          Skills
        </span>
        <span
          className="flex flex-row items-center gap"
        >
          My tech stack and skill set <IoIosArrowRoundDown size={22} />
        </span>
      </div>
      <div
        className='flex flex-col gap-8'
      >
        {techStackData.map(tech =>
          <div
            key={tech.type}
            className='flex flex-col gap-4 mx-2'
          >
            <span
              className='font-medium text-font-color/95 text-[24px] sm:text-[26px]'
            >
              {tech.type}
            </span>
            <div
              className="flex flex-row flex-wrap gap-x-6 gap-y-3 lg:gap-8 text-3xl mb-[-16px]"
            >
              {tech.stack.map(stack => 
                <TechBubble
                  key={stack}
                  size={56}
                  tech={technologies[stack]}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}