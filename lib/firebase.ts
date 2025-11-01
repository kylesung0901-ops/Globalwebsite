import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
}

let app: FirebaseApp | undefined
let auth: Auth | undefined
let db: Firestore | undefined

const getFirebaseApp = (): FirebaseApp | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn('Firebase configuration is missing. Please check your environment variables.')
    return undefined
  }

  if (!app) {
    if (!getApps().length) {
      try {
        app = initializeApp(firebaseConfig)
      } catch (error) {
        console.error('Firebase initialization error:', error)
        return undefined
      }
    } else {
      app = getApps()[0]
    }
  }

  return app
}

const getFirebaseAuth = (): Auth | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  if (!auth) {
    const firebaseApp = getFirebaseApp()
    if (firebaseApp) {
      try {
        auth = getAuth(firebaseApp)
      } catch (error) {
        console.error('Firebase Auth initialization error:', error)
        return undefined
      }
    }
  }

  return auth
}

const getFirebaseFirestore = (): Firestore | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  if (!db) {
    const firebaseApp = getFirebaseApp()
    if (firebaseApp) {
      try {
        db = getFirestore(firebaseApp)
      } catch (error) {
        console.error('Firebase Firestore initialization error:', error)
        return undefined
      }
    }
  }

  return db
}

app = getFirebaseApp()
auth = getFirebaseAuth()
db = getFirebaseFirestore()

export { auth, db }
export default app

