const mongoose = require('mongoose');

const connect = () => {


    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    //개발환경일때만 콘솔로 몽구스가 생성하는 쿼리 내용 확인



                                //아이디:비밀번호
    mongoose.connect('mongodb://root:12345678@localhost:27017/admin',{
        dbName:'nodejs',
        useNewUrlParser: true,
    }, (error) =>{
        if (error) {
            console.log('몽고디비 연결 에러', error);
        } else {
            console.log('몽고디비 연결 성공');
        }
    });
    //몽구스와 몽고디비 연결, 몽고디비 주소 접속 시도



    mongoose.connection.on('error', (error)=>{
        console.error('몽고디비 연결 에러', error);
    });
    mongoose.connection.on('disconnected', () => {
        console.error('몽고디비 연결이 끊겼습니다. 연결을 재시도합니다.');
        connect();
    });
    //몽고수 커넥션에 이벤트 리스너
    //에러 발생 시 에러 내용 기록, 연결 종료 시 재연결 시도



    module.exports = connect;




};