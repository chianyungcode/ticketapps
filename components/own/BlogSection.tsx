import React from "react";

const BlogSection = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-12 py-24 xl:max-w-6xl">
      <h1 className="text-4xl font-bold tracking-tight">
        Find that story maybe{" "}
        <span className="rounded-2xl bg-[#867A70] px-4 py-1 text-white">
          connect with you
        </span>
      </h1>
      <div className="grid grid-cols-3 gap-x-4 xl:gap-x-8">
        <div
          id="card-blog-post"
          className="h-96 space-y-8 rounded-3xl border border-[#BFBAB2] p-6"
        >
          <div className="h-32 rounded-[12px] bg-[#E0EAFF]" />
          <div className="flex flex-col ">
            <h2 className="text-xl font-bold">Title 01</h2>
            <p>Read more...</p>
          </div>
        </div>
        <div
          id="card-blog-post"
          className="h-96 space-y-8 rounded-3xl border border-[#BFBAB2] p-6"
        >
          <div className="h-32 rounded-[12px] bg-[#E0EAFF]" />
          <div className="flex flex-col ">
            <h2 className="text-xl font-bold">Title 01</h2>
            <p>Read more...</p>
          </div>
        </div>
        <div
          id="card-blog-post"
          className="h-96 space-y-8 rounded-3xl border border-[#BFBAB2] p-6"
        >
          <div className="h-32 rounded-[12px] bg-[#E0EAFF]" />
          <div className="flex flex-col ">
            <h2 className="text-xl font-bold">Title 01</h2>
            <p>Read more...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
