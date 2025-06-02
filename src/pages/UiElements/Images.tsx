// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
// import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
// import ThreeColumnImageGrid from "../../components/ui/images/ThreeColumnImageGrid";
// import ComponentCard from "../../components/common/ComponentCard";
// import PageMeta from "../../components/common/PageMeta";
// export default function Images() {
//   return (
//     <>
//       <PageMeta
//         title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
//         description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//       />
//       <PageBreadcrumb pageTitle="Images" />
//       <div className="space-y-5 sm:space-y-6">
//         <ComponentCard title="Responsive image">
//           <ResponsiveImage srcimage="../../../public/images/brand/اقسام.png"/>
//         </ComponentCard>
//         <ComponentCard title="Image in 2 Grid">
//           <TwoColumnImageGrid />
//         </ComponentCard>
//         <ComponentCard title="Image in 3 Grid">
//           <ThreeColumnImageGrid />
//         </ComponentCard>
//       </div>
//     </>
//   );
// }
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
// import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import TabsComponent from "../../components/common/TabsComponent";

const tabs = [
  {
    label: " با نر خاص تعليمات الاضافة",
    title: "شرح رفع صورة البانر الخاص",
    content: <ResponsiveImage srcimage="../../public/images/brand/bkh1.jpg" />,
  },
  {
    label: "بانر خاص | طريقة الضهور في الابتوب",
    title: "استعراض البراند على شاشة لابتوب",
    content: <ResponsiveImage srcimage="../../public/images/brand/بانر مخصص لابتوب.png" />,
  },
  {
     label: " بانر خاص  | طريقة الضهور في الجوال",
    title: "استعراض البراند على شاشة الجوال",
    content: <ResponsiveImage srcimage="../../public/images/brand/بانر مخصص براند جوال.png" />,
  },
];
export default function Images() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="بانر خاص براند" />

      <TabsComponent tabs={tabs} />
    </>
  );
}
