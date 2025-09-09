import Image from 'next/image';

export function Card(props) {
  return (
    <div className="flex flex-col gap-6 bg-white w-[270px] h-[280px] rounded-lg mt-16 p-6">
      <div className="flex gap-4 items-center">
        <Image src={props.imageSrc} alt={`${props.name} image`} width={64} height={64} />
        <div className="flex flex-col gap-1">
          <p className="font-bold">{props.name}</p>
          <p className="font-medium text-black/50 text-xs">{props.role}</p>
          <p className="font-medium text-black/50 text-xs flex items-end gap-1">
            Moved with{' '}
            <span className="font-bold text-black/100 estatery flex gap-1 items-end">
              Estatery
            </span>
          </p>
        </div>
      </div>

      <div className="flex gap-4 items-start">
        <Image src="/quotes-icon.svg" alt="Quotes icon" width={32} height={32} />
        <p className="font-medium text-xs w-[173px] leading-[160%]">{props.quote}</p>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-t-[#E5E5E5]">
        <div>
          <p className="font-bold text-lg">{props.savedAmount}</p>
          <p className="font-medium text-black/50 text-xs">Saved up to</p>
        </div>
        <div>
          <p className="font-bold text-lg">{props.processTime}</p>
          <p className="font-medium text-black/50 text-xs">Process time</p>
        </div>
      </div>
    </div>
  );
}