interface Props {
  headerTitle: string;
  message: string;
}

export const Main = ({ headerTitle, message }: Props) => {
  return (
    <div className="flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img ">
      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-10">
        <h2 className="text-5xl font-bold">{headerTitle}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 py-2 border">Book</button>
      </div>
    </div>
  );
};
