import Card from "./Card";

const Foreground = () => {
  const data = [
    {
      desc: "Vnaten da paalkaaren adadaaaa pasu matta pathi pada poren.",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
    },
    {
      desc: "Repeatehhhh dhevuda ...",
      fileSize: "0.9mb",
      close: false,
      tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
    },
    {
      desc: "Ellam pugazhum iraivan oruvanukeyyy",
      fileSize: "0.9mb",
      close: true,
      tag: { isOpen: true, tagTitle: "Upload Now", tagColor: "green" },
    },
  ];
  return (
    <div>
      <div className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flex-wrap p-10">
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Foreground;
