const db= require('../config/db')
class Post{
    constructor( title, body){
        this.title= title;
        this.body=body;

    }

    async save(){
        let d= new Date();
        let yyy= d.getFullYear();
        let mm= d.getMonth() +1 ;
        let dd= d.getDate();
        let createdAt= `${yyy}-${mm}-${dd}`;

        let sql=`
        INSERT INTO posts(
            title,body,time)


            VALUES('${this.title}'
            , '${this.body}',
            '${createdAt}'
                      
            )` ;
        
      const [newPost,_]=await db.execute(sql)
      return newPost;
            
    }
    static findAll(){

        let sql= " SELECT * FROM posts"
        return db.execute(sql);
    }

    static findById( id){

        let sql= `SELECT * FROM posts WHERE id = ${id}`
        return db.execute(sql)
    }

}
module.exports=Post;