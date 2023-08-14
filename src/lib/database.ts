import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import {
    ref,
    onValue,
    push,
    update,
    remove
  } from 'firebase/database';
import { db } from "config/firebase";

  function SaveProfile(name: string, email:string, id:string){
    push(ref(db, '/users'), {
       [id]: {
            name: name,
            email: email,
        }
      
      });
  }
