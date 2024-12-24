const StatisticCard = ({ title, value }: { title: string; value: string }) => {
  return (
    <div className="flex flex-col items-center w-[180px] md:w-[220px] lg:w-[260px] h-auto p-[20px] bg-[#F2F4F6] border-white border-[2px] rounded-[24px] statistics-card-shadow">
      <span className="text-[32px] md:text-[38px] lg:text-[50px] font-[700] text-center tracking-[0.5px] text-primary leading-[50px]">
        {value}
      </span>
      <p className="pt-[4px] md:pt-[28px] text-primary tracking-[0.5px] leading-[24px] text-[13px]  md:text-[24px]">
        {title}
      </p>
    </div>
  )
}

export default StatisticCard
