import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.model";

@Controller('user')
export class UserController{
    constructor(private readonly userService : UserService){}

  @Post('create')
  async insertUser(@Body() user: User) {
    const crtuser = await this.userService.insertUser(user)
    
  }

  @Put('update/:id')
  async updateUser(@Param('id') id: string, @Body() user: User) {
    const updateuser = await this.userService.updateUser(id, user)
      
  }

  @Get('getuser/:id')
  async getSingleUser(@Param('id') id: string) {
    const single_user = await this.userService.getSingleUser(id)
      return single_user;
  }

  @Delete('delete/:id')
  async deleteUser(@Param('id') id: string) {
    const deleteuser = await this.userService.deleteUser(id)
  }
  /*
     
     @Post()
     insertUser(
        /*@Param('userId') userId : string,
        @Param('userName') userName : string,
        @Param('email') email : string,
        @Param('phone') phone : number,
        @Param('password') password : string,
        @Body() users:User,
     ): User{
        return this.userService.insertUser(
            users.userId,users.userName,users.email,users.phone,users.password);
        }

     @Get(':userId')
     getSingleUser(@Param('userId') userId:string){
        return this.userService.getSingleUser(userId);
     }

     @Put(':userId')
     updateUser(
        @Body() users:User,
     ): User{
        return this.userService.updateUser(
            users.userId,users.userName,users.email,users.phone,users.password);
        }

     @Delete(':userId')
     deleteUser(@Param('userId') userId:string){
        this.userService.deleteUser(userId);
     }*/
}