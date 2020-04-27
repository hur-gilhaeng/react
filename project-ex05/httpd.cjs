import * as path from 'path';
import express from 'express';

const app = express();

app.use('/', express.static(path.resolve('.', 'public')))
app.listen(8080, function(){
    console.log('starts.... at 8080');
});

// package.json 설정을 바꾸었기 때문에 해당 코드는 httpd.js와 같이 수정한다.