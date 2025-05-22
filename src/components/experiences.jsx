import { SocialBubbleBG } from "./socials";
import { socials } from "../data/socialsData";
import experienceData from '../data/experienceData';
import { IoIosArrowRoundDown } from "react-icons/io";
import { getDateDifference, relativeDate } from "../utils/dateMethods";

export default function Experiences() {
  return (
    <div
      className="flex flex-col gap-4"
    >
      <div
        className="flex flex-row flex-wrap justify-between items-center border-t-4 border-font-color gap-[6px]"
      >
        <h2
          className="text-[42px] sm:text-[54px] font-medium"
        >
          Experiences
        </h2>
        <span
          className="flex flex-row items-center gap"
        >
          Worked at various companies <IoIosArrowRoundDown size={22} />
        </span>
      </div>
      <div
        className="flex flex-col gap-4"
      >
        {experienceData.map((experience) =>
          <div
            key={experience.name}
            style={{
              borderRadius: '18px'
            }}
            aria-label={`This link takes you to the companies ${experience.name}'s website that i've worked `}
            className={`flex flex-col select-none group bg-font-color/5 border border-white/5 drop-shadow-md pl-5 px-4 py-3 sm:pl-6 sm:px-5 sm:py-4`}
          >
            <div
              className="flex flex-row justify-between gap-4 w-full"
            >
              <div
                className="flex flex-col"
              >
                <span
                  className="text-[20px] sm:text-[21px] font-medium"
                >
                  {experience.positions[0].role}
                </span>
                <span
                  className="text-[18px] sm:text-[19px] font-light opacity-95"
                >
                  {experience.name} · {experience.type}
                </span>
                <span
                  className="text-[16px] sm:text-[17px] font-light opacity-80"
                >
                  {(experience.positions[0].duration?.end == null) ?
                    `${relativeDate(experience.positions[experience.positions.length - 1].duration.start)} - Present · ${getDateDifference(experience.positions[experience.positions.length - 1].duration.start, new Date())}`
                    :
                    `${relativeDate(experience.positions[experience.positions.length - 1].duration.start)} - ${relativeDate(experience.positions[0].duration.end)} · ${getDateDifference(experience.positions[experience.positions.length - 1].duration.start, experience.positions[0].duration.end)}`
                  }
                </span>
                <span
                  className="font-light opacity-75"
                >
                  {experience.location} · {experience.mode}
                </span>
              </div>
              <div
                className="flex flex-col items-center gap-2.5"
              >
                <img
                  width={1024}
                  height={1024}
                  loading='lazy'
                  alt={experience.name}
                  src={experience.icon}
                  style={{ width: '62px', height: '62px', objectFit: 'contain', borderRadius: '20px', padding: '4px' }}
                  className="border-2 border-white/5"
                />
                <div
                  className="flex flex-row"
                >
                  <SocialBubbleBG
                    social={{ url: experience.link, ...socials.web }}
                    size={18}
                  />
                </div>
              </div>
            </div>
            <div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex flex-col gap-2.5 py-2"
            >
              {experience.positions.map((position, pos_index) =>
                <div
                  key={pos_index}
                  className="flex flex-col gap-0.5 experienceDot"
                >
                  <span
                    className="text-[18px] font-medium opacity-95 pl-6"
                  >
                    {position.role}
                  </span>
                  <div
                    className="flex flex-row"
                  >
                    <span
                      className="w-[1px] h-[initial] bg-white/50 rounded-lg ml-[3px]"
                    />
                    <div
                      className="flex flex-col gap-2 opacity-90 pl-5"
                    >
                      <span
                        className="text-[15px] font-light opacity-80"
                      >
                        {(position.duration?.end == null) ?
                          `${relativeDate(position.duration.start)} - Present · ${getDateDifference(position.duration.start, new Date())}`
                          :
                          `${relativeDate(position.duration.start)} - ${relativeDate(position.duration.end)} · ${getDateDifference(position.duration.start, position.duration.end)}`
                        }
                      </span>
                      {(position?.content) &&
                        <span
                          className='font-light whitespace-pre-line'
                        >
                          {position.content}
                        </span>
                      }
                      <div
                        className="flex flex-col gap-1"
                      >
                        {position.points.map((point, point_index) => 
                          <span
                            key={point_index}
                            className="font-light"
                          >
                            • {point}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
