import React from 'react'

const Gallery: React.FC = () => {
    const images = [
        '/images/img.jpg',
        '/images/img2.png',
        '/images/img3.png',
        '/images/img4.png',
        '/images/img5.png'
        ];

  return (
    <div className="poppins ">
        <div className='mt-10 md:mt-20 text-center px-5 md:px-0'>
            <p className='text-[#CD1B78] text-[18px] md:text-[20px] font-semibold'>OUR GALLERY</p>
            <p className="text-[26px] md:text-[32px] font-bold roboto-slab">Transforming <span className="text-[#DA1077]">Lives</span> Through <span className="text-[#1B94CB]">Action</span></p>
            <p className="text-[16px] md:text-[20px] font-medium">A glimpse into the impact of our work, bringing hope, education, and care to children in need.</p>
        </div>
        <div className="relative mt-[57px]">
          <div className="absolute h-10 md:h-20 w-full bg-white" style={{
            borderBottomLeftRadius: '50% 100%',
            borderBottomRightRadius: '50% 100%'
          }}></div>
          <div className="justify-center gap-4 bg-white overflow-x-scroll">
              <div className="flex justify-between gap-2.5">
                  {images.map((src, index) => (
                      <img
                      key={index}
                      src={src}
                      className={`w-[170px] md:w-full h-auto rounded-lg`}
                      alt={`Gallery ${index + 1}`}
                      />
                  ))}
              </div>
        </div>
        <div className="absolute bottom-0 h-10 md:h-20 w-full bg-white" style={{
            borderTopLeftRadius: '50% 100%',
            borderTopRightRadius: '50% 100%'
          }}></div>

    </div>
    </div>
  )
}

export default Gallery