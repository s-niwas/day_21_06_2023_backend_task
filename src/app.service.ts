import { Injectable } from '@nestjs/common';
import { User } from './user/user.model';
import { DynamoDB } from 'aws-sdk';
import { db, Table } from './db.config.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  /*async getUser(): Promise<any> {
    const params = {
      TableName: Table,
    }
      const { Items = [] } = await db.scan(params).promise()
      return Items;
  }


  async createUser(user: User): Promise<boolean> {
    const params = {
      TableName: Table,
      Item: user
    }
      await db.put(params).promise()
      return true;
  }

  async updateUser(id: string, user: User): Promise<boolean> {
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
      console.log(user)
      await db.update(params).promise()
      return true;

  }
  async deleteUser(id: String): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        userId: id
      }
    }
      await db.delete(params).promise()
      return true;
  }

  async getSpecficUser(userid: String): Promise<any> {
    const params = {
      TableName: Table,
      Key: {
        userId: userid
      }
    }
      const Item = await db.get(params).promise()
      console.log(Item)
      return Item;
  }*/
}