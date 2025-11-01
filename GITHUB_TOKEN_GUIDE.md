# GitHub Personal Access Token 설정 가이드

## 1. GitHub에서 Personal Access Token 생성하기

### 방법:
1. GitHub에 로그인
2. 우측 상단 프로필 아이콘 클릭 → **Settings**
3. 왼쪽 메뉴에서 **Developer settings** 클릭
4. **Personal access tokens** → **Tokens (classic)** 선택
5. **Generate new token** → **Generate new token (classic)** 클릭
6. 토큰 설정:
   - **Note**: "Globalwebsite Project" (설명 입력)
   - **Expiration**: 원하는 기간 선택 (예: 90 days 또는 No expiration)
   - **Select scopes**: 최소한 다음 권한 선택:
     - ✅ `repo` (전체 저장소 권한)
     - ✅ `workflow` (GitHub Actions 사용 시)
7. **Generate token** 클릭
8. **중요**: 생성된 토큰을 즉시 복사 (다시 볼 수 없음!)

## 2. Git 원격 저장소에 토큰 적용하기

### 방법 1: URL에 토큰 포함 (일시적)
```bash
git remote set-url origin https://YOUR_TOKEN@github.com/kylesung0901-ops/Globalwebsite.git
```

### 방법 2: Git Credential Manager 사용 (권장)
Windows에서는 자동으로 Credential Manager에 저장됩니다.

### 방법 3: 환경 변수 사용
```bash
$env:GIT_ASKPASS = "echo"
git config --global credential.helper manager-core
```

## 3. 테스트하기
```bash
git push
```
토큰이 자동으로 요청됩니다.

