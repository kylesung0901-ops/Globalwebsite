# Vercel 배포 설정 가이드

## 환경 변수 설정

Vercel 대시보드에서 다음 환경 변수를 설정해야 합니다:

1. Vercel 프로젝트 설정으로 이동: https://vercel.com/dashboard
2. 프로젝트 선택 → **Settings** → **Environment Variables**
3. 다음 환경 변수들을 추가하세요:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCe41QT5ZIfosTU2M0fz1TZN5H0Vorw94U
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=globalwebsite-36924.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=globalwebsite-36924
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=globalwebsite-36924.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=979789711378
NEXT_PUBLIC_FIREBASE_APP_ID=1:979789711378:web:a5bea52f620c4ab45970cb
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-YY67QQWNQR
```

## 설정 후 배포

환경 변수를 설정한 후:
1. **Redeploy** 버튼을 클릭하거나
2. 새로운 커밋을 푸시하면 자동으로 재배포됩니다

## Firebase Console 설정 확인

1. **Authentication** → **Sign-in method** → **Email/Password** 활성화
2. **Firestore Database** → 데이터베이스 생성 (테스트 모드 또는 보안 규칙 설정)
3. **Firestore Database** → `contacts` 컬렉션 생성 (필요시)

