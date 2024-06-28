import admin from 'firebase-admin';
import serviceAccount from './path/to/your/serviceAccountKey.json'; 

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: 'mycatrah.appspot.com' 
  });
}

const bucket = admin.storage().bucket();

const setCorsConfiguration = async () => {
  const corsConfiguration = [
    {
      "origin": ["http://localhost:3000"], 
      "method": ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      "responseHeader": ["Content-Type", "Authorization"],
      "maxAgeSeconds": 3600
    }
  ];

  await bucket.setCorsConfiguration(corsConfiguration);
  console.log('CORS configuration set successfully');
};

export { setCorsConfiguration };
