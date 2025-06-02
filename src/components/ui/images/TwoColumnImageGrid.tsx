type TwoColumnImageGrid = {
  srcimage: string;
  srcimage2: string;
};
export default function TwoColumnImageGrid({ srcimage ,srcimage2}:TwoColumnImageGrid) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      <div>
        <img
          src={srcimage}
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>

      <div>
        <img
          src={srcimage2}
          alt=" grid"
          className="border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>
    </div>
  );
}
