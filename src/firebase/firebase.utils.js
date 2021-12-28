import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDei3O6-OHDKtc_bZ8PakkY5fUDMv5I5rI",
    authDomain: "crwn-db-de8f7.firebaseapp.com",
    projectId: "crwn-db-de8f7",
    storageBucket: "crwn-db-de8f7.appspot.com",
    messagingSenderId: "551118892185",
    appId: "1:551118892185:web:ce1929ee9b7baf8c9a1c08",
    measurementId: "G-RSWYLPTXVJ"
};

const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);
