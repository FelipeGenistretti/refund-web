type UserAPIRole = "employee" | "manager"

type UserAPIResponse = {
    token: string
    user:{
        id:string
        nome:string
        email:string
        role:UserAPIRole
    }
}