import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ResponsiveImage from "../../components/ui/images/ResponsiveImage";
// import TwoColumnImageGrid from "../../components/ui/images/TwoColumnImageGrid";
import TabsComponent from "../../components/common/TabsComponent";

const tabs = [
  {
    label: " اضافة براند عريض",
    title: "شرح رفع صورة الاسئلة الشائعة ",
    content: <ResponsiveImage srcimage="../../public/images/brand/بانر عريض تعليمات.jpg" />,
  },
  {
    label: " بانر براند عريض | طريقة الضهور في الابتوب",
    title: "استعراض البراند على شاشة لابتوب",
    content: <ResponsiveImage srcimage="../../public/images/brand/بانر عريض شاشة كبير.png" />,
  },
  {
     label: " بانر براند عريض | طريقة الضهور في الجوال",
    title: "استعراض البراند على شاشة الجوال",
    content: <ResponsiveImage srcimage="../../public/images/brand/wid.png" />,
  },
];
export default function Banerwidth() {
  return (
    <>
      <PageMeta
        title="React.js Images Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Images page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <PageBreadcrumb pageTitle=" بانر براند عريض" />

      <TabsComponent tabs={tabs} />
    </>
  );
}