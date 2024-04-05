import React, { useState, useEffect } from "react";
import Image from "next/image";
import { CardData, FlashCardsType } from "@/types/Flashcards";
import { FaStar, FaRegStar } from "react-icons/fa";
import { Tooltip } from "@nextui-org/react";

const FlashcardContent = ({
  cardsData,
  toggleFavorite,
  selectedType,
}: {
  cardsData: CardData[];
  toggleFavorite: (cardId: number) => void;
  selectedType: FlashCardsType;
}) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [currentContentIndex, setCurrentContentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isPlaySound, setPlaySound] = useState(false);

  const triggerFlipAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 600); // Reset animation state after it completes
  };

  const flipContent = () => {
    triggerFlipAnimation();
    setCurrentContentIndex(
      (prevIndex) =>
        (prevIndex + 1) % cardsData[currentCardIndex]?.contents?.length,
    );
  };

  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardsData?.length);
    setCurrentContentIndex(getContentTypeIndex());
  };

  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? cardsData?.length - 1 : prevIndex - 1,
    );
    setCurrentContentIndex(getContentTypeIndex());
  };

  const getContentTypeIndex = (): number => {
    return cardsData[currentCardIndex]?.contents?.findIndex(
      (content) => content.type === selectedType,
    );
  };

  const showRandomCard = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * cardsData?.length);
    } while (newIndex === currentCardIndex);
    setCurrentCardIndex(newIndex);
  };

  const playSound = () => {
    setPlaySound(true);
  };
  const getContent = () => {
    const currentContent =
      cardsData[currentCardIndex]?.contents[currentContentIndex];
    if (currentContent?.type === FlashCardsType.HebrewAudio) {
      return (
        <div className="flex">
          {isPlaySound ? (
            <Image
              src="/icons/pause-icon.svg"
              width={16}
              height={16}
              style={{ width: "4rem", marginRight: "1rem" }}
              alt="pause"
              onClick={(e) => {
                e.stopPropagation();
                setPlaySound(false);
              }}
            />
          ) : (
            <Image
              src="/icons/play-icon.svg"
              width={16}
              height={16}
              style={{ width: "4rem", marginRight: "1rem" }}
              alt="play"
              onClick={(e) => {
                e.stopPropagation();
                playSound();
              }}
            />
          )}

          <Image
            src="/images/audio-passcol.svg"
            width={16}
            height={16}
            style={{ width: "20rem" }}
            alt="audio"
          />
        </div>
      );
    }
    return (
      <div className="text-center text-2xl font-normal font-medium leading-normal">
        {currentContent?.content}
      </div>
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
          goToNextCard();
          break;
        case "ArrowLeft":
          goToPreviousCard();
          break;
        case " ":
          e.preventDefault();
          flipContent();
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    setCurrentContentIndex(getContentTypeIndex());
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentCardIndex, cardsData, selectedType]);
  const currentCard = cardsData[currentCardIndex];

  return (
    <div className="flex flex-col items-center  pb-5">
      <div className="flex items-center justify-center relative">
        <button onClick={goToPreviousCard} className=" p-3 mr-10">
          <div className="w-16 h-16">
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow right"
              width={48}
              height={48}
              layout="responsive"
              className="rotate-180"
            />
          </div>
        </button>

        <div
          className={`border-2 flex justify-center items-center border-gray-400 rounded-lg relative cursor-pointer ${animate ? "simulate-flip-card" : ""}`}
          style={{ width: "45rem", height: "22rem" }}
          onClick={flipContent}
        >
          {getContent()}
          <button
            className="absolute top-0 right-0 m-6"
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(cardsData[currentCardIndex]?.id);
            }}
          >
            {currentCard?.isFavorite ? (
              <FaStar size="24" />
            ) : (
              <FaRegStar size="24" />
            )}
          </button>
        </div>

        <button onClick={goToNextCard} className="p-3 ml-10 ">
          <div className="w-16 h-16">
            <Image
              src="/icons/arrow-right.svg"
              alt="arrow right"
              width={48}
              height={48}
              layout="responsive"
            />
          </div>
        </button>
      </div>

      <div className="mt-5 w-full max-w-[45rem]">
        <div className="flex justify-between items-center">
          <div>
            <Tooltip
              className="text-white bg-black"
              content={
                <>
                  <div>Masculine = (ז) זכר </div>
                  <div>Feminine = (נ) נקבה </div>
                  <div>Masculine plural = (ר, ז) - (רבים, ז)</div>
                  <div>Feminine plural = (ר, ז) - (רבים, ז)</div>
                </>
              }
            >
              <Image
                src="/icons/info-icon.svg"
                alt="info"
                width={48}
                height={48}
                layout="responsive"
                className="cursor-pointer"
              />
            </Tooltip>
          </div>
          <div>
            {currentCardIndex + 1}/{cardsData?.length}
          </div>
          <div>
            <Image
              src="/icons/shuffle.svg"
              alt="shuffle"
              width={48}
              height={48}
              layout="responsive"
              className="cursor-pointer"
              onClick={showRandomCard}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardContent;
