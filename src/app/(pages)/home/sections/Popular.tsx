import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  CarouselApi,
} from "../../../../components/ui/carousel"
import PopularEventsCard from "./PopularEventsCard"
import { POPULAR_EVENTS_CARD_DATA } from "@/utils/constants"

const Popular = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null)
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }
  return (
    <div className="flex flex-col justify-center items-center mb-[130px]">
      <h1 className="text-[36px] md:text-[42px] lg:text-[50px] text-center text-primary font-[500] tracking-[0.5px] font-clashBold mb-[60px]">
        Popular this week
      </h1>

      <Carousel
        className="container mx-auto max-w-screen-lg justify-center items-center"
        setApi={setApi}
      >
        <CarouselContent>
          {POPULAR_EVENTS_CARD_DATA.map((event) => (
            <CarouselItem
              key={event.id}
              className="md:basis-1/2 lg:basis-1/3 flex flex-col justify-center items-center"
            >
              <PopularEventsCard
                key={event.id}
                imageSrc={event.src}
                category={event.category}
                categoryIcon={event.categoryIcon}
                viewers={event.viewers}
                location={event.location}
                title={event.title}
                description={event.description}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous and Next Buttons with bg-blue-200 */}
        <CarouselPrevious className="bg-blue-200 text-primary text-[24px] h-[40px] w-[40px] rounded-full md:flex hidden">
          {/* Icon for previous */}
          <span>&lt;</span>
        </CarouselPrevious>
        <CarouselNext className="bg-blue-200 text-primary text-[24px] h-[40px] w-[40px] rounded-full md:flex hidden">
          {/* Icon for next */}
          <span className="h-[50px] w-[50px]">&gt;</span>
        </CarouselNext>
      </Carousel>

      <div className="flex justify-center items-center h-[24px] w-auto px-3 mt-[26px] shrink-0 space-x-[8px] bg-gray-200 rounded-full">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-[8px] w-[8px] rounded-full ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Popular
