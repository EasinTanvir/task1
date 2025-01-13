"use client";
import React from "react";
import Link from "next/link";
import { Alert } from "@mui/material";

const Errors = ({ error }) => {
  return (
    <>
      <div className="w-full flex justify-center items-center min-h-screen">
        <Alert severity="warning">
          SomeThing Went Wrong
          <Link className="underline ms-1 font-bold text-red-800" href="/">
            Go Back
          </Link>
        </Alert>
      </div>
    </>
  );
};

export default Errors;
