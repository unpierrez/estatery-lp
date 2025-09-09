import Image from 'next/image';
import { useBenefit } from './useBenefit';

export function Benefit() {
  const { benefitsData } = useBenefit()

  return (
    <section className="h-[700px] pt-26 bg-white flex gap-16 px-[151px]">
      <div
        style={{ backgroundImage: "url('/card-background.svg')" }}
        className="py-10 px-13 h-[500px] w-[416px] bg-[length:100%_100%] bg-no-repeat bg-right"
      >
        <div className="flex flex-col justify-start items-start gap-4">
          <p className="font-bold text-black text-3xl w-[309px]">
            The new way to find your new home
          </p>
          <p className="text-secondary w-[276px]">
            Find your dream place to live in with more than 10k+ properties listed.
          </p>
          <button className="mt-2 bg-secondary h-[40px] w-[159px] rounded-lg text-white font-bold text-sm cursor-pointer hover:bg-[#0D0844]">
            Browse Properties
          </button>
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-15 h-[500px]">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="flex flex-col justify-between">
            <Image src={benefit.icon} alt={benefit.title} width={56} height={56} />
            <p className="font-bold text-[24px]">{benefit.title}</p>
            <p className="text-[#4D5461] text-[16px] w-[290px] leading-[160%]">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
