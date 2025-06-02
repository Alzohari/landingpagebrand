// import { useState } from "react";
// import PageMeta from "../../components/common/PageMeta";
// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import ComponentCard from "../../components/common/ComponentCard";
// import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
// import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
// import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import TabsComponent from "../../components/common/TabsComponent";

const tabs = [
  {
    label: "تعليمات الاضافة",
    title: "شرح رفع صورة البراند المتحرك",
    content: <ResponsiveImage srcimage="/images/grid-image/image-02.png" />,
  },
  {
    label: "طريقة الضهور في الابتوب",
    title: "استعراض البراند على شاشة لابتوب",
    content: <ResponsiveImage srcimage="/images/grid-image/image-02.png" />,
  },
  {
    label: "طريقة الضهور في الجوال",
    title: "عرض في الجوال",
    content: <TwoColumnImageGrid
  srcimage="../../public/images/brand/bkhm1.jpg"
  srcimage2="../../public/images/brand/bkhm2.jpg"
/>,
  },
];

export default function BrandMoveis() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="Images" />

      <TabsComponent tabs={tabs} />
    </>
  );
}
