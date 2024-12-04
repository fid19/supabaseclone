import { BentoDemo } from "@/components/bentogrid";
import {
  MarqueeDemo,
  MarqueeReviewCard,
  SlidingComponent,
} from "@/components/infinitescroll/marquee";
import FrameWorkLogo from "@/components/shared/FrameworkLogo";
import ListCard from "@/components/shared/ListCard/listcard";
import { MobileNavbar } from "@/components/shared/navbar/MobileNavbar";
import SupaBaseLogo from "@/components/shared/SupabaseLogoText";
import VideoComponent from "@/components/shared/VideoComponent/VideoComponent";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/constant";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { Suspense } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaGithub,
  FaReact,
  FaYoutube,
} from "react-icons/fa";
import { IoChatbox, IoCheckmark } from "react-icons/io5";

const footerLinks = [
  {
    name: "Product",
    links: [
      "Database",
      "Auth",
      "Functions",
      "Realtime",
      "Storage",
      "Vector",
      "Pricing",
      "GA Week",
    ],
  },
  {
    name: "Resources",
    links: [
      "Support",
      "System Status",
      "Become a Partner",
      "Integrations",
      "Brand Assets / Logos",
      "Security and Compliance",
      "DPA",
      "SOC2",
      "HIPAA",
    ],
  },
  {
    name: "Developers",
    links: [
      "Documentation",
      "Changelog",
      "Contributing",
      "Open Source",
      "SupaSquad",
      "DevTo",
      "RSS",
    ],
  },
  {
    name: "Company",
    links: [
      "Blog",
      "Customer Stories",
      "Careers",
      "Company",
      "Events & Webinars",
      "General Availability",
      "Terms of Service",
      "Privacy Policy",
      "Privacy Settings",
      "Acceptable Use Policy",
      "Support Policy",
      "Service Level Agreement",
      "Humans.txt",
      "Lawyers.txt",
      "Security.txt",
    ],
  },
];

