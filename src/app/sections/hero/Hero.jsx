import Image from 'next/image';
import { useHero } from './useHero';
import { Card } from '../../components/Card';

export function Hero() {
  const { heroContent, cardInfo } = useHero();

  return (
    <section className="min-h-screen pt-28 bg-gradient-to-b from-[#E0DEF7] to-white shadow-md flex  pb-10">
      <div className="w-1/2  flex flex-col gap-8 pl-42 justify-center mt-14 z-[1]">
        <h1 className="text-6xl font-bold text-black max-w-[544px]">
          {heroContent.title}
        </h1>
        <p className="max-w-[400px] leading-[160%] text-medium text-[20px]">{heroContent.description}</p>

        <div className="flex flex-col gap-[1px]">
          <div className="max-h-[56px] max-w-[290px] bg-white rounded-tl-lg rounded-tr-lg">
            <ul className="flex mb-6">
              {heroContent.tabs.map((tab, index) => (
                <li
                  key={index}
                  className={`cursor-pointer h-[56px] w-[97px] flex items-center justify-center ${
                    index === 0
                      ? 'font-bold text-primary border-b-2 border-b-primary'
                      : 'font-medium hover:font-bold hover:text-primary hover:border-b-2 hover:border-b-primary'
                  }`}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          <div className="backdrop-blur-md shadow-md flex gap-16 items-center bg-white h-[104px] w-[773px] rounded-bl-lg rounded-br-lg rounded-tr-lg justify-center">
            <div className="border-r pl-4 border-r-[#E0DEF7] flex flex-col items-start justify-center pr-8">
              <p className="text-base text-[#001619]">Location</p>
              <p className="font-bold">{heroContent.location}</p>
            </div>
            <div className="border-r border-r-[#E0DEF7] flex flex-col items-start justify-center pr-8">
              <p className="text-base text-[#001619]">When</p>
              <p className="font-bold flex gap-4 calendar-icon">
                {heroContent.moveInText}
              </p>
            </div>
            <div>
              <button className="cursor-pointer bg-primary hover:bg-[#5b4ee0] text-white font-bold h-[56px] w-[209px] rounded-lg">
                {heroContent.buttonText}
              </button>
            </div>
          </div>

          <div className="flex gap-18 mt-12">
            {heroContent.stats.map((stat, index) => (
              <div key={index}>
                <Image 
                  src={stat.icon} 
                  alt="Icon" 
                  width={56} 
                  height={56} />
                <p className="text-2xl font-bold text-primary pt-5">{stat.value}</p>
                <p className="text-black font-medium">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="w-1/2 min-h-[calc(100vh-6rem)] bg-[length:100%_100%] bg-no-repeat bg-right relative bottom-9 z-[0]"
        style={{ backgroundImage: "url('/house-picture.png')" }}
      > 
        <Card   
          imageSrc={cardInfo.imageSrc}
          name={cardInfo.name}
          role={cardInfo.role}
          quote={cardInfo.quote}
          savedAmount={cardInfo.savedAmount}
          processTime={cardInfo.processTime} />
          
        <Image 
          className='absolute bottom-0 right-0' 
          src='/trustpilot.png' 
          alt="Trustpilot image" 
          width={261} 
          height={156} />
      </div>
    </section>
  );
}
