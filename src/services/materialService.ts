import { HttpMethod } from "@/types/HttpMethod";
import { Material } from "@/types/Material";
import customFetch from "@/utils/fetchUtils";

export const getMaterialByCourseId = async (courseId: string) => {
  try {
    const response = await customFetch(`/api/materials?courseId=${courseId}`, {
      method: HttpMethod.GET,
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching getMaterialByCourseId:", error);
    throw error;
  }
};

export const addMaterial = async (material: Material) => {
  try {
    const response = await customFetch("/api/materials/create", {
      method: HttpMethod.POST,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(material),
    });
    return response.json();
  } catch (error) {
    console.error("Error addMaterial:", error);
    throw error;
  }
};

export const deleteMaterial = async (materialId: string) => {
  try {
    const response = await customFetch(`/api/materials/${materialId}`, {
      method: HttpMethod.DELETE,
    });

    return response.json();
  } catch (error) {
    console.error("Error deleteMaterial:", error);
    throw error;
  }
};
