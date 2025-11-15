
import React from 'react'


interface SponsorImage {
    id: number;
    src: string;
    alt: string;
}

const HeroSponsor = () => {
    const images:SponsorImage[] = [
      {
        id: 1,
        src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762168176/Logo_di5vmj.png",
        alt: "sponsor 1",
      },
      {
        id: 2,
        src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762168177/Logo_1_mj8xiu.png",
        alt: "sponsor 2",
      },
      {
        id: 3,
        src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762168177/Logo_2_coiadf.png",
        alt: "sponsor 3",
      },
      {
        id: 4,
        src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762168176/Logo_3_obzhje.png",
        alt: "sponsor 4",
      },
      {
        id: 5,
        src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762168176/Logo_di5vmj.png",
        alt: "sponsor 5",
      },
      {
        id: 6,
        src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762168176/Logo_4_hevee7.png",
        alt: "sponsor 6",
      },
    ];
  return (
      <div>
          <div className='flex justify-center w-full text-gray-600'>
              <h2>Backed by:</h2>
          </div>
          <div>
              <div className="flex flex-wrap justify-evenly  items-center gap-5 md:gap-8 mt-6 mb-17 ">
                  {images.map((item) => (
                      <div key={item.id} className="w-32 h-12 relative">
                          <img
                              src={item.src}
                              alt={item.alt}
                              className="w-full h-full object-contain"
                          />
                      </div>
                    ))}
                </div>
          </div>
    </div>
  )
}

export default HeroSponsor