import { initializeApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getFirestore, Firestore } from 'firebase/firestore'

// Firebase 설정 - 웹 API 키를 직접 설정
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCe41QT5ZIfosTU2M0fz1TZN5H0Vorw94U",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "globalwebsite-36924.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "globalwebsite-36924",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "globalwebsite-36924.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "979789711378",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:979789711378:web:a5bea52f620c4ab45970cb",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-YY67QQWNQR",
}

// Firebase 연결 상태 확인을 위한 로그
console.log('🔥 Firebase 설정 확인:', {
  apiKey: firebaseConfig.apiKey ? firebaseConfig.apiKey.substring(0, 10) + '...' : 'missing',
  projectId: firebaseConfig.projectId,
  authDomain: firebaseConfig.authDomain,
  hasEnvVars: {
    apiKey: !!process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    projectId: !!process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  }
})

let app: FirebaseApp | undefined
let auth: Auth | undefined
let db: Firestore | undefined = undefined

const getFirebaseApp = (): FirebaseApp | undefined => {
  if (typeof window === 'undefined') {
    return undefined
  }

  // Firebase 설정 검증
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('❌ Firebase configuration is missing:', {
      hasApiKey: !!firebaseConfig.apiKey,
      hasProjectId: !!firebaseConfig.projectId,
      config: firebaseConfig
    })
    return undefined
  }

  if (!app) {
    if (!getApps().length) {
      try {
        console.log('🚀 Firebase 앱 초기화 시작...')
        app = initializeApp(firebaseConfig)
        console.log('✅ Firebase 앱 초기화 성공:', {
          name: app.name,
          projectId: firebaseConfig.projectId
        })
      } catch (error: any) {
        console.error('❌ Firebase initialization error:', error)
        console.error('Error details:', {
          message: error.message,
          code: error.code,
          stack: error.stack
        })
        return undefined
      }
    } else {
      app = getApps()[0]
      console.log('✅ 기존 Firebase 앱 사용:', app.name)
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
    console.warn('Firestore can only be initialized on the client side')
    return undefined
  }

  // 환경 변수 확인 (더 자세한 로깅)
  if (!firebaseConfig.apiKey || !firebaseConfig.projectId) {
    console.error('Firebase configuration is missing for Firestore:', {
      hasApiKey: !!firebaseConfig.apiKey,
      hasProjectId: !!firebaseConfig.projectId,
      config: firebaseConfig
    })
    return undefined
  }

  if (!db) {
    const firebaseApp = getFirebaseApp()
    if (!firebaseApp) {
      console.error('Firebase app is not initialized. Cannot initialize Firestore.')
      console.error('Firebase app initialization failed. Check browser console for details.')
      return undefined
    }

    try {
      console.log('🗄️ Firestore 초기화 시작...')
      db = getFirestore(firebaseApp)
      console.log('✅ Firestore 초기화 성공!', {
        projectId: firebaseConfig.projectId,
        apiKey: firebaseConfig.apiKey?.substring(0, 10) + '...',
        appName: firebaseApp.name
      })
      console.log('✅ Firebase 연결 완료 - 데이터베이스 사용 가능')
    } catch (error: any) {
      console.error('❌ Firebase Firestore initialization error:', error)
      console.error('Error details:', {
        message: error.message,
        code: error.code,
        stack: error.stack
      })
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

