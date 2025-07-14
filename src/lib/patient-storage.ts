import { PatientFormData } from "@/schemas/patient-schema";

const KEY = "patient-data";

export function savePatient(data: PatientFormData) {
  localStorage.setItem(KEY, JSON.stringify(data));
}

export function loadPatient(): PatientFormData | null {
  const raw = localStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as PatientFormData) : null;
}

export function clearPatient() {
  localStorage.removeItem(KEY);
}
