import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // te pueden hackear si dejas esto publico
};

initializeApp(firebaseConfig);

export const auth = getAuth();