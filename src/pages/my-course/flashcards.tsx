import React, { useEffect, useState } from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { CardData, FlashCardsType, FlashcardButton } from "@/types/Flashcards";
import { MdArrowDropDown } from "react-icons/md";
import FlashcardContent from "@/components/FlashcardContent";
import { CourseDetails } from "@/types/Course";
import { getFlashcardsByIds } from "@/services/flashcardsService";

const FlashCardsPage = ({
  courseDetails,
}: {
  courseDetails: CourseDetails;
}) => {
  const flashCards: FlashcardButton[] = [
    { type: FlashCardsType.English },
    { type: FlashCardsType.Hebrew },
    { type: FlashCardsType.HebrewAudio },
  ];

  const [cardsData, setCards] = useState<CardData[]>([]);
  const [selectedType, setSelectedType] = useState(flashCards[0].type);
  const [selectedSection, setSelectedSection] = useState('All subjects');

  useEffect(() => {
    const fetchCards = async () => {
      if (!courseDetails?.id) return;
      try {
        const cards = await getFlashcardsByIds(courseDetails.flashcards ?? []);
        setCards(cards);
      } catch (error) {
        console.error("Failed to fetch cards", error);
      }
    };
    fetchCards();
  }, [courseDetails]);

  const toggleFavorite = (cardId: number) => {
    setCards((current) =>
      current.map((card) => {
        if (card.id === cardId) {
          return { ...card, isFavorite: !card.isFavorite };
        }
        return card;
      })
    );
  };

  const sections = [
    'All subjects',
    ...Array.from(new Set(cardsData.map((card) => card.subject))),
  ];

  const handleSelectType = (flashCardType: FlashCardsType) => {
    setSelectedType(flashCardType);
  };

  const handleSelectSection = (section: string) => {
    setSelectedSection(section);
  };

  const getButtonClasses = (flashCardType: FlashCardsType) =>
    `flex-grow flex items-center justify-center border border-black rounded-3xl py-[7px] px-2 w-32 ${
      selectedType === flashCardType
        ? "bg-primary text-black"
        : "bg-white text-gray4"
    } cursor-pointer hover:bg-gray-100 mr-2`;

  const filteredCardsData = cardsData.filter((card) => {
    return (
      selectedSection === 'All subjects' || card.subject === selectedSection
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="pr-3">Start with</span>
          {flashCards.map((currFlashCard: FlashcardButton) => (
            <div
              key={currFlashCard?.type}
              className={getButtonClasses(currFlashCard?.type)}
              role="button"
              onClick={() => handleSelectType(currFlashCard?.type)}
            >
              {currFlashCard?.type}
            </div>
          ))}
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize gap-2 border rounded-l p-2 w-32 flex items-center relative"
            >
              <span className="absolute inset-0 flex justify-center items-center">
                {selectedSection}
              </span>
              <MdArrowDropDown className="ml-auto" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Sections"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            className="border"
            selectedKeys={new Set([selectedSection])}
            onSelectionChange={(keys) => {
              const key = Array.from(keys)[0];
              if (key !== undefined) {
                handleSelectSection(String(key));
              }
            }}
          >
            {sections.map((section) => (
              <DropdownItem key={section}>{section}</DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="pt-10">
        <div className="text-center">Click the card to flip it</div>
        <FlashcardContent
          cardsData={filteredCardsData}
          toggleFavorite={toggleFavorite}
          selectedType={selectedType}
        />
      </div>
    </div>
  );
};

export default FlashCardsPage;
