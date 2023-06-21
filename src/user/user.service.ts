import { Injectable } from "@nestjs/common";
import { User } from "./user.model";
import { DynamoDB } from 'aws-sdk';
import { db, Table } from '../db.config';

@Injectable()
export class UserService{
    
      async insertUser(user: User): Promise<any> {
        const params = {
          TableName: Table,
          Item: user
        }
          await db.put(params).promise()
          return "user created";
      }
    
      async updateUser(id: string, user: User): Promise<any> {
        const params = {
          TableName: Table,
          Key: {
            userId: id
          },
          UpdateExpression:
          'set #name=:userName , #mail =:email , #ph =:phone , #pass=:password ',
          ExpressionAttributeValues: {
            ":userName": user.userName, ":email": user.email, ":phone": user.phone, ":password": user.password,
          },
          ExpressionAttributeNames: {
            "#name":"userName" , 
            "#mail":"email" ,
             "#ph" :"phone" , 
             "#pass":"password",
          }
        }
          await db.update(params).promise()
          return "user updated";
    
      }
      async deleteUser(id: String): Promise<any> {
        const params = {
          TableName: Table,
          Key: {
            userId: id
          }
        }
          await db.delete(params).promise()
          return "user Deleted";
      }
    
      async getSingleUser(userid: String): Promise<any> {
        const params = {
          TableName: Table,
          Key: {
            userId: userid
          }
        }
          const Item = await db.get(params).promise()
          console.log(Item)
          return Item;
      }
    /*private user:User[] = [];

    getSingleUser(id:string):User{
        return this.user.find(u => u.userId === id);
    }
    insertUser(userId:string,userName : string,email : string,phone : number,password : string):User
    {

        const newUser :User= {userId,userName,email,phone,password};
        this.user.push(newUser);
        return newUser;
    }
    
    updateUser(userId : string ,userName : string,email : string,phone : number,password : string){


        const [targetUser,targetIndex]=this.getUserById(userId);
        const newUserParams = {...targetUser,userName,email,phone,password};
        const newUser = new User(userId,newUserParams.userName,newUserParams.email,newUserParams.phone,newUserParams.password);
        this.user[targetIndex]=newUser;
        return newUser;
    }

    deleteUser(id:string){
        const [_,targetIndex]=this.getUserById(id);
        this.user.splice(targetIndex,1);
        
    }

    private getUserById(id : string):[User,number]{
       const index =  this.user.findIndex((u) => u.userId === id);
       return [this.user[index],index];
    }*/
}