import { motion } from "motion/react";

const showdownImages = [
  "assets/showdown/vit_chennai.jpg",
  "assets/showdown/mvit_ignite.jpg",
  "assets/showdown/petit.jpg",
  "assets/showdown/scimit.jpg",
  "assets/showdown/aatral.jpg",
  "assets/showdown/petit_speech.jpg",
  "assets/showdown/ptu_cosmocom.jpg",
  "assets/showdown/mailam.jpg",
  "assets/showdown/sri_eshwar.jpg",
  "assets/showdown/ptu_rejour.jpg",
  "assets/showdown/amirta_bengaluru.jpg",
  "assets/showdown/nit_pondy.jpg",
]

export default function ShowDown() {
  //const showdownImagesObjGen = import.meta.glob('../../public/assets/showdown/*.{jpg,jpeg,png,gif}', { eager: true });
  //console.log(Object.keys(showdownImagesObjGen))

  return (
    <div
      className="flex flex-col gap-2 text-black bg-white mt-6"
    >
      <h2
        className="text-[40px] sm:text-[45px] font-medium border-t-4 border-black"
      >
        Gallery
      </h2>
      <div
        className="columns-2 lg:columns-3 xl:columns-4 h-full gap-[8px] sm:gap-[10px]"
      >
        {showdownImages.map((image, index) =>
          <img
            src={image}
            loading="lazy"
            alt={'Image of an Event'}
            key={index}
            style={{
              cursor: 'pointer'
            }}
            onContextMenu={(e) => e.preventDefault()}
            className="mb-[8px] sm:mb-[10px] rounded-[16px] sm:rounded-[20px] select-none border-[2px] sm:border-[4px] border-black/15 opacity-95 hover:opacity-100 transition-all duration-1000"
          />
        )}
      </div>
    </div>
  )
}