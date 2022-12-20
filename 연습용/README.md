# Router 나누기

/root
|-- controller
|-- service
|-- routes
|-- server.js

```javascript
app.get("/", (req, res) => {});
```

router안에 들어간 `callback` 함수는
`요청객체`와 `응답객체`를 주는 함수들이다.

```javascript
const modifyController =  (req, res) => {
  const index = req.query.index
    // 데이터 조작
    items[index].subject = ...
    res.render('modify.html')
}
app.get("/modify", modifyController);
```

_데이터를 조작하는 영역 = 서비스_

```js
app.get("/");
app.get("/list");
app.get("/write");
app.get("/view");
app.get("/modify");
app.get("/delete");
```

```js
const express = require("express");
const router = express.Router();
```

게시판이 2가지 형태
board, notice, gallery

/notice/
/notice/list
/notice/write
/notice/view
/notice/modify
/notice/delete

/board/
/board/list
/board/write
/board/view
/board/modify
/board/delete

/gallery/
/gallery/list
/gallery/write
/gallery/view
/gallery/modify
/gallery/delete
