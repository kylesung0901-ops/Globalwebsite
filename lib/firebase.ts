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
let db: Firestore | undefined = undefined

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

  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.warn('Firebase configuration is missing for Firestore. Please check your environment variables.')
    return undefined
  }

  if (!db) {
    const firebaseApp = getFirebaseApp()
    if (firebaseApp) {
      try {
        db = getFirestore(firebaseApp)
        console.log('Firestore initialized successfully')
      } catch (error) {
        console.error('Firebase Firestore initialization error:', error)
        return undefined
      }
    } else {
      console.error('Firebase app is not initialized. Cannot initialize Firestore.')
      return undefined
    }
  }

  return db
}

// 클라이언트 사이드에서만 초기화
if (typeof window !== 'undefined') {
  app = getFirebaseApp()
  auth = getFirebaseAuth()
  // db는 사용 시점에 초기화 (lazy initialization)
}

// db를 함수로 export하여 항상 최신 상태로 가져오도록 함
// 이 함수는 컴포넌트에서 호출될 때마다 최신 상태의 db를 반환
export const getDb = (): Firestore | undefined => {
  return getFirebaseFirestore()
}

// 기존 호환성을 위해 db도 export (lazy initialization)
// getDb() 함수 사용을 권장합니다
export { db, auth }
export default app

