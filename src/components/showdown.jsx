const showdownImages = [
  "assets/showdown/auroville_ccc.avif",
  "assets/showdown/auroville_ccc_goodies.avif",
  "assets/showdown/vit_chennai.avif",
  "assets/showdown/mvit_ignite.avif",
  "assets/showdown/ParkWheels_Team.avif",
  "assets/showdown/petit.avif",
  "assets/showdown/scimit.avif",
  "assets/showdown/aatral.avif",
  "assets/showdown/ParkWheels_Stage.avif",
  "assets/showdown/petit_speech.avif",
  "assets/showdown/ptu_cosmocom.avif",
  "assets/showdown/mailam.avif",
  "assets/showdown/sri_eshwar.avif",
  "assets/showdown/ptu_rejour.avif",
  "assets/showdown/amirta_bengaluru.avif",
  "assets/showdown/nit_pondy.avif",
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
        className="columns-1 sm:columns-2 lg:columns-3 2xl:columns-4 h-full gap-[8px] sm:gap-[10px]"
      >
        {showdownImages.map((image, index) =>
          <img
            src={image}
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