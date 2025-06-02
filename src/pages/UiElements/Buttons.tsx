// import ComponentCard from "../../components/common/ComponentCard";
// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import PageMeta from "../../components/common/PageMeta";
// import Button from "../../components/ui/button/Button";
// import { BoxIcon } from "../../icons";

// export default function Buttons() {
//   return (
//     <div>
//       <PageMeta
//         title="React.js Buttons Dashboard | TailAdmin - React.js Admin Dashboard Template"
//         description="This is React.js Buttons Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//       />
//       <PageBreadcrumb pageTitle="Buttons" />
//       <div className="space-y-5 sm:space-y-6">
//         {/* Primary Button */}
//         <ComponentCard title="Primary Button">
//           <div className="flex items-center gap-5">
//             <Button size="sm" variant="primary">
//               Button Text
//             </Button>
//             <Button size="md" variant="primary">
//               Button Text
//             </Button>
//           </div>
//         </ComponentCard>
//         {/* Primary Button with Start Icon */}
//         <ComponentCard title="Primary Button with Left Icon">
//           <div className="flex items-center gap-5">
//             <Button
//               size="sm"
//               variant="primary"
//               startIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//             <Button
//               size="md"
//               variant="primary"
//               startIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//           </div>
//         </ComponentCard>
//         {/* Primary Button with Start Icon */}
//         <ComponentCard title="Primary Button with Right Icon">
//           <div className="flex items-center gap-5">
//             <Button
//               size="sm"
//               variant="primary"
//               endIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//             <Button
//               size="md"
//               variant="primary"
//               endIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//           </div>
//         </ComponentCard>
//         {/* Outline Button */}
//         <ComponentCard title="Secondary Button">
//           <div className="flex items-center gap-5">
//             {/* Outline Button */}
//             <Button size="sm" variant="outline">
//               Button Text
//             </Button>
//             <Button size="md" variant="outline">
//               Button Text
//             </Button>
//           </div>
//         </ComponentCard>
//         {/* Outline Button with Start Icon */}
//         <ComponentCard title="Outline Button with Left Icon">
//           <div className="flex items-center gap-5">
//             <Button
//               size="sm"
//               variant="outline"
//               startIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//             <Button
//               size="md"
//               variant="outline"
//               startIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//           </div>
//         </ComponentCard>{" "}
//         {/* Outline Button with Start Icon */}
//         <ComponentCard title="Outline Button with Right Icon">
//           <div className="flex items-center gap-5">
//             <Button
//               size="sm"
//               variant="outline"
//               endIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//             <Button
//               size="md"
//               variant="outline"
//               endIcon={<BoxIcon className="size-5" />}
//             >
//               Button Text
//             </Button>
//           </div>
//         </ComponentCard>
//       </div>
//     </div>
//   );
// }
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
// import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import TabsComponent from "../../components/common/TabsComponent";

const tabs = [
  {
    label: " اضافة الصور  قابلة للتمدد",
    title: "شرح رفع صورة  مع نص ",
    content: <ResponsiveImage srcimage="../../public/images/brand/تعلميات صور سترتش.jpg" />,
  },
  {
    label: "  صور قابلة للتمدد | طريقة الضهور في الابتوب",
    title: "استعراض البراند على شاشة لابتوب",
    content: <ResponsiveImage srcimage="../../public/images/brand/صور قابلة للتمدد لابتوب.png" />,
  },
  {
     label: "صور قابلة للتمدد | طريقة الضهور في الجوال",
    title: "استعراض البراند على شاشة الجوال",
    content: <ResponsiveImage srcimage="../../public/images/brand/صور قابلة للتمدد جوال.png" />,
  },
];
export default function Buttons() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="صور قابلة لتمدد" />

      <TabsComponent tabs={tabs} />
    </>
  );
}
