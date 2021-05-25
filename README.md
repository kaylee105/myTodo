# axios를 위한 mytodo

## Project setup : axios다운로드
- package.json 파일 적용
 
	```
	yarn install
	```
### project origin upstream
1. 프로젝트 원본 upsteram 추가
	```bash
	git remote add upstream git@github.com:anjh80/myTodo1Team.git
	```
2. 프로젝트 원본 fetch

	```bash
	yarn fetch-up
	```
3. 원격 dev 브랜치 저장소로 적용

	```bash
	yarn merge-dev
	```
## project순서

1. /src/store/api/BaseAxios.js에 axios관련하여 작성
	- 식별값은 store에 있는(/src/store/modules/myTodo.js) state중 deviceId로 임시 사용=> 추후 변경 예정
	- 글번호 id값은 작성한 후 나오는 값 중 id값

```json
{
	"success": "Boolean",
	"data": [
		{
			"id": "Number",        	// 할일 아이디
			"text": "String",      	// 할일 내용
			"state": "Number",     	// 1: 미완료 2: 완료
			"created_at": "String", // 생성일
			"updated_at": "String" 	// 수정일
		}
	]
}
```
### GET :리스트
http://api.stickinteractive.com/api/v1/todos/식별값

### POST : 글입력
http://api.stickinteractive.com/api/v1/todos/식별값

``` json
{
	text : "할일내용"
}
```

### patch : 글 수정
http://api.stickinteractive.com/api/v1/todos/글번호id값

``` json
{
	//text : "수정내용",
	state : 1  // 1 미완료, 2 완료
}
```

### delete
http://api.stickinteractive.com/api/v1/todos/글번호id값

---

## 코드 규칙
: 가능한 하나의 기능으로 function 구분한다. 한 function안에 두개 이상의 기능 x  
: function명칭은 동사로 시작하고 camelCase기법을 사용한다.(첫문자는 소문자로)  

---

## GET : todo리스트가져오기
### store
- action/mutaion의 getAllWriteList부분 수정=>기존에 sessionStorage를 이용했으나 axios로 가져오기  
### component
- list내의 체크박스 css 변경필요,기존에는 true,fale였으나 axios data값이 1,2로 되어 있어서 이 부분 변경
- TodoList.vue내 changeFormat method지우기
- TodoList.vue내 key값은 axios data의 id값이 되야함(현재 id-날짜로 되어 있음)

## POST : todo리스트보내기
### store
- action/mutaion의 addList사용 =>수정필요

## PATCH : todo리스트 업데이트(완료여부)
### store
- action/mutaion의 updateList사용 =>수정필요

## DELETE : todo리스트 삭제(하나만)
### store
- action/mutaion의 removeList필요

## DELETE : todo리스트 삭제(전체삭제)
### store
- action/mutaion의 removeAllList사용 => 전체삭제에 대한 api가 없어서 현재 가지고 있는 state값내의 id를 반복문으로 돌려서 해야할 듯.
