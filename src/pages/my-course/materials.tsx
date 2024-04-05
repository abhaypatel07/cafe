import { useEffect, useRef, useState } from "react";
import { Material } from "@/types/Material";
import {
  addMaterial,
  getMaterialByCourseId,
  deleteMaterial as deleteMaterialFromService,
} from "@/services/materialService";
import MaterialCard from "@/components/MaterialCard";
import { CourseDetails } from "@/types/Course";

const MaterialsPage = ({ courseDetails }: { courseDetails: CourseDetails }) => {
  const [materials, setMaterials] = useState<Material[]>([]);
  const deleteMaterial = async (materialId: string) => {
    try {
      await deleteMaterialFromService(materialId);
      setMaterials(materials.filter((material) => material.id !== materialId));
    } catch (error) {
      console.error("Error deleting material", error);
    }
  };

  const fetchMaterials = async () => {
    try {
      const fetchedMaterials = await getMaterialByCourseId(courseDetails.id);
      setMaterials(fetchedMaterials);
    } catch (error) {
      console.error("Error fetching materials", error);
    }
  };
  const fetchMaterialsRef = useRef(fetchMaterials);

  useEffect(() => {
    fetchMaterialsRef.current();
  }, []);

  const handleCreateMaterialClick = async () => {
    const sampleMaterial: Material = {
      course_id: courseDetails.id,
      created_at: new Date(),
      last_update: new Date(),
      created_by_user_id: "143e4567-e89b-12d3-a456-426614174000",
      content: "Sample material content1111",
      links: ["https://academy.citizencafetlv.com/"],
      images_url: ["https://exampl111e.com/image.png"],
    };

    try {
      await addMaterial(sampleMaterial).then((res: Material) =>
        setMaterials((prevMaterials) =>
          Array.isArray(prevMaterials) ? [...prevMaterials, res] : [res],
        ),
      );
    } catch (error) {
      console.error("Error creating material", error);
    }
  };

  const user = {
    avatar: "/images/aviad.svg",
    name: "John Doe",
  };
  return (
    <div>
      <button onClick={handleCreateMaterialClick}>Create</button>
      <div className="flex flex-col items-center justify-center">
        {materials.map((material) => (
          // eslint-disable-next-line react/jsx-key
          <MaterialCard
            key={material.id}
            material={material}
            user={user}
            onDelete={deleteMaterial}
          />
        ))}
      </div>
    </div>
  );
};

export default MaterialsPage;
