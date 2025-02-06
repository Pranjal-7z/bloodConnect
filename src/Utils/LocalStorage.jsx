
    const users = [
      {
        "id": 1,
        "email": "user1@example.com",
        "password": "123"
      },
      {
        "id": 2,
        "email": "user2@example.com",
        "password": "123"
      },
      {
        "id": 3,
        "email": "user3@example.com",
        "password": "123"
      },
      {
        "id": 4,
        "email": "user4@example.com",
        "password": "123"
      },
      {
        "id": 5,
        "email": "user5@example.com",
        "password": "123"
      }
    ]

    export const setLocolStorage=()=>{
      localStorage.setItem("user",JSON.stringify(users))
    }
    export const getLocolStorage=()=>{
      const users=JSON.parse(localStorage.getItem("user"))
      
    }

 