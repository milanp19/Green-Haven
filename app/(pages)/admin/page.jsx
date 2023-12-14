"use client";
import { useSession } from "next-auth/react";
import React, { useRef } from "react";

const AdminPage = () => {
  const fileref = useRef();
  const { data: session } = useSession();
  if (session?.user?.role !== "admin") {
    return <div>You are not authorized to access this page</div>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const files = fileref.current.files;
    const reader = new FileReader();
    const blob = new Blob(files);
    console.log(blob);
    Array(files).map(async (file) => {
      await reader.readAsDataURL(blob);
      const data = new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result);
        reader.onerror = (err) => reject(err);
      });
    });
  };

  return (
    <div className="px-20 mt-4">
      <h1 className="text-2xl font-bold">Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          ref={fileref}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
