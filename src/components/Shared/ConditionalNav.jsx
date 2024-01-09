"use client"

import { Button } from "@mui/material";
import Link from "next/link";


const ConditionalNav = ({pathName,matchingPath,text}) => {
      return (
            
               <Link
                href={matchingPath}
                className={`p-1  ${pathName === matchingPath ? "border-primaryColor border-l-2" : ""}`}>
                <Button sx={{color:pathName === matchingPath  ?"#000":"#000" }}>{text}</Button>
              </Link>    
            
      );
};

export default ConditionalNav;