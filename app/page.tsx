'use client'
import Image from "next/image";
import { CardComponent } from "./components/Card/Card";
import { useEffect, useState } from "react";
import { User } from "./types/user";
import { getUsers } from "./services/user-service";
import { Header } from "./components/Header/Header";
import { Box } from "@mui/material";

export default function Home() {

  const handleFetch = async() => {
    try{
      const data = await getUsers();
      setUsers(data);
    }catch(error){
      throw new Error();
    }
  }

  const [users,setUsers] = useState<User[]>([]);

  useEffect(() => {
    handleFetch();
  }, []);


  return (
    <div className="content-center">
      <Header/>
      <Box>
        <div className="grid grid-cols-3 m-10">
          {users.map((element) => <CardComponent key={element.id} nombre={element.nombre} edad={element.edad} image={element.image}/>)}
        </div>
      </Box>
    </div>

  );
}
