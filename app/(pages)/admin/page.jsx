"use client";
import { useSession } from "next-auth/react";
import React, { useRef, useState } from "react";

const AdminPage = () => {
  const fileref = useRef();
  const { data: session } = useSession();
  const [file, setFile] = useState(null);
  // if (session?.user?.role !== "admin") {
  //   return <div>You are not authorized to access this page</div>;
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    await fetch("/api/admin/upload", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <div className="px-20 mt-4">
      <h1 className="text-2xl font-bold">Upload Image</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminPage;