export default function Home() {
  return (
    <div className="">
      <header className="sticky top-0 z-40 transform">
        <div className="bg-black/90 inset-0 absolute w-full h-full !opacity-100"></div>
        <nav className="z-40 border-border border-b backdrop-blur-sm">
          <div className="relative flex justify-between h-16 lg:container mx-auto lg:px-16 xl:px-20">
            <div className="flex w-full">
              <SupaBaseLogo className="max-lg:px-6" />
              <div className="max-lg:hidden grid gap-5 grid-flow-col items-center font-bold text-xs">
                {navLinks.map((link, _index) => {
                  return (
                    <Link
                      className="hover:text-green-400"
                      key={_index}
                      href="#"
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className="px-4 mr-2 items-center flex text-white lg:hidden">
              <MobileNavbar />
            </div>
            <div className="max-lg:hidden">
              <div className="flex items-center flex-row h-full gap-2">
                <Link
                  href="#"
                  className="text-gray-400 flex items-center gap-1 hover:bg-overlay py-1 px-4 rounded-sm hover:!text-white transition-all ease-out duration-150"
                >
                  <FaGithub />
                  <span className="text-xs font-bold">74.2k</span>
                </Link>
                <Button
                  type="submit"
                  className="h-[26px]  text-xs px-2.5 bg-overlay border border-white/20 text-white !outline- hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0"
                >
                  Sign In
                </Button>
                <Button
                  type="submit"
                  className="h-[26px]  text-xs px-2.5 bg-green-700 text-white border border-green-400 hover:bg-green-600 !focus-visible:outline-none !focus-visible:ring focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-green-500"
                >
                  Start your project
                </Button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen relative">
        <div className="relative -mt-[65px]">
          <div className="py-8 sm:py-18 px-6 lg:py-24 mx-auto container lg:px-16 xl:px-20 pb-10">
            <div className="relative">
              <div className="mx-auto">
                <div className="max-w-2xl mx-auto">
                  <div className="flex flex-col pt-[90px] gap-4 lg:gap-8">
                    <div className="flex flex-col items-center">
                      <div className="-mt-4 lg:-mt-14 mb-8 w-full flex justify-center">
                        <div className="max-w-xl w-fit flex justify-center items-center">
                          <Link
                            href="#"
                            className="group border-white/20 border flex flex-row items-center gap-4 w-auto bg-overlay/60 hover:bg-overlay p-1 pr-4 rounded-full text-sm"
                          >
                            <span className="bg-[#3ecf8e] border-[#006239] text-green-200 font-bold border-2 bg-opacity-10 rounded-full py-1 px-3">
                              Launch Week 13
                            </span>
                            <span>Claim ticket</span>
                            <span className="group-hover:translate-x-1 transition-all duration-200 ease-out">
                              <FaArrowRight />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <h1 className="text-5xl lg:text-7xl text-center">
                        <span className="block text-foreground">
                          Build in a weekend
                        </span>
                        <span className="block text-green-400">
                          Scale to millions
                        </span>
                      </h1>
                      <p className="pt-2 my-3 lg:mb-0 text-center font-medium text-sm lg:text-lg leading-normal">
                        Supabase is an open source Firebase alternative.
                        <br className="hidden md:block" />
                        Start your project with a Postgres database,
                        Authentication, instant APIs, Edge Functions, Realtime
                        subscriptions, Storage, and Vector embeddings.
                      </p>
                    </div>
                    <div className="flex justify-center gap-2 font-bold">
                      <Button
                        type="submit"
                        className="h-[38px] font-bold text-xs px-2.5 bg-green-700 text-white border border-green-400 hover:bg-green-600 !focus-visible:outline-none !focus-visible:ring focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-green-500"
                      >
                        Start your project
                      </Button>
                      <Button
                        type="submit"
                        className="h-[38px] font-bold text-xs px-2.5 bg-overlay border border-white/20 text-white !outline-none hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0"
                      >
                        Request a demo
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-16 relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background md:shadow-lg ">
          <div className="max-w-md lg:max-w-2xl mx-auto">
            <MarqueeDemo />
          </div>
          <h3 className="mt-1 text-[#898989] z-10 text-xs text-center">
            Trusted by fast-growing companies worldwide
          </h3>
        </div>

        <div className="pb-16 relative max-lg:px-6 lg:container mx-auto lg:px-16 xl:px-20">
          <BentoDemo />
          <p className="mt-6 text-[#898989] text-lg text-overlay">
            <span className="text-white">Use one or all.</span> Best of breed
            products. Integrated as a platform.
          </p>
        </div>

        <div className="sm:py-18 max-lg:px-6 container py-24 mx-auto lg:container lg:px-16 xl:px-20">
          <div className="flex flex-col max-xl:gap-8 xl:flex-row xl:justify-between xl:max-w-6xl mx-auto">
            <FrameWorkLogo />
          </div>
        </div>

        <div className="">
          <div className="py-16 sm:py-18 md:py-24 mx-auto max-lg:px-6 xl:px-20 lg:px-16 container lg:container flex-row flex justify-between max-xl:flex-col gap-4 !pb-4">
            <div className="x;w-1/2 space-y-4">
              <p className="text-[#898989] font-light">Customer Stories</p>
              <h1 className="text-5xl basis-auto text-[#898989]">
                <span className="text-white">Infrastructure</span> to innovate
                <br />
                and scale with ease.
              </h1>
              <p className="text-[#898989] leading-relaxed max-w-2xl">
                See how Supabase empowers companies of all sizes to accelerate
                their growth and streamline their work.
              </p>
            </div>
            <div className="flex-0 text-nowrap flex items-end gap-2">
              <Button
                type="submit"
                className="h-[26px]  text-xs px-2.5 bg-green-700 text-white border border-green-400 hover:bg-green-600 !focus-visible:outline-none !focus-visible:ring focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-green-500"
              >
                View all stories
              </Button>
              <Button
                type="submit"
                className="h-[26px]  text-xs px-2.5 bg-overlay border border-white/20 text-white !outline- hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0"
              >
                View Events
              </Button>
            </div>
          </div>
          <div className="flex flex-row overflow-hidden pb-16 md:pb-24">
            <SlidingComponent />
          </div>

          <div className="container mx-auto px-6 py-16 sm:py-18 md:py-24 lg:px-16 xl:px-20 lg:py-24  relative !pb-0">
            <div className="flex flex-col justify-center items-center gap-8">
              <h1 className="text-5xl">Start building in seconds</h1>
              <p className="text-lg text-white/80">
                Kickstart your next project with templates built by us and our
                community.
              </p>
              <div className="flex-0 text-nowrap flex items-end gap-1">
                <Button
                  type="submit"
                  className="h-[26px]  text-xs px-2.5 bg-overlay border border-white/20 text-white/80 !outline- hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0 font-bold py-4"
                >
                  View all examples
                </Button>
                <Button
                  type="submit"
                  className="h-[26px]  text-xs px-2.5 bg-overlay border border-white/20 text-white/80 !outline- hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0 font-bold py-4"
                >
                  <FaGithub />
                  Official Github Repository
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 px-0 lg:px-16 xl:px-20 container mx-auto !pt-6 max-w-[1400px]">
          <div className="hidden lg:grid grid-cols-12 gap-6">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
          <div className="lg:hidden grid grid-flow-col gap-6 overflow-hidden px-6">
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>

        <div className="container px-6 lg:px-0 py-16 mx-auto max-w-4xl">
          <div>
            <div className="mb-10">
              <h1 className="text-center text-3xl text-[#898989]">
                <span className="text-white">
                  Stay productive and manage your app
                </span>
                <br /> without leaving your dashboard
              </h1>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="flex justify-center gap-2">
              <Button className="flex-shrink bg-background text-[#898989] text-sm border rounded-[999px] border-[#898989] hover:bg-background hover:text-white text-wrap py-5">
                Table Editor
              </Button>
              <Button className="flex-shrink bg-background text-[#898989] text-sm border rounded-[999px] border-[#898989] hover:bg-background hover:text-white text-wrap leading-5 py-5">
                SQL Editor
              </Button>
              <Button className="flex-shrink bg-background text-[#898989] text-sm border rounded-[999px] border-[#898989] hover:bg-background hover:text-white text-wrap py-5">
                RLS Policies
              </Button>
            </div>

            <div>
              <div className="flex justify-center flex-wrap gap-x-8 gap-y-4">
                <Link
                  href="#"
                  className="text-[#898989] hover:text-white flex items-center justify-center gap-2 text-sm"
                >
                  <FaCheck />
                  <span className="">Full CRUD</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#898989] hover:text-white flex items-center justify-center gap-2 text-sm"
                >
                  <FaCheck />
                  <span className="">Materialized Views</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#898989] hover:text-white flex items-center justify-center gap-2 text-sm"
                >
                  <FaCheck />
                  <span className="">Foreign Table</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#898989] hover:text-white flex items-center justify-center gap-2 text-sm"
                >
                  <FaCheck />
                  <span className="">Partitioned Tables</span>
                </Link>
                <Link
                  href="#"
                  className="text-[#898989] hover:text-white flex items-center justify-center gap-2 text-sm"
                >
                  <FaCheck />
                  <span className="">Easy as Spreadsheet</span>
                </Link>
              </div>
            </div>

            <div className="p-2 pt-0 border-overlay border rounded-lg">
              <div className="w-full px-2 py-3 relative flex gap-1.5">
                <div className="w-2 h-2 bg-border rounded-full"></div>
                <div className="w-2 h-2 bg-border rounded-full"></div>
                <div className="w-2 h-2 bg-border rounded-full"></div>
              </div>
              <AspectRatio
                className="border rounded-lg border-overlay"
                ratio={16 / 9}
              >
                <Suspense fallback={<p>Loading video...</p>}>
                  <VideoComponent fileName="/supabase-table-editor.webm" />
                </Suspense>
              </AspectRatio>
            </div>
          </div>
        </div>

        <div className="container relative py-6 mx-auto">
          <div className="space-y-6">
            <h1 className="text-3xl text-white text-center">
              Join the community
            </h1>
            <p className="text-center text-[#898989]">
              Discover what our community has to say about their supabase
              experience
            </p>
            <div className="flex gap-2 flex-row justify-center items-center">
              <Link
                href="#"
                className="font-bold text-xs py-1.5 rounded-lg px-2.5 bg-overlay border-2 border-white/20 text-white !outline-none hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0 flex flex-row gap-2"
              >
                Github discussions
                <IoChatbox className="mt-0.5" />
              </Link>
              <Link
                href="#"
                className="font-bold text-xs py-1.5 rounded-lg px-2.5 bg-overlay border-2 border-white/20 text-white !outline-none hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0 flex flex-row gap-2"
              >
                Discord
                <IoChatbox className="mt-0.5" />
              </Link>
            </div>
          </div>
        </div>

        <div>
          <div className="relative mx-auto max-w-[1400px] !pt-6">
            <MarqueeReviewCard />
            <div className="absolute pointer-events-none w-full h-full max-h-[400px] inset-0 top-auto  lg:max-h-none lg:bg-[radial-gradient(40%_80%_at_50%_0,transparent_0%,transparent_50%,hsl(var(--background))_100%)]"></div>
          </div>
        </div>

        <div className="py-32 px-0 lg:px-16 mx-auto max-w-4xl">
          <div className="space-y-12">
            <h1 className="text-[#898989] text-3xl text-center">
              Build in a weekend,{" "}
              <span className="text-white">scale to millions</span>
            </h1>

            <div className="flex gap-2 justify-center">
              <Button
                type="submit"
                className="h-[38px] font-bold text-xs px-2.5 bg-green-700 text-white border border-green-400 hover:bg-green-600 !focus-visible:outline-none !focus-visible:ring focus-visible:ring-1 focus-visible:outline-none focus-visible:ring-green-500"
              >
                Start your project
              </Button>
              <Button
                type="submit"
                className="h-[38px] font-bold text-xs px-2.5 bg-overlay border border-white/20 text-white !outline-none hover:bg-overlay hover:border-white/50  focus-visible:outline-4 focus-visible:outline-white focus-visible:outline-offset-0"
              >
                Request a demo
              </Button>
            </div>
          </div>
        </div>

        <footer className="">
          <div className="grid grid-cols-2 mx-auto justify-between md:justify-center text-sm font-bold md:flex gap-8 container py-16">
            <div className="flex md:flex-row flex-col gap-2">
              We protect your data. &nbsp;
              <Link
                href="#"
                className="text-green-400 relative hover:underline"
              >
                More on Security
              </Link>
            </div>
            <ul className="flex flex-col md:items-center md:flex-row gap-4">
              <li className="flex flex-nowrap text-nowrap gap-2 items-center">
                <IoCheckmark />
                SOC2 Type 2
                <span className="text-[#898989] hidden sm:inline">
                  Certified
                </span>
              </li>

              <li className="flex gap-2 items-center">
                <IoCheckmark />
                HIPAA
                <span className="text-[#898989] hidden sm:inline">
                  Compliant
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="lg:container px-6 mx-auto sm:py-18 relative md:py-24 py-8 lg:px-16 xl:px-20">
            <div className="flex flex-col lg:flex-row justify-between gap-16">
              <div className="flex flex-col gap-6">
                <SupaBaseLogo className="max-lg:px-6 text-xl !px-0" />
                <div className="flex gap-2 text-[#898989]">
                  <TwitterLogoIcon className="w-5 h-5" />
                  <GitHubLogoIcon className="w-5 h-5" />
                  <DiscordLogoIcon className="w-5 h-5" />
                  <FaYoutube className="w-5 h-5" />
                </div>
              </div>
              <div className="flex flex-row flex-wrap gap-16 xl:gap-28 text-xs">
                {footerLinks.map((footer) => {
                  return (
                    <div
                      key={footer.name}
                      className="flex flex-col gap-1 text-nowrap"
                    >
                      <span className="mb-2">{footer.name}</span>
                      {footer.links.map((link, _) => (
                        <Link
                          key={_}
                          href="#"
                          className="text-[#898989] hover:text-white"
                        >
                          {link}
                        </Link>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
          <div className="lg:container px-6 mx-auto sm:py-18 relative md:py-24 py-8 lg:px-16 xl:px-20 !pt-8">
            <span className="text-sm text-[#898989]">© Supabase Inc</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
