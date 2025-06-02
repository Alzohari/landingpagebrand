// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import ComponentCard from "../../components/common/ComponentCard";
// import Avatar from "../../components/ui/avatar/Avatar";
// import PageMeta from "../../components/common/PageMeta";

// export default function Avatars() {
//   return (
//     <>
//       <PageMeta
//         title="React.js Avatars Dashboard | TailAdmin - React.js Admin Dashboard Template"
//         description="This is React.js Avatars Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//       />
//       <PageBreadcrumb pageTitle="Avatars" />
//       <div className="space-y-5 sm:space-y-6">
//         <ComponentCard title="Default Avatar">
//           {/* Default Avatar (No Status) */}
//           <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
//             <Avatar src="/images/user/user-01.jpg" size="xsmall" />
//             <Avatar src="/images/user/user-01.jpg" size="small" />
//             <Avatar src="/images/user/user-01.jpg" size="medium" />
//             <Avatar src="/images/user/user-01.jpg" size="large" />
//             <Avatar src="/images/user/user-01.jpg" size="xlarge" />
//             <Avatar src="/images/user/user-01.jpg" size="xxlarge" />
//           </div>
//         </ComponentCard>
//         <ComponentCard title="Avatar with online indicator">
//           <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xsmall"
//               status="online"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="small"
//               status="online"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="medium"
//               status="online"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="large"
//               status="online"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xlarge"
//               status="online"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xxlarge"
//               status="online"
//             />
//           </div>
//         </ComponentCard>
//         <ComponentCard title="Avatar with Offline indicator">
//           <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xsmall"
//               status="offline"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="small"
//               status="offline"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="medium"
//               status="offline"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="large"
//               status="offline"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xlarge"
//               status="offline"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xxlarge"
//               status="offline"
//             />
//           </div>
//         </ComponentCard>{" "}
//         <ComponentCard title="Avatar with busy indicator">
//           <div className="flex flex-col items-center justify-center gap-5 sm:flex-row">
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xsmall"
//               status="busy"
//             />
//             <Avatar src="/images/user/user-01.jpg" size="small" status="busy" />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="medium"
//               status="busy"
//             />
//             <Avatar src="/images/user/user-01.jpg" size="large" status="busy" />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xlarge"
//               status="busy"
//             />
//             <Avatar
//               src="/images/user/user-01.jpg"
//               size="xxlarge"
//               status="busy"
//             />
//           </div>
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
    label: " اضافة الاقسام",
    title: "شرح رفع صورة البانر العريض ",
    content: <ResponsiveImage srcimage="../../public/images/brand/تعليمات البراند.jpg" />,
  },
  {
    label: "  صور ثيم براند لابتوب| طريقة الضهور في الابتوب",
    title: "استعراض البراند على شاشة لابتوب",
    content: <ResponsiveImage srcimage="../../public/images/brand/برندات متحركة لابتوب.png" />,
  },
  {
     label: "    صور ثيم براند  | طريقة الضهور في الجوال",
    title: "استعراض البراند على شاشة الجوال",
    content: <ResponsiveImage srcimage="../../public/images/brand/برندات متحركة جوال.png" />,
  },
];
export default function Avatars() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="صور ثيم براند متحركة" />

      <TabsComponent tabs={tabs} />
    </>
  );
}
