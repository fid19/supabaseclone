import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    img: "1password.svg",
  },
  {
    img: "betashares.svg",
  },
  {
    img: "chatbase.svg",
  },
  {
    img: "github.svg",
  },
  {
    img: "gopuff.svg",
  },
  {
    img: "humata.svg",
  },
  {
    img: "krea.svg",
  },
  {
    img: "langchain.svg",
  },
  {
    img: "loops.svg",
  },
  {
    img: "mobbin.svg",
  },
  {
    img: "mozilla.svg",
  },
  {
    img: "pika.svg",
  },
  {
    img: "pwc.svg",
  },
  {
    img: "resend.svg",
  },
  {
    img: "udio.svg",
  },
];

const client_reviews = [
  {
    username: "lucas_brown",
    review: "I had a minor issue, but they resolved it quickly.",
  },
  {
    username: "emma_white",
    review: "Very professional and excellent quality.",
  },
  {
    username: "samuel_lee",
    review: "Great prices and fast delivery.",
  },
  {
    username: "jane_smith",
    review: "Quick and reliable. Highly recommend!",
  },
  {
    username: "mary_jones",
    review: "The best experience I’ve ever had. Super friendly staff.",
  },
  {
    username: "john_doe",
    review: "Amazing service! Will definitely return.",
  },
  {
    username: "lucas_brown",
    review:
      "A bit slow, but great overall experience. The team was friendly, though, and they ensured everything went well eventually.",
  },
  {
    username: "lily_evans",
    review:
      "Very helpful customer service. I had a couple of questions, and the support team was quick to answer them, providing me with all the details I needed to make an informed decision.",
  },
  {
    username: "olivia_smith",
    review:
      "Product was exactly as described, would buy again. The quality is top-notch, and I’m really happy with my purchase. The website made the ordering process smooth and easy.",
  },
  {
    username: "jack_black",
    review:
      "Not the best experience, but still decent service. Delivery was delayed, and I had some trouble reaching support, but the product was good in the end.",
  },
  {
    username: "sophia_martin",
    review:
      "Absolutely loved it! Totally exceeded my expectations. The product was well-packed, arrived quickly, and worked perfectly. I will definitely be a repeat customer.",
  },
  {
    username: "william_taylor",
    review:
      "Great value for money. Will be back for more. The quality is amazing, and I’m really pleased with how well it works. If you’re looking for great value without sacrificing quality, I highly recommend it.",
  },
  {
    username: "zoe_johnson",
    review:
      "Fast shipping and the product is high quality. I was a bit worried about the delivery time, but it arrived faster than I expected, and the product works perfectly.",
  },
  {
    username: "liam_williams",
    review:
      "Excellent communication and fast resolution of issues. I had a small issue with my order, but the team was quick to resolve it and made sure I was happy with the outcome.",
  },
  {
    username: "isabella_lee",
    review:
      "Nice product, but delivery was a bit delayed. I had high hopes for this item, and while it met my expectations in terms of quality, I did experience a longer-than-expected wait for delivery.",
  },
];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

