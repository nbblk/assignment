# assignment

### 0. 개요
- 고객사 견적 요청 조회 페이지 구현

### 1. 기능적 요구사항
1) 사용자는 대시보드 화면에서 견적 요청 목록을 조회할 수 있다.
2) 사용자는 가공 방식에 따른 견적 요청 목록을 조회할 수 있다.
3) 사용자는 재료에 따른 견적 요청 목록을 조회할 수 있다.
4) 사용자는 '상담 중'인 견적 요청 목록만을 선택적으로 조회할 수 있다.

### 2. UI적 요구사항 
1) 사용자는 가공방식 필터 드롭다운 버튼을 클릭해 가공방식(밀링, 선반) 체크박스를 다중 선택할 수 있다.
2) 사용자는 재료 필터 드롭다운 버튼을 클릭해 재료(알루미늄, 탄소강, 구리, 합금강, 강철) 체크박스를 다중 선택할 수 있다.
3) 사용자가 하나 이상의 필터링 옵션을 선택한 경우, 우측에 필터링 리셋 버튼을 클릭해 선택한 필터를 한 번에 해제할 수 있다.
4) 사용자는 토글 스위치를 클릭하여, '상담 중' 뱃지를 포함한 견쳑 요청 목록만을 조회하거나 모든 목록을 조회할 수 있다.
5) 사용자는 햄버거 아이콘을 클릭하여, 좌측 사이드바를 나타나게 할 수 있다.
6) 사용자가 백그라운드 영역을 탭하면 좌측 사이드바가 사라지게 할 수 있다.

### 3. 컴포넌트 및 상태 목록
- Background: { isActive: boolean }
- Header 
  - Hamburger: { isActive: boolean }
  - Logo 
  - Links
    - Link
- Sidebar: { isActive: boolean }
  - Divideline
  - Menu
    - Item   
- Main: { processes: String[], ingredients: String[], isFiltered: boolean, isToggleOn: boolean }
  - Title
  - Subtitle
  - Dropdown
    - Checklist: 
      - Checkbox: isChecked: boolean, value: string
  - Reset   
  - ToggleSwitch
    - Circle
    - Bar      
 - List: { cards: Card[] }
  - Card: { subject: string, client: string, deadline: string, isBadged: boolean, badgeValue: string, content: { fieldname: string, value: string } }
    - Header   
      - Subject
      - Client
      - Deadline
      - Badge
    - Divideline
    - Content
    - Footer
      - Button (x2)
      
