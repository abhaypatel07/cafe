import React, { ChangeEvent, useState } from "react";
import SupportCard from "@/components/SupportCard";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import NeedHelpBottomCard from "@/components/NeedHelpBottomCard";

interface DataItem {
  image: string;
  heading: string;
  text: string;
}

interface BottomDataItem {
  heading: string;
  text: string;
  logo: string;
  bottomText?: string;
  bottomLinkText?: string;
}

const whatsAppHelpMessage = "Hey, I need help";
const articleData: DataItem[] = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The warmest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Balagan",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Yalla Sunset",
    text: "Lorem ipsum dolor sit amet, simone eclairs adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Mikhail",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNB8HLHiYqWmnLXmk-f8Sv44msGytCDC2pDu9PAl0iQp2t59XSEJb-ZUCKN8x_WSMIhqw",
    heading: "The Coldest Sunset",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elitVoluptatibus quia, nulla! Maiores et perferendis eaque,exercitationem praesentium nihil",
  },
];
const bottomData: BottomDataItem[] = [
  {
    heading: "Chat with us",
    text: "Send us a Whatsapp message",
    logo: "/icons/yellow-icon-whatsapp.svg",
    bottomText: "Open WhatsApp",
    bottomLinkText: `https://web.whatsapp.com/send?phone=+97250973697397&text=${whatsAppHelpMessage}&app-absent=0`,
  },
  {
    heading: "Send us an Email",
    text: "Reach out at support@citizencafe.com",
    logo: "/icons/yellow-icon-email.svg",
    bottomText: "Email us",
    bottomLinkText: "mailto:support@citizencafe.com",
  },
  {
    heading: "Call us",
    text: "US (+1) 646-760-7371 \n IL (+972) 50-973-697397",
    logo: "/icons/yellow-icon-phone.svg",
    bottomText: "",
  },
];

const NeedHelpPage = () => {
  const [filteredData, setFilteredData] = useState<DataItem[]>(articleData);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      setFilteredData(articleData);
    } else {
      const filteredData =
        articleData?.filter((item) => {
          const headingMatch = item?.heading
            ?.toLowerCase()
            .includes(searchTerm);
          const textMatch = item?.text?.toLowerCase().includes(searchTerm);
          return headingMatch || textMatch;
        }) || [];
      setFilteredData(filteredData);
    }
  };

  const closeSearch = () => {
    setSearchTerm("");
    setFilteredData(articleData);
  };
  return (
    <div className="flex flex-col text-left pl-6 pr-6 md:pr-16 pb-12 md:pb-12 md:pl-24 pt-6 h-full m-auto w-full">
      <div className="w-80">
        <h1 className="font-bold text-4xl leading-12 text-left">Need Help?</h1>
        <p className="font-normal w-full text-lg leading-7 text-left">
          Here are some technical support for class essentials
        </p>
        <SearchBar
          term={searchTerm}
          setTerm={handleSearch}
          closeSearch={closeSearch}
        />
      </div>

      <div className="flex flex-wrap flex-row w-full gap-x-10 gap-y-10 mt-9">
        {filteredData?.map((data, index) => {
          return (
            <SupportCard
              key={index}
              image={data?.image}
              heading={data?.heading}
              text={data?.text}
            />
          );
        })}
      </div>

      <div className="mt-10 mb-20 h-fit  bg-gray-200 ">
        <div className="m-auto mt-10 flex flex-col items-center justify-center">
          <Image
            src={"/icons/question-mark.svg"}
            alt="Logo"
            width={58.6}
            height={58.15}
          />
          <h1 className="font-PloniML-v2AAA font-bold text-4xl leading-48 text-center">
            Still Need Help?
          </h1>
        </div>

        <div className="flex flex-row flex-wrap items-center justify-center pb-4 mt-10 mx-10 sm:h-full gap-6">
          {bottomData?.map((data, index) => {
            return (
              <NeedHelpBottomCard
                key={index}
                heading={data?.heading}
                text={data?.text}
                bottomText={data?.bottomText}
                bottomLinkText={data?.bottomLinkText}
                logo={data?.logo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NeedHelpPage;