const Logo = ({ img }: { img: string }) => {
  return (
    <div className="relative h-20 w-20 flex items-center">
      <Image
        fill={true}
        style={{
          objectFit: "contain",
        }}
        src={`company-logo-svg/${img}`}
        alt={img}
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative">
      <Marquee pauseOnHover={false} className="[--duration:60s]">
        {reviews.map((review) => (
          //   <ReviewCard key={review.username} {...review} />
          <Logo key={review.img} img={review.img} />
        ))}
      </Marquee>

      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}

export function SlidingComponent({}) {
  return (
    <Marquee pauseOnHover className="[-duration:60s] pb-16 md:pb-24">
      <div className="flex-shrink-0 h-[300px] !w-auto flex-nowrap overflow-hidden">
        <div className="grid-cols-1 h-full w-[250px] grid-rows-2  grid gap-4">
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/shotgun.webp"
              alt="shotgun logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/mozilla.webp"
              alt="mozilla logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
        </div>
      </div>

      <div className=" flex-shrink-0 h-[300px] w-auto flex-nowrap overflow-hidden">
        <div className="h-full w-[450px]">
          <div className="h-full p-4 bg-overlay max-w-[450px] rounded-md mr-1 flex flex-col justify-between">
            <div className="h-[33px] relative w-auto max-w-[145px] opacity-75">
              <Image
                src={"/maergo.jpg"}
                fill={true}
                alt="maergo"
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
            <h3 className="text-[#898989]">
              Maergo's Express Delivery: How Supabase Helped Achieve
              Scalability, Speed,and Cost Saving.
            </h3>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 h-[300px] !w-auto flex-nowrap overflow-hidden">
        <div className="grid-cols-1 h-full w-[250px] grid-rows-2  grid gap-4">
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/shotgun.webp"
              alt="shotgun logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/mozilla.webp"
              alt="mozilla logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 h-[300px] !w-auto flex-nowrap overflow-hidden">
        <div className="grid-cols-1 h-full w-[250px] grid-rows-2  grid gap-4">
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/shotgun.webp"
              alt="shotgun logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/mozilla.webp"
              alt="mozilla logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 h-[300px] !w-auto flex-nowrap overflow-hidden">
        <div className="grid-cols-1 h-full w-[250px] grid-rows-2  grid gap-4">
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/shotgun.webp"
              alt="shotgun logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/mozilla.webp"
              alt="mozilla logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
        </div>
      </div>

      <div className=" flex-shrink-0 h-[300px] w-auto flex-nowrap overflow-hidden">
        <div className="h-full w-[450px]">
          <div className="h-full p-4 bg-overlay max-w-[450px] rounded-md mr-1 flex flex-col justify-between">
            <div className="h-[33px] relative w-auto max-w-[145px] opacity-75">
              <Image
                src={"/maergo.jpg"}
                fill={true}
                alt="maergo"
                objectFit="contain"
                className="h-full w-full"
              />
            </div>
            <h3 className="text-[#898989]">
              Maergo's Express Delivery: How Supabase Helped Achieve
              Scalability, Speed,and Cost Saving.
            </h3>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 h-[300px] !w-auto flex-nowrap overflow-hidden">
        <div className="grid-cols-1 h-full w-[250px] grid-rows-2  grid gap-4">
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/shotgun.webp"
              alt="shotgun logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/mozilla.webp"
              alt="mozilla logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
        </div>
      </div>

      <div className="flex-shrink-0 h-[300px] !w-auto flex-nowrap overflow-hidden">
        <div className="grid-cols-1 h-full w-[250px] grid-rows-2  grid gap-4">
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/shotgun.webp"
              alt="shotgun logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
          <div className="bg-overlay relative rounded-xl flex items-center justify-center from-border to-border">
            <Image
              src="/mozilla.webp"
              alt="mozilla logo"
              height={150}
              width={300}
              className="invert opacity-50 max-w-[140px]"
            />
          </div>
        </div>
      </div>
    </Marquee>
  );
}

export function MarqueeReviewCard() {
  return (
    <Marquee className="py-16 px-0 lg:px-16 xl:px-20 mx-auto lg:max-w-[1400px] !pt-6">
      <div className="mx-auto lg:max-w-[1400px]">
        <div className="w-full max-h-[500px]">
          <div className="max-lg:flex max-lg:items-start lg:columns-4 lg:gap-4 lg:min-w-[900px] pr-4 overflow-hidden gap-4">
            {client_reviews.map((review, _) => {
              return (
                <div
                  key={_}
                  className="bg-overlay/70 w-[200px] border-white/20 border-2 p-5 flex flex-col gap-1 max-lg:min-w-[300px] lg:break-inside-avoid-column mb-4 rounded-lg"
                >
                  <div className="flex flex-row gap-2 items-center justify-start">
                    <div className="w-10 h-10 relative border-4 border-[#898989] rounded-full">
                      <Image
                        fill={true}
                        src="/profile-pic.webp"
                        alt="profile picture"
                        className="rounded-full h-full w-auto object-cover"
                      />
                    </div>
                    <span className="font-bold">@{review.username}</span>
                  </div>

                  <p className="text-[#898989] py-1 ">"{review.review}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Marquee>
  );
}
