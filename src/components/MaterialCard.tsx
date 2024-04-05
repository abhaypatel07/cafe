import React, { useState } from "react";
import Image from "next/image";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Material } from "@/types/Material";
import { User } from "@/types/User";
import PreviewUrl from "./PreviewUrl";
import moment from "moment";
import { CiMenuKebab } from "react-icons/ci";

const MaterialCard = ({
  material,
  user,
  onDelete,
}: {
  material: Material;
  user: User;
  onDelete: (materialId: string) => void;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const formatDate = (date: Date) => moment(date).format("DD.MM.YY");
  const handleDelete = () => {
    setShowMenu(false);
    onDelete(material.id as string);
  };

  return (
    <Card className="w-full max-w-[500px] rounded-xl shadow-custom2 p-2 m-2 mb-5 relative">
      <CardHeader className="flex gap-3">
        <Image
          src={user?.avatar ?? ""}
          alt="user avatar"
          height={40}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{user?.name}</p>
          <p className="text-small text-default-500 ">
            {formatDate(material?.last_update)}
          </p>
        </div>
        <div className="ml-auto relative">
          <CiMenuKebab onClick={() => setShowMenu(!showMenu)} />
          {showMenu && (
            <div className="absolute right-0 bg-white border border-gray-200 rounded-md shadow-lg">
              <ul>
                <li
                  className="p-4 hover:bg-gray-100 cursor-pointer"
                  onClick={handleDelete}
                >
                  Delete
                </li>
              </ul>
            </div>
          )}
        </div>
      </CardHeader>
      <CardBody>
        <p className="mb-2">{material?.content}</p>
        <div className="previews">
          {material?.links?.map((link, index) => (
            <div
              key={index}
              className="preview border border-gray-200 rounded-md shadow-sm p-2"
            >
              <PreviewUrl url={link} />
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default MaterialCard;
