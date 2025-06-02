type ResponsiveImageProps = {
  srcimage: string;
};

export default function ResponsiveImage({ srcimage }: ResponsiveImageProps) {
    return (
    <div className="relative">
      <div className="overflow-hidden">
        <img
          src={srcimage}
          alt="Cover"
          className="w-full border border-gray-200 rounded-xl dark:border-gray-800"
        />
      </div>
    </div>
  );
}
