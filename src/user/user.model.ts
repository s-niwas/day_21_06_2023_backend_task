import { ApiProperty } from "@nestjs/swagger";

export class User {
    @ApiProperty({default: 'U001'})
    userId: string;
    @ApiProperty({default: 'name'})
    userName: string;
    @ApiProperty({default: 'name@mail.com'})
    email: string;
    @ApiProperty({default: 9000000001})
    phone: number;
    @ApiProperty({default: 'pass'})
    password: string;
}
/*export class User{
    public userId : string;
        public userName : string;
        public email : string;
        public phone : number;
        public password : string;
    constructor(
        userId : string,
        userName : string,
        email : string,
        phone : number,
        password : string,

    ){
        this.userId=userId;
        this.userName=userName;
        this.email=email;
        this.phone=phone;
        this.password=password;
    }
}*/