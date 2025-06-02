// import PageBreadcrumb from "../../components/common/PageBreadCrumb";
// import ComponentCard from "../../components/common/ComponentCard";
// import Alert from "../../components/ui/alert/Alert";
// import PageMeta from "../../components/common/PageMeta";

// export default function Alerts() {
//   return (
//     <>
//       <PageMeta
//         title="React.js Alerts Dashboard | TailAdmin - React.js Admin Dashboard Template"
//         description="This is React.js Alerts Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
//       />
//       <PageBreadcrumb pageTitle="Alerts" />
//       <div className="space-y-5 sm:space-y-6">
//         <ComponentCard title="Success Alert">
//           <Alert
//             variant="success"
//             title="Success Message"
//             message="Be cautious when performing this action."
//             showLink={true}
//             linkHref="/"
//             linkText="Learn more"
//           />
//           <Alert
//             variant="success"
//             title="Success Message"
//             message="Be cautious when performing this action."
//             showLink={false}
//           />
//         </ComponentCard>
//         <ComponentCard title="Warning Alert">
//           <Alert
//             variant="warning"
//             title="Warning Message"
//             message="Be cautious when performing this action."
//             showLink={true}
//             linkHref="/"
//             linkText="Learn more"
//           />
//           <Alert
//             variant="warning"
//             title="Warning Message"
//             message="Be cautious when performing this action."
//             showLink={false}
//           />
//         </ComponentCard>{" "}
//         <ComponentCard title="Error Alert">
//           <Alert
//             variant="error"
//             title="Error Message"
//             message="Be cautious when performing this action."
//             showLink={true}
//             linkHref="/"
//             linkText="Learn more"
//           />
//           <Alert
//             variant="error"
//             title="Error Message"
//             message="Be cautious when performing this action."
//             showLink={false}
//           />
//         </ComponentCard>{" "}
//         <ComponentCard title="Info Alert">
//           <Alert
//             variant="info"
//             title="Info Message"
//             message="Be cautious when performing this action."
//             showLink={true}
//             linkHref="/"
//             linkText="Learn more"
//           />
//           <Alert
//             variant="info"
//             title="Info Message"
//             message="Be cautious when performing this action."
//             showLink={false}
//           />
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
    content: <ResponsiveImage srcimage="../../public/images/brand/اقسام تعليمات.jpg" />,
  },
  {
    label: "اقسام خاصة لابتوب| طريقة الضهور في الابتوب",
    title: "استعراض البراند على شاشة لابتوب",
    content: <ResponsiveImage srcimage="../../public/images/brand/الاقسام في اللابتوب.png" />,
  },
  {
     label: "  اقسام خاصة جنوال  | طريقة الضهور في الجوال",
    title: "استعراض البراند على شاشة الجوال",
    content: <ResponsiveImage srcimage="../../public/images/brand/الاقسام في وضع الجوال.png" />,
  },
];
export default function Alerts() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle="اقسام ثيم براند" />

      <TabsComponent tabs={tabs} />
    </>
  );
}

